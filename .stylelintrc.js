module.exports = {
    root: true,
    extends: [
      "stylelint-config-standard-scss",
      "stylelint-config-recommended-vue/scss",
      "stylelint-config-recess-order"
    ],
    rules: {
      'indentation': 4,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global']
        }
      ],
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep']
        }
      ],
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            'tailwind',
            'apply',
            'variants',
            'responsive',
            'screen',
            'function',
            'if',
            'each',
            'include',
            'mixin'
          ]
        }
      ],
      'no-empty-source': null,
      'named-grid-areas-no-invalid': null,
      'unicode-bom': 'never',
      'no-descending-specificity': null,
      'font-family-no-missing-generic-family-keyword': null,
      'declaration-colon-space-after': 'always-single-line',
      'declaration-colon-space-before': 'never',
      // 'declaration-block-trailing-semicolon': 'always',
      'rule-empty-line-before': [
        'always',
        {
          ignore: ['after-comment', 'first-nested']
        }
      ],
      'unit-no-unknown': [
        true,
        {
          ignoreUnits: ['rpx']
        }
      ],
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
  }
  