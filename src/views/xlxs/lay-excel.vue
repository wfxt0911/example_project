<template>
  <div class="p-10 mx-auto">
    <a-divider orientation="left">第一步骤:无样式导出</a-divider>
    <a-button type="primary" @click="clickNoStyleAndNotMegerEvt" class="ml-20">无样式导出</a-button>
    <a-divider orientation="left">第二步骤:设置列宽后导出</a-divider>
    <a-button type="primary" @click="clickColsEvt" class="ml-20">设置列宽导出</a-button>
    <a-divider orientation="left">第三步骤:合并表头导出</a-divider>
    <a-button type="primary" @click="clickMegerEvt" class="ml-20">合并表头导出</a-button>
    <a-divider orientation="left">第四个步骤:设置表头样式</a-divider>
    <a-button type="primary" @click="clickHeaderStyleEvt" class="ml-20">设置表头样式导出</a-button>
    <a-divider orientation="left">第五个步骤:设置内容样式</a-divider>
    <a-button type="primary" @click="clickBodyStyleEvt" class="ml-20">设置内容样式导出</a-button>
    <a-divider orientation="left">第六个步骤:设置行高导出</a-divider>
    <a-button type="primary" @click="clickRowStyleEvt" class="ml-20">设置行高导出</a-button>
    <a-divider orientation="left">第七个步骤:表尾合并导出</a-divider>
    <a-button type="primary" @click="clickFooterEvt" class="ml-20">表尾合并导出</a-button>
  </div>
</template>
<script setup>
  import body from './data.ts';
  import LAY_EXCEL from 'lay-excel';

  const header = [
    {
      company: '机构',
      yearNo: '年度',
      total_online: '合计',
      total_offline: '',
      permanent_online: '永久',
      permanent_offline: '',
      long_online: '长期',
      long_offline: '',
      short_online: '短期',
      short_offline: '',
      thirty_online: '30年',
      thirty_offline: '',
      decade_online: '10年',
      decade_offline: '',
      five_online: '5年',
      five_offline: '',
    },
    {
      company: '',
      yearNo: '',
      total_online: '线上销售',
      total_offline: '线下销售',
      permanent_online: '线上销售',
      permanent_offline: '线下销售',
      long_online: '线上销售',
      long_offline: '线下销售',
      short_online: '线上销售',
      short_offline: '线下销售',
      thirty_online: '线上销售',
      thirty_offline: '线下销售',
      decade_online: '线上销售',
      decade_offline: '线下销售',
      five_online: '线上销售',
      five_offline: '线下销售',
    },
  ];

  const clickNoStyleAndNotMegerEvt = () => {
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx');
  };
  const clickColsEvt = () => {
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );
    const option = {
      extend: {
        '!cols': colConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };
  const clickMegerEvt = () => {
    const mergeArray = [
      ['A1', 'A2'], //如果A1,A2,A3三列合并的话，切记只需填写['A1','A3'],无需填写三个元素，否则不生效
      ['B1', 'B2'],
      ['C1', 'D1'],
      ['E1', 'F1'],
      ['G1', 'H1'],
      ['I1', 'J1'],
      ['K1', 'L1'],
      ['M1', 'N1'],
      ['O1', 'P1'],
    ];
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );

    let mergeConf = LAY_EXCEL.makeMergeConfig(mergeArray);
    const option = {
      extend: {
        '!cols': colConf,
        '!merges': mergeConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };
  const clickHeaderStyleEvt = () => {
    //边框颜色变量
    const EXPORT_BORDER_COLOR = '2c3e50';
    //头部背景色变量
    const EXPORT_BACKGROUND_COLOR = '3462fd';
    // 头部字体颜色
    const EXPORT_HEADER_FONT_COLOR = 'ffffff';
    //公共样式变量
    const EXPORT_PUBLIC_STYLE = {
      s: {
        alignment: {
          //设置对齐方式
          horizontal: 'center',
          vertical: 'center',
        },
        border: {
          //设置边框
          top: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          bottom: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          left: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          right: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
        },
      },
    };
    const mergeArray = [
      ['A1', 'A2'], //如果A1,A2,A3三列合并的话，切记只需填写['A1','A3'],无需填写三个元素，否则不生效
      ['B1', 'B2'],
      ['C1', 'D1'],
      ['E1', 'F1'],
      ['G1', 'H1'],
      ['I1', 'J1'],
      ['K1', 'L1'],
      ['M1', 'N1'],
      ['O1', 'P1'],
    ];
    //设置表头样式
    LAY_EXCEL.setExportCellStyle(header, undefined, {
      s: {
        fill: { bgColor: { indexed: 64 }, fgColor: { rgb: EXPORT_BACKGROUND_COLOR } },
        font: {
          color: { rgb: EXPORT_HEADER_FONT_COLOR },
          bold: true,
        },
        ...EXPORT_PUBLIC_STYLE.s,
      },
    });
    //设置列宽
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );
    //设置合并数据
    let mergeConf = LAY_EXCEL.makeMergeConfig(mergeArray);
    const option = {
      extend: {
        '!cols': colConf,
        '!merges': mergeConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };
  const clickBodyStyleEvt = () => {
    //边框颜色变量
    const EXPORT_BORDER_COLOR = '2c3e50';
    //头部背景色变量
    const EXPORT_BACKGROUND_COLOR = '3462fd';
    // 头部字体颜色
    const EXPORT_HEADER_FONT_COLOR = 'ffffff';
    //公共样式变量
    const EXPORT_PUBLIC_STYLE = {
      s: {
        alignment: {
          //设置对齐方式
          horizontal: 'center',
          vertical: 'center',
        },
        border: {
          //设置边框
          top: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          bottom: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          left: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          right: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
        },
      },
    };
    const mergeArray = [
      ['A1', 'A2'], //如果A1,A2,A3三列合并的话，切记只需填写['A1','A3'],无需填写三个元素，否则不生效
      ['B1', 'B2'],
      ['C1', 'D1'],
      ['E1', 'F1'],
      ['G1', 'H1'],
      ['I1', 'J1'],
      ['K1', 'L1'],
      ['M1', 'N1'],
      ['O1', 'P1'],
    ];
    //设置表头样式
    LAY_EXCEL.setExportCellStyle(header, undefined, {
      s: {
        fill: { bgColor: { indexed: 64 }, fgColor: { rgb: EXPORT_BACKGROUND_COLOR } },
        font: {
          color: { rgb: EXPORT_HEADER_FONT_COLOR },
          bold: true,
        },
        ...EXPORT_PUBLIC_STYLE.s,
      },
    });
    //设置内容样式
    LAY_EXCEL.setExportCellStyle(body, undefined, EXPORT_PUBLIC_STYLE);
    //设置列宽
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );
    //设置合并数据
    let mergeConf = LAY_EXCEL.makeMergeConfig(mergeArray);
    const option = {
      extend: {
        '!cols': colConf,
        '!merges': mergeConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };
  const clickRowStyleEvt = () => {
    //边框颜色变量
    const EXPORT_BORDER_COLOR = '2c3e50';
    //头部背景色变量
    const EXPORT_BACKGROUND_COLOR = '3462fd';
    // 头部字体颜色
    const EXPORT_HEADER_FONT_COLOR = 'ffffff';
    //公共样式变量
    const EXPORT_PUBLIC_STYLE = {
      s: {
        alignment: {
          //设置对齐方式
          horizontal: 'center',
          vertical: 'center',
        },
        border: {
          //设置边框
          top: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          bottom: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          left: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          right: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
        },
      },
    };
    const mergeArray = [
      ['A1', 'A2'], //如果A1,A2,A3三列合并的话，切记只需填写['A1','A3'],无需填写三个元素，否则不生效
      ['B1', 'B2'],
      ['C1', 'D1'],
      ['E1', 'F1'],
      ['G1', 'H1'],
      ['I1', 'J1'],
      ['K1', 'L1'],
      ['M1', 'N1'],
      ['O1', 'P1'],
    ];
    //设置表头样式
    LAY_EXCEL.setExportCellStyle(header, undefined, {
      s: {
        fill: { bgColor: { indexed: 64 }, fgColor: { rgb: EXPORT_BACKGROUND_COLOR } },
        font: {
          color: { rgb: EXPORT_HEADER_FONT_COLOR },
          bold: true,
        },
        ...EXPORT_PUBLIC_STYLE.s,
      },
    });

    //设置列宽
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );
    //设置行高
    let rowConf = LAY_EXCEL.makeRowConfig(
      {
        1: 30,
        2: 30,
      },
      20,
    );
    //设置内容样式
    LAY_EXCEL.setExportCellStyle(body, undefined, EXPORT_PUBLIC_STYLE);
    //设置合并数据
    let mergeConf = LAY_EXCEL.makeMergeConfig(mergeArray);
    const option = {
      extend: {
        '!cols': colConf,
        '!merges': mergeConf,
        '!rows': rowConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };
  const clickFooterEvt = () => {
    //边框颜色变量
    const EXPORT_BORDER_COLOR = '2c3e50';
    //头部背景色变量
    const EXPORT_BACKGROUND_COLOR = '3462fd';
    // 头部字体颜色
    const EXPORT_HEADER_FONT_COLOR = 'ffffff';
    //公共样式变量
    const EXPORT_PUBLIC_STYLE = {
      s: {
        alignment: {
          //设置对齐方式
          horizontal: 'center',
          vertical: 'center',
        },
        border: {
          //设置边框
          top: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          bottom: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          left: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
          right: { style: 'thin', color: { rgb: EXPORT_BORDER_COLOR } },
        },
      },
    };
    const mergeArray = [
      ['A1', 'A2'], //如果A1,A2,A3三列合并的话，切记只需填写['A1','A3'],无需填写三个元素，否则不生效
      ['B1', 'B2'],
      ['C1', 'D1'],
      ['E1', 'F1'],
      ['G1', 'H1'],
      ['I1', 'J1'],
      ['K1', 'L1'],
      ['M1', 'N1'],
      ['O1', 'P1'],
    ];
    //设置表头样式
    LAY_EXCEL.setExportCellStyle(header, undefined, {
      s: {
        fill: { bgColor: { indexed: 64 }, fgColor: { rgb: EXPORT_BACKGROUND_COLOR } },
        font: {
          color: { rgb: EXPORT_HEADER_FONT_COLOR },
          bold: true,
        },
        ...EXPORT_PUBLIC_STYLE.s,
      },
    });

    //设置列宽
    let colConf = LAY_EXCEL.makeColConfig(
      {
        A: 140,
        P: 80,
      },
      80,
    );
    //设置行高
    let rowConf = LAY_EXCEL.makeRowConfig(
      {
        1: 30,
        2: 30,
      },
      20,
    );
    ///表尾合并的变量
    const footerConfig = {
      exclude: ['company', 'yearNo'], //这几个列不用合计
      merge: [['A', 'B']], //表尾需要合并的二维数组
      text: '合计', //不用合计的列显示的文案
    };
    handleSum(body, header, footerConfig, mergeArray);
    //设置内容样式
    LAY_EXCEL.setExportCellStyle(body, undefined, EXPORT_PUBLIC_STYLE);
    //设置合并数据
    let mergeConf = LAY_EXCEL.makeMergeConfig(mergeArray);
    const option = {
      extend: {
        '!cols': colConf,
        '!merges': mergeConf,
        '!rows': rowConf,
      },
    };
    LAY_EXCEL.exportExcel([...header, ...body], '销售数据导出.xlsx', 'xlsx', option);
  };

  /**
   *  表尾处理函数
   * @param {*} data 内容
   * @param {*} header 表头
   * @param {*} option 表尾合并项
   * @param {*} mergeArr 合并的二维数组
   */
  const handleSum = (data, header, option, mergeArr) => {
    const _needSumArr = Object.assign([], data);
    if (!option) {
      return;
    }
    if (!_needSumArr || _needSumArr.length == 0) return;
    const _tmp = {};
    // Object.keys遍历获取到所有字段
    Object.keys(_needSumArr[0]).forEach((key) => {
      // 使用map处理成一维数字
      _tmp[key] = 0;
      _needSumArr.forEach((item) => {
        if (!option.exclude.includes(key)) {
          if (!isNaN(item[key])) {
            _tmp[key] += Number(item[key]);
          } else {
            _tmp[key] = NaN;
          }
        } else {
          _tmp[key] = option.text;
        }
      });
    });
    //处理是需要合并的列
    if (option.merge.length > 0) {
      const lenth = header.length + data.length; //表头+内容的长度
      const merge = option.merge.map((item) => {
        return item.map((col) => {
          return col + (lenth + 1);
        });
      });
      merge && merge.length > 0 && mergeArr.push(...merge);
    }

    data.push(_tmp);
  };
</script>
<style scoped lang="scss"></style>
