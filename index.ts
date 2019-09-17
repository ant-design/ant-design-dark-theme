// All antd theme variables: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
export default {
  '@light': '#fff',
  '@dark': '#000',
  '@heading-color': 'fade(@light, 85)',
  '@text-color': 'fade(@light, 65)',
  '@text-color-secondary': 'fade(@light, 45)',
  '@disabled-color': 'fade(@light, 25)',
  '@primary-5': '#40a9ff',
  '@primary-color': '#1890ff',
  '@outline-color': '@primary-color',
  '@icon-color': 'fade(@light, 65)',
  '@icon-color-hover': 'fade(@light, 85)',
  '@primary-6': '#096dd9',
  '@border-color-base': '@border-color-split',
  '@btn-default-color': '@heading-color',
  '@btn-default-bg': '#444457',
  '@btn-default-border': '#444457',
  '@btn-ghost-color': 'fade(@light, 45)',
  '@btn-ghost-border': 'fade(@light, 45)',
  '@input-color': '@text-color',
  '@input-bg': '#3b3b4d',
  '@input-disabled-bg': '#4c4c61',
  '@input-placeholder-color': '@text-color-secondary',
  '@input-hover-border-color': 'fade(@light, 10)',
  '@checkbox-check-color': '#3b3b4d',
  '@checkbox-color': '@primary-color',
  '@select-border-color': '#3b3b4d',
  '@item-active-bg': '#272733',
  '@border-color-split': '#17171f',
  '@menu-dark-bg': '#001529',
  '@body-background': '#30303d',
  '@component-background': '#23232e',
  '@layout-body-background': '@body-background',
  '@tooltip-bg': '#191922',
  '@tooltip-arrow-color': '#191922',
  '@popover-bg': '#2d2d3b',
  '@success-color': '#00a854',
  '@info-color': '@primary-color',
  '@warning-color': '#ffbf00',
  '@error-color': '#f04134',
  '@menu-bg': '#30303d',
  '@menu-item-active-bg': 'fade(@light, 5)',
  '@menu-highlight-color': '@light',
  '@card-background': '@component-background',
  '@card-hover-border': '#383847',
  '@card-actions-background': '#30303d',
  '@tail-color': 'fade(@light, 10)',
  '@radio-button-bg': 'transparent',
  '@radio-button-checked-bg': 'transparent',
  '@radio-dot-color': '@primary-color',
  '@table-row-hover-bg': '#383847',
  '@item-hover-bg': '#383847',
  '@alert-text-color': 'fade(@dark, 65%)',

  '@tabs-horizontal-padding': '12px 0',

  // zIndex': 'notification > popover > tooltip
  '@zindex-notification': '1063',
  '@zindex-popover': '1061',
  '@zindex-tooltip': '1060',

  // width
  '@anchor-border-width': '1px',

  // margin
  '@form-item-margin-bottom': '24px',
  '@menu-item-vertical-margin': '0px',
  '@menu-item-boundary-margin': '0px',

  // size
  '@font-size-base': '14px',
  '@font-size-lg': '16px',
  '@screen-xl': '1208px',
  '@screen-lg': '1024px',
  '@screen-md': '768px',

  // 移动
  '@screen-sm': '767.9px',
  // 超小屏
  '@screen-xs': '375px',
  '@alert-message-color': '@popover-bg',
  '@background-color-light': '@popover-bg',
  '@layout-header-background': '@menu-dark-bg',

  // 官网
  '@site-text-color': '@text-color',
  '@site-border-color-split': 'fade(@light, 5)',
  '@site-heading-color': '@heading-color',
  '@site-header-box-shadow': '0 0.3px 0.9px rgba(0, 0, 0, 0.12), 0 1.6px 3.6px rgba(0, 0, 0, 0.12)',
  '@home-text-color': '@text-color',

  //自定义需要找设计师
  '@gray-8': '@text-color',
  '@background-color-base': '#555',
  '@skeleton-color': 'rgba(0,0,0,0.8)',

  // pro
  '@pro-header-box-shadow': '@site-header-box-shadow',
};
