// 传入字符串和长度, 返回字符串, 超出长度以...展示
export function strEllipsis(str: '', length = 30) {
  if (str.length > length) {
    return str.slice(0, length).trim() + '...';
  }
  return str;
}
// 计算权限
export function calcul(status: string | number, ...args: [string]) {
  const findRes = args.find((s) => s == status);
  return typeof findRes !== 'undefined';
}
// 地址参数计算
export const paramsAnaly = (url: string, params: Record<string, any>) => {
  const queryStr = Object.keys(params).map((key) => `${key}=${params[key]}`);
  if (queryStr.length > 0) {
    url += '?' + queryStr.join('&');
  }
  return url;
};
// 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
export const analyUnit = (unit: string | number) => {
  return typeof unit === 'string' && /[^0-9]/g.test(unit) ? unit : unit + 'rpx';
};
// 过滤字符串为数值
export const filterOutNumber = (str: string) => {
  const filterStr = str.replace(/[^0-9]/g, '');
  const outCount = filterStr !== '' ? Number(filterStr) : filterStr;
  console.log(outCount);
  return outCount;
};
// 过滤时间戳格式
export const format = (timeStamp: number, timeFormat = 'YYYY-MM-DD') => {
  return dayjs(timeStamp).format(timeFormat);
};
// 将数字转为中文数字
export const numberToChinese = (number: number) => {
  const chnNumChar = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
  } as Record<number, string>;
  return chnNumChar[number];
};
