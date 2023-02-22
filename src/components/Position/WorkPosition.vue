<template>
  <div class="WorkPosition">
    <div class="WorkPosition_header">
      <div class="WorkPosition_search">
        <div class="WorkPosition_search_container">
          <input
            class="WorkPosition_search_input"
            type="text"
            placeholder="搜索职位"
          />
          <span class="WorkPosition_search_sousuo">搜索</span>
        </div>
      </div>
      <div class="WorkPosition_hot">
        <div class="WorkPosition_hot_com">
          <span class="WorkPosition_hot_name">热门城市:</span>
          <ul class="WorkPosition_hot_ul">
            <li>深圳</li>
            <li>广州</li>
            <li>北京</li>
            <li>上海</li>
            <li>杭州</li>
            <li>东莞</li>
          </ul>
          <span class="WorkPosition_hot_clear">清空选项</span>
        </div>
        <div class="WorkPosition_hot_com WorkPosition_hot_position">
          <span class="WorkPosition_hot_name">热门职位:</span>
          <ul class="WorkPosition_hot_ul">
            <li>web前端</li>
            <li>java后端</li>
            <li>测试开发</li>
            <li>产品经理</li>
            <li>销售</li>
            <li>算法工程师</li>
          </ul>
        </div>
      </div>
      <div class="WorkPosition_selection">
        <div class="WorkPosition_selection_city">
          <el-cascader
            v-model="cityList"
            :options="cityOptions"
            :props="type"
            @change="handleChangeSelection"
            placeholder="选择城市"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
        <div class="WorkPosition_selection_position">
          <el-cascader
            v-model="positionList"
            :options="cityOptions"
            :props="type"
            @change="(value) => handleChangeSelection(value, 'positionList')"
            placeholder="职位类型"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
        <div class="WorkPosition_selection_duration">
          <el-cascader
            v-model="durationList"
            :options="cityOptions"
            :props="type"
            @change="handleChangeSelection"
            placeholder="求职类型"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
        <div class="WorkPosition_selection_money">
          <el-cascader
            v-model="moneyList"
            :options="cityOptions"
            :props="type"
            @change="handleChangeSelection"
            placeholder="薪资待遇"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./WorkPosition.scss";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      cityList: [],
      positionList: [],
      durationList: [],
      moneyList: [],
    });

    const type = {
      expandTrigger: "hover",
      multiple: true,
    };

    const cityOptions = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency",
              },
              {
                value: "feedback",
                label: "Feedback",
              },
              {
                value: "efficiency",
                label: "Efficiency",
              },
              {
                value: "controllability",
                label: "Controllability",
              },
            ],
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation",
              },
              {
                value: "top nav",
                label: "Top Navigation",
              },
            ],
          },
        ],
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout",
              },
              {
                value: "color",
                label: "Color",
              },
              {
                value: "typography",
                label: "Typography",
              },
              {
                value: "icon",
                label: "Icon",
              },
              {
                value: "button",
                label: "Button",
              },
            ],
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio",
              },
              {
                value: "checkbox",
                label: "Checkbox",
              },
              {
                value: "input",
                label: "Input",
              },
              {
                value: "input-number",
                label: "InputNumber",
              },
              {
                value: "select",
                label: "Select",
              },
              {
                value: "cascader",
                label: "Cascader",
              },
              {
                value: "switch",
                label: "Switch",
              },
              {
                value: "slider",
                label: "Slider",
              },
              {
                value: "time-picker",
                label: "TimePicker",
              },
              {
                value: "date-picker",
                label: "DatePicker",
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker",
              },
              {
                value: "upload",
                label: "Upload",
              },
              {
                value: "rate",
                label: "Rate",
              },
              {
                value: "form",
                label: "Form",
              },
            ],
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table",
              },
              {
                value: "tag",
                label: "Tag",
              },
              {
                value: "progress",
                label: "Progress",
              },
              {
                value: "tree",
                label: "Tree",
              },
              {
                value: "pagination",
                label: "Pagination",
              },
              {
                value: "badge",
                label: "Badge",
              },
            ],
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert",
              },
              {
                value: "loading",
                label: "Loading",
              },
              {
                value: "message",
                label: "Message",
              },
              {
                value: "message-box",
                label: "MessageBox",
              },
              {
                value: "notification",
                label: "Notification",
              },
            ],
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu",
              },
              {
                value: "tabs",
                label: "Tabs",
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb",
              },
              {
                value: "dropdown",
                label: "Dropdown",
              },
              {
                value: "steps",
                label: "Steps",
              },
            ],
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog",
              },
              {
                value: "tooltip",
                label: "Tooltip",
              },
              {
                value: "popover",
                label: "Popover",
              },
              {
                value: "card",
                label: "Card",
              },
              {
                value: "carousel",
                label: "Carousel",
              },
              {
                value: "collapse",
                label: "Collapse",
              },
            ],
          },
        ],
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components",
          },
          {
            value: "sketch",
            label: "Sketch Templates",
          },
          {
            value: "docs",
            label: "Design Documentation",
          },
        ],
      },
    ];

    const handleChangeSelection = (value, type) => {
      state[type] = value;
      console.log(state);
    };

    return {
      ...toRefs(state),
      handleChangeSelection,
      type,
      cityOptions,
    };
  },
};
</script>
