/**
 * 比较现在距离输入的时间戳过了多久
 * @param {number} createTime 创建的时间戳
 * @returns 返回具体字符串
 */
export const fromNow = createTime => {
  if (typeof Number(createTime) !== 'number') return false
  const nowTime = new Date().getTime()
  let timeDiff = parseInt((nowTime - createTime) / 1000)
  if (timeDiff < 60) {
    return timeDiff + '秒前'
  } else if (timeDiff < 3600) {
    return parseInt(timeDiff / 60) + '分钟前'
  } else if (timeDiff < 3600 * 24) {
    return parseInt(timeDiff / 3600) + '小时前'
  } else if (timeDiff < 3600 * 24 * 30) {
    return parseInt((timeDiff / 3600) * 24) + '天前'
  }
  return '不知道'
}
