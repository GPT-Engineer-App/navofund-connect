import React from "react";
import { Box, FormControl, FormLabel, Input, Switch, Stack, Heading } from "@chakra-ui/react";

const SettingsPage = () => {
  return (
    <Box p={5}>
      <Heading mb="4">Settings</Heading>
      <Stack spacing={4}>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Email Alerts
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="sms-notifications" mb="0">
            SMS Notifications
          </FormLabel>
          <Switch id="sms-notifications" />
        </FormControl>
        {}
      </Stack>
    </Box>
  );
};

export default SettingsPage;
