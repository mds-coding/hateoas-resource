import { HateoasAction } from "@mds-coding/hateoas-action";
import { HateoasEntity } from "@mds-coding/hateoas-entity";
import { HateoasLink } from "@mds-coding/hateoas-link";

export class HateoasResource<T> {
  entity: HateoasEntity<T>;
  actions: HateoasAction[];
  links: HateoasLink[];

  constructor(
    entity: HateoasEntity<T>,
    actions: HateoasAction[],
    links: HateoasLink[],
  ) {
    this.entity = entity;
    this.actions = actions;
    this.links = links;
  }
}
