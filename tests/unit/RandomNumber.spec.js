import RandomNumber from '@/components/RandomNumber';
import { mount } from '@vue/test-utils'

describe('RandomNumber', () =>{
  test('By default, randomNumber should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If btn clicked, randomNumber should be 0 - 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent, 10)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If btn clicked, randomNumber should be 200 - 300', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200, 
        max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find('span').element.textContent, 10)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})