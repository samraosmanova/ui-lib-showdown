import { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Textarea,
  Stack,
  Text,
  For,
  createListCollection,
  HStack
} from "@chakra-ui/react";

import { Field } from "../ui/field";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";

import { Radio, RadioGroup } from "../ui/radio"


const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
});
const ExtendedForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validation logic
    if (Object.values(formData).some((field) => field === "")) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Form submitted successfully!");

    // Reset form data
    setFormData({
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    });
  };

  return (
    <Box p={8} maxWidth="600px" mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spaceX={4} spaceY={4}>
          <Field >
            <Text>Username</Text>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </Field>

          <Field >
            <Text>Email</Text>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Field>

          <Field >
            <Text>Password</Text>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </Field>

          <Field >
            <Text>Phone Number</Text>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </Field>

          <Field >
            <Text>Address</Text>
            <Textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </Field>

          <RadioGroup defaultValue="1">
            <HStack gap="6">
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
            </HStack>
          </RadioGroup>

          <Stack direction={{ base: "column", md: "row" }} spaceX={4} width="100%">
            <Field>
              <Text>Size</Text>
              <Stack gap="5" width="320px">
                <For each={["xs", "sm", "md", "lg"]}>
                  {(size) => (
                    <SelectRoot key={size} size={size} collection={frameworks}>
                      <SelectLabel>size = {size}</SelectLabel>
                      <SelectTrigger>
                        <SelectValueText placeholder="Select movie" />
                      </SelectTrigger>
                      <SelectContent>
                        {frameworks.items.map((movie) => (
                          <SelectItem item={movie} key={movie.value}>
                            {movie.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectRoot>
                  )}
                </For>
              </Stack>
            </Field>
          </Stack>

          <Button colorScheme="blue" type="submit" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ExtendedForm;
