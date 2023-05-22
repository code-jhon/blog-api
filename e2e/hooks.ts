import { Before } from 'cucumber';
import { getConnection } from 'typeorm';

Before(async () => {
  const connection = getConnection();
  const entities = connection.entityMetadatas;

  for (const entity of entities) {
    const repository = connection.getRepository(entity.name);
    await repository.clear();
  }
});