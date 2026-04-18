import React from 'react';
import { Box, Container, Heading, Text, Stack, List, ListItem, useColorModeValue, Button, VStack, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Terms() {
  const navigate = useNavigate();
  const bgPage = useColorModeValue('linear(to-br, gray.50, brand.50)', 'gray.900');
  const bgBox = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedColor = useColorModeValue('gray.600', 'gray.400');
  const sectionHeadingColor = useColorModeValue('brand.600', 'brand.400');

  return (
    <Box
      minH="100vh"
      py={12}
      px={4}
      bgImage={bgPage}
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={useColorModeValue('none', 'radial(circle at 50% 50%, brand.900 0%, transparent 50%)')}
        opacity={0.15}
        zIndex={0}
        pointerEvents="none"
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack align="stretch" spacing={8}>
          {/* Back Button */}
          <HStack mb={2}>
            <Button
              leftIcon={<ArrowBackIcon />}
              variant="outline"
              colorScheme="brand"
              onClick={() => navigate('/')}
              size="sm"
            >
              Back to Dashboard
            </Button>
          </HStack>

          {/* Header */}
          <Box
            bg={bgBox}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={8}
            boxShadow="lg"
          >
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              bgGradient="linear(to-r, brand.400, accent.500)"
              bgClip="text"
              color={headingColor}
            >
              AI-Driven Smart Personalized Learning Assistant
            </Heading>
            <Text fontSize="lg" color={mutedColor} fontWeight="500">
              Terms of Service
            </Text>
          </Box>

          {/* Content */}
          <Box
            bg={bgBox}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={8}
            boxShadow="md"
          >
            <Stack spacing={8}>
              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  1. Acceptance of Terms
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  By accessing and using this platform, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the platform.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  2. Description of Service
                </Heading>
                <Text color={textColor} mb={3} lineHeight="1.7">The AI-Driven Smart Personalized Learning Assistant provides:</Text>
                <List spacing={2} pl={6} color={textColor}>
                  <ListItem>AI-based learning assistance</ListItem>
                  <ListItem>Quiz generation and evaluation</ListItem>
                  <ListItem>Educational resource recommendations</ListItem>
                  <ListItem>Secure OTP-based authentication</ListItem>
                  <ListItem>Personalized learning features</ListItem>
                </List>
                <Text color={textColor} mt={3} lineHeight="1.7">This platform is intended for educational purposes only.</Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  3. User Responsibilities
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  Users agree to provide accurate registration information, maintain the confidentiality of their login credentials, use the platform for lawful and educational purposes only, not attempt unauthorized access to system resources, and not misuse AI features for harmful or unethical purposes.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  4. Account Security
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  Users are responsible for maintaining the security of their account. The platform uses OTP-based authentication and JWT session management to enhance security; however, users must also ensure their credentials are protected.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  5. Intellectual Property
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  All content, design, and functionality of this platform are the intellectual property of the project developers. Users may not copy, reproduce, or redistribute platform content without permission.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  6. Limitation of Liability
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  The platform provides AI-generated responses for educational assistance. While efforts are made to ensure accuracy, the system does not guarantee complete correctness of information. Users are advised to verify critical information independently.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  7. Data Usage
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  User data is stored securely for authentication and personalization purposes. The platform does not sell or share user data with third parties.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  8. Modifications to Service
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  The developers reserve the right to modify or update features, functionality, or these terms at any time.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  9. Termination
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  The platform reserves the right to suspend or terminate accounts that violate these terms or engage in misuse of the system.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="md" mb={3} color={sectionHeadingColor}>
                  10. Contact Information
                </Heading>
                <Text color={textColor} lineHeight="1.7">
                  For any questions regarding these Terms of Service, users may contact the development team through the Contact page.
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Back Button at Bottom */}
          <HStack mt={6}>
            <Button
              leftIcon={<ArrowBackIcon />}
              variant="outline"
              colorScheme="brand"
              onClick={() => navigate('/')}
              size="sm"
            >
              Back to Dashboard
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
