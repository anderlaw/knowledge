import Mock from './config'

Mock.mock(/info\/gongshang/,'get',options=>{
  console.log(options)
  return {
    "Status": "200",
    "Message": "查询成功",
    "JobId": "",
    "OrderNumber": "ECI2018081714544110284649",
    "Result": {
      //股东信息
      "Partners": [{
        "StockName": "无限售条件股份",//名称
        "StockType": "机关法人",
        "StockPercent": "",
        "ShouldCapi": "23385.9238",//认缴出资额
        "ShoudDate": "1993-02-02",//认缴出资日期
        "InvestType": "",
        "InvestName": null,
        "RealCapi": null,
        "CapiDate": null
      }, {
        "StockName": "有限售条件股份",
        "StockType": "机关法人",
        "StockPercent": "",
        "ShouldCapi": "799396.1942",
        "ShoudDate": "1993-02-02",
        "InvestType": "",
        "InvestName": null,
        "RealCapi": null,
        "CapiDate": null
      }, {
        "StockName": "其他股东",
        "StockType": "其他投资者",
        "StockPercent": "",
        "ShouldCapi": "135690",
        "ShoudDate": "1993-02-02",
        "InvestType": "",
        "InvestName": null,
        "RealCapi": null,
        "CapiDate": null
      }],
      //主要成员
      "Employees": [{
        "Name": "林家礼",
        "Job": "董事"
      }, {
        "Name": "胡海蓉",
        "Job": "监事"
      }, {
        "Name": "宋世浩",
        "Job": "监事"
      }, {
        "Name": "瞿秋平",
        "Job": "董事兼总经理"
      }, {
        "Name": "郑小芸",
        "Job": "监事"
      }, {
        "Name": "周杰",
        "Job": "董事长"
      }, {
        "Name": "邬跃舟",
        "Job": "董事"
      }, {
        "Name": "冯煌",
        "Job": "监事"
      }, {
        "Name": "许建国",
        "Job": "董事"
      }, {
        "Name": "张鸣",
        "Job": "董事"
      }, {
        "Name": "芮政先",
        "Job": "监事"
      }, {
        "Name": "宋春风",
        "Job": "监事"
      }, {
        "Name": "李林",
        "Job": "监事"
      }, {
        "Name": "程峰",
        "Job": "监事"
      }, {
        "Name": "吴红伟",
        "Job": "监事"
      }, {
        "Name": "沈铁冬",
        "Job": "董事"
      }, {
        "Name": "余莉萍",
        "Job": "董事"
      }, {
        "Name": "肖遂宁",
        "Job": "董事"
      }, {
        "Name": "张新玫",
        "Job": "董事"
      }, {
        "Name": "陈斌",
        "Job": "董事"
      }, {
        "Name": "陈辉峰",
        "Job": "监事"
      }, {
        "Name": "冯仑",
        "Job": "董事"
      }, {
        "Name": "刘志敏",
        "Job": "董事"
      }, {
        "Name": "王美娟",
        "Job": "监事"
      }],
      //分支机构
      "Branches": [{
        "CompanyId": "d0f00c1e806ec110e79487547d9f4b65",
        "RegNo": "91310101832265159B",
        "Name": "海通证券股份有限公司上海合肥路证券营业部",
        "BelongOrg": "黄浦区市场监管局",
        "CreditCode": null,
        "OperName": null
      }, {
        "CompanyId": "",
        "RegNo": null,
        "Name": "海通证券股份有限公司工会工作委员会",
        "BelongOrg": null,
        "CreditCode": null,
        "OperName": null
      }, {
        "CompanyId": "bba8c820f4b941ed04f3024a055238d1",
        "RegNo": "91210800821127594A",
        "Name": "海通证券股份有限公司营口辽河大街证券营业部",
        "BelongOrg": "营口市工商行政管理局",
        "CreditCode": null,
        "OperName": null
      }],
      //变更记录
      "ChangeRecords": [{
        "ProjectName": "监事备案",
        "BeforeContent": "郑小芸；宋春风；杨庆忠【退出】；王美娟；仇夏萍【退出】；李林；程峰；冯煌；宋世浩；胡海蓉；陈辉峰",
        "AfterContent": "程峰；郑小芸；吴红伟【新增】；王美娟；冯煌；宋世浩；芮政先【新增】；宋春风；胡海蓉；陈辉峰；李林",
        "ChangeDate": "2018-03-12"
      }, {
        "ProjectName": "章程备案",
        "BeforeContent": "2016-09-23章程备案",
        "AfterContent": "2017-07-31章程备案",
        "ChangeDate": "2017-12-20"
      }, {
        "ProjectName": "其他变更",
        "BeforeContent": "2016-11-14~2017-08-28",
        "AfterContent": "2017-08-07~2018-08-28",
        "ChangeDate": "2017-08-07"
      }, {
        "ProjectName": "董事备案",
        "BeforeContent": "陈琦伟;【退出】；张惠泉;【退出】；王开国;【退出】；张建伟;【退出】；刘志敏;；钱世政;【退出】；周东辉;【退出】；张鸣;；李明山;【退出】；何健勇;【退出】；王鸿祥;；庄国蔚;【退出】；戴根有;【退出】；冯煌;【退出】；夏斌;【退出】；徐潮;【退出】；李葛卫【退出】",
        "AfterContent": "瞿秋平;【新增】；余莉萍;【新增】；张新玫;【新增】；沈铁冬;【新增】；刘志敏;；陈斌;【新增】；许建国;【新增】；王鸿祥;；肖遂宁;【新增】；李光荣;【新增】；张鸣;；冯仑;【新增】；周杰*【新增】",
        "ChangeDate": "2016-11-14"
      }, {
        "ProjectName": "法定代表人变更",
        "BeforeContent": "王开国【退出】",
        "AfterContent": "周杰*【新增】",
        "ChangeDate": "2016-11-14"
      }, {
        "ProjectName": "章程备案",
        "BeforeContent": "2013-05-27章程备案",
        "AfterContent": "2016-09-23章程备案",
        "ChangeDate": "2016-11-14"
      }, {
        "ProjectName": "经理备案",
        "BeforeContent": "李明山【退出】",
        "AfterContent": "瞿秋平【新增】",
        "ChangeDate": "2016-11-14"
      }],
      //联系信息
      "ContactInfo": {
        "WebSite": [{
          "Name": null,
          "Url": "www.htsec.com"
        }],
        "PhoneNumber": "021-23219000",
        "Email": "haitong@htsec.com"
      },
      "Industry": {
        "IndustryCode": "J",
        "Industry": "金融业",
        "SubIndustryCode": "67",
        "SubIndustry": "资本市场服务",
        "MiddleCategoryCode": "671",
        "MiddleCategory": "证券市场服务",
        "SmallCategoryCode": "6712",
        "SmallCategory": "证券经纪交易服务"
      },
      "KeyNo": "56777fa57d850f62a5225be7d974a17e",
      "Name": "海通证券股份有限公司",
      "No": "310000000016182",
      "BelongOrg": "上海市工商行政管理局",
      "OperName": "周杰",
      "StartDate": "1993-02-02 00:00:00",
      "EndDate": "",
      "Status": "存续（在营、开业、在册）",
      "Province": "SH",
      "UpdatedDate": "2018-08-17 09:04:48",
      "CreditCode": "9131000013220921X6",
      "RegistCapi": "1150170万元人民币",
      "EconKind": "其他股份有限公司（上市）",
      "Address": "上海市广东路689号",
      "Scope": "证券经纪;证券自营;证券承销与保荐;证券投资咨询;与证券交易、证券投资活动有关的财务顾问;直接投资业务;证券投资基金代销;为期货公司提供中间介绍业务;融资融券业务;代销金融产品;股票期权做市业务;中国证监会批准的其他业务,公司可以对外投资设立子公司从事金融产品等投资业务。\r\n【依法须经批准的项目,经相关部门批准后方可开展经营活动】",
      "TermStart": "1993-02-02 00:00:00",
      "TeamEnd": "",
      "CheckDate": "1993-02-02 00:00:00",
      "OrgNo": "13220921-X",
      "IsOnStock": "1",
      "StockNumber": "600837",
      "StockType": "国内A股",
      "OriginalName": [],
      "ImageUrl": "https://co-image.qichacha.com/CompanyImage/56777fa57d850f62a5225be7d974a17e.jpg"
    }
  }
})

