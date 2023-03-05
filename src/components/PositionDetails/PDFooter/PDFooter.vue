<template>
  <div class="PDFooter">
    <div class="PDFooter_hr">
      <img
        class="PDFooter_hr_avater"
        src="../../../assets/imgs/main/tengxu_logo.jpg"
        alt="头像"
      />
      <div class="PDFooter_hr_content">
        <div class="PDFooter_hr_content_name">
          <span>王先生</span>
          <span class="PDFooter_hr_content_name_chat">
            <img src="../../../assets/imgs/common/chat.png" alt="" />
          </span>
        </div>
        <span class="PDFooter_hr_content_po">腾讯 / HR</span>
      </div>
    </div>
    <div class="PDFooter_address">
      <div class="PDFooter_title">工作地址</div>
      <ul class="PDFooter_address_ul">
        <li>
          <img src="../../../assets/imgs/common/adress.png" alt="" />
          <span>东莞市松山湖大学路一号东莞理工学院</span>
        </li>
        <li>
          <img src="../../../assets/imgs/common/adress.png" alt="" />
          <span>东莞市松山湖大学路一号东莞理工学院</span>
        </li>
      </ul>
    </div>
    <div class="PDFooter_company">
      <div class="PDFooter_title">公司介绍</div>
      <p class="PDFooter_company_content">
        深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。
        腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。
      </p>
    </div>
  </div>
</template>

<script>
import "./PDFooter.scss";

export default {
  setup() {
    return {};
  },
};
</script>
