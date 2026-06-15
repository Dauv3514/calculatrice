import { mount, type VueWrapper } from '@vue/test-utils';
import Calculator from './Calculator.vue';
import { describe, expect, test } from 'vitest';

describe('Calculator.vue', () => {
  let wrapper: VueWrapper;

  test('Verification affichage', () => {
    wrapper = mount(Calculator);

    expect(wrapper.find('.display-value').text()).toBe('0');
  });
});