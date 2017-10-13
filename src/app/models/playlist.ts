/**
 *  歌单
 */
export interface PlayList {
    id: number,//歌单id
    name: string,//歌单名称
    playCount: number,//播放次数
    createTime: number,//创建时间    
    updateTime: number,//更新时间
    coverImgId: number,//封面id
    coverImgUrl: string,//封面地址
    tags: string[],//标签
    description: string,//简介
    userId: number,
    creator: object,//创建者
    tracks: any[],//歌曲列表

}

export interface Creator {
    userId: number,//用户id     
    nickname: string,//名称
    avatarImgId: number,//头像id
    avatarUrl: string,//头像地址
    backgroundImgId: number,//背景id
    backgroundUrl: string,// 背景地址
    city: number,//城市代码
}