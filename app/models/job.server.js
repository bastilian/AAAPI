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

export async function getJobList() {
  return prisma.job.findMany({ where: { id: { not: undefined}}})
}

export async function updateJobById(id, newData = {}) {
  return prisma.job.update({where: {id}, newData})
}
