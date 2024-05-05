import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";

const Home = () => {
  // Static campaign data
  const staticCampaigns = [
    {
      owner: "John Doe",
      title: "Education Fund",
      description: "Help children get access to education",
      target: "$5000",
      deadline: "2024-06-30",
      amountCollected: "$3000",
      image: "/images/img1.jpeg",
    },
    {
      owner: "Jane Smith",
      title: "Healthcare Fund",
      description: "Support medical treatments for the underprivileged",
      target: "$8000",
      deadline: "2024-07-15",
      amountCollected: "$5500",
      image: "/images/img1.jpeg",
    },
    {
      owner: "Alice Johnson",
      title: "Environmental Conservation Fund",
      description: "Protect endangered species and preserve habitats",
      target: "$10000",
      deadline: "2024-08-20",
      amountCollected: "$7500",
      image: "/images/img1.jpeg",
    },
    {
      owner: "Bob Brown",
      title: "Food Security Fund",
      description: "Provide nutritious meals for families in need",
      target: "$6000",
      deadline: "2024-07-10",
      amountCollected: "$4000",
      image: "/images/img1.jpeg",
    },
    {
      owner: "Emma Wilson",
      title: "Clean Water Initiative",
      description: "Ensure access to clean drinking water for communities",
      target: "$7000",
      deadline: "2024-08-05",
      amountCollected: "$5000",
      image: "/images/img1.jpeg",
    },
    {
      owner: "Michael Lee",
      title: "Empowerment Program",
      description:
        "Support women's empowerment through education and skill-building",
      target: "$9000",
      deadline: "2024-09-15",
      amountCollected: "$6000",
      image: "/images/img1.jpeg",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  // Simulating fetching campaigns from context
  useEffect(() => {
    setIsLoading(true);
    // Simulated API call delay
    const delay = setTimeout(() => {
      setCampaigns(staticCampaigns);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
