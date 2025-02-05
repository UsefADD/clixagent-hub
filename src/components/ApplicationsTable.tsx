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

export const ApplicationsTable = () => {
  const { toast } = useToast();
  const [selectedApp, setSelectedApp] = useState<any>(null);

  const { data: applications, refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("applications")
      .update({ status })
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
        description: "Application status updated",
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
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications?.map((app) => (
              <TableRow key={app.id}>
                <TableCell>
                  {new Date(app.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>{app.full_name}</TableCell>
                <TableCell>{app.application_type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      app.status === "approved"
                        ? "secondary"
                        : app.status === "rejected"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {app.status}
                  </Badge>
                </TableCell>
                <TableCell className="space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedApp(app)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => updateStatus(app.id, "approved")}
                    disabled={app.status === "approved"}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => updateStatus(app.id, "rejected")}
                    disabled={app.status === "rejected"}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DetailsModal
        open={!!selectedApp}
        onOpenChange={(open) => !open && setSelectedApp(null)}
        title="Application Details"
      >
        {selectedApp && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Name</h4>
              <p>{selectedApp.full_name}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
              <p>{selectedApp.email}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
              <p>{selectedApp.phone}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">
                Website
              </h4>
              <p>{selectedApp.website}</p>
            </div>
            {selectedApp.application_type === "affiliate" ? (
              <>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Traffic Source
                  </h4>
                  <p>{selectedApp.traffic_source}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Monthly Traffic
                  </h4>
                  <p>{selectedApp.monthly_traffic}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Platform
                  </h4>
                  <p>{selectedApp.platform}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Followers
                  </h4>
                  <p>{selectedApp.followers}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">
                    Niche
                  </h4>
                  <p>{selectedApp.niche}</p>
                </div>
              </>
            )}
            <div className="col-span-2">
              <h4 className="font-medium text-sm text-muted-foreground">
                Experience
              </h4>
              <p>{selectedApp.experience}</p>
            </div>
          </div>
        )}
      </DetailsModal>
    </>
  );
};