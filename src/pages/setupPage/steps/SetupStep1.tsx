import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

const SetupStep1 = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    url: "",
    description: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: companyName.trim() ? "" : "Organization name is required",
      url: companyUrl.trim() ? "" : "Organization URL is required",
      description:
        companyDescription.trim().length >= 10
          ? ""
          : "Description must be at least 10 characters",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <Card>
      <CardHeader>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardTitle>Setup a new Organization</CardTitle>
          <CardDescription>
            Enter the details of your organization
          </CardDescription>
        </motion.div>
      </CardHeader>

      <CardContent className="space-y-4">
        <motion.div
          variants={inputVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <Label htmlFor="name">Organization Name</Label>
          <Input
            type="text"
            name="name"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder="BeyondChats"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              {errors.name}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={inputVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <Label htmlFor="url">Organization URL</Label>
          <Input
            type="text"
            placeholder="www.beyondchats.com"
            name="url"
            value={companyUrl}
            onChange={(e) => {
              setCompanyUrl(e.target.value);
              setErrors((prev) => ({ ...prev, url: "" }));
            }}
            className={errors.url ? "border-red-500" : ""}
          />
          {errors.url && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              {errors.url}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={inputVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <Label htmlFor="description">Organization Description</Label>
          <Input
            type="text"
            placeholder="Tell us something about your organization."
            name="description"
            value={companyDescription}
            onChange={(e) => {
              setCompanyDescription(e.target.value);
              setErrors((prev) => ({ ...prev, description: "" }));
            }}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              {errors.description}
            </motion.div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default SetupStep1;
