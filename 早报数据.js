/* 每日早报数据存档：最新一期在最前面。
   每天由本机 Codex 定时任务自动抓取后，往数组开头插入一期。
   板块顺序：AI 前沿（重点）→ 中国 → 美国·国际 → 财经 → 昨日最热（知乎/B站/抖音榜首）
   格式说明见 每日播报_操作规程.md。人物志由 人物志故事库.js 按日轮换，不在本文件。 */
const DAILY_ARCHIVE = [
  {
    date: "2026-07-22",
    weekday: "周三",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "IBM称AI并未终结大型机需求", s: "TechCrunch报道，IBM在大型机销售不及预期后表示，AI只是短期挤压企业硬件预算，并不意味着大型机业务被AI取代。", link: "https://techcrunch.com/2026/07/22/after-shocking-quarter-ibm-insists-that-ai-isnt-killing-the-mainframe/" },
          { t: "谷歌以云业务增长支撑AI投入", s: "TechCrunch报道，谷歌云业务因企业采用AI服务和AI基础设施而增长，公司借此解释其持续扩大的AI资本开支。", link: "https://techcrunch.com/2026/07/22/google-justifies-its-massive-ai-spending-with-a-booming-cloud-business/" },
          { t: "OpenAI测试失误引发Hugging Face攻击复盘", s: "TechCrunch称，OpenAI隔离测试环境配置失误被安全专家认为是AI驱动攻击Hugging Face得以发生的重要原因。", link: "https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/" },
          { t: "百度文心助手任务Agent登顶榜单", s: "量子位报道，百度文心助手任务Agent在国际权威榜单中取得领先，相关成绩被用于展示国产智能体能力进展。", link: "https://www.qbitai.com/2026/07/457117.html" },
          { t: "Halliday发布第二代AI眼镜", s: "量子位报道，Halliday G2通过Meeting Flow等能力把实时智能融入会议和商务沟通场景，AI眼镜继续向工作流参与演进。", link: "https://www.qbitai.com/2026/07/457049.html" },
          { t: "机器人公司Atoms获17亿美元融资", s: "TechCrunch报道，Travis Kalanick旗下机器人公司Atoms完成17亿美元融资，由a16z领投，定位于工业AI与机器人结合。", link: "https://techcrunch.com/2026/07/22/travis-kalanicks-robotics-company-raises-1-7b-led-by-a16z/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "小红书回应IPO受阻传闻", s: "36氪8点1氪援引报道称，小红书回应因前员工举报影响IPO的说法，称目前流传的IPO相关信息均不属实。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "拾玥科技获数千万元天使轮融资", s: "36氪报道，机器人灵巧操作方案商拾玥科技完成天使轮融资，资金将用于团队扩张、产品迭代和灵巧操作数据闭环。", link: "https://36kr.com/p/3907536767833473?f=rss" },
          { t: "设序科技完成B轮超亿元融资", s: "36氪报道，工业AI设计研发解决方案商设序科技累计融资超3亿元，计划继续投入出海和核心模型技术研发。", link: "https://36kr.com/p/3907532622648453?f=rss" },
          { t: "厦门翔安机场设计牵动金门讨论", s: "BBC中文报道，翔安机场设计中的金门连接构想引发当地居民复杂看法，既有发展期待，也有政治和安全顾虑。", link: "https://www.bbc.com/zhongwen/articles/cx25g733w65o/trad?at_medium=RSS&at_campaign=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "美国财政部威胁对AI模型争议采取制裁", s: "TechCrunch报道，白宫称Moonshot蒸馏Anthropic模型后，美国财政部发出制裁威胁，相关事件加剧美国对中国开源模型的争论。", link: "https://techcrunch.com/2026/07/22/treasury-threatens-sanctions-after-white-house-claims-moonshot-distilled-anthropics-fable/" },
          { t: "乌克兰军方总司令遭革职", s: "BBC中文报道，乌克兰在连日抗议后解除军方总司令职务，相关人事变动发生在国防部高层调整引发反弹之后。", link: "https://www.bbc.com/zhongwen/articles/cx2vpjg3qlpo/trad?at_medium=RSS&at_campaign=rss" },
          { t: "TikTok直播带货在英国升温", s: "BBC中文报道，英国社群媒体直播购物正在加速进入日常消费，一些主播称单日销售额可达到较高水平。", link: "https://www.bbc.com/zhongwen/articles/cpw92ew1rw2o/trad?at_medium=RSS&at_campaign=rss" },
          { t: "日本短裤上班政策引发性别争议", s: "BBC中文报道，东京Cool Biz政策鼓励男性穿短裤降温，但部分女性认为职场露腿期待和着装规则仍存在不公平。", link: "https://www.bbc.com/zhongwen/articles/c20dwywr8gxo/trad?at_medium=RSS&at_campaign=rss" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "耐克将终止滔搏线上经销权", s: "36氪8点1氪报道，耐克通知滔搏其中国内地在线平台销售将于2027年起终止，滔搏股价随消息大幅下跌。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "苹果拟推出设备租赁计划", s: "36氪8点1氪援引报道称，苹果准备推出Apple Upgrade租赁计划，初期至少覆盖美国市场和多数主力硬件品类。", link: "https://36kr.com/p/3907461333144711?f=rss" },
          { t: "Kimi据称最快6个月内赴港上市", s: "36氪8点1氪援引媒体报道称，Kimi计划启动上市前融资，目标投前估值较高，最快6个月内登陆港股。", link: "https://36kr.com/p/3907461333144711?f=rss" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】《功夫女足》被曝线上偷票房", s: "知乎热榜第1，话题围绕《功夫女足》线上渠道被偷票房超2000万元、全国偷漏占比较高的报道展开讨论。", link: "https://www.zhihu.com/question/2063269666466932392" },
          { t: "【第2】小红书被曝联系老员工补发期权", s: "知乎热榜第2，讨论小红书是否以补偿换取前员工签署相关条款，以及该传闻对IPO进程的潜在影响。", link: "https://www.zhihu.com/question/2063292318887539352" },
          { t: "【第3】西门庆为何非要杀武大", s: "知乎热榜第3，网友从《水浒传》人物关系、风险判断和叙事逻辑角度讨论这一经典情节。", link: "https://www.zhihu.com/question/2047419289150477897" },
          { t: "【第4】《第九区》导演发布AI短片", s: "知乎热榜第4，话题关注尼尔·布洛姆坎普用字节Seedance 2.0生成13分钟AI短片及AI电影长片化可能。", link: "https://www.zhihu.com/question/2062918586486583714" },
          { t: "【第5】胡歌和刘诗诗为何少上综艺", s: "知乎热榜第5，讨论演员曝光方式、作品路线和真人秀参与度之间的关系。", link: "https://www.zhihu.com/question/326219584" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】树恨你", s: "UP主鲤鱼Ace投稿，榜单抓取时播放量约677万，位列B站排行榜第1。", link: "https://www.bilibili.com/video/BV1h4KU66ENd" },
          { t: "【第2】无骨草鱼教学", s: "UP主温柔雄鱼档发布无骨草鱼制作教学，榜单抓取时播放量约449万，位列B站排行榜第2。", link: "https://www.bilibili.com/video/BV1P6KA6NEDq" },
          { t: "【第3】《梦战：剑之海》实机预告", s: "UP主梦战剑之海发布游戏首支实机预告，榜单抓取时播放量约461万，位列B站排行榜第3。", link: "https://www.bilibili.com/video/BV1AnKs6tE2n" },
          { t: "【第4】差点被烟管单杀了", s: "UP主-大大大大古投稿，榜单抓取时播放量约324万，位列B站排行榜第4。", link: "https://www.bilibili.com/video/BV11oK16pEEz" },
          { t: "【第5】千万博主谈B站真相", s: "UP主逗比的雀巢发布博主分析主题视频，榜单抓取时播放量约384万，位列B站排行榜第5。", link: "https://www.bilibili.com/video/BV1oiKm6yEYU" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "【第1】我的夏日主线任务online", s: "抖音热榜第1，抓取时热度约1166万，话题围绕用户分享夏日生活主线任务展开。", link: "https://www.douyin.com/search/%E6%88%91%E7%9A%84%E5%A4%8F%E6%97%A5%E4%B8%BB%E7%BA%BF%E4%BB%BB%E5%8A%A1online" },
          { t: "【第2】今年菲尔兹奖候选人都在研究啥", s: "抖音热榜第2，抓取时热度约1160万，话题关注菲尔兹奖候选人的数学研究方向。", link: "https://www.douyin.com/search/%E4%BB%8A%E5%B9%B4%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E5%80%99%E9%80%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%95%A5" },
          { t: "【第3】引力一号一箭九星发射", s: "抖音热榜第3，抓取时热度约1131万，话题关注引力一号火箭一箭九星发射动态。", link: "https://www.douyin.com/search/%E5%BC%95%E5%8A%9B%E4%B8%80%E5%8F%B7%E4%B8%80%E7%AE%AD%E4%B9%9D%E6%98%9F%E5%8F%91%E5%B0%84" },
          { t: "【第4】当我在暑假和crush表白成功后", s: "抖音热榜第4，抓取时热度约1131万，属于暑期情感与生活分享类热门话题。", link: "https://www.douyin.com/search/%E5%BD%93%E6%88%91%E5%9C%A8%E6%9A%91%E5%81%87%E5%92%8Ccrush%E8%A1%A8%E7%99%BD%E6%88%90%E5%8A%9F%E5%90%8E" },
          { t: "【第5】这届非遗手作太好玩了", s: "抖音热榜第5，抓取时热度约1049万，话题集中在非遗手作体验和传统技艺传播。", link: "https://www.douyin.com/search/%E8%BF%99%E5%B1%8A%E9%9D%9E%E9%81%97%E6%89%8B%E4%BD%9C%E5%A4%AA%E5%A5%BD%E7%8E%A9%E4%BA%86" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】NDAA", s: "Trends24抓取的美国X趋势榜第1，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=NDAA" },
          { t: "【第2】Clayface", s: "Trends24抓取的美国X趋势榜第2，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Clayface" },
          { t: "【第3】Saudi Arabia", s: "Trends24抓取的美国X趋势榜第3，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Saudi%20Arabia" },
          { t: "【第4】Wemby", s: "Trends24抓取的美国X趋势榜第4，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Wemby" },
          { t: "【第5】Phee", s: "Trends24抓取的美国X趋势榜第5，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Phee" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "可以给你的 Agent 发一点零花钱了 | S10E22", note: "本期围绕Agent支付、授权和执行能力展开，讨论智能体从回答问题走向真实行动时需要的基础设施。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/9a652c19-ceb3-46c2-87b4-bca36e684311.mp3", link: "https://guiguzaozhidao.fireside.fm/20240436" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "节目讨论具身智能中的3D数据、技术路线分野和硅谷竞争态势，关注机器人产业下一阶段落地问题。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" },
      { show: "疯投圈", title: "142 ✪ 产品体验学日本、全球营销学韩国", note: "本期分享日本体验经济考察和韩国全球营销观察，讨论线下体验、IP模式和入境游消费机会。", audio: "https://rio.xyzcdn.net/crazycapital/ep142.mp3", link: "https://crazy.capital/142" }
    ]
  },
  {
    date: "2026-07-21",
    weekday: "周二",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "Anthropic 15亿美元版权和解获批", s: "TechCrunch报道，法院已批准Anthropic就版权争议达成的15亿美元和解；报道同时指出，这并未解决训练AI时使用受版权保护作品的更广泛争议。", link: "https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/" },
          { t: "谷歌研发提升Gemini效率的新AI芯片", s: "TechCrunch援引报道称，Alphabet正开发一款新芯片，以提高Gemini模型的运行效率；该项目涉及谷歌在AI计算基础设施上的持续投入。", link: "https://techcrunch.com/2026/07/20/google-is-working-on-a-new-ai-chip-designed-to-make-gemini-more-efficient/" },
          { t: "MCP协议拟简化服务端会话处理", s: "TechCrunch报道，面向AI工具连接的MCP协议正通过更宽松、无状态的服务端会话ID处理方式降低使用复杂度，思路接近普通网站的会话机制。", link: "https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/" },
          { t: "阿里Qoder推出安全能力", s: "量子位报道，阿里Qoder上线新的安全能力，定位为向每位用户提供专属安全工程师式的辅助，以支持开发过程中的安全治理。", link: "https://www.qbitai.com/2026/07/455979.html" },
          { t: "不同模型厂商共用Agentic基础设施受关注", s: "量子位报道聚焦Agentic Infra的发展，讨论不同模型厂商使用同类智能体基础设施的趋势，以及这类底层能力在AI应用部署中的作用。", link: "https://www.qbitai.com/2026/07/455805.html" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "淘天公布AIGX体系四项技术成果", s: "36氪快讯称，淘天集团公布拍立淘全模态实时Agent、if Studio、Coupella智惠引擎和Agentic推荐系统Dream等四项技术成果。", link: "https://www.36kr.com/newsflashes/" },
          { t: "光轮智能与西门子达成合作", s: "36氪快讯称，光轮智能与西门子在WAIC 2026达成合作，计划将工业软件积累的物理模型、工程参数和工艺知识转化为机器人可调用的仿真能力。", link: "https://www.36kr.com/newsflashes/" },
          { t: "新易盛称下半年订单交付有望保持增长", s: "36氪快讯援引新易盛投资者关系记录称，其成都、泰国两地产能正依据订单指引扩充，预计下半年订单交付仍将较快增长。", link: "https://www.36kr.com/newsflashes/" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "美国AI标准机构负责人再度离任", s: "TechCrunch报道，美国人工智能标准与创新中心负责人已离任；报道将该职位描述为自前任AI事务负责人离开后人员更替频繁的岗位。", link: "https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/" },
          { t: "波音称推出新客机前仍需修复财务", s: "36氪快讯援引波音首席执行官说法称，公司在研发推出新一代商用客机前，还需用数年修复财务体系并提升现有机型的可靠性与交付效率。", link: "https://www.36kr.com/newsflashes/" },
          { t: "X重建版Android应用全球上线", s: "TechCrunch报道，X表示其经过一年重建的Android应用已在全球推出，报道将其列为该平台移动端产品更新的一部分。", link: "https://techcrunch.com/2026/07/20/x-relaunches-a-rebuilt-android-app-after-year-long-effort/" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "沪市新增回购增持计划上限逾百亿元", s: "36氪快讯援引证券时报称，7月20日晚沪市新增25家上市公司回购或增持计划，金额上限合计超过100亿元。", link: "https://www.36kr.com/newsflashes/" },
          { t: "热门中概股美股盘前普涨", s: "36氪快讯称，抓取时阿里巴巴、百度盘前涨幅超过3%，京东和网易涨幅超过2%，多只热门中概股盘前走高。", link: "https://www.36kr.com/newsflashes/" },
          { t: "摩根大通称A股AI回调属去杠杆", s: "36氪援引摩根大通观点称，近期A股AI板块回调更接近杠杆出清而非基本面恶化，并提到大模型进步和硬件供给约束等因素。", link: "https://36kr.com/p/3903247190541955" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】684分考生被志愿规划进双非", s: "知乎热榜第1，话题围绕高分考生花费咨询费后被规划进入双非院校，引发对志愿填报服务责任和信息透明度的讨论。", link: "https://www.zhihu.com/question/2062830801440306762" },
          { t: "【第2】中国海警公布仁爱礁现场画面", s: "知乎热榜第2，讨论中国海警关于菲律宾非法坐滩舰艇相关事件的声明和现场画面，以及其中值得关注的信息。", link: "https://www.zhihu.com/question/2062608470700975381" },
          { t: "【第3】日韩为何同步流行麻辣烫", s: "知乎热榜第3，用户围绕日韩地区对麻辣烫的消费热度展开讨论，关注跨国饮食传播及其背后的消费文化因素。", link: "https://www.zhihu.com/question/2058337204255118363" },
          { t: "【第4】西安中考高分段人数引热议", s: "知乎热榜第4，话题关注西安中考600分以上考生数量较多、599分择校空间受限的现象，并讨论分数与位次的关系。", link: "https://www.zhihu.com/question/2062545131677528566" },
          { t: "【第5】西班牙夺冠会否改变足球战术", s: "知乎热榜第5，网友讨论西班牙夺冠后其他球队是否会模仿其打法，以及世界杯战术演变对比赛观赏性的影响。", link: "https://www.zhihu.com/question/2062436664497246459" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】树恨你", s: "UP主鲤鱼Ace投稿，榜单抓取时播放量约468万，位列B站排行榜第1。", link: "https://www.bilibili.com/video/BV1h4KU66ENd" },
          { t: "【第2】无骨草鱼教学", s: "UP主温柔雄鱼档发布无骨草鱼制作教学，榜单抓取时播放量约269万，位列B站排行榜第2。", link: "https://www.bilibili.com/video/BV1P6KA6NEDq" },
          { t: "【第3】订书钉演奏《千本樱》", s: "UP主不那么肝的老肝妈投稿，榜单抓取时播放量约995万，位列B站排行榜第3。", link: "https://www.bilibili.com/video/BV13YNd6dEb9" },
          { t: "【第4】水皮", s: "UP主文武俩兄弟投稿，榜单抓取时播放量约354万，位列B站排行榜第4。", link: "https://www.bilibili.com/video/BV1dmKJ6YEXV" },
          { t: "【第5】67岁老人健身教程", s: "UP主周大爷不服老发布老年锻炼主题视频，榜单抓取时播放量约352万，位列B站排行榜第5。", link: "https://www.bilibili.com/video/BV1sUKn6QEQG" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在本次抓取时出现传输连接错误，未写入未经核实的榜单内容。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Ryan Clark", s: "Trends24抓取的美国X趋势榜第1，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Ryan%20Clark" },
          { t: "【第2】#WWERaw", s: "Trends24抓取的美国X趋势榜第2，话题围绕WWE Raw相关内容在当地趋势列表中上升。", link: "https://twitter.com/search?q=%23WWERaw" },
          { t: "【第3】ESPN", s: "Trends24抓取的美国X趋势榜第3，体育媒体ESPN相关内容进入当地最新趋势列表。", link: "https://twitter.com/search?q=ESPN" },
          { t: "【第4】#wildcardclub", s: "Trends24抓取的美国X趋势榜第4，相关标签进入当地最新趋势列表。", link: "https://twitter.com/search?q=%23wildcardclub" },
          { t: "【第5】Bregman", s: "Trends24抓取的美国X趋势榜第5，相关词条进入当地最新趋势列表。", link: "https://twitter.com/search?q=Bregman" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "如何「兜住」一颗火箭？| S10E21", note: "本期围绕长征十号乙一子级海上网系捕获回收，讨论不同可回收火箭技术路线及商业航天的后续挑战。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/b66fdf0f-d428-4f0c-8412-b0c7581132d0.mp3", link: "https://guiguzaozhidao.fireside.fm/20240435" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "本期关注具身智能的3D数据、技术路径分歧与硅谷竞赛，讨论机器人发展中数据和模型路线的取舍。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" }
    ]
  },
  {
    date: "2026-07-19",
    weekday: "周日",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "AI治理引入哲学讨论", s: "量子位报道，随着智能系统进入社会运行场景，围绕AI治理的讨论正吸收哲学视角，以处理技术应用中的规范与责任问题。", link: "https://www.qbitai.com/2026/07/455041.html" },
          { t: "WAIC展示模型“读心术”探索", s: "WAIC现场展示了以主观世界模型为线索的AI研究与产品演示，关注模型对人的状态、意图和环境信息的理解能力。", link: "https://www.qbitai.com/2026/07/455031.html" },
          { t: "国产GPU直通方案公布实测", s: "一项面向国产GPU的直通方案公布测试结果，报道提到其不依赖英伟达网卡，并比较了吞吐量和延迟等性能指标。", link: "https://www.qbitai.com/2026/07/454932.html" },
          { t: "非营利组织推进开放AI网络", s: "TechCrunch报道，非营利组织Current AI正尝试建设面向公众开放的AI网络基础设施，主张以开放方式连接AI能力与资源。", link: "https://techcrunch.com/2026/07/19/nonprofit-current-ai-is-racing-to-build-the-world-wide-web-of-ai-free-for-all/" },
          { t: "诺兰称AI可能是“特洛伊木马”", s: "导演克里斯托弗·诺兰在谈及新作时表达了对AI的警惕，认为社会在接纳相关技术时需要更审慎地看待潜在影响。", link: "https://techcrunch.com/2026/07/19/odyssey-director-christopher-nolan-calls-ai-an-obvious-trojan-horse/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "WAIC展示健康预警与中医机器人", s: "36氪报道，安顿健康在WAIC发布生命预警表标准和七诊合参中医机器人，方案结合多类生理信号与AI辅助评估。", link: "https://36kr.com/p/3902428274427525?f=rss" },
          { t: "印奇谈智能体进入物理世界", s: "在WAIC主论坛上，印奇围绕智能体与物理世界的结合发表演讲，讨论模型能力、编程能力及产业落地的演进。", link: "https://36kr.com/p/3900439867147909?f=rss" },
          { t: "1688拟推AI时代B2B开放标准", s: "36氪汇总消息称，阿里1688宣布将在本月底推出面向AI时代的B2B交易互联互通开放标准。", link: "https://36kr.com/p/3896564485572489?f=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "揭阳虐狗事件引发跨地域舆论", s: "BBC中文报道，中国揭阳虐狗事件在多地引发声援、广告投放和抵制等行动，并带动对动物保护立法的讨论。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "脱北者谈K-pop进入朝鲜", s: "多名脱北者向BBC表示，尽管存在严格限制，韩国流行音乐仍通过不同渠道进入朝鲜，并对部分民众产生影响。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "研究关注矮小双胞胎的癌症线索", s: "BBC报道，一对身高不足1.2米的双胞胎及相关研究为癌症预防研究提供线索，研究人员比较了其与同村人群的健康差异。", link: "https://www.bbc.com/zhongwen/trad" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "苹果市值重返全球第一", s: "36氪早间资讯汇总提到，苹果市值重返全球第一；同一轮市场资讯还覆盖了国内成品油价格调整等消息。", link: "https://36kr.com/p/3900449325287305?f=rss" },
          { t: "具身智能融资规模受关注", s: "36氪援引研究与行业数据称，中国具身智能市场持续扩张，2026年上半年相关融资金额和事件数量均较上年同期增长。", link: "https://36kr.com/p/3899597215745664?f=rss" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】马龙/许昕获全锦赛男双冠军", s: "知乎热榜第1，讨论马龙与许昕夺得全国乒乓球锦标赛男双冠军及本场比赛表现。", link: "https://www.zhihu.com/question/2062261231742707046" },
          { t: "【第2】于东来谈带薪年假与40小时工作制", s: "知乎热榜第2，话题聚焦每年新增带薪年假和严格执行每周40小时工作制的用工建议。", link: "https://www.zhihu.com/question/2061431899038409047" },
          { t: "【第3】西班牙对阿根廷世界杯决赛前瞻", s: "知乎热榜第3，网友讨论美加墨世界杯决赛西班牙与阿根廷的胜负走向及关键因素。", link: "https://www.zhihu.com/question/2061433680585811334" },
          { t: "【第4】宜家集中出售商场", s: "知乎热榜第4，讨论宜家出售8座商场、其中多家商场关停的资产处置及零售业变化。", link: "https://www.zhihu.com/question/2061839991072990909" },
          { t: "【第5】清华学生“过目不忘”传言", s: "知乎热榜第5，围绕清华学生中“80%过目不忘”的说法展开事实辨析和学习能力讨论。", link: "https://www.zhihu.com/question/27686348" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】订书钉演奏《千本樱》", s: "UP主不那么肝的老肝妈投稿，榜单抓取时播放量约739万。", link: "https://www.bilibili.com/video/BV13YNd6dEb9" },
          { t: "【第2】寻找卢本伟", s: "STN工作室投稿，榜单抓取时播放量约947万。", link: "https://www.bilibili.com/video/BV1oHNv6kEzB" },
          { t: "【第3】古典美声与喉音技巧融合", s: "UP主时代新声古典松子吟投稿，榜单抓取时播放量约276万。", link: "https://www.bilibili.com/video/BV1y9K364EaB" },
          { t: "【第4】苏新皓夏日运动会音乐现场", s: "UP主JUSTSU_苏新皓发布4K直拍，榜单抓取时播放量约52万。", link: "https://www.bilibili.com/video/BV1N7KL6BErW" },
          { t: "【第5】《崩坏：星穹铁道》公益第二卷", s: "崩坏星穹铁道官方投稿，榜单抓取时播放量约132万。", link: "https://www.bilibili.com/video/BV1WQKn6SEaP" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在本次抓取时发生SSL连接错误，未写入未经核实的榜单内容。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Good Sunday", s: "Trends24抓取的美国X趋势榜第1，反映周日问候类话题的集中讨论。", link: "https://twitter.com/search?q=Good%20Sunday" },
          { t: "【第2】#BelgianGP", s: "Trends24抓取的美国X趋势榜第2，话题指向比利时大奖赛相关讨论。", link: "https://twitter.com/search?q=%23BelgianGP" },
          { t: "【第3】#PerthSantaConcertD2", s: "Trends24抓取的美国X趋势榜第3，围绕珀斯圣诞音乐会相关内容传播。", link: "https://twitter.com/search?q=%23PerthSantaConcertD2" },
          { t: "【第4】George Russell", s: "Trends24抓取的美国X趋势榜第4，围绕F1车手乔治·拉塞尔的讨论升温。", link: "https://twitter.com/search?q=George%20Russell" },
          { t: "【第5】Tate", s: "Trends24抓取的美国X趋势榜第5，相关词条进入美国地区实时趋势列表。", link: "https://twitter.com/search?q=Tate" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "如何「兜住」一颗火箭？| S10E21", note: "节目围绕长征十号乙的海上网系捕获回收，讨论不同火箭回收路径及中国航天后续看点。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/b66fdf0f-d428-4f0c-8412-b0c7581132d0.mp3", link: "https://guiguzaozhidao.fireside.fm/20240435" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "节目讨论具身智能的3D数据、软硬件协同和仿真迁移，并邀请苏度科技CEO韩铮解析机器人操作能力。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" }
    ]
  },
  {
    date: "2026-07-18",
    weekday: "周六",
    news: [
      {
        cat: "📢 创刊说明",
        items: [
          { t: "《每日世界》创刊号", s: "本站每天早晨自动更新：AI 前沿重点播报 + 中美要闻 + 昨日知乎/B站/抖音最热 + 热门播客，并每日轮换一篇大佬人物志。正式播报从明早开始。", link: "" }
        ]
      }
    ],
    podcasts: []
  }
];
