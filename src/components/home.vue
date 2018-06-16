<template>
  <div>
    <badge text="1"></badge>
    <br>
    <badge text="123"></badge>
    <br>
    <group :title="mes">
      <cell :title="mes" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ mes }} &nbsp;</span>
          <badge></badge>
        </div>
      </cell>
      <cell :title="mes" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ mes }} &nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell :title="mes" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ mes }} &nbsp;</span>
          <badge text="888"></badge>
        </div>
      </cell>
    </group>
  </div>
</template>
<script>
import { Badge, Group, Cell } from "vux";

export default {
  components: {
    Badge,
    Group,
    Cell
  },
  data() {
    return {
      mes: "在 Cell 组件里使用"
    };
  }
};
</script>

<style lang="less">
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
