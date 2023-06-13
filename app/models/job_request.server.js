import { prisma } from '../db.server';

export const getId = async (id) =>
  (
    await prisma.jobRequest.findMany({
      where: {
        id,
      },
    })
  )[0];

export async function create(data) {
  return prisma.jobRequest.create({
    data,
  });
}

export async function deleteById(id) {
  return prisma.jobRequest.delete({ where: { id } });
}
