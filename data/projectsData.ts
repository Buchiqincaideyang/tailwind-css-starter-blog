interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '酒店在线预订系统',
    description: `全栈酒店预订系统：支持房型/房间/库存管理、在线下单支付与订单管理，
    内置用户/前台/管理员三级权限，订单超时自动取消。
    技术栈：NestJS + React + Ant Design + Prisma + PostgreSQL。`,
    href: 'https://hotel-booking.pocketbay.app',
  },
]

export default projectsData
