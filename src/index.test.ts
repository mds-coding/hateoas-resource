import { HateoasEntity } from "@mds-coding/hateoas-entity";
import { HateoasResource } from "./index.js"
import { HateoasAction } from "@mds-coding/hateoas-action";
import { HateoasLink } from "@mds-coding/hateoas-link";
import { HateoasField } from "@mds-coding/hateoas-field";

test("`HateoasResource` can be created", () => {
  type Cat = { name: string, favoriteFood: string };
  const entity = new HateoasEntity<Cat>("cat", { name: "Season", favoriteFood: "chicken" });
  const action = new HateoasAction("/update", "PATCH", "Update", [
    new HateoasField("Favorite Food", "favoriteFood", "text", true),
  ]);
  const link = new HateoasLink("http://localhost/friends", "See friends");
  const resource = new HateoasResource(entity, [action], [link]);
  expect(resource).toBeDefined();
  expect(resource.entity).toBeDefined();
  expect(resource.actions).toBeDefined();
  expect(resource.actions[0].fields).toBeDefined();
  expect(resource.links).toBeDefined();
})
