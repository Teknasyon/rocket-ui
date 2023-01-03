<script setup lang="ts">
import { computed, defineProps } from 'vue';
import './avatar.css';
import blank from '../../assets/blank-avatar.svg';
export interface IProps {
  type?: 'image' | 'text';
  src?: string;
  alt?: string;
  size?: string;
  online?: boolean;
  text?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'image',
  size: '2xl',
  src: blank,
  alt: 'Avatar',
  online: false,
  text: '',
});

const classes = computed(() => ({
  avatar: true,
  [`avatar--${props.size}`]: true,
}));
const isAnon = computed(() => props.type === 'image' && !props.src);
const imgSrc = computed(() => {
  if (!isAnon.value) {
    return props.src;
  }
  return blank;
});
const shortTextWithFirstCharacters = (text: string) => {
  const words = text.split(' ');
  if (words.length === 1) {
    return words[0].substring(0, 2);
  }
  return `${words[0].charAt(0)}${words[1].charAt(0)}`;
};
</script>
<template>
  <div class="avatar__wrapper">
    <div :class="classes">
      <p
        v-if="props.type === 'text'"
        :class="{ avatar__text: true, [`avatar__text--${props.size}`]: true }"
      >
        {{ shortTextWithFirstCharacters(props.text) }}
      </p>
      <img
        v-else
        :alt="props.alt"
        :class="{
          avatar__image: true,
          [`avatar__image--${props.size}`]: true,
          'avatar__image--anonymous': isAnon,
        }"
        :src="imgSrc"
      />
    </div>
    <span
      v-if="props.online"
      :class="{ avatar__online: true, [`avatar__online--${props.size}`]: true }"
    />
  </div>
</template>
