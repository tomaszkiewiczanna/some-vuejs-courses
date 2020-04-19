import LoginForm from '@/components/LoginForm';
import { mount } from '@vue/test-utils'

describe('LoginForm', () =>{
  test('emits the event with user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('[data-testid="tested-input"]')

    input.setValue('Paddington Bear')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)


    const expectedPayload = {
      name: 'Paddington Bear'
    }

    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})