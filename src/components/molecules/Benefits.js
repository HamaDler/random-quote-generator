import React from "react";
import { Grid, Header, Icon, Container } from "semantic-ui-react";

const GridExampleColumnCount = () => (
  <Container>
    {" "}
    <Grid>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Header as="h2" icon>
            <Icon name="headphones" />
            Account Settings
            <Header.Subheader>
              Manage your account settings and set e-mail preferences.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon>
            <Icon name="headphones" />
            Account Settings
            <Header.Subheader>
              Manage your account settings and set e-mail preferences.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon>
            <Icon name="headphones" />
            Account Settings
            <Header.Subheader>
              Manage your account settings and set e-mail preferences.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon>
            <Icon name="headphones" />
            Account Settings
            <Header.Subheader>
              Manage your account settings and set e-mail preferences.
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default GridExampleColumnCount;
