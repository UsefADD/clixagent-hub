import { useState } from "react";
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
import { Eye } from "lucide-react";
import { DetailsModal } from "./DetailsModal";

export const MessagesTable = () => {
  const { toast } = useToast();
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

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
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message Preview</TableHead>
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
                <TableCell className="max-w-md truncate">
                  {msg.message.substring(0, 50)}...
                </TableCell>
                <TableCell>
                  <Badge
                    variant={msg.status === "unread" ? "destructive" : "default"}
                  >
                    {msg.status}
                  </Badge>
                </TableCell>
                <TableCell className="space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedMessage(msg)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
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

      <DetailsModal
        open={!!selectedMessage}
        onOpenChange={(open) => !open && setSelectedMessage(null)}
        title="Message Details"
      >
        {selectedMessage && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">From</h4>
              <p>{selectedMessage.name}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
              <p>{selectedMessage.email}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">
                Message
              </h4>
              <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Date</h4>
              <p>
                {new Date(selectedMessage.created_at).toLocaleDateString()}{" "}
                {new Date(selectedMessage.created_at).toLocaleTimeString()}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>
    </>
  );
};