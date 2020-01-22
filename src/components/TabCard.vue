<template>
    <div class="container">
        <ul class="tabbed-nav">
            <li class="tab-header" v-for="tab in tabs" :key="tab.name">
                <slot :name="tabHeadName(tab.name)">
                    {{tab.name}}
                </slot>
            </li>
        </ul>
        <div>
            <slot :name="tabPanelSlotName"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabComponent',
    props:{
      initialTab: String,
      tabs: Array
    },
    data() {
      return {
          activeTab: this.initialTab
      }
    },
    methods: {
        switchTab (tabName){
            this.activeTab = tabName
        },
        tabHeadName(tabName){
            return `tab-head-${tabName}`
        }
    },
    computed: {
        tabPanelSlotName(){
            return `tab-panel-${this.activeTab}`
        }
    }
}
</script>