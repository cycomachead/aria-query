/**
 * @flow
 */
const menuitemradioRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-checked': 'false',
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'menuitem',
      },
    },
  ],
  requireContextRole: [
    'group',
    'menu',
    'menubar',
  ],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null,
  },
  superClass: [
    [
      'roletype',
      'widget',
      'command',
      'menuitem',
      'menuitemcheckbox',
    ],
    [
      'roletype',
      'widget',
      'input',
      'checkbox',
      'menuitemcheckbox',
    ],
    [
      'roletype',
      'widget',
      'input',
      'radio',
    ],
  ],
};

export default menuitemradioRole;