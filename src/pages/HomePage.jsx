import React from "react";
import { Flex, Typography, Button } from "antd";

const { Title } = Typography;

function HomePage() {
   return (
      <Flex vertical gap="middle">
         <Flex
            gap="middle"
            wrap
            style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}
         >
            <Title level={3}>Default Buttons</Title>
            <Button color="default" variant="solid">
               Solid
            </Button>
            <Button color="default" variant="outlined">
               Outlined
            </Button>
            <Button color="default" variant="dashed">
               Dashed
            </Button>
            <Button color="default" variant="filled">
               Filled
            </Button>
            <Button color="default" variant="text">
               Text
            </Button>
            <Button color="default" variant="link">
               Link
            </Button>
         </Flex>

         <Flex
            gap="middle"
            wrap
            style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}
         >
            <Title level={3}>Custom Colored Buttons</Title>
            {/* Method 1: Using style prop */}
            <Button style={{ backgroundColor: "#8B5CF6", color: "white" }}>
               Purple Button
            </Button>

            {/* Method 2: Using className with custom CSS */}
            <Button
               className="custom-green-button"
               style={{ backgroundColor: "#22C55E", color: "white" }}
            >
               Green Button
            </Button>

            {/* Method 3: Using inline styles for different states */}
            <Button
               style={{
                  backgroundColor: "#F59E0B",
                  color: "white",
                  borderColor: "#F59E0B",
               }}
               onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#D97706";
                  e.currentTarget.style.borderColor = "#D97706";
               }}
               onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#F59E0B";
                  e.currentTarget.style.borderColor = "#F59E0B";
               }}
            >
               Orange Button
            </Button>

            {/* Custom gradient button */}
            <Button
               style={{
                  background: "linear-gradient(to right, #8B5CF6, #6D28D9)",
                  color: "white",
                  border: "none",
               }}
            >
               Gradient Button
            </Button>
         </Flex>

         <Flex
            gap="middle"
            wrap
            style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}
         >
            <Title level={3}>Primary Buttons</Title>
            <Button color="primary" variant="solid">
               Solid
            </Button>
            <Button color="primary" variant="outlined">
               Outlined
            </Button>
            <Button color="primary" variant="dashed">
               Dashed
            </Button>
            <Button color="primary" variant="filled">
               Filled
            </Button>
            <Button color="primary" variant="text">
               Text
            </Button>
            <Button color="primary" variant="link">
               Link
            </Button>
         </Flex>

         <Flex
            gap="middle"
            wrap
            style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}
         >
            <Title level={3}>Danger Buttons</Title>
            <Button color="danger" variant="solid">
               Solid
            </Button>
            <Button color="danger" variant="outlined">
               Outlined
            </Button>
            <Button color="danger" variant="dashed">
               Dashed
            </Button>
            <Button color="danger" variant="filled">
               Filled
            </Button>
            <Button color="danger" variant="text">
               Text
            </Button>
            <Button color="danger" variant="link">
               Link
            </Button>
         </Flex>
      </Flex>
   );
}

export default HomePage;
