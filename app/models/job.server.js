import { prisma } from '../db.server';

export const getById = async (id) =>
  (
    await prisma.job.findMany({
      where: {
        id,
      },
    })
  )[0];

export async function create(data = {}) {
  return prisma.job.create({
    data,
  });
}

export async function deleteById(id) {
  return prisma.job.delete({ where: { id } });
}
