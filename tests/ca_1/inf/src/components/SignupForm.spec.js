import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');

    expect(warningText.exists()).toBeTruthy();
  });

  test('ID,PW,NICK이 입력되지 않으면 사인업 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'd@d.com',
          password: '1',
          nickname: '',
        };
      },
    });
    const button = wrapper.find('button');
    // button.element.disabled;
    expect(button.element.disabled).toBeTruthy();
  });
});
