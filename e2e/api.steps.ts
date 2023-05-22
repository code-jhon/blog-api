import { Before, Given, When, Then } from 'cucumber';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

let app: INestApplication;
let api: request.SuperTest<request.Test>;

Before(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
  api = request(app.getHttpServer());
});

Given('the application is running', () => {
  // No specific action is needed here
});

When('I make a GET request to {string}', async (url: string) => {
  return api.get(url);
});

/* Then('the response status code should be {int}', (expectedStatusCode: number) => {
  return api.expect(expectedStatusCode);
});

Then('the response body should have property {string}', (property: string) => {
  return api.expect((res) => property in res.body);
});

Then('the response body property {string} should be {string}', (property: string, expectedValue: string) => {
  return api.expect((res) => res.body[property] === expectedValue);
});

After(async () => {
  await app.close();
}); */
