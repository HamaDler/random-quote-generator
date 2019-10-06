import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Footer from "../organisms/Footer";
const LoginForm = () => (
  <>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="http://www.sclance.com/pngs/it-works-logo-png/it_works_logo_png_720687.png" />{" "}
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{" "}
          <Button as={Link} to="signup">
            Sign Up
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default LoginForm;
