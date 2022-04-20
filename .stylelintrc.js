/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-20 21:24:43
 * @LastEditTime: 2022-04-20 21:24:43
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
      'indentation': 4,
      'selector-pseudo-element-no-unknown': [
          true,
          {
              ignorePseudoElements: ['v-deep']
          }
      ],
      'number-leading-zero': 'never',
      'no-descending-specificity': null,
      'font-family-no-missing-generic-family-keyword': null,
      'selector-type-no-unknown': null,
      'at-rule-no-unknown': null,
      'no-duplicate-selectors': null,
      'no-empty-source':null,
      'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
  }
}