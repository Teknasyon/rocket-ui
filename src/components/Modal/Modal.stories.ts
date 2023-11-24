import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../Button/RButton.vue'
import Textfield from '../Textfield/RTextfield.vue'
import Dropdown from '../Dropdown/RDropdown.vue'
import Modal from './RModal.vue'

const ModalStory = {
  title: 'Components/Modal',
  component: Modal,
  setup: (args: typeof Modal) => ({
    args,
  }),
  template: `
      <div>
        <Modal v-bind="args" />
      </div>
    `,
  args: {
    modelValue: true,
    title: 'Create Account',
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
  },
  argTypes: {},
} as Meta<typeof Modal>

export default ModalStory

type Story = StoryObj<typeof ModalStory>

export const Overview: Story = {}

export const WithActionsSlot: Story = {
  render: args => ({
    components: { Modal, Button },
    setup: () => ({
      args,
      submit: () => {
        // eslint-disable-next-line no-alert
        alert('Submitted!')
      },
    }),
    template: `
      <div >
        <Modal v-bind="args" >
          <template v-slot:default>
            <div>
              <!-- type a text about pets -->
              Pets are companion animals kept primarily for a person's company or entertainment rather than as a working animal, livestock, or a laboratory animal. Popular pets are often considered to have attractive appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis (such as a stray animal) and accepted by the owner regardless of these characteristics.
            </div>
          </template>
          <template v-slot:actions>
            <div class="flex gap-2">
              <Button color="secondary" @click="args.modelValue = false">
                <template #custom-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M11.168 11.154c-.71 .31 -1.184 1.107 -2 2.593c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c.927 0 1.664 -.689 1.783 -1.708" />
                    <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052h0z" />
                    <path d="M11 6.992a3.608 3.608 0 0 0 -.04 -.725c-.203 -1.297 -1.047 -2.267 -1.932 -2.267a1.237 1.237 0 0 0 -.758 .265" />
                    <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
                    <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
                    <path d="M3 3l18 18" />
                  </svg>
                </template>
              </Button>
              <Button @click="submit">
                <template #custom-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 10c-1.32 0 -1.983 .421 -2.931 1.924l-.244 .398l-.395 .688a50.89 50.89 0 0 0 -.141 .254c-.24 .434 -.571 .753 -1.139 1.142l-.55 .365c-.94 .627 -1.432 1.118 -1.707 1.955c-.124 .338 -.196 .853 -.193 1.28c0 1.687 1.198 2.994 2.8 2.994l.242 -.006c.119 -.006 .234 -.017 .354 -.034l.248 -.043l.132 -.028l.291 -.073l.162 -.045l.57 -.17l.763 -.243l.455 -.136c.53 -.15 .94 -.222 1.283 -.222c.344 0 .753 .073 1.283 .222l.455 .136l.764 .242l.569 .171l.312 .084c.097 .024 .187 .045 .273 .062l.248 .043c.12 .017 .235 .028 .354 .034l.242 .006c1.602 0 2.8 -1.307 2.8 -3c0 -.427 -.073 -.939 -.207 -1.306c-.236 -.724 -.677 -1.223 -1.48 -1.83l-.257 -.19l-.528 -.38c-.642 -.47 -1.003 -.826 -1.253 -1.278l-.27 -.485l-.252 -.432c-1.011 -1.696 -1.618 -2.099 -3.053 -2.099z" stroke-width="0" fill="currentColor" />
                    <path d="M19.78 7h-.03c-1.219 .02 -2.35 1.066 -2.908 2.504c-.69 1.775 -.348 3.72 1.075 4.333c.256 .109 .527 .163 .801 .163c1.231 0 2.38 -1.053 2.943 -2.504c.686 -1.774 .34 -3.72 -1.076 -4.332a2.05 2.05 0 0 0 -.804 -.164z" stroke-width="0" fill="currentColor" />
                    <path d="M9.025 3c-.112 0 -.185 .002 -.27 .015l-.093 .016c-1.532 .206 -2.397 1.989 -2.108 3.855c.272 1.725 1.462 3.114 2.92 3.114l.187 -.005a1.26 1.26 0 0 0 .084 -.01l.092 -.016c1.533 -.206 2.397 -1.989 2.108 -3.855c-.27 -1.727 -1.46 -3.114 -2.92 -3.114z" stroke-width="0" fill="currentColor" />
                    <path d="M14.972 3c-1.459 0 -2.647 1.388 -2.916 3.113c-.29 1.867 .574 3.65 2.174 3.867c.103 .013 .2 .02 .296 .02c1.39 0 2.543 -1.265 2.877 -2.883l.041 -.23c.29 -1.867 -.574 -3.65 -2.174 -3.867a2.154 2.154 0 0 0 -.298 -.02z" stroke-width="0" fill="currentColor" />
                    <path d="M4.217 7c-.274 0 -.544 .054 -.797 .161c-1.426 .615 -1.767 2.562 -1.078 4.335c.563 1.451 1.71 2.504 2.941 2.504c.274 0 .544 -.054 .797 -.161c1.426 -.615 1.767 -2.562 1.078 -4.335c-.563 -1.451 -1.71 -2.504 -2.941 -2.504z" stroke-width="0" fill="currentColor" />
                  </svg>
                </template>
              </Button>
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
  args: {
    modelValue: true,
    icon: 'mdiPaw',
    description: '',
    title: 'Pets ',
  },
}

export const WithForm: Story = {
  render: args => ({
    components: { Modal, Textfield, Button, Dropdown },
    setup: () => ({
      args,
      submit: () => {
        // eslint-disable-next-line no-alert
        alert('Submitted!')
      },
    }),
    template: `
      <div >
        <Modal v-bind="args" >
          <template v-slot:default>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
              <Dropdown placeholder="Select a option" :options="[{label: 'Option 1', value:'Option 1'}, {label: 'Option 2', value: 'Option 2'}]" />
              <Textfield label="Name" placeholder="type a name" />
              <Textfield label="Email"placeholder="type a email" />
              <Textfield label="Password" placeholder="type a password" />
            </div>
          </template>
          <template v-slot:actions>
            <Button color="secondary" @click="args.modelValue = false" block>
              Cancel
            </Button>
            <Button @click="submit" block>
              Submit
            </Button>
          </template>
        </Modal>
      </div>
    `,
  }),
}
