import { prisma } from '../db.server';

export const getById = async (id) =>
(
  await prisma.jobRequest.findFirst({
    where: {
      id,
    },
  })
);

export async function create(data) {
  return prisma.jobRequest.create({
    data,
  });
}

export async function deleteById(id) {
  return prisma.jobRequest.delete({ where: { id } });
}
