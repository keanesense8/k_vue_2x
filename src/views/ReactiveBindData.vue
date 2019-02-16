<template>
  <ul>
    <li>
      <h1>ReactiveBindData</h1>
    </li>
    <li>
      <h2>DoMathIn{}</h2>
    </li>
    <li>随机数：{{Math.random(10)}}</li>
    <li>
      <v-chip label color="pink" text-color="white">5的平方:{{Math.pow(5,2)}}</v-chip>
    </li>
    <li>
      <v-switch v-model="iswork" label="iswork?" primary></v-switch>
      {{iswork ? workText : workText2}}
    </li>
    <!-- v if false不会render html el-->
    <li v-if="iswork">
      <span>render element now</span>
    </li>
    <!--实际 css：display:none -->
    <li v-show="iswork">
      <span>display -> none</span>
    </li>
    <v-divider></v-divider>
    <li>
      <h1>Filter</h1>
    </li>
    <li>Filter expression:
      <v-chip label color="pink" text-color="white">{{'USE FILTER' | lowercase | doublestr}}</v-chip>
    </li>
    <v-divider></v-divider>
    <li>
      <h1>Function bind</h1>
    </li>
    <li>
      <p>c_component</p>
      <c_component @add="fadd"></c_component>
      <p>c_component</p>
      <p>{{case2}}</p>
    </li>
  </ul>
</template>
<script>
import c_component from "@/components/vuejslearn/Ccomponent";
export default {
  components: {
    c_component
  },
  data: () => {
    return {
      iswork: true,
      workText: "work",
      workText2: "not work",
      case1: "ABC",
      case2: "ABC"
    };
  },
  methods: {
    fadd(v) {
      this.case2 = v;
    }
  }
};
</script>

