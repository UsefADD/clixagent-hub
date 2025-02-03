import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const MessagesTable = () => {
  const { toast } = useToast();

  const { data: messages, refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ status: "read" })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Message marked as read",
      });
      refetch();
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages?.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>
                {new Date(msg.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>{msg.name}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell className="max-w-md truncate">{msg.message}</TableCell>
              <TableCell>
                <Badge
                  variant={msg.status === "unread" ? "destructive" : "default"}
                >
                  {msg.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={() => markAsRead(msg.id)}
                  disabled={msg.status === "read"}
                >
                  Mark as Read
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};