/**
 * Marks a method as overriding a base class method.
 * Optionally, checks at runtime if the method exists on the base class.
 */
export function override(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const baseProto = Object.getPrototypeOf(target);
  if (!(propertyKey in baseProto)) {
	throw new Error(
	  `Method "${propertyKey}" does not override any method of the base class.`
	);
  }
}