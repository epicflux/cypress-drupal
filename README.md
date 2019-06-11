# cypress-drupal
A collection of useful Cypress commands for Drupal.

### Setup
Install this package via NPM:
```bash
npm install --dev cypress-drupal
```

Include this package into your Cypress command file:
```JavaScript
// cypress/support/commands.js
import 'cypress-drupal';
```

Optional: Add the string for running drush commands to cypress.json:

{
  ...
  "env": {
    "drupalDrushCmdLine": "/user/bin/drush %command"
  }
}

## Commands
### Drupal Collection
#### drupalLogin( username , password ) 
Begins the user's authenticated session.
```JavaScript
cy.drupalLogin('admin', 'admin')
```

#### drupalLogout() 
Ends the user's authenticated session.
```JavaScript
cy.drupalLogout()
```

#### drupalDrushCommand( command )
Issues a drush command.

The command can be passed as string or an array. 
```JavaScript
cy.drupalDrushCommand('status');

cy.drupalDrushCommand(['upwd', 'admin', 'admin']);
```
