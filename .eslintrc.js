module.exports = {
  root : true,
  env  : {
    browser : true,
    node    : true,
  },
  parserOptions: {
    parser            : '@babel/eslint-parser',
    requireConfigFile : false,
  },
  extends : ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins : [],
  // add your custom rules here
  rules   : {
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],

    'key-spacing': [
      'error',
      {
        multiLine: {
          beforeColon : false,
          afterColon  : true,
        },
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon',
        },
      },
    ],
    indent: [
      'error',
      2,
      {
        VariableDeclarator       : { var: 2, let: 2, const: 3 },
        offsetTernaryExpressions : true,
        MemberExpression         : 1,
      },
    ],
    'one-var'                      : ['error', 'never'],
    'one-var-declaration-per-line' : ['error', 'always'],
    semi                           : ['error', 'never'],
  },
}
