import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApplicationsTable } from "@/components/ApplicationsTable";
import { MessagesTable } from "@/components/MessagesTable";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log("Current user:", user);
      
      if (!user) {
        // If no user is logged in, redirect to login
        const { error } = await supabase.auth.signInWithPassword({
          email: 'usefadd@gmail.com',
          password: 'your-password' // You'll need to set this up in Supabase
        });

        if (error) {
          console.error("Login error:", error);
          toast({
            title: "Authentication Error",
            description: "Please make sure you're logged in as an admin.",
            variant: "destructive",
          });
          navigate("/");
          return;
        }
      }

      if (user?.email !== "usefadd@gmail.com") {
        toast({
          title: "Access Denied",
          description: "You don't have permission to access this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Auth check error:", error);
      toast({
        title: "Error",
        description: "An error occurred while checking authentication.",
        variant: "destructive",
      });
      navigate("/");
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out.",
        variant: "destructive",
      });
    } else {
      navigate("/");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleSignOut} variant="outline">
          Sign Out
        </Button>
      </div>
      
      <Tabs defaultValue="applications" className="w-full">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <ApplicationsTable />
        </TabsContent>
        <TabsContent value="messages">
          <MessagesTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}