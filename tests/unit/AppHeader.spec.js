import AppHeader from '@/components/AppHeader';
import { mount } from '@vue/test-utils'

describe('TestOrganiser', () => {
  test('Logged in => btn visible', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})