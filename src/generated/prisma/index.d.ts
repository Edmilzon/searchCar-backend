
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model caracteristicas_adicionales
 * 
 */
export type caracteristicas_adicionales = $Result.DefaultSelection<Prisma.$caracteristicas_adicionalesPayload>
/**
 * Model caracteristicasadicionalescarro
 * 
 */
export type caracteristicasadicionalescarro = $Result.DefaultSelection<Prisma.$caracteristicasadicionalescarroPayload>
/**
 * Model carro
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type carro = $Result.DefaultSelection<Prisma.$carroPayload>
/**
 * Model ciudad
 * 
 */
export type ciudad = $Result.DefaultSelection<Prisma.$ciudadPayload>
/**
 * Model combustiblecarro
 * 
 */
export type combustiblecarro = $Result.DefaultSelection<Prisma.$combustiblecarroPayload>
/**
 * Model direccion
 * 
 */
export type direccion = $Result.DefaultSelection<Prisma.$direccionPayload>
/**
 * Model imagen
 * 
 */
export type imagen = $Result.DefaultSelection<Prisma.$imagenPayload>
/**
 * Model pais
 * 
 */
export type pais = $Result.DefaultSelection<Prisma.$paisPayload>
/**
 * Model provincia
 * 
 */
export type provincia = $Result.DefaultSelection<Prisma.$provinciaPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model test
 * 
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>
/**
 * Model tipocombustible
 * 
 */
export type tipocombustible = $Result.DefaultSelection<Prisma.$tipocombustiblePayload>
/**
 * Model ubicacion
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type ubicacion = $Result.DefaultSelection<Prisma.$ubicacionPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_rol
 * 
 */
export type usuario_rol = $Result.DefaultSelection<Prisma.$usuario_rolPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caracteristicas_adicionales
 * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caracteristicas_adicionales
   * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caracteristicas_adicionales`: Exposes CRUD operations for the **caracteristicas_adicionales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caracteristicas_adicionales
    * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findMany()
    * ```
    */
  get caracteristicas_adicionales(): Prisma.caracteristicas_adicionalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caracteristicasadicionalescarro`: Exposes CRUD operations for the **caracteristicasadicionalescarro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caracteristicasadicionalescarros
    * const caracteristicasadicionalescarros = await prisma.caracteristicasadicionalescarro.findMany()
    * ```
    */
  get caracteristicasadicionalescarro(): Prisma.caracteristicasadicionalescarroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carro`: Exposes CRUD operations for the **carro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carros
    * const carros = await prisma.carro.findMany()
    * ```
    */
  get carro(): Prisma.carroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciudad`: Exposes CRUD operations for the **ciudad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudads
    * const ciudads = await prisma.ciudad.findMany()
    * ```
    */
  get ciudad(): Prisma.ciudadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combustiblecarro`: Exposes CRUD operations for the **combustiblecarro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combustiblecarros
    * const combustiblecarros = await prisma.combustiblecarro.findMany()
    * ```
    */
  get combustiblecarro(): Prisma.combustiblecarroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.direccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagen`: Exposes CRUD operations for the **imagen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagens
    * const imagens = await prisma.imagen.findMany()
    * ```
    */
  get imagen(): Prisma.imagenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pais`: Exposes CRUD operations for the **pais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pais
    * const pais = await prisma.pais.findMany()
    * ```
    */
  get pais(): Prisma.paisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provincia`: Exposes CRUD operations for the **provincia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provincias
    * const provincias = await prisma.provincia.findMany()
    * ```
    */
  get provincia(): Prisma.provinciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipocombustible`: Exposes CRUD operations for the **tipocombustible** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipocombustibles
    * const tipocombustibles = await prisma.tipocombustible.findMany()
    * ```
    */
  get tipocombustible(): Prisma.tipocombustibleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.ubicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_rol`: Exposes CRUD operations for the **usuario_rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_rols
    * const usuario_rols = await prisma.usuario_rol.findMany()
    * ```
    */
  get usuario_rol(): Prisma.usuario_rolDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    caracteristicas_adicionales: 'caracteristicas_adicionales',
    caracteristicasadicionalescarro: 'caracteristicasadicionalescarro',
    carro: 'carro',
    ciudad: 'ciudad',
    combustiblecarro: 'combustiblecarro',
    direccion: 'direccion',
    imagen: 'imagen',
    pais: 'pais',
    provincia: 'provincia',
    rol: 'rol',
    test: 'test',
    tipocombustible: 'tipocombustible',
    ubicacion: 'ubicacion',
    usuario: 'usuario',
    usuario_rol: 'usuario_rol'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caracteristicas_adicionales" | "caracteristicasadicionalescarro" | "carro" | "ciudad" | "combustiblecarro" | "direccion" | "imagen" | "pais" | "provincia" | "rol" | "test" | "tipocombustible" | "ubicacion" | "usuario" | "usuario_rol"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      caracteristicas_adicionales: {
        payload: Prisma.$caracteristicas_adicionalesPayload<ExtArgs>
        fields: Prisma.caracteristicas_adicionalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caracteristicas_adicionalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caracteristicas_adicionalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          findFirst: {
            args: Prisma.caracteristicas_adicionalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caracteristicas_adicionalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          findMany: {
            args: Prisma.caracteristicas_adicionalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>[]
          }
          create: {
            args: Prisma.caracteristicas_adicionalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          createMany: {
            args: Prisma.caracteristicas_adicionalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.caracteristicas_adicionalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>[]
          }
          delete: {
            args: Prisma.caracteristicas_adicionalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          update: {
            args: Prisma.caracteristicas_adicionalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          deleteMany: {
            args: Prisma.caracteristicas_adicionalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.caracteristicas_adicionalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.caracteristicas_adicionalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>[]
          }
          upsert: {
            args: Prisma.caracteristicas_adicionalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicas_adicionalesPayload>
          }
          aggregate: {
            args: Prisma.Caracteristicas_adicionalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaracteristicas_adicionales>
          }
          groupBy: {
            args: Prisma.caracteristicas_adicionalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Caracteristicas_adicionalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.caracteristicas_adicionalesCountArgs<ExtArgs>
            result: $Utils.Optional<Caracteristicas_adicionalesCountAggregateOutputType> | number
          }
        }
      }
      caracteristicasadicionalescarro: {
        payload: Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>
        fields: Prisma.caracteristicasadicionalescarroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caracteristicasadicionalescarroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caracteristicasadicionalescarroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          findFirst: {
            args: Prisma.caracteristicasadicionalescarroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caracteristicasadicionalescarroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          findMany: {
            args: Prisma.caracteristicasadicionalescarroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>[]
          }
          create: {
            args: Prisma.caracteristicasadicionalescarroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          createMany: {
            args: Prisma.caracteristicasadicionalescarroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.caracteristicasadicionalescarroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>[]
          }
          delete: {
            args: Prisma.caracteristicasadicionalescarroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          update: {
            args: Prisma.caracteristicasadicionalescarroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          deleteMany: {
            args: Prisma.caracteristicasadicionalescarroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.caracteristicasadicionalescarroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.caracteristicasadicionalescarroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>[]
          }
          upsert: {
            args: Prisma.caracteristicasadicionalescarroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caracteristicasadicionalescarroPayload>
          }
          aggregate: {
            args: Prisma.CaracteristicasadicionalescarroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaracteristicasadicionalescarro>
          }
          groupBy: {
            args: Prisma.caracteristicasadicionalescarroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaracteristicasadicionalescarroGroupByOutputType>[]
          }
          count: {
            args: Prisma.caracteristicasadicionalescarroCountArgs<ExtArgs>
            result: $Utils.Optional<CaracteristicasadicionalescarroCountAggregateOutputType> | number
          }
        }
      }
      carro: {
        payload: Prisma.$carroPayload<ExtArgs>
        fields: Prisma.carroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          findFirst: {
            args: Prisma.carroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          findMany: {
            args: Prisma.carroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>[]
          }
          create: {
            args: Prisma.carroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          createMany: {
            args: Prisma.carroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>[]
          }
          delete: {
            args: Prisma.carroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          update: {
            args: Prisma.carroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          deleteMany: {
            args: Prisma.carroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>[]
          }
          upsert: {
            args: Prisma.carroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carroPayload>
          }
          aggregate: {
            args: Prisma.CarroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarro>
          }
          groupBy: {
            args: Prisma.carroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarroGroupByOutputType>[]
          }
          count: {
            args: Prisma.carroCountArgs<ExtArgs>
            result: $Utils.Optional<CarroCountAggregateOutputType> | number
          }
        }
      }
      ciudad: {
        payload: Prisma.$ciudadPayload<ExtArgs>
        fields: Prisma.ciudadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ciudadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ciudadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          findFirst: {
            args: Prisma.ciudadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ciudadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          findMany: {
            args: Prisma.ciudadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>[]
          }
          create: {
            args: Prisma.ciudadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          createMany: {
            args: Prisma.ciudadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ciudadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>[]
          }
          delete: {
            args: Prisma.ciudadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          update: {
            args: Prisma.ciudadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          deleteMany: {
            args: Prisma.ciudadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ciudadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ciudadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>[]
          }
          upsert: {
            args: Prisma.ciudadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ciudadPayload>
          }
          aggregate: {
            args: Prisma.CiudadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudad>
          }
          groupBy: {
            args: Prisma.ciudadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ciudadCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadCountAggregateOutputType> | number
          }
        }
      }
      combustiblecarro: {
        payload: Prisma.$combustiblecarroPayload<ExtArgs>
        fields: Prisma.combustiblecarroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.combustiblecarroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.combustiblecarroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          findFirst: {
            args: Prisma.combustiblecarroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.combustiblecarroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          findMany: {
            args: Prisma.combustiblecarroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>[]
          }
          create: {
            args: Prisma.combustiblecarroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          createMany: {
            args: Prisma.combustiblecarroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.combustiblecarroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>[]
          }
          delete: {
            args: Prisma.combustiblecarroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          update: {
            args: Prisma.combustiblecarroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          deleteMany: {
            args: Prisma.combustiblecarroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.combustiblecarroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.combustiblecarroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>[]
          }
          upsert: {
            args: Prisma.combustiblecarroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$combustiblecarroPayload>
          }
          aggregate: {
            args: Prisma.CombustiblecarroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombustiblecarro>
          }
          groupBy: {
            args: Prisma.combustiblecarroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CombustiblecarroGroupByOutputType>[]
          }
          count: {
            args: Prisma.combustiblecarroCountArgs<ExtArgs>
            result: $Utils.Optional<CombustiblecarroCountAggregateOutputType> | number
          }
        }
      }
      direccion: {
        payload: Prisma.$direccionPayload<ExtArgs>
        fields: Prisma.direccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.direccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.direccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          findFirst: {
            args: Prisma.direccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.direccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          findMany: {
            args: Prisma.direccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>[]
          }
          create: {
            args: Prisma.direccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          createMany: {
            args: Prisma.direccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.direccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>[]
          }
          delete: {
            args: Prisma.direccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          update: {
            args: Prisma.direccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          deleteMany: {
            args: Prisma.direccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.direccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.direccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>[]
          }
          upsert: {
            args: Prisma.direccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$direccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.direccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.direccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      imagen: {
        payload: Prisma.$imagenPayload<ExtArgs>
        fields: Prisma.imagenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          findFirst: {
            args: Prisma.imagenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          findMany: {
            args: Prisma.imagenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>[]
          }
          create: {
            args: Prisma.imagenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          createMany: {
            args: Prisma.imagenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imagenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>[]
          }
          delete: {
            args: Prisma.imagenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          update: {
            args: Prisma.imagenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          deleteMany: {
            args: Prisma.imagenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imagenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>[]
          }
          upsert: {
            args: Prisma.imagenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagenPayload>
          }
          aggregate: {
            args: Prisma.ImagenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagen>
          }
          groupBy: {
            args: Prisma.imagenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagenGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagenCountArgs<ExtArgs>
            result: $Utils.Optional<ImagenCountAggregateOutputType> | number
          }
        }
      }
      pais: {
        payload: Prisma.$paisPayload<ExtArgs>
        fields: Prisma.paisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          findFirst: {
            args: Prisma.paisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          findMany: {
            args: Prisma.paisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>[]
          }
          create: {
            args: Prisma.paisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          createMany: {
            args: Prisma.paisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>[]
          }
          delete: {
            args: Prisma.paisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          update: {
            args: Prisma.paisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          deleteMany: {
            args: Prisma.paisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>[]
          }
          upsert: {
            args: Prisma.paisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paisPayload>
          }
          aggregate: {
            args: Prisma.PaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePais>
          }
          groupBy: {
            args: Prisma.paisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.paisCountArgs<ExtArgs>
            result: $Utils.Optional<PaisCountAggregateOutputType> | number
          }
        }
      }
      provincia: {
        payload: Prisma.$provinciaPayload<ExtArgs>
        fields: Prisma.provinciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provinciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provinciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          findFirst: {
            args: Prisma.provinciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provinciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          findMany: {
            args: Prisma.provinciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>[]
          }
          create: {
            args: Prisma.provinciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          createMany: {
            args: Prisma.provinciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.provinciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>[]
          }
          delete: {
            args: Prisma.provinciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          update: {
            args: Prisma.provinciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          deleteMany: {
            args: Prisma.provinciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.provinciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.provinciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>[]
          }
          upsert: {
            args: Prisma.provinciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provinciaPayload>
          }
          aggregate: {
            args: Prisma.ProvinciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvincia>
          }
          groupBy: {
            args: Prisma.provinciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.provinciaCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      test: {
        payload: Prisma.$testPayload<ExtArgs>
        fields: Prisma.testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          create: {
            args: Prisma.testCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          createMany: {
            args: Prisma.testCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          upsert: {
            args: Prisma.testUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.testCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      tipocombustible: {
        payload: Prisma.$tipocombustiblePayload<ExtArgs>
        fields: Prisma.tipocombustibleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipocombustibleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipocombustibleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          findFirst: {
            args: Prisma.tipocombustibleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipocombustibleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          findMany: {
            args: Prisma.tipocombustibleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>[]
          }
          create: {
            args: Prisma.tipocombustibleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          createMany: {
            args: Prisma.tipocombustibleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipocombustibleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>[]
          }
          delete: {
            args: Prisma.tipocombustibleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          update: {
            args: Prisma.tipocombustibleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          deleteMany: {
            args: Prisma.tipocombustibleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipocombustibleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipocombustibleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>[]
          }
          upsert: {
            args: Prisma.tipocombustibleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipocombustiblePayload>
          }
          aggregate: {
            args: Prisma.TipocombustibleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipocombustible>
          }
          groupBy: {
            args: Prisma.tipocombustibleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipocombustibleGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipocombustibleCountArgs<ExtArgs>
            result: $Utils.Optional<TipocombustibleCountAggregateOutputType> | number
          }
        }
      }
      ubicacion: {
        payload: Prisma.$ubicacionPayload<ExtArgs>
        fields: Prisma.ubicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ubicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ubicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findFirst: {
            args: Prisma.ubicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ubicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          findMany: {
            args: Prisma.ubicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          delete: {
            args: Prisma.ubicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          update: {
            args: Prisma.ubicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>
          }
          deleteMany: {
            args: Prisma.ubicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ubicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ubicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ubicacionPayload>[]
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.ubicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ubicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_rol: {
        payload: Prisma.$usuario_rolPayload<ExtArgs>
        fields: Prisma.usuario_rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findFirst: {
            args: Prisma.usuario_rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          findMany: {
            args: Prisma.usuario_rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          create: {
            args: Prisma.usuario_rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          createMany: {
            args: Prisma.usuario_rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_rolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          delete: {
            args: Prisma.usuario_rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          update: {
            args: Prisma.usuario_rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          deleteMany: {
            args: Prisma.usuario_rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_rolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>[]
          }
          upsert: {
            args: Prisma.usuario_rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_rolPayload>
          }
          aggregate: {
            args: Prisma.Usuario_rolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_rol>
          }
          groupBy: {
            args: Prisma.usuario_rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_rolCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_rolCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caracteristicas_adicionales?: caracteristicas_adicionalesOmit
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroOmit
    carro?: carroOmit
    ciudad?: ciudadOmit
    combustiblecarro?: combustiblecarroOmit
    direccion?: direccionOmit
    imagen?: imagenOmit
    pais?: paisOmit
    provincia?: provinciaOmit
    rol?: rolOmit
    test?: testOmit
    tipocombustible?: tipocombustibleOmit
    ubicacion?: ubicacionOmit
    usuario?: usuarioOmit
    usuario_rol?: usuario_rolOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Caracteristicas_adicionalesCountOutputType
   */

  export type Caracteristicas_adicionalesCountOutputType = {
    caracteristicasadicionalescarro: number
  }

  export type Caracteristicas_adicionalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicasadicionalescarro?: boolean | Caracteristicas_adicionalesCountOutputTypeCountCaracteristicasadicionalescarroArgs
  }

  // Custom InputTypes
  /**
   * Caracteristicas_adicionalesCountOutputType without action
   */
  export type Caracteristicas_adicionalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caracteristicas_adicionalesCountOutputType
     */
    select?: Caracteristicas_adicionalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Caracteristicas_adicionalesCountOutputType without action
   */
  export type Caracteristicas_adicionalesCountOutputTypeCountCaracteristicasadicionalescarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caracteristicasadicionalescarroWhereInput
  }


  /**
   * Count Type CarroCountOutputType
   */

  export type CarroCountOutputType = {
    caracteristicasadicionalescarro: number
    combustiblecarro: number
    imagen: number
  }

  export type CarroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicasadicionalescarro?: boolean | CarroCountOutputTypeCountCaracteristicasadicionalescarroArgs
    combustiblecarro?: boolean | CarroCountOutputTypeCountCombustiblecarroArgs
    imagen?: boolean | CarroCountOutputTypeCountImagenArgs
  }

  // Custom InputTypes
  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarroCountOutputType
     */
    select?: CarroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeCountCaracteristicasadicionalescarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caracteristicasadicionalescarroWhereInput
  }

  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeCountCombustiblecarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combustiblecarroWhereInput
  }

  /**
   * CarroCountOutputType without action
   */
  export type CarroCountOutputTypeCountImagenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagenWhereInput
  }


  /**
   * Count Type CiudadCountOutputType
   */

  export type CiudadCountOutputType = {
    provincia: number
    usuario: number
  }

  export type CiudadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | CiudadCountOutputTypeCountProvinciaArgs
    usuario?: boolean | CiudadCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadCountOutputType
     */
    select?: CiudadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountProvinciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provinciaWhereInput
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type DireccionCountOutputType
   */

  export type DireccionCountOutputType = {
    carro: number
    ubicacion: number
  }

  export type DireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | DireccionCountOutputTypeCountCarroArgs
    ubicacion?: boolean | DireccionCountOutputTypeCountUbicacionArgs
  }

  // Custom InputTypes
  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionCountOutputType
     */
    select?: DireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountCarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carroWhereInput
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountUbicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ubicacionWhereInput
  }


  /**
   * Count Type PaisCountOutputType
   */

  export type PaisCountOutputType = {
    ciudad: number
  }

  export type PaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | PaisCountOutputTypeCountCiudadArgs
  }

  // Custom InputTypes
  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaisCountOutputType
     */
    select?: PaisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaisCountOutputType without action
   */
  export type PaisCountOutputTypeCountCiudadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ciudadWhereInput
  }


  /**
   * Count Type ProvinciaCountOutputType
   */

  export type ProvinciaCountOutputType = {
    direccion: number
  }

  export type ProvinciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | ProvinciaCountOutputTypeCountDireccionArgs
  }

  // Custom InputTypes
  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinciaCountOutputType
     */
    select?: ProvinciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountDireccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: direccionWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuario_rol: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rol?: boolean | RolCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Count Type TipocombustibleCountOutputType
   */

  export type TipocombustibleCountOutputType = {
    combustiblecarro: number
  }

  export type TipocombustibleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combustiblecarro?: boolean | TipocombustibleCountOutputTypeCountCombustiblecarroArgs
  }

  // Custom InputTypes
  /**
   * TipocombustibleCountOutputType without action
   */
  export type TipocombustibleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipocombustibleCountOutputType
     */
    select?: TipocombustibleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipocombustibleCountOutputType without action
   */
  export type TipocombustibleCountOutputTypeCountCombustiblecarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combustiblecarroWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    usuario_rol: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rol?: boolean | UsuarioCountOutputTypeCountUsuario_rolArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
  }


  /**
   * Count Type Usuario_rolCountOutputType
   */

  export type Usuario_rolCountOutputType = {
    carro: number
  }

  export type Usuario_rolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | Usuario_rolCountOutputTypeCountCarroArgs
  }

  // Custom InputTypes
  /**
   * Usuario_rolCountOutputType without action
   */
  export type Usuario_rolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_rolCountOutputType
     */
    select?: Usuario_rolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Usuario_rolCountOutputType without action
   */
  export type Usuario_rolCountOutputTypeCountCarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model caracteristicas_adicionales
   */

  export type AggregateCaracteristicas_adicionales = {
    _count: Caracteristicas_adicionalesCountAggregateOutputType | null
    _avg: Caracteristicas_adicionalesAvgAggregateOutputType | null
    _sum: Caracteristicas_adicionalesSumAggregateOutputType | null
    _min: Caracteristicas_adicionalesMinAggregateOutputType | null
    _max: Caracteristicas_adicionalesMaxAggregateOutputType | null
  }

  export type Caracteristicas_adicionalesAvgAggregateOutputType = {
    id: number | null
  }

  export type Caracteristicas_adicionalesSumAggregateOutputType = {
    id: number | null
  }

  export type Caracteristicas_adicionalesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Caracteristicas_adicionalesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type Caracteristicas_adicionalesCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type Caracteristicas_adicionalesAvgAggregateInputType = {
    id?: true
  }

  export type Caracteristicas_adicionalesSumAggregateInputType = {
    id?: true
  }

  export type Caracteristicas_adicionalesMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Caracteristicas_adicionalesMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type Caracteristicas_adicionalesCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type Caracteristicas_adicionalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caracteristicas_adicionales to aggregate.
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicas_adicionales to fetch.
     */
    orderBy?: caracteristicas_adicionalesOrderByWithRelationInput | caracteristicas_adicionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caracteristicas_adicionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicas_adicionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicas_adicionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caracteristicas_adicionales
    **/
    _count?: true | Caracteristicas_adicionalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Caracteristicas_adicionalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Caracteristicas_adicionalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Caracteristicas_adicionalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Caracteristicas_adicionalesMaxAggregateInputType
  }

  export type GetCaracteristicas_adicionalesAggregateType<T extends Caracteristicas_adicionalesAggregateArgs> = {
        [P in keyof T & keyof AggregateCaracteristicas_adicionales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaracteristicas_adicionales[P]>
      : GetScalarType<T[P], AggregateCaracteristicas_adicionales[P]>
  }




  export type caracteristicas_adicionalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caracteristicas_adicionalesWhereInput
    orderBy?: caracteristicas_adicionalesOrderByWithAggregationInput | caracteristicas_adicionalesOrderByWithAggregationInput[]
    by: Caracteristicas_adicionalesScalarFieldEnum[] | Caracteristicas_adicionalesScalarFieldEnum
    having?: caracteristicas_adicionalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Caracteristicas_adicionalesCountAggregateInputType | true
    _avg?: Caracteristicas_adicionalesAvgAggregateInputType
    _sum?: Caracteristicas_adicionalesSumAggregateInputType
    _min?: Caracteristicas_adicionalesMinAggregateInputType
    _max?: Caracteristicas_adicionalesMaxAggregateInputType
  }

  export type Caracteristicas_adicionalesGroupByOutputType = {
    id: number
    nombre: string
    _count: Caracteristicas_adicionalesCountAggregateOutputType | null
    _avg: Caracteristicas_adicionalesAvgAggregateOutputType | null
    _sum: Caracteristicas_adicionalesSumAggregateOutputType | null
    _min: Caracteristicas_adicionalesMinAggregateOutputType | null
    _max: Caracteristicas_adicionalesMaxAggregateOutputType | null
  }

  type GetCaracteristicas_adicionalesGroupByPayload<T extends caracteristicas_adicionalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Caracteristicas_adicionalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Caracteristicas_adicionalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Caracteristicas_adicionalesGroupByOutputType[P]>
            : GetScalarType<T[P], Caracteristicas_adicionalesGroupByOutputType[P]>
        }
      >
    >


  export type caracteristicas_adicionalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    caracteristicasadicionalescarro?: boolean | caracteristicas_adicionales$caracteristicasadicionalescarroArgs<ExtArgs>
    _count?: boolean | Caracteristicas_adicionalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristicas_adicionales"]>

  export type caracteristicas_adicionalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["caracteristicas_adicionales"]>

  export type caracteristicas_adicionalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["caracteristicas_adicionales"]>

  export type caracteristicas_adicionalesSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type caracteristicas_adicionalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["caracteristicas_adicionales"]>
  export type caracteristicas_adicionalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicasadicionalescarro?: boolean | caracteristicas_adicionales$caracteristicasadicionalescarroArgs<ExtArgs>
    _count?: boolean | Caracteristicas_adicionalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type caracteristicas_adicionalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type caracteristicas_adicionalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $caracteristicas_adicionalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caracteristicas_adicionales"
    objects: {
      caracteristicasadicionalescarro: Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["caracteristicas_adicionales"]>
    composites: {}
  }

  type caracteristicas_adicionalesGetPayload<S extends boolean | null | undefined | caracteristicas_adicionalesDefaultArgs> = $Result.GetResult<Prisma.$caracteristicas_adicionalesPayload, S>

  type caracteristicas_adicionalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<caracteristicas_adicionalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Caracteristicas_adicionalesCountAggregateInputType | true
    }

  export interface caracteristicas_adicionalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caracteristicas_adicionales'], meta: { name: 'caracteristicas_adicionales' } }
    /**
     * Find zero or one Caracteristicas_adicionales that matches the filter.
     * @param {caracteristicas_adicionalesFindUniqueArgs} args - Arguments to find a Caracteristicas_adicionales
     * @example
     * // Get one Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends caracteristicas_adicionalesFindUniqueArgs>(args: SelectSubset<T, caracteristicas_adicionalesFindUniqueArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caracteristicas_adicionales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {caracteristicas_adicionalesFindUniqueOrThrowArgs} args - Arguments to find a Caracteristicas_adicionales
     * @example
     * // Get one Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends caracteristicas_adicionalesFindUniqueOrThrowArgs>(args: SelectSubset<T, caracteristicas_adicionalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caracteristicas_adicionales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesFindFirstArgs} args - Arguments to find a Caracteristicas_adicionales
     * @example
     * // Get one Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends caracteristicas_adicionalesFindFirstArgs>(args?: SelectSubset<T, caracteristicas_adicionalesFindFirstArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caracteristicas_adicionales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesFindFirstOrThrowArgs} args - Arguments to find a Caracteristicas_adicionales
     * @example
     * // Get one Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends caracteristicas_adicionalesFindFirstOrThrowArgs>(args?: SelectSubset<T, caracteristicas_adicionalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caracteristicas_adicionales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findMany()
     * 
     * // Get first 10 Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caracteristicas_adicionalesWithIdOnly = await prisma.caracteristicas_adicionales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends caracteristicas_adicionalesFindManyArgs>(args?: SelectSubset<T, caracteristicas_adicionalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesCreateArgs} args - Arguments to create a Caracteristicas_adicionales.
     * @example
     * // Create one Caracteristicas_adicionales
     * const Caracteristicas_adicionales = await prisma.caracteristicas_adicionales.create({
     *   data: {
     *     // ... data to create a Caracteristicas_adicionales
     *   }
     * })
     * 
     */
    create<T extends caracteristicas_adicionalesCreateArgs>(args: SelectSubset<T, caracteristicas_adicionalesCreateArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesCreateManyArgs} args - Arguments to create many Caracteristicas_adicionales.
     * @example
     * // Create many Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends caracteristicas_adicionalesCreateManyArgs>(args?: SelectSubset<T, caracteristicas_adicionalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caracteristicas_adicionales and returns the data saved in the database.
     * @param {caracteristicas_adicionalesCreateManyAndReturnArgs} args - Arguments to create many Caracteristicas_adicionales.
     * @example
     * // Create many Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caracteristicas_adicionales and only return the `id`
     * const caracteristicas_adicionalesWithIdOnly = await prisma.caracteristicas_adicionales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends caracteristicas_adicionalesCreateManyAndReturnArgs>(args?: SelectSubset<T, caracteristicas_adicionalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesDeleteArgs} args - Arguments to delete one Caracteristicas_adicionales.
     * @example
     * // Delete one Caracteristicas_adicionales
     * const Caracteristicas_adicionales = await prisma.caracteristicas_adicionales.delete({
     *   where: {
     *     // ... filter to delete one Caracteristicas_adicionales
     *   }
     * })
     * 
     */
    delete<T extends caracteristicas_adicionalesDeleteArgs>(args: SelectSubset<T, caracteristicas_adicionalesDeleteArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesUpdateArgs} args - Arguments to update one Caracteristicas_adicionales.
     * @example
     * // Update one Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends caracteristicas_adicionalesUpdateArgs>(args: SelectSubset<T, caracteristicas_adicionalesUpdateArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesDeleteManyArgs} args - Arguments to filter Caracteristicas_adicionales to delete.
     * @example
     * // Delete a few Caracteristicas_adicionales
     * const { count } = await prisma.caracteristicas_adicionales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends caracteristicas_adicionalesDeleteManyArgs>(args?: SelectSubset<T, caracteristicas_adicionalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caracteristicas_adicionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends caracteristicas_adicionalesUpdateManyArgs>(args: SelectSubset<T, caracteristicas_adicionalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caracteristicas_adicionales and returns the data updated in the database.
     * @param {caracteristicas_adicionalesUpdateManyAndReturnArgs} args - Arguments to update many Caracteristicas_adicionales.
     * @example
     * // Update many Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caracteristicas_adicionales and only return the `id`
     * const caracteristicas_adicionalesWithIdOnly = await prisma.caracteristicas_adicionales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends caracteristicas_adicionalesUpdateManyAndReturnArgs>(args: SelectSubset<T, caracteristicas_adicionalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caracteristicas_adicionales.
     * @param {caracteristicas_adicionalesUpsertArgs} args - Arguments to update or create a Caracteristicas_adicionales.
     * @example
     * // Update or create a Caracteristicas_adicionales
     * const caracteristicas_adicionales = await prisma.caracteristicas_adicionales.upsert({
     *   create: {
     *     // ... data to create a Caracteristicas_adicionales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caracteristicas_adicionales we want to update
     *   }
     * })
     */
    upsert<T extends caracteristicas_adicionalesUpsertArgs>(args: SelectSubset<T, caracteristicas_adicionalesUpsertArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caracteristicas_adicionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesCountArgs} args - Arguments to filter Caracteristicas_adicionales to count.
     * @example
     * // Count the number of Caracteristicas_adicionales
     * const count = await prisma.caracteristicas_adicionales.count({
     *   where: {
     *     // ... the filter for the Caracteristicas_adicionales we want to count
     *   }
     * })
    **/
    count<T extends caracteristicas_adicionalesCountArgs>(
      args?: Subset<T, caracteristicas_adicionalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Caracteristicas_adicionalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caracteristicas_adicionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Caracteristicas_adicionalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Caracteristicas_adicionalesAggregateArgs>(args: Subset<T, Caracteristicas_adicionalesAggregateArgs>): Prisma.PrismaPromise<GetCaracteristicas_adicionalesAggregateType<T>>

    /**
     * Group by Caracteristicas_adicionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicas_adicionalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caracteristicas_adicionalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caracteristicas_adicionalesGroupByArgs['orderBy'] }
        : { orderBy?: caracteristicas_adicionalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caracteristicas_adicionalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaracteristicas_adicionalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caracteristicas_adicionales model
   */
  readonly fields: caracteristicas_adicionalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caracteristicas_adicionales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caracteristicas_adicionalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caracteristicasadicionalescarro<T extends caracteristicas_adicionales$caracteristicasadicionalescarroArgs<ExtArgs> = {}>(args?: Subset<T, caracteristicas_adicionales$caracteristicasadicionalescarroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the caracteristicas_adicionales model
   */
  interface caracteristicas_adicionalesFieldRefs {
    readonly id: FieldRef<"caracteristicas_adicionales", 'Int'>
    readonly nombre: FieldRef<"caracteristicas_adicionales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * caracteristicas_adicionales findUnique
   */
  export type caracteristicas_adicionalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicas_adicionales to fetch.
     */
    where: caracteristicas_adicionalesWhereUniqueInput
  }

  /**
   * caracteristicas_adicionales findUniqueOrThrow
   */
  export type caracteristicas_adicionalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicas_adicionales to fetch.
     */
    where: caracteristicas_adicionalesWhereUniqueInput
  }

  /**
   * caracteristicas_adicionales findFirst
   */
  export type caracteristicas_adicionalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicas_adicionales to fetch.
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicas_adicionales to fetch.
     */
    orderBy?: caracteristicas_adicionalesOrderByWithRelationInput | caracteristicas_adicionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caracteristicas_adicionales.
     */
    cursor?: caracteristicas_adicionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicas_adicionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicas_adicionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caracteristicas_adicionales.
     */
    distinct?: Caracteristicas_adicionalesScalarFieldEnum | Caracteristicas_adicionalesScalarFieldEnum[]
  }

  /**
   * caracteristicas_adicionales findFirstOrThrow
   */
  export type caracteristicas_adicionalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicas_adicionales to fetch.
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicas_adicionales to fetch.
     */
    orderBy?: caracteristicas_adicionalesOrderByWithRelationInput | caracteristicas_adicionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caracteristicas_adicionales.
     */
    cursor?: caracteristicas_adicionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicas_adicionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicas_adicionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caracteristicas_adicionales.
     */
    distinct?: Caracteristicas_adicionalesScalarFieldEnum | Caracteristicas_adicionalesScalarFieldEnum[]
  }

  /**
   * caracteristicas_adicionales findMany
   */
  export type caracteristicas_adicionalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicas_adicionales to fetch.
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicas_adicionales to fetch.
     */
    orderBy?: caracteristicas_adicionalesOrderByWithRelationInput | caracteristicas_adicionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caracteristicas_adicionales.
     */
    cursor?: caracteristicas_adicionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicas_adicionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicas_adicionales.
     */
    skip?: number
    distinct?: Caracteristicas_adicionalesScalarFieldEnum | Caracteristicas_adicionalesScalarFieldEnum[]
  }

  /**
   * caracteristicas_adicionales create
   */
  export type caracteristicas_adicionalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * The data needed to create a caracteristicas_adicionales.
     */
    data: XOR<caracteristicas_adicionalesCreateInput, caracteristicas_adicionalesUncheckedCreateInput>
  }

  /**
   * caracteristicas_adicionales createMany
   */
  export type caracteristicas_adicionalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caracteristicas_adicionales.
     */
    data: caracteristicas_adicionalesCreateManyInput | caracteristicas_adicionalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caracteristicas_adicionales createManyAndReturn
   */
  export type caracteristicas_adicionalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * The data used to create many caracteristicas_adicionales.
     */
    data: caracteristicas_adicionalesCreateManyInput | caracteristicas_adicionalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caracteristicas_adicionales update
   */
  export type caracteristicas_adicionalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * The data needed to update a caracteristicas_adicionales.
     */
    data: XOR<caracteristicas_adicionalesUpdateInput, caracteristicas_adicionalesUncheckedUpdateInput>
    /**
     * Choose, which caracteristicas_adicionales to update.
     */
    where: caracteristicas_adicionalesWhereUniqueInput
  }

  /**
   * caracteristicas_adicionales updateMany
   */
  export type caracteristicas_adicionalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caracteristicas_adicionales.
     */
    data: XOR<caracteristicas_adicionalesUpdateManyMutationInput, caracteristicas_adicionalesUncheckedUpdateManyInput>
    /**
     * Filter which caracteristicas_adicionales to update
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * Limit how many caracteristicas_adicionales to update.
     */
    limit?: number
  }

  /**
   * caracteristicas_adicionales updateManyAndReturn
   */
  export type caracteristicas_adicionalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * The data used to update caracteristicas_adicionales.
     */
    data: XOR<caracteristicas_adicionalesUpdateManyMutationInput, caracteristicas_adicionalesUncheckedUpdateManyInput>
    /**
     * Filter which caracteristicas_adicionales to update
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * Limit how many caracteristicas_adicionales to update.
     */
    limit?: number
  }

  /**
   * caracteristicas_adicionales upsert
   */
  export type caracteristicas_adicionalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * The filter to search for the caracteristicas_adicionales to update in case it exists.
     */
    where: caracteristicas_adicionalesWhereUniqueInput
    /**
     * In case the caracteristicas_adicionales found by the `where` argument doesn't exist, create a new caracteristicas_adicionales with this data.
     */
    create: XOR<caracteristicas_adicionalesCreateInput, caracteristicas_adicionalesUncheckedCreateInput>
    /**
     * In case the caracteristicas_adicionales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caracteristicas_adicionalesUpdateInput, caracteristicas_adicionalesUncheckedUpdateInput>
  }

  /**
   * caracteristicas_adicionales delete
   */
  export type caracteristicas_adicionalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    /**
     * Filter which caracteristicas_adicionales to delete.
     */
    where: caracteristicas_adicionalesWhereUniqueInput
  }

  /**
   * caracteristicas_adicionales deleteMany
   */
  export type caracteristicas_adicionalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caracteristicas_adicionales to delete
     */
    where?: caracteristicas_adicionalesWhereInput
    /**
     * Limit how many caracteristicas_adicionales to delete.
     */
    limit?: number
  }

  /**
   * caracteristicas_adicionales.caracteristicasadicionalescarro
   */
  export type caracteristicas_adicionales$caracteristicasadicionalescarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    where?: caracteristicasadicionalescarroWhereInput
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaracteristicasadicionalescarroScalarFieldEnum | CaracteristicasadicionalescarroScalarFieldEnum[]
  }

  /**
   * caracteristicas_adicionales without action
   */
  export type caracteristicas_adicionalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
  }


  /**
   * Model caracteristicasadicionalescarro
   */

  export type AggregateCaracteristicasadicionalescarro = {
    _count: CaracteristicasadicionalescarroCountAggregateOutputType | null
    _avg: CaracteristicasadicionalescarroAvgAggregateOutputType | null
    _sum: CaracteristicasadicionalescarroSumAggregateOutputType | null
    _min: CaracteristicasadicionalescarroMinAggregateOutputType | null
    _max: CaracteristicasadicionalescarroMaxAggregateOutputType | null
  }

  export type CaracteristicasadicionalescarroAvgAggregateOutputType = {
    id: number | null
    id_carro: number | null
    id_caracteristicas_adicionales: number | null
  }

  export type CaracteristicasadicionalescarroSumAggregateOutputType = {
    id: number | null
    id_carro: number | null
    id_caracteristicas_adicionales: number | null
  }

  export type CaracteristicasadicionalescarroMinAggregateOutputType = {
    id: number | null
    id_carro: number | null
    id_caracteristicas_adicionales: number | null
  }

  export type CaracteristicasadicionalescarroMaxAggregateOutputType = {
    id: number | null
    id_carro: number | null
    id_caracteristicas_adicionales: number | null
  }

  export type CaracteristicasadicionalescarroCountAggregateOutputType = {
    id: number
    id_carro: number
    id_caracteristicas_adicionales: number
    _all: number
  }


  export type CaracteristicasadicionalescarroAvgAggregateInputType = {
    id?: true
    id_carro?: true
    id_caracteristicas_adicionales?: true
  }

  export type CaracteristicasadicionalescarroSumAggregateInputType = {
    id?: true
    id_carro?: true
    id_caracteristicas_adicionales?: true
  }

  export type CaracteristicasadicionalescarroMinAggregateInputType = {
    id?: true
    id_carro?: true
    id_caracteristicas_adicionales?: true
  }

  export type CaracteristicasadicionalescarroMaxAggregateInputType = {
    id?: true
    id_carro?: true
    id_caracteristicas_adicionales?: true
  }

  export type CaracteristicasadicionalescarroCountAggregateInputType = {
    id?: true
    id_carro?: true
    id_caracteristicas_adicionales?: true
    _all?: true
  }

  export type CaracteristicasadicionalescarroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caracteristicasadicionalescarro to aggregate.
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicasadicionalescarros to fetch.
     */
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicasadicionalescarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicasadicionalescarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caracteristicasadicionalescarros
    **/
    _count?: true | CaracteristicasadicionalescarroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaracteristicasadicionalescarroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaracteristicasadicionalescarroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaracteristicasadicionalescarroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaracteristicasadicionalescarroMaxAggregateInputType
  }

  export type GetCaracteristicasadicionalescarroAggregateType<T extends CaracteristicasadicionalescarroAggregateArgs> = {
        [P in keyof T & keyof AggregateCaracteristicasadicionalescarro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaracteristicasadicionalescarro[P]>
      : GetScalarType<T[P], AggregateCaracteristicasadicionalescarro[P]>
  }




  export type caracteristicasadicionalescarroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caracteristicasadicionalescarroWhereInput
    orderBy?: caracteristicasadicionalescarroOrderByWithAggregationInput | caracteristicasadicionalescarroOrderByWithAggregationInput[]
    by: CaracteristicasadicionalescarroScalarFieldEnum[] | CaracteristicasadicionalescarroScalarFieldEnum
    having?: caracteristicasadicionalescarroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaracteristicasadicionalescarroCountAggregateInputType | true
    _avg?: CaracteristicasadicionalescarroAvgAggregateInputType
    _sum?: CaracteristicasadicionalescarroSumAggregateInputType
    _min?: CaracteristicasadicionalescarroMinAggregateInputType
    _max?: CaracteristicasadicionalescarroMaxAggregateInputType
  }

  export type CaracteristicasadicionalescarroGroupByOutputType = {
    id: number
    id_carro: number | null
    id_caracteristicas_adicionales: number | null
    _count: CaracteristicasadicionalescarroCountAggregateOutputType | null
    _avg: CaracteristicasadicionalescarroAvgAggregateOutputType | null
    _sum: CaracteristicasadicionalescarroSumAggregateOutputType | null
    _min: CaracteristicasadicionalescarroMinAggregateOutputType | null
    _max: CaracteristicasadicionalescarroMaxAggregateOutputType | null
  }

  type GetCaracteristicasadicionalescarroGroupByPayload<T extends caracteristicasadicionalescarroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaracteristicasadicionalescarroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaracteristicasadicionalescarroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaracteristicasadicionalescarroGroupByOutputType[P]>
            : GetScalarType<T[P], CaracteristicasadicionalescarroGroupByOutputType[P]>
        }
      >
    >


  export type caracteristicasadicionalescarroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_carro?: boolean
    id_caracteristicas_adicionales?: boolean
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristicasadicionalescarro"]>

  export type caracteristicasadicionalescarroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_carro?: boolean
    id_caracteristicas_adicionales?: boolean
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristicasadicionalescarro"]>

  export type caracteristicasadicionalescarroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_carro?: boolean
    id_caracteristicas_adicionales?: boolean
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }, ExtArgs["result"]["caracteristicasadicionalescarro"]>

  export type caracteristicasadicionalescarroSelectScalar = {
    id?: boolean
    id_carro?: boolean
    id_caracteristicas_adicionales?: boolean
  }

  export type caracteristicasadicionalescarroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_carro" | "id_caracteristicas_adicionales", ExtArgs["result"]["caracteristicasadicionalescarro"]>
  export type caracteristicasadicionalescarroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }
  export type caracteristicasadicionalescarroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }
  export type caracteristicasadicionalescarroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicas_adicionales?: boolean | caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>
    carro?: boolean | caracteristicasadicionalescarro$carroArgs<ExtArgs>
  }

  export type $caracteristicasadicionalescarroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caracteristicasadicionalescarro"
    objects: {
      caracteristicas_adicionales: Prisma.$caracteristicas_adicionalesPayload<ExtArgs> | null
      carro: Prisma.$carroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_carro: number | null
      id_caracteristicas_adicionales: number | null
    }, ExtArgs["result"]["caracteristicasadicionalescarro"]>
    composites: {}
  }

  type caracteristicasadicionalescarroGetPayload<S extends boolean | null | undefined | caracteristicasadicionalescarroDefaultArgs> = $Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload, S>

  type caracteristicasadicionalescarroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<caracteristicasadicionalescarroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaracteristicasadicionalescarroCountAggregateInputType | true
    }

  export interface caracteristicasadicionalescarroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caracteristicasadicionalescarro'], meta: { name: 'caracteristicasadicionalescarro' } }
    /**
     * Find zero or one Caracteristicasadicionalescarro that matches the filter.
     * @param {caracteristicasadicionalescarroFindUniqueArgs} args - Arguments to find a Caracteristicasadicionalescarro
     * @example
     * // Get one Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends caracteristicasadicionalescarroFindUniqueArgs>(args: SelectSubset<T, caracteristicasadicionalescarroFindUniqueArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caracteristicasadicionalescarro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {caracteristicasadicionalescarroFindUniqueOrThrowArgs} args - Arguments to find a Caracteristicasadicionalescarro
     * @example
     * // Get one Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends caracteristicasadicionalescarroFindUniqueOrThrowArgs>(args: SelectSubset<T, caracteristicasadicionalescarroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caracteristicasadicionalescarro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroFindFirstArgs} args - Arguments to find a Caracteristicasadicionalescarro
     * @example
     * // Get one Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends caracteristicasadicionalescarroFindFirstArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroFindFirstArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caracteristicasadicionalescarro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroFindFirstOrThrowArgs} args - Arguments to find a Caracteristicasadicionalescarro
     * @example
     * // Get one Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends caracteristicasadicionalescarroFindFirstOrThrowArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroFindFirstOrThrowArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caracteristicasadicionalescarros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarros = await prisma.caracteristicasadicionalescarro.findMany()
     * 
     * // Get first 10 Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarros = await prisma.caracteristicasadicionalescarro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caracteristicasadicionalescarroWithIdOnly = await prisma.caracteristicasadicionalescarro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends caracteristicasadicionalescarroFindManyArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caracteristicasadicionalescarro.
     * @param {caracteristicasadicionalescarroCreateArgs} args - Arguments to create a Caracteristicasadicionalescarro.
     * @example
     * // Create one Caracteristicasadicionalescarro
     * const Caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.create({
     *   data: {
     *     // ... data to create a Caracteristicasadicionalescarro
     *   }
     * })
     * 
     */
    create<T extends caracteristicasadicionalescarroCreateArgs>(args: SelectSubset<T, caracteristicasadicionalescarroCreateArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caracteristicasadicionalescarros.
     * @param {caracteristicasadicionalescarroCreateManyArgs} args - Arguments to create many Caracteristicasadicionalescarros.
     * @example
     * // Create many Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends caracteristicasadicionalescarroCreateManyArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caracteristicasadicionalescarros and returns the data saved in the database.
     * @param {caracteristicasadicionalescarroCreateManyAndReturnArgs} args - Arguments to create many Caracteristicasadicionalescarros.
     * @example
     * // Create many Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caracteristicasadicionalescarros and only return the `id`
     * const caracteristicasadicionalescarroWithIdOnly = await prisma.caracteristicasadicionalescarro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends caracteristicasadicionalescarroCreateManyAndReturnArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caracteristicasadicionalescarro.
     * @param {caracteristicasadicionalescarroDeleteArgs} args - Arguments to delete one Caracteristicasadicionalescarro.
     * @example
     * // Delete one Caracteristicasadicionalescarro
     * const Caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.delete({
     *   where: {
     *     // ... filter to delete one Caracteristicasadicionalescarro
     *   }
     * })
     * 
     */
    delete<T extends caracteristicasadicionalescarroDeleteArgs>(args: SelectSubset<T, caracteristicasadicionalescarroDeleteArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caracteristicasadicionalescarro.
     * @param {caracteristicasadicionalescarroUpdateArgs} args - Arguments to update one Caracteristicasadicionalescarro.
     * @example
     * // Update one Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends caracteristicasadicionalescarroUpdateArgs>(args: SelectSubset<T, caracteristicasadicionalescarroUpdateArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caracteristicasadicionalescarros.
     * @param {caracteristicasadicionalescarroDeleteManyArgs} args - Arguments to filter Caracteristicasadicionalescarros to delete.
     * @example
     * // Delete a few Caracteristicasadicionalescarros
     * const { count } = await prisma.caracteristicasadicionalescarro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends caracteristicasadicionalescarroDeleteManyArgs>(args?: SelectSubset<T, caracteristicasadicionalescarroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caracteristicasadicionalescarros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends caracteristicasadicionalescarroUpdateManyArgs>(args: SelectSubset<T, caracteristicasadicionalescarroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caracteristicasadicionalescarros and returns the data updated in the database.
     * @param {caracteristicasadicionalescarroUpdateManyAndReturnArgs} args - Arguments to update many Caracteristicasadicionalescarros.
     * @example
     * // Update many Caracteristicasadicionalescarros
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caracteristicasadicionalescarros and only return the `id`
     * const caracteristicasadicionalescarroWithIdOnly = await prisma.caracteristicasadicionalescarro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends caracteristicasadicionalescarroUpdateManyAndReturnArgs>(args: SelectSubset<T, caracteristicasadicionalescarroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caracteristicasadicionalescarro.
     * @param {caracteristicasadicionalescarroUpsertArgs} args - Arguments to update or create a Caracteristicasadicionalescarro.
     * @example
     * // Update or create a Caracteristicasadicionalescarro
     * const caracteristicasadicionalescarro = await prisma.caracteristicasadicionalescarro.upsert({
     *   create: {
     *     // ... data to create a Caracteristicasadicionalescarro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caracteristicasadicionalescarro we want to update
     *   }
     * })
     */
    upsert<T extends caracteristicasadicionalescarroUpsertArgs>(args: SelectSubset<T, caracteristicasadicionalescarroUpsertArgs<ExtArgs>>): Prisma__caracteristicasadicionalescarroClient<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caracteristicasadicionalescarros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroCountArgs} args - Arguments to filter Caracteristicasadicionalescarros to count.
     * @example
     * // Count the number of Caracteristicasadicionalescarros
     * const count = await prisma.caracteristicasadicionalescarro.count({
     *   where: {
     *     // ... the filter for the Caracteristicasadicionalescarros we want to count
     *   }
     * })
    **/
    count<T extends caracteristicasadicionalescarroCountArgs>(
      args?: Subset<T, caracteristicasadicionalescarroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaracteristicasadicionalescarroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caracteristicasadicionalescarro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaracteristicasadicionalescarroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaracteristicasadicionalescarroAggregateArgs>(args: Subset<T, CaracteristicasadicionalescarroAggregateArgs>): Prisma.PrismaPromise<GetCaracteristicasadicionalescarroAggregateType<T>>

    /**
     * Group by Caracteristicasadicionalescarro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caracteristicasadicionalescarroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caracteristicasadicionalescarroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caracteristicasadicionalescarroGroupByArgs['orderBy'] }
        : { orderBy?: caracteristicasadicionalescarroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caracteristicasadicionalescarroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaracteristicasadicionalescarroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caracteristicasadicionalescarro model
   */
  readonly fields: caracteristicasadicionalescarroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caracteristicasadicionalescarro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caracteristicasadicionalescarroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caracteristicas_adicionales<T extends caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs> = {}>(args?: Subset<T, caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs>>): Prisma__caracteristicas_adicionalesClient<$Result.GetResult<Prisma.$caracteristicas_adicionalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    carro<T extends caracteristicasadicionalescarro$carroArgs<ExtArgs> = {}>(args?: Subset<T, caracteristicasadicionalescarro$carroArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the caracteristicasadicionalescarro model
   */
  interface caracteristicasadicionalescarroFieldRefs {
    readonly id: FieldRef<"caracteristicasadicionalescarro", 'Int'>
    readonly id_carro: FieldRef<"caracteristicasadicionalescarro", 'Int'>
    readonly id_caracteristicas_adicionales: FieldRef<"caracteristicasadicionalescarro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * caracteristicasadicionalescarro findUnique
   */
  export type caracteristicasadicionalescarroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicasadicionalescarro to fetch.
     */
    where: caracteristicasadicionalescarroWhereUniqueInput
  }

  /**
   * caracteristicasadicionalescarro findUniqueOrThrow
   */
  export type caracteristicasadicionalescarroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicasadicionalescarro to fetch.
     */
    where: caracteristicasadicionalescarroWhereUniqueInput
  }

  /**
   * caracteristicasadicionalescarro findFirst
   */
  export type caracteristicasadicionalescarroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicasadicionalescarro to fetch.
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicasadicionalescarros to fetch.
     */
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caracteristicasadicionalescarros.
     */
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicasadicionalescarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicasadicionalescarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caracteristicasadicionalescarros.
     */
    distinct?: CaracteristicasadicionalescarroScalarFieldEnum | CaracteristicasadicionalescarroScalarFieldEnum[]
  }

  /**
   * caracteristicasadicionalescarro findFirstOrThrow
   */
  export type caracteristicasadicionalescarroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicasadicionalescarro to fetch.
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicasadicionalescarros to fetch.
     */
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caracteristicasadicionalescarros.
     */
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicasadicionalescarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicasadicionalescarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caracteristicasadicionalescarros.
     */
    distinct?: CaracteristicasadicionalescarroScalarFieldEnum | CaracteristicasadicionalescarroScalarFieldEnum[]
  }

  /**
   * caracteristicasadicionalescarro findMany
   */
  export type caracteristicasadicionalescarroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter, which caracteristicasadicionalescarros to fetch.
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caracteristicasadicionalescarros to fetch.
     */
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caracteristicasadicionalescarros.
     */
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caracteristicasadicionalescarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caracteristicasadicionalescarros.
     */
    skip?: number
    distinct?: CaracteristicasadicionalescarroScalarFieldEnum | CaracteristicasadicionalescarroScalarFieldEnum[]
  }

  /**
   * caracteristicasadicionalescarro create
   */
  export type caracteristicasadicionalescarroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * The data needed to create a caracteristicasadicionalescarro.
     */
    data?: XOR<caracteristicasadicionalescarroCreateInput, caracteristicasadicionalescarroUncheckedCreateInput>
  }

  /**
   * caracteristicasadicionalescarro createMany
   */
  export type caracteristicasadicionalescarroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caracteristicasadicionalescarros.
     */
    data: caracteristicasadicionalescarroCreateManyInput | caracteristicasadicionalescarroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caracteristicasadicionalescarro createManyAndReturn
   */
  export type caracteristicasadicionalescarroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * The data used to create many caracteristicasadicionalescarros.
     */
    data: caracteristicasadicionalescarroCreateManyInput | caracteristicasadicionalescarroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * caracteristicasadicionalescarro update
   */
  export type caracteristicasadicionalescarroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * The data needed to update a caracteristicasadicionalescarro.
     */
    data: XOR<caracteristicasadicionalescarroUpdateInput, caracteristicasadicionalescarroUncheckedUpdateInput>
    /**
     * Choose, which caracteristicasadicionalescarro to update.
     */
    where: caracteristicasadicionalescarroWhereUniqueInput
  }

  /**
   * caracteristicasadicionalescarro updateMany
   */
  export type caracteristicasadicionalescarroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caracteristicasadicionalescarros.
     */
    data: XOR<caracteristicasadicionalescarroUpdateManyMutationInput, caracteristicasadicionalescarroUncheckedUpdateManyInput>
    /**
     * Filter which caracteristicasadicionalescarros to update
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * Limit how many caracteristicasadicionalescarros to update.
     */
    limit?: number
  }

  /**
   * caracteristicasadicionalescarro updateManyAndReturn
   */
  export type caracteristicasadicionalescarroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * The data used to update caracteristicasadicionalescarros.
     */
    data: XOR<caracteristicasadicionalescarroUpdateManyMutationInput, caracteristicasadicionalescarroUncheckedUpdateManyInput>
    /**
     * Filter which caracteristicasadicionalescarros to update
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * Limit how many caracteristicasadicionalescarros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * caracteristicasadicionalescarro upsert
   */
  export type caracteristicasadicionalescarroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * The filter to search for the caracteristicasadicionalescarro to update in case it exists.
     */
    where: caracteristicasadicionalescarroWhereUniqueInput
    /**
     * In case the caracteristicasadicionalescarro found by the `where` argument doesn't exist, create a new caracteristicasadicionalescarro with this data.
     */
    create: XOR<caracteristicasadicionalescarroCreateInput, caracteristicasadicionalescarroUncheckedCreateInput>
    /**
     * In case the caracteristicasadicionalescarro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caracteristicasadicionalescarroUpdateInput, caracteristicasadicionalescarroUncheckedUpdateInput>
  }

  /**
   * caracteristicasadicionalescarro delete
   */
  export type caracteristicasadicionalescarroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    /**
     * Filter which caracteristicasadicionalescarro to delete.
     */
    where: caracteristicasadicionalescarroWhereUniqueInput
  }

  /**
   * caracteristicasadicionalescarro deleteMany
   */
  export type caracteristicasadicionalescarroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caracteristicasadicionalescarros to delete
     */
    where?: caracteristicasadicionalescarroWhereInput
    /**
     * Limit how many caracteristicasadicionalescarros to delete.
     */
    limit?: number
  }

  /**
   * caracteristicasadicionalescarro.caracteristicas_adicionales
   */
  export type caracteristicasadicionalescarro$caracteristicas_adicionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicas_adicionales
     */
    select?: caracteristicas_adicionalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicas_adicionales
     */
    omit?: caracteristicas_adicionalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicas_adicionalesInclude<ExtArgs> | null
    where?: caracteristicas_adicionalesWhereInput
  }

  /**
   * caracteristicasadicionalescarro.carro
   */
  export type caracteristicasadicionalescarro$carroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    where?: carroWhereInput
  }

  /**
   * caracteristicasadicionalescarro without action
   */
  export type caracteristicasadicionalescarroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
  }


  /**
   * Model carro
   */

  export type AggregateCarro = {
    _count: CarroCountAggregateOutputType | null
    _avg: CarroAvgAggregateOutputType | null
    _sum: CarroSumAggregateOutputType | null
    _min: CarroMinAggregateOutputType | null
    _max: CarroMaxAggregateOutputType | null
  }

  export type CarroAvgAggregateOutputType = {
    id: number | null
    anio: number | null
    id_direccion: number | null
    asientos: number | null
    puertas: number | null
    precio_por_dia: Decimal | null
    num_mantenimientos: number | null
    id_usuario_rol: number | null
  }

  export type CarroSumAggregateOutputType = {
    id: number | null
    anio: number | null
    id_direccion: number | null
    asientos: number | null
    puertas: number | null
    precio_por_dia: Decimal | null
    num_mantenimientos: number | null
    id_usuario_rol: number | null
  }

  export type CarroMinAggregateOutputType = {
    id: number | null
    vim: string | null
    anio: number | null
    marca: string | null
    modelo: string | null
    placa: string | null
    id_direccion: number | null
    asientos: number | null
    puertas: number | null
    soat: boolean | null
    precio_por_dia: Decimal | null
    num_mantenimientos: number | null
    transmision: string | null
    estado: string | null
    id_usuario_rol: number | null
  }

  export type CarroMaxAggregateOutputType = {
    id: number | null
    vim: string | null
    anio: number | null
    marca: string | null
    modelo: string | null
    placa: string | null
    id_direccion: number | null
    asientos: number | null
    puertas: number | null
    soat: boolean | null
    precio_por_dia: Decimal | null
    num_mantenimientos: number | null
    transmision: string | null
    estado: string | null
    id_usuario_rol: number | null
  }

  export type CarroCountAggregateOutputType = {
    id: number
    vim: number
    anio: number
    marca: number
    modelo: number
    placa: number
    id_direccion: number
    asientos: number
    puertas: number
    soat: number
    precio_por_dia: number
    num_mantenimientos: number
    transmision: number
    estado: number
    id_usuario_rol: number
    _all: number
  }


  export type CarroAvgAggregateInputType = {
    id?: true
    anio?: true
    id_direccion?: true
    asientos?: true
    puertas?: true
    precio_por_dia?: true
    num_mantenimientos?: true
    id_usuario_rol?: true
  }

  export type CarroSumAggregateInputType = {
    id?: true
    anio?: true
    id_direccion?: true
    asientos?: true
    puertas?: true
    precio_por_dia?: true
    num_mantenimientos?: true
    id_usuario_rol?: true
  }

  export type CarroMinAggregateInputType = {
    id?: true
    vim?: true
    anio?: true
    marca?: true
    modelo?: true
    placa?: true
    id_direccion?: true
    asientos?: true
    puertas?: true
    soat?: true
    precio_por_dia?: true
    num_mantenimientos?: true
    transmision?: true
    estado?: true
    id_usuario_rol?: true
  }

  export type CarroMaxAggregateInputType = {
    id?: true
    vim?: true
    anio?: true
    marca?: true
    modelo?: true
    placa?: true
    id_direccion?: true
    asientos?: true
    puertas?: true
    soat?: true
    precio_por_dia?: true
    num_mantenimientos?: true
    transmision?: true
    estado?: true
    id_usuario_rol?: true
  }

  export type CarroCountAggregateInputType = {
    id?: true
    vim?: true
    anio?: true
    marca?: true
    modelo?: true
    placa?: true
    id_direccion?: true
    asientos?: true
    puertas?: true
    soat?: true
    precio_por_dia?: true
    num_mantenimientos?: true
    transmision?: true
    estado?: true
    id_usuario_rol?: true
    _all?: true
  }

  export type CarroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carro to aggregate.
     */
    where?: carroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carros
    **/
    _count?: true | CarroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarroMaxAggregateInputType
  }

  export type GetCarroAggregateType<T extends CarroAggregateArgs> = {
        [P in keyof T & keyof AggregateCarro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarro[P]>
      : GetScalarType<T[P], AggregateCarro[P]>
  }




  export type carroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carroWhereInput
    orderBy?: carroOrderByWithAggregationInput | carroOrderByWithAggregationInput[]
    by: CarroScalarFieldEnum[] | CarroScalarFieldEnum
    having?: carroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarroCountAggregateInputType | true
    _avg?: CarroAvgAggregateInputType
    _sum?: CarroSumAggregateInputType
    _min?: CarroMinAggregateInputType
    _max?: CarroMaxAggregateInputType
  }

  export type CarroGroupByOutputType = {
    id: number
    vim: string
    anio: number | null
    marca: string | null
    modelo: string | null
    placa: string
    id_direccion: number | null
    asientos: number | null
    puertas: number | null
    soat: boolean | null
    precio_por_dia: Decimal | null
    num_mantenimientos: number | null
    transmision: string | null
    estado: string | null
    id_usuario_rol: number | null
    _count: CarroCountAggregateOutputType | null
    _avg: CarroAvgAggregateOutputType | null
    _sum: CarroSumAggregateOutputType | null
    _min: CarroMinAggregateOutputType | null
    _max: CarroMaxAggregateOutputType | null
  }

  type GetCarroGroupByPayload<T extends carroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarroGroupByOutputType[P]>
            : GetScalarType<T[P], CarroGroupByOutputType[P]>
        }
      >
    >


  export type carroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vim?: boolean
    anio?: boolean
    marca?: boolean
    modelo?: boolean
    placa?: boolean
    id_direccion?: boolean
    asientos?: boolean
    puertas?: boolean
    soat?: boolean
    precio_por_dia?: boolean
    num_mantenimientos?: boolean
    transmision?: boolean
    estado?: boolean
    id_usuario_rol?: boolean
    caracteristicasadicionalescarro?: boolean | carro$caracteristicasadicionalescarroArgs<ExtArgs>
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
    combustiblecarro?: boolean | carro$combustiblecarroArgs<ExtArgs>
    imagen?: boolean | carro$imagenArgs<ExtArgs>
    _count?: boolean | CarroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type carroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vim?: boolean
    anio?: boolean
    marca?: boolean
    modelo?: boolean
    placa?: boolean
    id_direccion?: boolean
    asientos?: boolean
    puertas?: boolean
    soat?: boolean
    precio_por_dia?: boolean
    num_mantenimientos?: boolean
    transmision?: boolean
    estado?: boolean
    id_usuario_rol?: boolean
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type carroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vim?: boolean
    anio?: boolean
    marca?: boolean
    modelo?: boolean
    placa?: boolean
    id_direccion?: boolean
    asientos?: boolean
    puertas?: boolean
    soat?: boolean
    precio_por_dia?: boolean
    num_mantenimientos?: boolean
    transmision?: boolean
    estado?: boolean
    id_usuario_rol?: boolean
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
  }, ExtArgs["result"]["carro"]>

  export type carroSelectScalar = {
    id?: boolean
    vim?: boolean
    anio?: boolean
    marca?: boolean
    modelo?: boolean
    placa?: boolean
    id_direccion?: boolean
    asientos?: boolean
    puertas?: boolean
    soat?: boolean
    precio_por_dia?: boolean
    num_mantenimientos?: boolean
    transmision?: boolean
    estado?: boolean
    id_usuario_rol?: boolean
  }

  export type carroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vim" | "anio" | "marca" | "modelo" | "placa" | "id_direccion" | "asientos" | "puertas" | "soat" | "precio_por_dia" | "num_mantenimientos" | "transmision" | "estado" | "id_usuario_rol", ExtArgs["result"]["carro"]>
  export type carroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caracteristicasadicionalescarro?: boolean | carro$caracteristicasadicionalescarroArgs<ExtArgs>
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
    combustiblecarro?: boolean | carro$combustiblecarroArgs<ExtArgs>
    imagen?: boolean | carro$imagenArgs<ExtArgs>
    _count?: boolean | CarroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type carroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
  }
  export type carroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | carro$direccionArgs<ExtArgs>
    usuario_rol?: boolean | carro$usuario_rolArgs<ExtArgs>
  }

  export type $carroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carro"
    objects: {
      caracteristicasadicionalescarro: Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>[]
      direccion: Prisma.$direccionPayload<ExtArgs> | null
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs> | null
      combustiblecarro: Prisma.$combustiblecarroPayload<ExtArgs>[]
      imagen: Prisma.$imagenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vim: string
      anio: number | null
      marca: string | null
      modelo: string | null
      placa: string
      id_direccion: number | null
      asientos: number | null
      puertas: number | null
      soat: boolean | null
      precio_por_dia: Prisma.Decimal | null
      num_mantenimientos: number | null
      transmision: string | null
      estado: string | null
      id_usuario_rol: number | null
    }, ExtArgs["result"]["carro"]>
    composites: {}
  }

  type carroGetPayload<S extends boolean | null | undefined | carroDefaultArgs> = $Result.GetResult<Prisma.$carroPayload, S>

  type carroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarroCountAggregateInputType | true
    }

  export interface carroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carro'], meta: { name: 'carro' } }
    /**
     * Find zero or one Carro that matches the filter.
     * @param {carroFindUniqueArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carroFindUniqueArgs>(args: SelectSubset<T, carroFindUniqueArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carroFindUniqueOrThrowArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carroFindUniqueOrThrowArgs>(args: SelectSubset<T, carroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroFindFirstArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carroFindFirstArgs>(args?: SelectSubset<T, carroFindFirstArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroFindFirstOrThrowArgs} args - Arguments to find a Carro
     * @example
     * // Get one Carro
     * const carro = await prisma.carro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carroFindFirstOrThrowArgs>(args?: SelectSubset<T, carroFindFirstOrThrowArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carros
     * const carros = await prisma.carro.findMany()
     * 
     * // Get first 10 Carros
     * const carros = await prisma.carro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carroWithIdOnly = await prisma.carro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carroFindManyArgs>(args?: SelectSubset<T, carroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carro.
     * @param {carroCreateArgs} args - Arguments to create a Carro.
     * @example
     * // Create one Carro
     * const Carro = await prisma.carro.create({
     *   data: {
     *     // ... data to create a Carro
     *   }
     * })
     * 
     */
    create<T extends carroCreateArgs>(args: SelectSubset<T, carroCreateArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carros.
     * @param {carroCreateManyArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carro = await prisma.carro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carroCreateManyArgs>(args?: SelectSubset<T, carroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carros and returns the data saved in the database.
     * @param {carroCreateManyAndReturnArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carro = await prisma.carro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carros and only return the `id`
     * const carroWithIdOnly = await prisma.carro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carroCreateManyAndReturnArgs>(args?: SelectSubset<T, carroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carro.
     * @param {carroDeleteArgs} args - Arguments to delete one Carro.
     * @example
     * // Delete one Carro
     * const Carro = await prisma.carro.delete({
     *   where: {
     *     // ... filter to delete one Carro
     *   }
     * })
     * 
     */
    delete<T extends carroDeleteArgs>(args: SelectSubset<T, carroDeleteArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carro.
     * @param {carroUpdateArgs} args - Arguments to update one Carro.
     * @example
     * // Update one Carro
     * const carro = await prisma.carro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carroUpdateArgs>(args: SelectSubset<T, carroUpdateArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carros.
     * @param {carroDeleteManyArgs} args - Arguments to filter Carros to delete.
     * @example
     * // Delete a few Carros
     * const { count } = await prisma.carro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carroDeleteManyArgs>(args?: SelectSubset<T, carroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carros
     * const carro = await prisma.carro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carroUpdateManyArgs>(args: SelectSubset<T, carroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros and returns the data updated in the database.
     * @param {carroUpdateManyAndReturnArgs} args - Arguments to update many Carros.
     * @example
     * // Update many Carros
     * const carro = await prisma.carro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carros and only return the `id`
     * const carroWithIdOnly = await prisma.carro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carroUpdateManyAndReturnArgs>(args: SelectSubset<T, carroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carro.
     * @param {carroUpsertArgs} args - Arguments to update or create a Carro.
     * @example
     * // Update or create a Carro
     * const carro = await prisma.carro.upsert({
     *   create: {
     *     // ... data to create a Carro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carro we want to update
     *   }
     * })
     */
    upsert<T extends carroUpsertArgs>(args: SelectSubset<T, carroUpsertArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroCountArgs} args - Arguments to filter Carros to count.
     * @example
     * // Count the number of Carros
     * const count = await prisma.carro.count({
     *   where: {
     *     // ... the filter for the Carros we want to count
     *   }
     * })
    **/
    count<T extends carroCountArgs>(
      args?: Subset<T, carroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarroAggregateArgs>(args: Subset<T, CarroAggregateArgs>): Prisma.PrismaPromise<GetCarroAggregateType<T>>

    /**
     * Group by Carro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carroGroupByArgs['orderBy'] }
        : { orderBy?: carroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carro model
   */
  readonly fields: carroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caracteristicasadicionalescarro<T extends carro$caracteristicasadicionalescarroArgs<ExtArgs> = {}>(args?: Subset<T, carro$caracteristicasadicionalescarroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caracteristicasadicionalescarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    direccion<T extends carro$direccionArgs<ExtArgs> = {}>(args?: Subset<T, carro$direccionArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario_rol<T extends carro$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, carro$usuario_rolArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    combustiblecarro<T extends carro$combustiblecarroArgs<ExtArgs> = {}>(args?: Subset<T, carro$combustiblecarroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagen<T extends carro$imagenArgs<ExtArgs> = {}>(args?: Subset<T, carro$imagenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carro model
   */
  interface carroFieldRefs {
    readonly id: FieldRef<"carro", 'Int'>
    readonly vim: FieldRef<"carro", 'String'>
    readonly anio: FieldRef<"carro", 'Int'>
    readonly marca: FieldRef<"carro", 'String'>
    readonly modelo: FieldRef<"carro", 'String'>
    readonly placa: FieldRef<"carro", 'String'>
    readonly id_direccion: FieldRef<"carro", 'Int'>
    readonly asientos: FieldRef<"carro", 'Int'>
    readonly puertas: FieldRef<"carro", 'Int'>
    readonly soat: FieldRef<"carro", 'Boolean'>
    readonly precio_por_dia: FieldRef<"carro", 'Decimal'>
    readonly num_mantenimientos: FieldRef<"carro", 'Int'>
    readonly transmision: FieldRef<"carro", 'String'>
    readonly estado: FieldRef<"carro", 'String'>
    readonly id_usuario_rol: FieldRef<"carro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carro findUnique
   */
  export type carroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter, which carro to fetch.
     */
    where: carroWhereUniqueInput
  }

  /**
   * carro findUniqueOrThrow
   */
  export type carroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter, which carro to fetch.
     */
    where: carroWhereUniqueInput
  }

  /**
   * carro findFirst
   */
  export type carroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter, which carro to fetch.
     */
    where?: carroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * carro findFirstOrThrow
   */
  export type carroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter, which carro to fetch.
     */
    where?: carroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * carro findMany
   */
  export type carroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carros.
     */
    cursor?: carroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * carro create
   */
  export type carroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * The data needed to create a carro.
     */
    data: XOR<carroCreateInput, carroUncheckedCreateInput>
  }

  /**
   * carro createMany
   */
  export type carroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carros.
     */
    data: carroCreateManyInput | carroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carro createManyAndReturn
   */
  export type carroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * The data used to create many carros.
     */
    data: carroCreateManyInput | carroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carro update
   */
  export type carroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * The data needed to update a carro.
     */
    data: XOR<carroUpdateInput, carroUncheckedUpdateInput>
    /**
     * Choose, which carro to update.
     */
    where: carroWhereUniqueInput
  }

  /**
   * carro updateMany
   */
  export type carroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carros.
     */
    data: XOR<carroUpdateManyMutationInput, carroUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carroWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
  }

  /**
   * carro updateManyAndReturn
   */
  export type carroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * The data used to update carros.
     */
    data: XOR<carroUpdateManyMutationInput, carroUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carroWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carro upsert
   */
  export type carroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * The filter to search for the carro to update in case it exists.
     */
    where: carroWhereUniqueInput
    /**
     * In case the carro found by the `where` argument doesn't exist, create a new carro with this data.
     */
    create: XOR<carroCreateInput, carroUncheckedCreateInput>
    /**
     * In case the carro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carroUpdateInput, carroUncheckedUpdateInput>
  }

  /**
   * carro delete
   */
  export type carroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    /**
     * Filter which carro to delete.
     */
    where: carroWhereUniqueInput
  }

  /**
   * carro deleteMany
   */
  export type carroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carros to delete
     */
    where?: carroWhereInput
    /**
     * Limit how many carros to delete.
     */
    limit?: number
  }

  /**
   * carro.caracteristicasadicionalescarro
   */
  export type carro$caracteristicasadicionalescarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caracteristicasadicionalescarro
     */
    select?: caracteristicasadicionalescarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caracteristicasadicionalescarro
     */
    omit?: caracteristicasadicionalescarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caracteristicasadicionalescarroInclude<ExtArgs> | null
    where?: caracteristicasadicionalescarroWhereInput
    orderBy?: caracteristicasadicionalescarroOrderByWithRelationInput | caracteristicasadicionalescarroOrderByWithRelationInput[]
    cursor?: caracteristicasadicionalescarroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaracteristicasadicionalescarroScalarFieldEnum | CaracteristicasadicionalescarroScalarFieldEnum[]
  }

  /**
   * carro.direccion
   */
  export type carro$direccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    where?: direccionWhereInput
  }

  /**
   * carro.usuario_rol
   */
  export type carro$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
  }

  /**
   * carro.combustiblecarro
   */
  export type carro$combustiblecarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    where?: combustiblecarroWhereInput
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    cursor?: combustiblecarroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombustiblecarroScalarFieldEnum | CombustiblecarroScalarFieldEnum[]
  }

  /**
   * carro.imagen
   */
  export type carro$imagenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    where?: imagenWhereInput
    orderBy?: imagenOrderByWithRelationInput | imagenOrderByWithRelationInput[]
    cursor?: imagenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * carro without action
   */
  export type carroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
  }


  /**
   * Model ciudad
   */

  export type AggregateCiudad = {
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  export type CiudadAvgAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type CiudadSumAggregateOutputType = {
    id: number | null
    id_pais: number | null
  }

  export type CiudadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_pais: number | null
  }

  export type CiudadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_pais: number | null
  }

  export type CiudadCountAggregateOutputType = {
    id: number
    nombre: number
    id_pais: number
    _all: number
  }


  export type CiudadAvgAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type CiudadSumAggregateInputType = {
    id?: true
    id_pais?: true
  }

  export type CiudadMinAggregateInputType = {
    id?: true
    nombre?: true
    id_pais?: true
  }

  export type CiudadMaxAggregateInputType = {
    id?: true
    nombre?: true
    id_pais?: true
  }

  export type CiudadCountAggregateInputType = {
    id?: true
    nombre?: true
    id_pais?: true
    _all?: true
  }

  export type CiudadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ciudad to aggregate.
     */
    where?: ciudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ciudads to fetch.
     */
    orderBy?: ciudadOrderByWithRelationInput | ciudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ciudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ciudads
    **/
    _count?: true | CiudadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiudadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiudadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadMaxAggregateInputType
  }

  export type GetCiudadAggregateType<T extends CiudadAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudad[P]>
      : GetScalarType<T[P], AggregateCiudad[P]>
  }




  export type ciudadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ciudadWhereInput
    orderBy?: ciudadOrderByWithAggregationInput | ciudadOrderByWithAggregationInput[]
    by: CiudadScalarFieldEnum[] | CiudadScalarFieldEnum
    having?: ciudadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadCountAggregateInputType | true
    _avg?: CiudadAvgAggregateInputType
    _sum?: CiudadSumAggregateInputType
    _min?: CiudadMinAggregateInputType
    _max?: CiudadMaxAggregateInputType
  }

  export type CiudadGroupByOutputType = {
    id: number
    nombre: string
    id_pais: number | null
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  type GetCiudadGroupByPayload<T extends ciudadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadGroupByOutputType[P]>
        }
      >
    >


  export type ciudadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | ciudad$paisArgs<ExtArgs>
    provincia?: boolean | ciudad$provinciaArgs<ExtArgs>
    usuario?: boolean | ciudad$usuarioArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type ciudadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | ciudad$paisArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type ciudadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | ciudad$paisArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type ciudadSelectScalar = {
    id?: boolean
    nombre?: boolean
    id_pais?: boolean
  }

  export type ciudadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "id_pais", ExtArgs["result"]["ciudad"]>
  export type ciudadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | ciudad$paisArgs<ExtArgs>
    provincia?: boolean | ciudad$provinciaArgs<ExtArgs>
    usuario?: boolean | ciudad$usuarioArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ciudadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | ciudad$paisArgs<ExtArgs>
  }
  export type ciudadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | ciudad$paisArgs<ExtArgs>
  }

  export type $ciudadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ciudad"
    objects: {
      pais: Prisma.$paisPayload<ExtArgs> | null
      provincia: Prisma.$provinciaPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      id_pais: number | null
    }, ExtArgs["result"]["ciudad"]>
    composites: {}
  }

  type ciudadGetPayload<S extends boolean | null | undefined | ciudadDefaultArgs> = $Result.GetResult<Prisma.$ciudadPayload, S>

  type ciudadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ciudadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadCountAggregateInputType | true
    }

  export interface ciudadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ciudad'], meta: { name: 'ciudad' } }
    /**
     * Find zero or one Ciudad that matches the filter.
     * @param {ciudadFindUniqueArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ciudadFindUniqueArgs>(args: SelectSubset<T, ciudadFindUniqueArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ciudadFindUniqueOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ciudadFindUniqueOrThrowArgs>(args: SelectSubset<T, ciudadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadFindFirstArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ciudadFindFirstArgs>(args?: SelectSubset<T, ciudadFindFirstArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadFindFirstOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ciudadFindFirstOrThrowArgs>(args?: SelectSubset<T, ciudadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudads
     * const ciudads = await prisma.ciudad.findMany()
     * 
     * // Get first 10 Ciudads
     * const ciudads = await prisma.ciudad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ciudadFindManyArgs>(args?: SelectSubset<T, ciudadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudad.
     * @param {ciudadCreateArgs} args - Arguments to create a Ciudad.
     * @example
     * // Create one Ciudad
     * const Ciudad = await prisma.ciudad.create({
     *   data: {
     *     // ... data to create a Ciudad
     *   }
     * })
     * 
     */
    create<T extends ciudadCreateArgs>(args: SelectSubset<T, ciudadCreateArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudads.
     * @param {ciudadCreateManyArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ciudadCreateManyArgs>(args?: SelectSubset<T, ciudadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciudads and returns the data saved in the database.
     * @param {ciudadCreateManyAndReturnArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ciudadCreateManyAndReturnArgs>(args?: SelectSubset<T, ciudadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciudad.
     * @param {ciudadDeleteArgs} args - Arguments to delete one Ciudad.
     * @example
     * // Delete one Ciudad
     * const Ciudad = await prisma.ciudad.delete({
     *   where: {
     *     // ... filter to delete one Ciudad
     *   }
     * })
     * 
     */
    delete<T extends ciudadDeleteArgs>(args: SelectSubset<T, ciudadDeleteArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudad.
     * @param {ciudadUpdateArgs} args - Arguments to update one Ciudad.
     * @example
     * // Update one Ciudad
     * const ciudad = await prisma.ciudad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ciudadUpdateArgs>(args: SelectSubset<T, ciudadUpdateArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudads.
     * @param {ciudadDeleteManyArgs} args - Arguments to filter Ciudads to delete.
     * @example
     * // Delete a few Ciudads
     * const { count } = await prisma.ciudad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ciudadDeleteManyArgs>(args?: SelectSubset<T, ciudadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ciudadUpdateManyArgs>(args: SelectSubset<T, ciudadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads and returns the data updated in the database.
     * @param {ciudadUpdateManyAndReturnArgs} args - Arguments to update many Ciudads.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ciudadUpdateManyAndReturnArgs>(args: SelectSubset<T, ciudadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciudad.
     * @param {ciudadUpsertArgs} args - Arguments to update or create a Ciudad.
     * @example
     * // Update or create a Ciudad
     * const ciudad = await prisma.ciudad.upsert({
     *   create: {
     *     // ... data to create a Ciudad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudad we want to update
     *   }
     * })
     */
    upsert<T extends ciudadUpsertArgs>(args: SelectSubset<T, ciudadUpsertArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadCountArgs} args - Arguments to filter Ciudads to count.
     * @example
     * // Count the number of Ciudads
     * const count = await prisma.ciudad.count({
     *   where: {
     *     // ... the filter for the Ciudads we want to count
     *   }
     * })
    **/
    count<T extends ciudadCountArgs>(
      args?: Subset<T, ciudadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CiudadAggregateArgs>(args: Subset<T, CiudadAggregateArgs>): Prisma.PrismaPromise<GetCiudadAggregateType<T>>

    /**
     * Group by Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ciudadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ciudadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ciudadGroupByArgs['orderBy'] }
        : { orderBy?: ciudadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ciudadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ciudad model
   */
  readonly fields: ciudadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ciudad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ciudadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends ciudad$paisArgs<ExtArgs> = {}>(args?: Subset<T, ciudad$paisArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provincia<T extends ciudad$provinciaArgs<ExtArgs> = {}>(args?: Subset<T, ciudad$provinciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends ciudad$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, ciudad$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ciudad model
   */
  interface ciudadFieldRefs {
    readonly id: FieldRef<"ciudad", 'Int'>
    readonly nombre: FieldRef<"ciudad", 'String'>
    readonly id_pais: FieldRef<"ciudad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ciudad findUnique
   */
  export type ciudadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter, which ciudad to fetch.
     */
    where: ciudadWhereUniqueInput
  }

  /**
   * ciudad findUniqueOrThrow
   */
  export type ciudadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter, which ciudad to fetch.
     */
    where: ciudadWhereUniqueInput
  }

  /**
   * ciudad findFirst
   */
  export type ciudadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter, which ciudad to fetch.
     */
    where?: ciudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ciudads to fetch.
     */
    orderBy?: ciudadOrderByWithRelationInput | ciudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ciudads.
     */
    cursor?: ciudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * ciudad findFirstOrThrow
   */
  export type ciudadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter, which ciudad to fetch.
     */
    where?: ciudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ciudads to fetch.
     */
    orderBy?: ciudadOrderByWithRelationInput | ciudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ciudads.
     */
    cursor?: ciudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * ciudad findMany
   */
  export type ciudadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter, which ciudads to fetch.
     */
    where?: ciudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ciudads to fetch.
     */
    orderBy?: ciudadOrderByWithRelationInput | ciudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ciudads.
     */
    cursor?: ciudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ciudads.
     */
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * ciudad create
   */
  export type ciudadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * The data needed to create a ciudad.
     */
    data: XOR<ciudadCreateInput, ciudadUncheckedCreateInput>
  }

  /**
   * ciudad createMany
   */
  export type ciudadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ciudads.
     */
    data: ciudadCreateManyInput | ciudadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ciudad createManyAndReturn
   */
  export type ciudadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * The data used to create many ciudads.
     */
    data: ciudadCreateManyInput | ciudadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ciudad update
   */
  export type ciudadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * The data needed to update a ciudad.
     */
    data: XOR<ciudadUpdateInput, ciudadUncheckedUpdateInput>
    /**
     * Choose, which ciudad to update.
     */
    where: ciudadWhereUniqueInput
  }

  /**
   * ciudad updateMany
   */
  export type ciudadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ciudads.
     */
    data: XOR<ciudadUpdateManyMutationInput, ciudadUncheckedUpdateManyInput>
    /**
     * Filter which ciudads to update
     */
    where?: ciudadWhereInput
    /**
     * Limit how many ciudads to update.
     */
    limit?: number
  }

  /**
   * ciudad updateManyAndReturn
   */
  export type ciudadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * The data used to update ciudads.
     */
    data: XOR<ciudadUpdateManyMutationInput, ciudadUncheckedUpdateManyInput>
    /**
     * Filter which ciudads to update
     */
    where?: ciudadWhereInput
    /**
     * Limit how many ciudads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ciudad upsert
   */
  export type ciudadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * The filter to search for the ciudad to update in case it exists.
     */
    where: ciudadWhereUniqueInput
    /**
     * In case the ciudad found by the `where` argument doesn't exist, create a new ciudad with this data.
     */
    create: XOR<ciudadCreateInput, ciudadUncheckedCreateInput>
    /**
     * In case the ciudad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ciudadUpdateInput, ciudadUncheckedUpdateInput>
  }

  /**
   * ciudad delete
   */
  export type ciudadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    /**
     * Filter which ciudad to delete.
     */
    where: ciudadWhereUniqueInput
  }

  /**
   * ciudad deleteMany
   */
  export type ciudadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ciudads to delete
     */
    where?: ciudadWhereInput
    /**
     * Limit how many ciudads to delete.
     */
    limit?: number
  }

  /**
   * ciudad.pais
   */
  export type ciudad$paisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    where?: paisWhereInput
  }

  /**
   * ciudad.provincia
   */
  export type ciudad$provinciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    where?: provinciaWhereInput
    orderBy?: provinciaOrderByWithRelationInput | provinciaOrderByWithRelationInput[]
    cursor?: provinciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * ciudad.usuario
   */
  export type ciudad$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * ciudad without action
   */
  export type ciudadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
  }


  /**
   * Model combustiblecarro
   */

  export type AggregateCombustiblecarro = {
    _count: CombustiblecarroCountAggregateOutputType | null
    _avg: CombustiblecarroAvgAggregateOutputType | null
    _sum: CombustiblecarroSumAggregateOutputType | null
    _min: CombustiblecarroMinAggregateOutputType | null
    _max: CombustiblecarroMaxAggregateOutputType | null
  }

  export type CombustiblecarroAvgAggregateOutputType = {
    id: number | null
    id_tipo_combustible: number | null
    id_carro: number | null
  }

  export type CombustiblecarroSumAggregateOutputType = {
    id: number | null
    id_tipo_combustible: number | null
    id_carro: number | null
  }

  export type CombustiblecarroMinAggregateOutputType = {
    id: number | null
    id_tipo_combustible: number | null
    id_carro: number | null
  }

  export type CombustiblecarroMaxAggregateOutputType = {
    id: number | null
    id_tipo_combustible: number | null
    id_carro: number | null
  }

  export type CombustiblecarroCountAggregateOutputType = {
    id: number
    id_tipo_combustible: number
    id_carro: number
    _all: number
  }


  export type CombustiblecarroAvgAggregateInputType = {
    id?: true
    id_tipo_combustible?: true
    id_carro?: true
  }

  export type CombustiblecarroSumAggregateInputType = {
    id?: true
    id_tipo_combustible?: true
    id_carro?: true
  }

  export type CombustiblecarroMinAggregateInputType = {
    id?: true
    id_tipo_combustible?: true
    id_carro?: true
  }

  export type CombustiblecarroMaxAggregateInputType = {
    id?: true
    id_tipo_combustible?: true
    id_carro?: true
  }

  export type CombustiblecarroCountAggregateInputType = {
    id?: true
    id_tipo_combustible?: true
    id_carro?: true
    _all?: true
  }

  export type CombustiblecarroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which combustiblecarro to aggregate.
     */
    where?: combustiblecarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combustiblecarros to fetch.
     */
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: combustiblecarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combustiblecarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combustiblecarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned combustiblecarros
    **/
    _count?: true | CombustiblecarroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CombustiblecarroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CombustiblecarroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CombustiblecarroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CombustiblecarroMaxAggregateInputType
  }

  export type GetCombustiblecarroAggregateType<T extends CombustiblecarroAggregateArgs> = {
        [P in keyof T & keyof AggregateCombustiblecarro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombustiblecarro[P]>
      : GetScalarType<T[P], AggregateCombustiblecarro[P]>
  }




  export type combustiblecarroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: combustiblecarroWhereInput
    orderBy?: combustiblecarroOrderByWithAggregationInput | combustiblecarroOrderByWithAggregationInput[]
    by: CombustiblecarroScalarFieldEnum[] | CombustiblecarroScalarFieldEnum
    having?: combustiblecarroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CombustiblecarroCountAggregateInputType | true
    _avg?: CombustiblecarroAvgAggregateInputType
    _sum?: CombustiblecarroSumAggregateInputType
    _min?: CombustiblecarroMinAggregateInputType
    _max?: CombustiblecarroMaxAggregateInputType
  }

  export type CombustiblecarroGroupByOutputType = {
    id: number
    id_tipo_combustible: number | null
    id_carro: number | null
    _count: CombustiblecarroCountAggregateOutputType | null
    _avg: CombustiblecarroAvgAggregateOutputType | null
    _sum: CombustiblecarroSumAggregateOutputType | null
    _min: CombustiblecarroMinAggregateOutputType | null
    _max: CombustiblecarroMaxAggregateOutputType | null
  }

  type GetCombustiblecarroGroupByPayload<T extends combustiblecarroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CombustiblecarroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CombustiblecarroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CombustiblecarroGroupByOutputType[P]>
            : GetScalarType<T[P], CombustiblecarroGroupByOutputType[P]>
        }
      >
    >


  export type combustiblecarroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_tipo_combustible?: boolean
    id_carro?: boolean
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }, ExtArgs["result"]["combustiblecarro"]>

  export type combustiblecarroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_tipo_combustible?: boolean
    id_carro?: boolean
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }, ExtArgs["result"]["combustiblecarro"]>

  export type combustiblecarroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_tipo_combustible?: boolean
    id_carro?: boolean
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }, ExtArgs["result"]["combustiblecarro"]>

  export type combustiblecarroSelectScalar = {
    id?: boolean
    id_tipo_combustible?: boolean
    id_carro?: boolean
  }

  export type combustiblecarroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_tipo_combustible" | "id_carro", ExtArgs["result"]["combustiblecarro"]>
  export type combustiblecarroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }
  export type combustiblecarroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }
  export type combustiblecarroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | combustiblecarro$carroArgs<ExtArgs>
    tipocombustible?: boolean | combustiblecarro$tipocombustibleArgs<ExtArgs>
  }

  export type $combustiblecarroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "combustiblecarro"
    objects: {
      carro: Prisma.$carroPayload<ExtArgs> | null
      tipocombustible: Prisma.$tipocombustiblePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_tipo_combustible: number | null
      id_carro: number | null
    }, ExtArgs["result"]["combustiblecarro"]>
    composites: {}
  }

  type combustiblecarroGetPayload<S extends boolean | null | undefined | combustiblecarroDefaultArgs> = $Result.GetResult<Prisma.$combustiblecarroPayload, S>

  type combustiblecarroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<combustiblecarroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CombustiblecarroCountAggregateInputType | true
    }

  export interface combustiblecarroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['combustiblecarro'], meta: { name: 'combustiblecarro' } }
    /**
     * Find zero or one Combustiblecarro that matches the filter.
     * @param {combustiblecarroFindUniqueArgs} args - Arguments to find a Combustiblecarro
     * @example
     * // Get one Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends combustiblecarroFindUniqueArgs>(args: SelectSubset<T, combustiblecarroFindUniqueArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combustiblecarro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {combustiblecarroFindUniqueOrThrowArgs} args - Arguments to find a Combustiblecarro
     * @example
     * // Get one Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends combustiblecarroFindUniqueOrThrowArgs>(args: SelectSubset<T, combustiblecarroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combustiblecarro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroFindFirstArgs} args - Arguments to find a Combustiblecarro
     * @example
     * // Get one Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends combustiblecarroFindFirstArgs>(args?: SelectSubset<T, combustiblecarroFindFirstArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combustiblecarro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroFindFirstOrThrowArgs} args - Arguments to find a Combustiblecarro
     * @example
     * // Get one Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends combustiblecarroFindFirstOrThrowArgs>(args?: SelectSubset<T, combustiblecarroFindFirstOrThrowArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combustiblecarros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combustiblecarros
     * const combustiblecarros = await prisma.combustiblecarro.findMany()
     * 
     * // Get first 10 Combustiblecarros
     * const combustiblecarros = await prisma.combustiblecarro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const combustiblecarroWithIdOnly = await prisma.combustiblecarro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends combustiblecarroFindManyArgs>(args?: SelectSubset<T, combustiblecarroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combustiblecarro.
     * @param {combustiblecarroCreateArgs} args - Arguments to create a Combustiblecarro.
     * @example
     * // Create one Combustiblecarro
     * const Combustiblecarro = await prisma.combustiblecarro.create({
     *   data: {
     *     // ... data to create a Combustiblecarro
     *   }
     * })
     * 
     */
    create<T extends combustiblecarroCreateArgs>(args: SelectSubset<T, combustiblecarroCreateArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combustiblecarros.
     * @param {combustiblecarroCreateManyArgs} args - Arguments to create many Combustiblecarros.
     * @example
     * // Create many Combustiblecarros
     * const combustiblecarro = await prisma.combustiblecarro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends combustiblecarroCreateManyArgs>(args?: SelectSubset<T, combustiblecarroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combustiblecarros and returns the data saved in the database.
     * @param {combustiblecarroCreateManyAndReturnArgs} args - Arguments to create many Combustiblecarros.
     * @example
     * // Create many Combustiblecarros
     * const combustiblecarro = await prisma.combustiblecarro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combustiblecarros and only return the `id`
     * const combustiblecarroWithIdOnly = await prisma.combustiblecarro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends combustiblecarroCreateManyAndReturnArgs>(args?: SelectSubset<T, combustiblecarroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combustiblecarro.
     * @param {combustiblecarroDeleteArgs} args - Arguments to delete one Combustiblecarro.
     * @example
     * // Delete one Combustiblecarro
     * const Combustiblecarro = await prisma.combustiblecarro.delete({
     *   where: {
     *     // ... filter to delete one Combustiblecarro
     *   }
     * })
     * 
     */
    delete<T extends combustiblecarroDeleteArgs>(args: SelectSubset<T, combustiblecarroDeleteArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combustiblecarro.
     * @param {combustiblecarroUpdateArgs} args - Arguments to update one Combustiblecarro.
     * @example
     * // Update one Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends combustiblecarroUpdateArgs>(args: SelectSubset<T, combustiblecarroUpdateArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combustiblecarros.
     * @param {combustiblecarroDeleteManyArgs} args - Arguments to filter Combustiblecarros to delete.
     * @example
     * // Delete a few Combustiblecarros
     * const { count } = await prisma.combustiblecarro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends combustiblecarroDeleteManyArgs>(args?: SelectSubset<T, combustiblecarroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combustiblecarros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combustiblecarros
     * const combustiblecarro = await prisma.combustiblecarro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends combustiblecarroUpdateManyArgs>(args: SelectSubset<T, combustiblecarroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combustiblecarros and returns the data updated in the database.
     * @param {combustiblecarroUpdateManyAndReturnArgs} args - Arguments to update many Combustiblecarros.
     * @example
     * // Update many Combustiblecarros
     * const combustiblecarro = await prisma.combustiblecarro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combustiblecarros and only return the `id`
     * const combustiblecarroWithIdOnly = await prisma.combustiblecarro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends combustiblecarroUpdateManyAndReturnArgs>(args: SelectSubset<T, combustiblecarroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combustiblecarro.
     * @param {combustiblecarroUpsertArgs} args - Arguments to update or create a Combustiblecarro.
     * @example
     * // Update or create a Combustiblecarro
     * const combustiblecarro = await prisma.combustiblecarro.upsert({
     *   create: {
     *     // ... data to create a Combustiblecarro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combustiblecarro we want to update
     *   }
     * })
     */
    upsert<T extends combustiblecarroUpsertArgs>(args: SelectSubset<T, combustiblecarroUpsertArgs<ExtArgs>>): Prisma__combustiblecarroClient<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combustiblecarros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroCountArgs} args - Arguments to filter Combustiblecarros to count.
     * @example
     * // Count the number of Combustiblecarros
     * const count = await prisma.combustiblecarro.count({
     *   where: {
     *     // ... the filter for the Combustiblecarros we want to count
     *   }
     * })
    **/
    count<T extends combustiblecarroCountArgs>(
      args?: Subset<T, combustiblecarroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CombustiblecarroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combustiblecarro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiblecarroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CombustiblecarroAggregateArgs>(args: Subset<T, CombustiblecarroAggregateArgs>): Prisma.PrismaPromise<GetCombustiblecarroAggregateType<T>>

    /**
     * Group by Combustiblecarro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {combustiblecarroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends combustiblecarroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: combustiblecarroGroupByArgs['orderBy'] }
        : { orderBy?: combustiblecarroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, combustiblecarroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombustiblecarroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the combustiblecarro model
   */
  readonly fields: combustiblecarroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for combustiblecarro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__combustiblecarroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carro<T extends combustiblecarro$carroArgs<ExtArgs> = {}>(args?: Subset<T, combustiblecarro$carroArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipocombustible<T extends combustiblecarro$tipocombustibleArgs<ExtArgs> = {}>(args?: Subset<T, combustiblecarro$tipocombustibleArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the combustiblecarro model
   */
  interface combustiblecarroFieldRefs {
    readonly id: FieldRef<"combustiblecarro", 'Int'>
    readonly id_tipo_combustible: FieldRef<"combustiblecarro", 'Int'>
    readonly id_carro: FieldRef<"combustiblecarro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * combustiblecarro findUnique
   */
  export type combustiblecarroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter, which combustiblecarro to fetch.
     */
    where: combustiblecarroWhereUniqueInput
  }

  /**
   * combustiblecarro findUniqueOrThrow
   */
  export type combustiblecarroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter, which combustiblecarro to fetch.
     */
    where: combustiblecarroWhereUniqueInput
  }

  /**
   * combustiblecarro findFirst
   */
  export type combustiblecarroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter, which combustiblecarro to fetch.
     */
    where?: combustiblecarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combustiblecarros to fetch.
     */
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for combustiblecarros.
     */
    cursor?: combustiblecarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combustiblecarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combustiblecarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of combustiblecarros.
     */
    distinct?: CombustiblecarroScalarFieldEnum | CombustiblecarroScalarFieldEnum[]
  }

  /**
   * combustiblecarro findFirstOrThrow
   */
  export type combustiblecarroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter, which combustiblecarro to fetch.
     */
    where?: combustiblecarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combustiblecarros to fetch.
     */
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for combustiblecarros.
     */
    cursor?: combustiblecarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combustiblecarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combustiblecarros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of combustiblecarros.
     */
    distinct?: CombustiblecarroScalarFieldEnum | CombustiblecarroScalarFieldEnum[]
  }

  /**
   * combustiblecarro findMany
   */
  export type combustiblecarroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter, which combustiblecarros to fetch.
     */
    where?: combustiblecarroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of combustiblecarros to fetch.
     */
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing combustiblecarros.
     */
    cursor?: combustiblecarroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` combustiblecarros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` combustiblecarros.
     */
    skip?: number
    distinct?: CombustiblecarroScalarFieldEnum | CombustiblecarroScalarFieldEnum[]
  }

  /**
   * combustiblecarro create
   */
  export type combustiblecarroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * The data needed to create a combustiblecarro.
     */
    data?: XOR<combustiblecarroCreateInput, combustiblecarroUncheckedCreateInput>
  }

  /**
   * combustiblecarro createMany
   */
  export type combustiblecarroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many combustiblecarros.
     */
    data: combustiblecarroCreateManyInput | combustiblecarroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * combustiblecarro createManyAndReturn
   */
  export type combustiblecarroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * The data used to create many combustiblecarros.
     */
    data: combustiblecarroCreateManyInput | combustiblecarroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * combustiblecarro update
   */
  export type combustiblecarroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * The data needed to update a combustiblecarro.
     */
    data: XOR<combustiblecarroUpdateInput, combustiblecarroUncheckedUpdateInput>
    /**
     * Choose, which combustiblecarro to update.
     */
    where: combustiblecarroWhereUniqueInput
  }

  /**
   * combustiblecarro updateMany
   */
  export type combustiblecarroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update combustiblecarros.
     */
    data: XOR<combustiblecarroUpdateManyMutationInput, combustiblecarroUncheckedUpdateManyInput>
    /**
     * Filter which combustiblecarros to update
     */
    where?: combustiblecarroWhereInput
    /**
     * Limit how many combustiblecarros to update.
     */
    limit?: number
  }

  /**
   * combustiblecarro updateManyAndReturn
   */
  export type combustiblecarroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * The data used to update combustiblecarros.
     */
    data: XOR<combustiblecarroUpdateManyMutationInput, combustiblecarroUncheckedUpdateManyInput>
    /**
     * Filter which combustiblecarros to update
     */
    where?: combustiblecarroWhereInput
    /**
     * Limit how many combustiblecarros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * combustiblecarro upsert
   */
  export type combustiblecarroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * The filter to search for the combustiblecarro to update in case it exists.
     */
    where: combustiblecarroWhereUniqueInput
    /**
     * In case the combustiblecarro found by the `where` argument doesn't exist, create a new combustiblecarro with this data.
     */
    create: XOR<combustiblecarroCreateInput, combustiblecarroUncheckedCreateInput>
    /**
     * In case the combustiblecarro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<combustiblecarroUpdateInput, combustiblecarroUncheckedUpdateInput>
  }

  /**
   * combustiblecarro delete
   */
  export type combustiblecarroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    /**
     * Filter which combustiblecarro to delete.
     */
    where: combustiblecarroWhereUniqueInput
  }

  /**
   * combustiblecarro deleteMany
   */
  export type combustiblecarroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which combustiblecarros to delete
     */
    where?: combustiblecarroWhereInput
    /**
     * Limit how many combustiblecarros to delete.
     */
    limit?: number
  }

  /**
   * combustiblecarro.carro
   */
  export type combustiblecarro$carroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    where?: carroWhereInput
  }

  /**
   * combustiblecarro.tipocombustible
   */
  export type combustiblecarro$tipocombustibleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    where?: tipocombustibleWhereInput
  }

  /**
   * combustiblecarro without action
   */
  export type combustiblecarroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
  }


  /**
   * Model direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
    id_provincia: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
    id_provincia: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    id_provincia: number | null
    calle: string | null
    zona: string | null
    num_casa: string | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    id_provincia: number | null
    calle: string | null
    zona: string | null
    num_casa: string | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    id_provincia: number
    calle: number
    zona: number
    num_casa: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
    id_provincia?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
    id_provincia?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    id_provincia?: true
    calle?: true
    zona?: true
    num_casa?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    id_provincia?: true
    calle?: true
    zona?: true
    num_casa?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    id_provincia?: true
    calle?: true
    zona?: true
    num_casa?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which direccion to aggregate.
     */
    where?: direccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direccions to fetch.
     */
    orderBy?: direccionOrderByWithRelationInput | direccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: direccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type direccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: direccionWhereInput
    orderBy?: direccionOrderByWithAggregationInput | direccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: direccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    id_provincia: number | null
    calle: string | null
    zona: string | null
    num_casa: string | null
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends direccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type direccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_provincia?: boolean
    calle?: boolean
    zona?: boolean
    num_casa?: boolean
    carro?: boolean | direccion$carroArgs<ExtArgs>
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
    ubicacion?: boolean | direccion$ubicacionArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type direccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_provincia?: boolean
    calle?: boolean
    zona?: boolean
    num_casa?: boolean
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type direccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_provincia?: boolean
    calle?: boolean
    zona?: boolean
    num_casa?: boolean
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type direccionSelectScalar = {
    id?: boolean
    id_provincia?: boolean
    calle?: boolean
    zona?: boolean
    num_casa?: boolean
  }

  export type direccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_provincia" | "calle" | "zona" | "num_casa", ExtArgs["result"]["direccion"]>
  export type direccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | direccion$carroArgs<ExtArgs>
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
    ubicacion?: boolean | direccion$ubicacionArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type direccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
  }
  export type direccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | direccion$provinciaArgs<ExtArgs>
  }

  export type $direccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "direccion"
    objects: {
      carro: Prisma.$carroPayload<ExtArgs>[]
      provincia: Prisma.$provinciaPayload<ExtArgs> | null
      ubicacion: Prisma.$ubicacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_provincia: number | null
      calle: string | null
      zona: string | null
      num_casa: string | null
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type direccionGetPayload<S extends boolean | null | undefined | direccionDefaultArgs> = $Result.GetResult<Prisma.$direccionPayload, S>

  type direccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<direccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface direccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['direccion'], meta: { name: 'direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {direccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends direccionFindUniqueArgs>(args: SelectSubset<T, direccionFindUniqueArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {direccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends direccionFindUniqueOrThrowArgs>(args: SelectSubset<T, direccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends direccionFindFirstArgs>(args?: SelectSubset<T, direccionFindFirstArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends direccionFindFirstOrThrowArgs>(args?: SelectSubset<T, direccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends direccionFindManyArgs>(args?: SelectSubset<T, direccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {direccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends direccionCreateArgs>(args: SelectSubset<T, direccionCreateArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {direccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends direccionCreateManyArgs>(args?: SelectSubset<T, direccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Direccions and returns the data saved in the database.
     * @param {direccionCreateManyAndReturnArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends direccionCreateManyAndReturnArgs>(args?: SelectSubset<T, direccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direccion.
     * @param {direccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends direccionDeleteArgs>(args: SelectSubset<T, direccionDeleteArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {direccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends direccionUpdateArgs>(args: SelectSubset<T, direccionUpdateArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {direccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends direccionDeleteManyArgs>(args?: SelectSubset<T, direccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends direccionUpdateManyArgs>(args: SelectSubset<T, direccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions and returns the data updated in the database.
     * @param {direccionUpdateManyAndReturnArgs} args - Arguments to update many Direccions.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends direccionUpdateManyAndReturnArgs>(args: SelectSubset<T, direccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direccion.
     * @param {direccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends direccionUpsertArgs>(args: SelectSubset<T, direccionUpsertArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends direccionCountArgs>(
      args?: Subset<T, direccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {direccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends direccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: direccionGroupByArgs['orderBy'] }
        : { orderBy?: direccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, direccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the direccion model
   */
  readonly fields: direccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__direccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carro<T extends direccion$carroArgs<ExtArgs> = {}>(args?: Subset<T, direccion$carroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provincia<T extends direccion$provinciaArgs<ExtArgs> = {}>(args?: Subset<T, direccion$provinciaArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ubicacion<T extends direccion$ubicacionArgs<ExtArgs> = {}>(args?: Subset<T, direccion$ubicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the direccion model
   */
  interface direccionFieldRefs {
    readonly id: FieldRef<"direccion", 'Int'>
    readonly id_provincia: FieldRef<"direccion", 'Int'>
    readonly calle: FieldRef<"direccion", 'String'>
    readonly zona: FieldRef<"direccion", 'String'>
    readonly num_casa: FieldRef<"direccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * direccion findUnique
   */
  export type direccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter, which direccion to fetch.
     */
    where: direccionWhereUniqueInput
  }

  /**
   * direccion findUniqueOrThrow
   */
  export type direccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter, which direccion to fetch.
     */
    where: direccionWhereUniqueInput
  }

  /**
   * direccion findFirst
   */
  export type direccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter, which direccion to fetch.
     */
    where?: direccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direccions to fetch.
     */
    orderBy?: direccionOrderByWithRelationInput | direccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for direccions.
     */
    cursor?: direccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * direccion findFirstOrThrow
   */
  export type direccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter, which direccion to fetch.
     */
    where?: direccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direccions to fetch.
     */
    orderBy?: direccionOrderByWithRelationInput | direccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for direccions.
     */
    cursor?: direccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * direccion findMany
   */
  export type direccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter, which direccions to fetch.
     */
    where?: direccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of direccions to fetch.
     */
    orderBy?: direccionOrderByWithRelationInput | direccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing direccions.
     */
    cursor?: direccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * direccion create
   */
  export type direccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * The data needed to create a direccion.
     */
    data?: XOR<direccionCreateInput, direccionUncheckedCreateInput>
  }

  /**
   * direccion createMany
   */
  export type direccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many direccions.
     */
    data: direccionCreateManyInput | direccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * direccion createManyAndReturn
   */
  export type direccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * The data used to create many direccions.
     */
    data: direccionCreateManyInput | direccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * direccion update
   */
  export type direccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * The data needed to update a direccion.
     */
    data: XOR<direccionUpdateInput, direccionUncheckedUpdateInput>
    /**
     * Choose, which direccion to update.
     */
    where: direccionWhereUniqueInput
  }

  /**
   * direccion updateMany
   */
  export type direccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update direccions.
     */
    data: XOR<direccionUpdateManyMutationInput, direccionUncheckedUpdateManyInput>
    /**
     * Filter which direccions to update
     */
    where?: direccionWhereInput
    /**
     * Limit how many direccions to update.
     */
    limit?: number
  }

  /**
   * direccion updateManyAndReturn
   */
  export type direccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * The data used to update direccions.
     */
    data: XOR<direccionUpdateManyMutationInput, direccionUncheckedUpdateManyInput>
    /**
     * Filter which direccions to update
     */
    where?: direccionWhereInput
    /**
     * Limit how many direccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * direccion upsert
   */
  export type direccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * The filter to search for the direccion to update in case it exists.
     */
    where: direccionWhereUniqueInput
    /**
     * In case the direccion found by the `where` argument doesn't exist, create a new direccion with this data.
     */
    create: XOR<direccionCreateInput, direccionUncheckedCreateInput>
    /**
     * In case the direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<direccionUpdateInput, direccionUncheckedUpdateInput>
  }

  /**
   * direccion delete
   */
  export type direccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    /**
     * Filter which direccion to delete.
     */
    where: direccionWhereUniqueInput
  }

  /**
   * direccion deleteMany
   */
  export type direccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which direccions to delete
     */
    where?: direccionWhereInput
    /**
     * Limit how many direccions to delete.
     */
    limit?: number
  }

  /**
   * direccion.carro
   */
  export type direccion$carroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    where?: carroWhereInput
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    cursor?: carroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * direccion.provincia
   */
  export type direccion$provinciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    where?: provinciaWhereInput
  }

  /**
   * direccion.ubicacion
   */
  export type direccion$ubicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    where?: ubicacionWhereInput
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    cursor?: ubicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * direccion without action
   */
  export type direccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
  }


  /**
   * Model imagen
   */

  export type AggregateImagen = {
    _count: ImagenCountAggregateOutputType | null
    _avg: ImagenAvgAggregateOutputType | null
    _sum: ImagenSumAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  export type ImagenAvgAggregateOutputType = {
    id: number | null
    id_carro: number | null
  }

  export type ImagenSumAggregateOutputType = {
    id: number | null
    id_carro: number | null
  }

  export type ImagenMinAggregateOutputType = {
    id: number | null
    data: string | null
    id_carro: number | null
  }

  export type ImagenMaxAggregateOutputType = {
    id: number | null
    data: string | null
    id_carro: number | null
  }

  export type ImagenCountAggregateOutputType = {
    id: number
    data: number
    id_carro: number
    _all: number
  }


  export type ImagenAvgAggregateInputType = {
    id?: true
    id_carro?: true
  }

  export type ImagenSumAggregateInputType = {
    id?: true
    id_carro?: true
  }

  export type ImagenMinAggregateInputType = {
    id?: true
    data?: true
    id_carro?: true
  }

  export type ImagenMaxAggregateInputType = {
    id?: true
    data?: true
    id_carro?: true
  }

  export type ImagenCountAggregateInputType = {
    id?: true
    data?: true
    id_carro?: true
    _all?: true
  }

  export type ImagenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imagen to aggregate.
     */
    where?: imagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens to fetch.
     */
    orderBy?: imagenOrderByWithRelationInput | imagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imagens
    **/
    _count?: true | ImagenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagenMaxAggregateInputType
  }

  export type GetImagenAggregateType<T extends ImagenAggregateArgs> = {
        [P in keyof T & keyof AggregateImagen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagen[P]>
      : GetScalarType<T[P], AggregateImagen[P]>
  }




  export type imagenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagenWhereInput
    orderBy?: imagenOrderByWithAggregationInput | imagenOrderByWithAggregationInput[]
    by: ImagenScalarFieldEnum[] | ImagenScalarFieldEnum
    having?: imagenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagenCountAggregateInputType | true
    _avg?: ImagenAvgAggregateInputType
    _sum?: ImagenSumAggregateInputType
    _min?: ImagenMinAggregateInputType
    _max?: ImagenMaxAggregateInputType
  }

  export type ImagenGroupByOutputType = {
    id: number
    data: string
    id_carro: number | null
    _count: ImagenCountAggregateOutputType | null
    _avg: ImagenAvgAggregateOutputType | null
    _sum: ImagenSumAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  type GetImagenGroupByPayload<T extends imagenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagenGroupByOutputType[P]>
            : GetScalarType<T[P], ImagenGroupByOutputType[P]>
        }
      >
    >


  export type imagenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    id_carro?: boolean
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>

  export type imagenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    id_carro?: boolean
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>

  export type imagenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    id_carro?: boolean
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>

  export type imagenSelectScalar = {
    id?: boolean
    data?: boolean
    id_carro?: boolean
  }

  export type imagenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "id_carro", ExtArgs["result"]["imagen"]>
  export type imagenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }
  export type imagenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }
  export type imagenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | imagen$carroArgs<ExtArgs>
  }

  export type $imagenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imagen"
    objects: {
      carro: Prisma.$carroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: string
      id_carro: number | null
    }, ExtArgs["result"]["imagen"]>
    composites: {}
  }

  type imagenGetPayload<S extends boolean | null | undefined | imagenDefaultArgs> = $Result.GetResult<Prisma.$imagenPayload, S>

  type imagenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imagenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagenCountAggregateInputType | true
    }

  export interface imagenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imagen'], meta: { name: 'imagen' } }
    /**
     * Find zero or one Imagen that matches the filter.
     * @param {imagenFindUniqueArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagenFindUniqueArgs>(args: SelectSubset<T, imagenFindUniqueArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imagenFindUniqueOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagenFindUniqueOrThrowArgs>(args: SelectSubset<T, imagenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenFindFirstArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagenFindFirstArgs>(args?: SelectSubset<T, imagenFindFirstArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenFindFirstOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagenFindFirstOrThrowArgs>(args?: SelectSubset<T, imagenFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagens
     * const imagens = await prisma.imagen.findMany()
     * 
     * // Get first 10 Imagens
     * const imagens = await prisma.imagen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagenWithIdOnly = await prisma.imagen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagenFindManyArgs>(args?: SelectSubset<T, imagenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagen.
     * @param {imagenCreateArgs} args - Arguments to create a Imagen.
     * @example
     * // Create one Imagen
     * const Imagen = await prisma.imagen.create({
     *   data: {
     *     // ... data to create a Imagen
     *   }
     * })
     * 
     */
    create<T extends imagenCreateArgs>(args: SelectSubset<T, imagenCreateArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagens.
     * @param {imagenCreateManyArgs} args - Arguments to create many Imagens.
     * @example
     * // Create many Imagens
     * const imagen = await prisma.imagen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagenCreateManyArgs>(args?: SelectSubset<T, imagenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagens and returns the data saved in the database.
     * @param {imagenCreateManyAndReturnArgs} args - Arguments to create many Imagens.
     * @example
     * // Create many Imagens
     * const imagen = await prisma.imagen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagens and only return the `id`
     * const imagenWithIdOnly = await prisma.imagen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imagenCreateManyAndReturnArgs>(args?: SelectSubset<T, imagenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagen.
     * @param {imagenDeleteArgs} args - Arguments to delete one Imagen.
     * @example
     * // Delete one Imagen
     * const Imagen = await prisma.imagen.delete({
     *   where: {
     *     // ... filter to delete one Imagen
     *   }
     * })
     * 
     */
    delete<T extends imagenDeleteArgs>(args: SelectSubset<T, imagenDeleteArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagen.
     * @param {imagenUpdateArgs} args - Arguments to update one Imagen.
     * @example
     * // Update one Imagen
     * const imagen = await prisma.imagen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagenUpdateArgs>(args: SelectSubset<T, imagenUpdateArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagens.
     * @param {imagenDeleteManyArgs} args - Arguments to filter Imagens to delete.
     * @example
     * // Delete a few Imagens
     * const { count } = await prisma.imagen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagenDeleteManyArgs>(args?: SelectSubset<T, imagenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagens
     * const imagen = await prisma.imagen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagenUpdateManyArgs>(args: SelectSubset<T, imagenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens and returns the data updated in the database.
     * @param {imagenUpdateManyAndReturnArgs} args - Arguments to update many Imagens.
     * @example
     * // Update many Imagens
     * const imagen = await prisma.imagen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagens and only return the `id`
     * const imagenWithIdOnly = await prisma.imagen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imagenUpdateManyAndReturnArgs>(args: SelectSubset<T, imagenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagen.
     * @param {imagenUpsertArgs} args - Arguments to update or create a Imagen.
     * @example
     * // Update or create a Imagen
     * const imagen = await prisma.imagen.upsert({
     *   create: {
     *     // ... data to create a Imagen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagen we want to update
     *   }
     * })
     */
    upsert<T extends imagenUpsertArgs>(args: SelectSubset<T, imagenUpsertArgs<ExtArgs>>): Prisma__imagenClient<$Result.GetResult<Prisma.$imagenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenCountArgs} args - Arguments to filter Imagens to count.
     * @example
     * // Count the number of Imagens
     * const count = await prisma.imagen.count({
     *   where: {
     *     // ... the filter for the Imagens we want to count
     *   }
     * })
    **/
    count<T extends imagenCountArgs>(
      args?: Subset<T, imagenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagenAggregateArgs>(args: Subset<T, ImagenAggregateArgs>): Prisma.PrismaPromise<GetImagenAggregateType<T>>

    /**
     * Group by Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imagenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagenGroupByArgs['orderBy'] }
        : { orderBy?: imagenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imagenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imagen model
   */
  readonly fields: imagenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imagen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carro<T extends imagen$carroArgs<ExtArgs> = {}>(args?: Subset<T, imagen$carroArgs<ExtArgs>>): Prisma__carroClient<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imagen model
   */
  interface imagenFieldRefs {
    readonly id: FieldRef<"imagen", 'Int'>
    readonly data: FieldRef<"imagen", 'String'>
    readonly id_carro: FieldRef<"imagen", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * imagen findUnique
   */
  export type imagenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter, which imagen to fetch.
     */
    where: imagenWhereUniqueInput
  }

  /**
   * imagen findUniqueOrThrow
   */
  export type imagenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter, which imagen to fetch.
     */
    where: imagenWhereUniqueInput
  }

  /**
   * imagen findFirst
   */
  export type imagenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter, which imagen to fetch.
     */
    where?: imagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens to fetch.
     */
    orderBy?: imagenOrderByWithRelationInput | imagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imagens.
     */
    cursor?: imagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * imagen findFirstOrThrow
   */
  export type imagenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter, which imagen to fetch.
     */
    where?: imagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens to fetch.
     */
    orderBy?: imagenOrderByWithRelationInput | imagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imagens.
     */
    cursor?: imagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * imagen findMany
   */
  export type imagenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter, which imagens to fetch.
     */
    where?: imagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imagens to fetch.
     */
    orderBy?: imagenOrderByWithRelationInput | imagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imagens.
     */
    cursor?: imagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imagens.
     */
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * imagen create
   */
  export type imagenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * The data needed to create a imagen.
     */
    data: XOR<imagenCreateInput, imagenUncheckedCreateInput>
  }

  /**
   * imagen createMany
   */
  export type imagenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imagens.
     */
    data: imagenCreateManyInput | imagenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imagen createManyAndReturn
   */
  export type imagenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * The data used to create many imagens.
     */
    data: imagenCreateManyInput | imagenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * imagen update
   */
  export type imagenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * The data needed to update a imagen.
     */
    data: XOR<imagenUpdateInput, imagenUncheckedUpdateInput>
    /**
     * Choose, which imagen to update.
     */
    where: imagenWhereUniqueInput
  }

  /**
   * imagen updateMany
   */
  export type imagenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imagens.
     */
    data: XOR<imagenUpdateManyMutationInput, imagenUncheckedUpdateManyInput>
    /**
     * Filter which imagens to update
     */
    where?: imagenWhereInput
    /**
     * Limit how many imagens to update.
     */
    limit?: number
  }

  /**
   * imagen updateManyAndReturn
   */
  export type imagenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * The data used to update imagens.
     */
    data: XOR<imagenUpdateManyMutationInput, imagenUncheckedUpdateManyInput>
    /**
     * Filter which imagens to update
     */
    where?: imagenWhereInput
    /**
     * Limit how many imagens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * imagen upsert
   */
  export type imagenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * The filter to search for the imagen to update in case it exists.
     */
    where: imagenWhereUniqueInput
    /**
     * In case the imagen found by the `where` argument doesn't exist, create a new imagen with this data.
     */
    create: XOR<imagenCreateInput, imagenUncheckedCreateInput>
    /**
     * In case the imagen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagenUpdateInput, imagenUncheckedUpdateInput>
  }

  /**
   * imagen delete
   */
  export type imagenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
    /**
     * Filter which imagen to delete.
     */
    where: imagenWhereUniqueInput
  }

  /**
   * imagen deleteMany
   */
  export type imagenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imagens to delete
     */
    where?: imagenWhereInput
    /**
     * Limit how many imagens to delete.
     */
    limit?: number
  }

  /**
   * imagen.carro
   */
  export type imagen$carroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    where?: carroWhereInput
  }

  /**
   * imagen without action
   */
  export type imagenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imagen
     */
    select?: imagenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the imagen
     */
    omit?: imagenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagenInclude<ExtArgs> | null
  }


  /**
   * Model pais
   */

  export type AggregatePais = {
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  export type PaisAvgAggregateOutputType = {
    id: number | null
  }

  export type PaisSumAggregateOutputType = {
    id: number | null
  }

  export type PaisMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PaisMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PaisCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PaisAvgAggregateInputType = {
    id?: true
  }

  export type PaisSumAggregateInputType = {
    id?: true
  }

  export type PaisMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PaisMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PaisCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pais to aggregate.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pais
    **/
    _count?: true | PaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaisMaxAggregateInputType
  }

  export type GetPaisAggregateType<T extends PaisAggregateArgs> = {
        [P in keyof T & keyof AggregatePais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePais[P]>
      : GetScalarType<T[P], AggregatePais[P]>
  }




  export type paisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paisWhereInput
    orderBy?: paisOrderByWithAggregationInput | paisOrderByWithAggregationInput[]
    by: PaisScalarFieldEnum[] | PaisScalarFieldEnum
    having?: paisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaisCountAggregateInputType | true
    _avg?: PaisAvgAggregateInputType
    _sum?: PaisSumAggregateInputType
    _min?: PaisMinAggregateInputType
    _max?: PaisMaxAggregateInputType
  }

  export type PaisGroupByOutputType = {
    id: number
    nombre: string
    _count: PaisCountAggregateOutputType | null
    _avg: PaisAvgAggregateOutputType | null
    _sum: PaisSumAggregateOutputType | null
    _min: PaisMinAggregateOutputType | null
    _max: PaisMaxAggregateOutputType | null
  }

  type GetPaisGroupByPayload<T extends paisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaisGroupByOutputType[P]>
            : GetScalarType<T[P], PaisGroupByOutputType[P]>
        }
      >
    >


  export type paisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean | pais$ciudadArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pais"]>

  export type paisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["pais"]>

  export type paisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["pais"]>

  export type paisSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type paisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["pais"]>
  export type paisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | pais$ciudadArgs<ExtArgs>
    _count?: boolean | PaisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type paisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type paisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $paisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pais"
    objects: {
      ciudad: Prisma.$ciudadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["pais"]>
    composites: {}
  }

  type paisGetPayload<S extends boolean | null | undefined | paisDefaultArgs> = $Result.GetResult<Prisma.$paisPayload, S>

  type paisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaisCountAggregateInputType | true
    }

  export interface paisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pais'], meta: { name: 'pais' } }
    /**
     * Find zero or one Pais that matches the filter.
     * @param {paisFindUniqueArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paisFindUniqueArgs>(args: SelectSubset<T, paisFindUniqueArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paisFindUniqueOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paisFindUniqueOrThrowArgs>(args: SelectSubset<T, paisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindFirstArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paisFindFirstArgs>(args?: SelectSubset<T, paisFindFirstArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindFirstOrThrowArgs} args - Arguments to find a Pais
     * @example
     * // Get one Pais
     * const pais = await prisma.pais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paisFindFirstOrThrowArgs>(args?: SelectSubset<T, paisFindFirstOrThrowArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pais
     * const pais = await prisma.pais.findMany()
     * 
     * // Get first 10 Pais
     * const pais = await prisma.pais.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paisWithIdOnly = await prisma.pais.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paisFindManyArgs>(args?: SelectSubset<T, paisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pais.
     * @param {paisCreateArgs} args - Arguments to create a Pais.
     * @example
     * // Create one Pais
     * const Pais = await prisma.pais.create({
     *   data: {
     *     // ... data to create a Pais
     *   }
     * })
     * 
     */
    create<T extends paisCreateArgs>(args: SelectSubset<T, paisCreateArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pais.
     * @param {paisCreateManyArgs} args - Arguments to create many Pais.
     * @example
     * // Create many Pais
     * const pais = await prisma.pais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paisCreateManyArgs>(args?: SelectSubset<T, paisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pais and returns the data saved in the database.
     * @param {paisCreateManyAndReturnArgs} args - Arguments to create many Pais.
     * @example
     * // Create many Pais
     * const pais = await prisma.pais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pais and only return the `id`
     * const paisWithIdOnly = await prisma.pais.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paisCreateManyAndReturnArgs>(args?: SelectSubset<T, paisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pais.
     * @param {paisDeleteArgs} args - Arguments to delete one Pais.
     * @example
     * // Delete one Pais
     * const Pais = await prisma.pais.delete({
     *   where: {
     *     // ... filter to delete one Pais
     *   }
     * })
     * 
     */
    delete<T extends paisDeleteArgs>(args: SelectSubset<T, paisDeleteArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pais.
     * @param {paisUpdateArgs} args - Arguments to update one Pais.
     * @example
     * // Update one Pais
     * const pais = await prisma.pais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paisUpdateArgs>(args: SelectSubset<T, paisUpdateArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pais.
     * @param {paisDeleteManyArgs} args - Arguments to filter Pais to delete.
     * @example
     * // Delete a few Pais
     * const { count } = await prisma.pais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paisDeleteManyArgs>(args?: SelectSubset<T, paisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pais
     * const pais = await prisma.pais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paisUpdateManyArgs>(args: SelectSubset<T, paisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pais and returns the data updated in the database.
     * @param {paisUpdateManyAndReturnArgs} args - Arguments to update many Pais.
     * @example
     * // Update many Pais
     * const pais = await prisma.pais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pais and only return the `id`
     * const paisWithIdOnly = await prisma.pais.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paisUpdateManyAndReturnArgs>(args: SelectSubset<T, paisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pais.
     * @param {paisUpsertArgs} args - Arguments to update or create a Pais.
     * @example
     * // Update or create a Pais
     * const pais = await prisma.pais.upsert({
     *   create: {
     *     // ... data to create a Pais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pais we want to update
     *   }
     * })
     */
    upsert<T extends paisUpsertArgs>(args: SelectSubset<T, paisUpsertArgs<ExtArgs>>): Prisma__paisClient<$Result.GetResult<Prisma.$paisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisCountArgs} args - Arguments to filter Pais to count.
     * @example
     * // Count the number of Pais
     * const count = await prisma.pais.count({
     *   where: {
     *     // ... the filter for the Pais we want to count
     *   }
     * })
    **/
    count<T extends paisCountArgs>(
      args?: Subset<T, paisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaisAggregateArgs>(args: Subset<T, PaisAggregateArgs>): Prisma.PrismaPromise<GetPaisAggregateType<T>>

    /**
     * Group by Pais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paisGroupByArgs['orderBy'] }
        : { orderBy?: paisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pais model
   */
  readonly fields: paisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudad<T extends pais$ciudadArgs<ExtArgs> = {}>(args?: Subset<T, pais$ciudadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pais model
   */
  interface paisFieldRefs {
    readonly id: FieldRef<"pais", 'Int'>
    readonly nombre: FieldRef<"pais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pais findUnique
   */
  export type paisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where: paisWhereUniqueInput
  }

  /**
   * pais findUniqueOrThrow
   */
  export type paisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where: paisWhereUniqueInput
  }

  /**
   * pais findFirst
   */
  export type paisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * pais findFirstOrThrow
   */
  export type paisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pais.
     */
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * pais findMany
   */
  export type paisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter, which pais to fetch.
     */
    where?: paisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pais to fetch.
     */
    orderBy?: paisOrderByWithRelationInput | paisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pais.
     */
    cursor?: paisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pais.
     */
    skip?: number
    distinct?: PaisScalarFieldEnum | PaisScalarFieldEnum[]
  }

  /**
   * pais create
   */
  export type paisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The data needed to create a pais.
     */
    data: XOR<paisCreateInput, paisUncheckedCreateInput>
  }

  /**
   * pais createMany
   */
  export type paisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pais.
     */
    data: paisCreateManyInput | paisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pais createManyAndReturn
   */
  export type paisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * The data used to create many pais.
     */
    data: paisCreateManyInput | paisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pais update
   */
  export type paisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The data needed to update a pais.
     */
    data: XOR<paisUpdateInput, paisUncheckedUpdateInput>
    /**
     * Choose, which pais to update.
     */
    where: paisWhereUniqueInput
  }

  /**
   * pais updateMany
   */
  export type paisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pais.
     */
    data: XOR<paisUpdateManyMutationInput, paisUncheckedUpdateManyInput>
    /**
     * Filter which pais to update
     */
    where?: paisWhereInput
    /**
     * Limit how many pais to update.
     */
    limit?: number
  }

  /**
   * pais updateManyAndReturn
   */
  export type paisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * The data used to update pais.
     */
    data: XOR<paisUpdateManyMutationInput, paisUncheckedUpdateManyInput>
    /**
     * Filter which pais to update
     */
    where?: paisWhereInput
    /**
     * Limit how many pais to update.
     */
    limit?: number
  }

  /**
   * pais upsert
   */
  export type paisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * The filter to search for the pais to update in case it exists.
     */
    where: paisWhereUniqueInput
    /**
     * In case the pais found by the `where` argument doesn't exist, create a new pais with this data.
     */
    create: XOR<paisCreateInput, paisUncheckedCreateInput>
    /**
     * In case the pais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paisUpdateInput, paisUncheckedUpdateInput>
  }

  /**
   * pais delete
   */
  export type paisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
    /**
     * Filter which pais to delete.
     */
    where: paisWhereUniqueInput
  }

  /**
   * pais deleteMany
   */
  export type paisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pais to delete
     */
    where?: paisWhereInput
    /**
     * Limit how many pais to delete.
     */
    limit?: number
  }

  /**
   * pais.ciudad
   */
  export type pais$ciudadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    where?: ciudadWhereInput
    orderBy?: ciudadOrderByWithRelationInput | ciudadOrderByWithRelationInput[]
    cursor?: ciudadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * pais without action
   */
  export type paisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pais
     */
    select?: paisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pais
     */
    omit?: paisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paisInclude<ExtArgs> | null
  }


  /**
   * Model provincia
   */

  export type AggregateProvincia = {
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  export type ProvinciaAvgAggregateOutputType = {
    id: number | null
    id_ciudad: number | null
  }

  export type ProvinciaSumAggregateOutputType = {
    id: number | null
    id_ciudad: number | null
  }

  export type ProvinciaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_ciudad: number | null
  }

  export type ProvinciaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_ciudad: number | null
  }

  export type ProvinciaCountAggregateOutputType = {
    id: number
    nombre: number
    id_ciudad: number
    _all: number
  }


  export type ProvinciaAvgAggregateInputType = {
    id?: true
    id_ciudad?: true
  }

  export type ProvinciaSumAggregateInputType = {
    id?: true
    id_ciudad?: true
  }

  export type ProvinciaMinAggregateInputType = {
    id?: true
    nombre?: true
    id_ciudad?: true
  }

  export type ProvinciaMaxAggregateInputType = {
    id?: true
    nombre?: true
    id_ciudad?: true
  }

  export type ProvinciaCountAggregateInputType = {
    id?: true
    nombre?: true
    id_ciudad?: true
    _all?: true
  }

  export type ProvinciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provincia to aggregate.
     */
    where?: provinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provincias to fetch.
     */
    orderBy?: provinciaOrderByWithRelationInput | provinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provincias
    **/
    _count?: true | ProvinciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinciaMaxAggregateInputType
  }

  export type GetProvinciaAggregateType<T extends ProvinciaAggregateArgs> = {
        [P in keyof T & keyof AggregateProvincia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvincia[P]>
      : GetScalarType<T[P], AggregateProvincia[P]>
  }




  export type provinciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provinciaWhereInput
    orderBy?: provinciaOrderByWithAggregationInput | provinciaOrderByWithAggregationInput[]
    by: ProvinciaScalarFieldEnum[] | ProvinciaScalarFieldEnum
    having?: provinciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinciaCountAggregateInputType | true
    _avg?: ProvinciaAvgAggregateInputType
    _sum?: ProvinciaSumAggregateInputType
    _min?: ProvinciaMinAggregateInputType
    _max?: ProvinciaMaxAggregateInputType
  }

  export type ProvinciaGroupByOutputType = {
    id: number
    nombre: string
    id_ciudad: number | null
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  type GetProvinciaGroupByPayload<T extends provinciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
        }
      >
    >


  export type provinciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_ciudad?: boolean
    direccion?: boolean | provincia$direccionArgs<ExtArgs>
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>

  export type provinciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_ciudad?: boolean
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>

  export type provinciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_ciudad?: boolean
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>

  export type provinciaSelectScalar = {
    id?: boolean
    nombre?: boolean
    id_ciudad?: boolean
  }

  export type provinciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "id_ciudad", ExtArgs["result"]["provincia"]>
  export type provinciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | provincia$direccionArgs<ExtArgs>
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provinciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
  }
  export type provinciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | provincia$ciudadArgs<ExtArgs>
  }

  export type $provinciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "provincia"
    objects: {
      direccion: Prisma.$direccionPayload<ExtArgs>[]
      ciudad: Prisma.$ciudadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      id_ciudad: number | null
    }, ExtArgs["result"]["provincia"]>
    composites: {}
  }

  type provinciaGetPayload<S extends boolean | null | undefined | provinciaDefaultArgs> = $Result.GetResult<Prisma.$provinciaPayload, S>

  type provinciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<provinciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinciaCountAggregateInputType | true
    }

  export interface provinciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['provincia'], meta: { name: 'provincia' } }
    /**
     * Find zero or one Provincia that matches the filter.
     * @param {provinciaFindUniqueArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends provinciaFindUniqueArgs>(args: SelectSubset<T, provinciaFindUniqueArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provincia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {provinciaFindUniqueOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends provinciaFindUniqueOrThrowArgs>(args: SelectSubset<T, provinciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaFindFirstArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends provinciaFindFirstArgs>(args?: SelectSubset<T, provinciaFindFirstArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaFindFirstOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends provinciaFindFirstOrThrowArgs>(args?: SelectSubset<T, provinciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provincias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provincias
     * const provincias = await prisma.provincia.findMany()
     * 
     * // Get first 10 Provincias
     * const provincias = await prisma.provincia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinciaWithIdOnly = await prisma.provincia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends provinciaFindManyArgs>(args?: SelectSubset<T, provinciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provincia.
     * @param {provinciaCreateArgs} args - Arguments to create a Provincia.
     * @example
     * // Create one Provincia
     * const Provincia = await prisma.provincia.create({
     *   data: {
     *     // ... data to create a Provincia
     *   }
     * })
     * 
     */
    create<T extends provinciaCreateArgs>(args: SelectSubset<T, provinciaCreateArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provincias.
     * @param {provinciaCreateManyArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends provinciaCreateManyArgs>(args?: SelectSubset<T, provinciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provincias and returns the data saved in the database.
     * @param {provinciaCreateManyAndReturnArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends provinciaCreateManyAndReturnArgs>(args?: SelectSubset<T, provinciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provincia.
     * @param {provinciaDeleteArgs} args - Arguments to delete one Provincia.
     * @example
     * // Delete one Provincia
     * const Provincia = await prisma.provincia.delete({
     *   where: {
     *     // ... filter to delete one Provincia
     *   }
     * })
     * 
     */
    delete<T extends provinciaDeleteArgs>(args: SelectSubset<T, provinciaDeleteArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provincia.
     * @param {provinciaUpdateArgs} args - Arguments to update one Provincia.
     * @example
     * // Update one Provincia
     * const provincia = await prisma.provincia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends provinciaUpdateArgs>(args: SelectSubset<T, provinciaUpdateArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provincias.
     * @param {provinciaDeleteManyArgs} args - Arguments to filter Provincias to delete.
     * @example
     * // Delete a few Provincias
     * const { count } = await prisma.provincia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends provinciaDeleteManyArgs>(args?: SelectSubset<T, provinciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends provinciaUpdateManyArgs>(args: SelectSubset<T, provinciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias and returns the data updated in the database.
     * @param {provinciaUpdateManyAndReturnArgs} args - Arguments to update many Provincias.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends provinciaUpdateManyAndReturnArgs>(args: SelectSubset<T, provinciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provincia.
     * @param {provinciaUpsertArgs} args - Arguments to update or create a Provincia.
     * @example
     * // Update or create a Provincia
     * const provincia = await prisma.provincia.upsert({
     *   create: {
     *     // ... data to create a Provincia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provincia we want to update
     *   }
     * })
     */
    upsert<T extends provinciaUpsertArgs>(args: SelectSubset<T, provinciaUpsertArgs<ExtArgs>>): Prisma__provinciaClient<$Result.GetResult<Prisma.$provinciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaCountArgs} args - Arguments to filter Provincias to count.
     * @example
     * // Count the number of Provincias
     * const count = await prisma.provincia.count({
     *   where: {
     *     // ... the filter for the Provincias we want to count
     *   }
     * })
    **/
    count<T extends provinciaCountArgs>(
      args?: Subset<T, provinciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinciaAggregateArgs>(args: Subset<T, ProvinciaAggregateArgs>): Prisma.PrismaPromise<GetProvinciaAggregateType<T>>

    /**
     * Group by Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends provinciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provinciaGroupByArgs['orderBy'] }
        : { orderBy?: provinciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, provinciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the provincia model
   */
  readonly fields: provinciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for provincia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provinciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direccion<T extends provincia$direccionArgs<ExtArgs> = {}>(args?: Subset<T, provincia$direccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ciudad<T extends provincia$ciudadArgs<ExtArgs> = {}>(args?: Subset<T, provincia$ciudadArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the provincia model
   */
  interface provinciaFieldRefs {
    readonly id: FieldRef<"provincia", 'Int'>
    readonly nombre: FieldRef<"provincia", 'String'>
    readonly id_ciudad: FieldRef<"provincia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * provincia findUnique
   */
  export type provinciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter, which provincia to fetch.
     */
    where: provinciaWhereUniqueInput
  }

  /**
   * provincia findUniqueOrThrow
   */
  export type provinciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter, which provincia to fetch.
     */
    where: provinciaWhereUniqueInput
  }

  /**
   * provincia findFirst
   */
  export type provinciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter, which provincia to fetch.
     */
    where?: provinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provincias to fetch.
     */
    orderBy?: provinciaOrderByWithRelationInput | provinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provincias.
     */
    cursor?: provinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * provincia findFirstOrThrow
   */
  export type provinciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter, which provincia to fetch.
     */
    where?: provinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provincias to fetch.
     */
    orderBy?: provinciaOrderByWithRelationInput | provinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provincias.
     */
    cursor?: provinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * provincia findMany
   */
  export type provinciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter, which provincias to fetch.
     */
    where?: provinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provincias to fetch.
     */
    orderBy?: provinciaOrderByWithRelationInput | provinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provincias.
     */
    cursor?: provinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provincias.
     */
    skip?: number
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * provincia create
   */
  export type provinciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * The data needed to create a provincia.
     */
    data: XOR<provinciaCreateInput, provinciaUncheckedCreateInput>
  }

  /**
   * provincia createMany
   */
  export type provinciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provincias.
     */
    data: provinciaCreateManyInput | provinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * provincia createManyAndReturn
   */
  export type provinciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * The data used to create many provincias.
     */
    data: provinciaCreateManyInput | provinciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * provincia update
   */
  export type provinciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * The data needed to update a provincia.
     */
    data: XOR<provinciaUpdateInput, provinciaUncheckedUpdateInput>
    /**
     * Choose, which provincia to update.
     */
    where: provinciaWhereUniqueInput
  }

  /**
   * provincia updateMany
   */
  export type provinciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provincias.
     */
    data: XOR<provinciaUpdateManyMutationInput, provinciaUncheckedUpdateManyInput>
    /**
     * Filter which provincias to update
     */
    where?: provinciaWhereInput
    /**
     * Limit how many provincias to update.
     */
    limit?: number
  }

  /**
   * provincia updateManyAndReturn
   */
  export type provinciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * The data used to update provincias.
     */
    data: XOR<provinciaUpdateManyMutationInput, provinciaUncheckedUpdateManyInput>
    /**
     * Filter which provincias to update
     */
    where?: provinciaWhereInput
    /**
     * Limit how many provincias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * provincia upsert
   */
  export type provinciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * The filter to search for the provincia to update in case it exists.
     */
    where: provinciaWhereUniqueInput
    /**
     * In case the provincia found by the `where` argument doesn't exist, create a new provincia with this data.
     */
    create: XOR<provinciaCreateInput, provinciaUncheckedCreateInput>
    /**
     * In case the provincia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provinciaUpdateInput, provinciaUncheckedUpdateInput>
  }

  /**
   * provincia delete
   */
  export type provinciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
    /**
     * Filter which provincia to delete.
     */
    where: provinciaWhereUniqueInput
  }

  /**
   * provincia deleteMany
   */
  export type provinciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provincias to delete
     */
    where?: provinciaWhereInput
    /**
     * Limit how many provincias to delete.
     */
    limit?: number
  }

  /**
   * provincia.direccion
   */
  export type provincia$direccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    where?: direccionWhereInput
    orderBy?: direccionOrderByWithRelationInput | direccionOrderByWithRelationInput[]
    cursor?: direccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * provincia.ciudad
   */
  export type provincia$ciudadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    where?: ciudadWhereInput
  }

  /**
   * provincia without action
   */
  export type provinciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provincia
     */
    select?: provinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provincia
     */
    omit?: provinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinciaInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    rol: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    rol: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    rol: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    rol?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    rol?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    rol?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    rol: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol?: boolean
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rol?: boolean
  }, ExtArgs["result"]["rol"]>

  export type rolSelectScalar = {
    id?: boolean
    rol?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rol", ExtArgs["result"]["rol"]>
  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rol?: boolean | rol$usuario_rolArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rol: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {rolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {rolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario_rol<T extends rol$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, rol$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id: FieldRef<"rol", 'Int'>
    readonly rol: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol createManyAndReturn
   */
  export type rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol updateManyAndReturn
   */
  export type rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol.usuario_rol
   */
  export type rol$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id_test: number | null
  }

  export type TestSumAggregateOutputType = {
    id_test: number | null
  }

  export type TestMinAggregateOutputType = {
    id_test: number | null
    namet: string | null
    descripcion: string | null
  }

  export type TestMaxAggregateOutputType = {
    id_test: number | null
    namet: string | null
    descripcion: string | null
  }

  export type TestCountAggregateOutputType = {
    id_test: number
    namet: number
    descripcion: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id_test?: true
  }

  export type TestSumAggregateInputType = {
    id_test?: true
  }

  export type TestMinAggregateInputType = {
    id_test?: true
    namet?: true
    descripcion?: true
  }

  export type TestMaxAggregateInputType = {
    id_test?: true
    namet?: true
    descripcion?: true
  }

  export type TestCountAggregateInputType = {
    id_test?: true
    namet?: true
    descripcion?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id_test: number
    namet: string | null
    descripcion: string | null
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_test?: boolean
    namet?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["test"]>

  export type testSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_test?: boolean
    namet?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["test"]>

  export type testSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_test?: boolean
    namet?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["test"]>

  export type testSelectScalar = {
    id_test?: boolean
    namet?: boolean
    descripcion?: boolean
  }

  export type testOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_test" | "namet" | "descripcion", ExtArgs["result"]["test"]>

  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_test: number
      namet: string | null
      descripcion: string | null
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<Prisma.$testPayload, S>

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test'], meta: { name: 'test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testFindUniqueArgs>(args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs>(args: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testFindFirstArgs>(args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testFindFirstOrThrowArgs>(args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id_test`
     * const testWithId_testOnly = await prisma.test.findMany({ select: { id_test: true } })
     * 
     */
    findMany<T extends testFindManyArgs>(args?: SelectSubset<T, testFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends testCreateArgs>(args: SelectSubset<T, testCreateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {testCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testCreateManyArgs>(args?: SelectSubset<T, testCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {testCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id_test`
     * const testWithId_testOnly = await prisma.test.createManyAndReturn({
     *   select: { id_test: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testCreateManyAndReturnArgs>(args?: SelectSubset<T, testCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends testDeleteArgs>(args: SelectSubset<T, testDeleteArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testUpdateArgs>(args: SelectSubset<T, testUpdateArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testDeleteManyArgs>(args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testUpdateManyArgs>(args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {testUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id_test`
     * const testWithId_testOnly = await prisma.test.updateManyAndReturn({
     *   select: { id_test: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends testUpdateManyAndReturnArgs>(args: SelectSubset<T, testUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends testUpsertArgs>(args: SelectSubset<T, testUpsertArgs<ExtArgs>>): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test model
   */
  readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the test model
   */
  interface testFieldRefs {
    readonly id_test: FieldRef<"test", 'Int'>
    readonly namet: FieldRef<"test", 'String'>
    readonly descripcion: FieldRef<"test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test create
   */
  export type testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data needed to create a test.
     */
    data: XOR<testCreateInput, testUncheckedCreateInput>
  }

  /**
   * test createMany
   */
  export type testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test createManyAndReturn
   */
  export type testCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data used to create many tests.
     */
    data: testCreateManyInput | testCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput
  }

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
    /**
     * Limit how many tests to update.
     */
    limit?: number
  }

  /**
   * test updateManyAndReturn
   */
  export type testUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
    /**
     * Limit how many tests to update.
     */
    limit?: number
  }

  /**
   * test upsert
   */
  export type testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * The filter to search for the test to update in case it exists.
     */
    where: testWhereUniqueInput
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     */
    create: XOR<testCreateInput, testUncheckedCreateInput>
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testUpdateInput, testUncheckedUpdateInput>
  }

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput
  }

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput
    /**
     * Limit how many tests to delete.
     */
    limit?: number
  }

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the test
     */
    omit?: testOmit<ExtArgs> | null
  }


  /**
   * Model tipocombustible
   */

  export type AggregateTipocombustible = {
    _count: TipocombustibleCountAggregateOutputType | null
    _avg: TipocombustibleAvgAggregateOutputType | null
    _sum: TipocombustibleSumAggregateOutputType | null
    _min: TipocombustibleMinAggregateOutputType | null
    _max: TipocombustibleMaxAggregateOutputType | null
  }

  export type TipocombustibleAvgAggregateOutputType = {
    id: number | null
  }

  export type TipocombustibleSumAggregateOutputType = {
    id: number | null
  }

  export type TipocombustibleMinAggregateOutputType = {
    id: number | null
    tipo_de_combustible: string | null
  }

  export type TipocombustibleMaxAggregateOutputType = {
    id: number | null
    tipo_de_combustible: string | null
  }

  export type TipocombustibleCountAggregateOutputType = {
    id: number
    tipo_de_combustible: number
    _all: number
  }


  export type TipocombustibleAvgAggregateInputType = {
    id?: true
  }

  export type TipocombustibleSumAggregateInputType = {
    id?: true
  }

  export type TipocombustibleMinAggregateInputType = {
    id?: true
    tipo_de_combustible?: true
  }

  export type TipocombustibleMaxAggregateInputType = {
    id?: true
    tipo_de_combustible?: true
  }

  export type TipocombustibleCountAggregateInputType = {
    id?: true
    tipo_de_combustible?: true
    _all?: true
  }

  export type TipocombustibleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipocombustible to aggregate.
     */
    where?: tipocombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipocombustibles to fetch.
     */
    orderBy?: tipocombustibleOrderByWithRelationInput | tipocombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipocombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipocombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipocombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipocombustibles
    **/
    _count?: true | TipocombustibleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipocombustibleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipocombustibleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipocombustibleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipocombustibleMaxAggregateInputType
  }

  export type GetTipocombustibleAggregateType<T extends TipocombustibleAggregateArgs> = {
        [P in keyof T & keyof AggregateTipocombustible]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipocombustible[P]>
      : GetScalarType<T[P], AggregateTipocombustible[P]>
  }




  export type tipocombustibleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipocombustibleWhereInput
    orderBy?: tipocombustibleOrderByWithAggregationInput | tipocombustibleOrderByWithAggregationInput[]
    by: TipocombustibleScalarFieldEnum[] | TipocombustibleScalarFieldEnum
    having?: tipocombustibleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipocombustibleCountAggregateInputType | true
    _avg?: TipocombustibleAvgAggregateInputType
    _sum?: TipocombustibleSumAggregateInputType
    _min?: TipocombustibleMinAggregateInputType
    _max?: TipocombustibleMaxAggregateInputType
  }

  export type TipocombustibleGroupByOutputType = {
    id: number
    tipo_de_combustible: string
    _count: TipocombustibleCountAggregateOutputType | null
    _avg: TipocombustibleAvgAggregateOutputType | null
    _sum: TipocombustibleSumAggregateOutputType | null
    _min: TipocombustibleMinAggregateOutputType | null
    _max: TipocombustibleMaxAggregateOutputType | null
  }

  type GetTipocombustibleGroupByPayload<T extends tipocombustibleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipocombustibleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipocombustibleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipocombustibleGroupByOutputType[P]>
            : GetScalarType<T[P], TipocombustibleGroupByOutputType[P]>
        }
      >
    >


  export type tipocombustibleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_de_combustible?: boolean
    combustiblecarro?: boolean | tipocombustible$combustiblecarroArgs<ExtArgs>
    _count?: boolean | TipocombustibleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipocombustible"]>

  export type tipocombustibleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_de_combustible?: boolean
  }, ExtArgs["result"]["tipocombustible"]>

  export type tipocombustibleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_de_combustible?: boolean
  }, ExtArgs["result"]["tipocombustible"]>

  export type tipocombustibleSelectScalar = {
    id?: boolean
    tipo_de_combustible?: boolean
  }

  export type tipocombustibleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_de_combustible", ExtArgs["result"]["tipocombustible"]>
  export type tipocombustibleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    combustiblecarro?: boolean | tipocombustible$combustiblecarroArgs<ExtArgs>
    _count?: boolean | TipocombustibleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipocombustibleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipocombustibleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipocombustiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipocombustible"
    objects: {
      combustiblecarro: Prisma.$combustiblecarroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo_de_combustible: string
    }, ExtArgs["result"]["tipocombustible"]>
    composites: {}
  }

  type tipocombustibleGetPayload<S extends boolean | null | undefined | tipocombustibleDefaultArgs> = $Result.GetResult<Prisma.$tipocombustiblePayload, S>

  type tipocombustibleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipocombustibleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipocombustibleCountAggregateInputType | true
    }

  export interface tipocombustibleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipocombustible'], meta: { name: 'tipocombustible' } }
    /**
     * Find zero or one Tipocombustible that matches the filter.
     * @param {tipocombustibleFindUniqueArgs} args - Arguments to find a Tipocombustible
     * @example
     * // Get one Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipocombustibleFindUniqueArgs>(args: SelectSubset<T, tipocombustibleFindUniqueArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipocombustible that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipocombustibleFindUniqueOrThrowArgs} args - Arguments to find a Tipocombustible
     * @example
     * // Get one Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipocombustibleFindUniqueOrThrowArgs>(args: SelectSubset<T, tipocombustibleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipocombustible that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleFindFirstArgs} args - Arguments to find a Tipocombustible
     * @example
     * // Get one Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipocombustibleFindFirstArgs>(args?: SelectSubset<T, tipocombustibleFindFirstArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipocombustible that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleFindFirstOrThrowArgs} args - Arguments to find a Tipocombustible
     * @example
     * // Get one Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipocombustibleFindFirstOrThrowArgs>(args?: SelectSubset<T, tipocombustibleFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipocombustibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipocombustibles
     * const tipocombustibles = await prisma.tipocombustible.findMany()
     * 
     * // Get first 10 Tipocombustibles
     * const tipocombustibles = await prisma.tipocombustible.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipocombustibleWithIdOnly = await prisma.tipocombustible.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipocombustibleFindManyArgs>(args?: SelectSubset<T, tipocombustibleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipocombustible.
     * @param {tipocombustibleCreateArgs} args - Arguments to create a Tipocombustible.
     * @example
     * // Create one Tipocombustible
     * const Tipocombustible = await prisma.tipocombustible.create({
     *   data: {
     *     // ... data to create a Tipocombustible
     *   }
     * })
     * 
     */
    create<T extends tipocombustibleCreateArgs>(args: SelectSubset<T, tipocombustibleCreateArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipocombustibles.
     * @param {tipocombustibleCreateManyArgs} args - Arguments to create many Tipocombustibles.
     * @example
     * // Create many Tipocombustibles
     * const tipocombustible = await prisma.tipocombustible.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipocombustibleCreateManyArgs>(args?: SelectSubset<T, tipocombustibleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipocombustibles and returns the data saved in the database.
     * @param {tipocombustibleCreateManyAndReturnArgs} args - Arguments to create many Tipocombustibles.
     * @example
     * // Create many Tipocombustibles
     * const tipocombustible = await prisma.tipocombustible.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipocombustibles and only return the `id`
     * const tipocombustibleWithIdOnly = await prisma.tipocombustible.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipocombustibleCreateManyAndReturnArgs>(args?: SelectSubset<T, tipocombustibleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipocombustible.
     * @param {tipocombustibleDeleteArgs} args - Arguments to delete one Tipocombustible.
     * @example
     * // Delete one Tipocombustible
     * const Tipocombustible = await prisma.tipocombustible.delete({
     *   where: {
     *     // ... filter to delete one Tipocombustible
     *   }
     * })
     * 
     */
    delete<T extends tipocombustibleDeleteArgs>(args: SelectSubset<T, tipocombustibleDeleteArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipocombustible.
     * @param {tipocombustibleUpdateArgs} args - Arguments to update one Tipocombustible.
     * @example
     * // Update one Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipocombustibleUpdateArgs>(args: SelectSubset<T, tipocombustibleUpdateArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipocombustibles.
     * @param {tipocombustibleDeleteManyArgs} args - Arguments to filter Tipocombustibles to delete.
     * @example
     * // Delete a few Tipocombustibles
     * const { count } = await prisma.tipocombustible.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipocombustibleDeleteManyArgs>(args?: SelectSubset<T, tipocombustibleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipocombustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipocombustibles
     * const tipocombustible = await prisma.tipocombustible.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipocombustibleUpdateManyArgs>(args: SelectSubset<T, tipocombustibleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipocombustibles and returns the data updated in the database.
     * @param {tipocombustibleUpdateManyAndReturnArgs} args - Arguments to update many Tipocombustibles.
     * @example
     * // Update many Tipocombustibles
     * const tipocombustible = await prisma.tipocombustible.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipocombustibles and only return the `id`
     * const tipocombustibleWithIdOnly = await prisma.tipocombustible.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipocombustibleUpdateManyAndReturnArgs>(args: SelectSubset<T, tipocombustibleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipocombustible.
     * @param {tipocombustibleUpsertArgs} args - Arguments to update or create a Tipocombustible.
     * @example
     * // Update or create a Tipocombustible
     * const tipocombustible = await prisma.tipocombustible.upsert({
     *   create: {
     *     // ... data to create a Tipocombustible
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipocombustible we want to update
     *   }
     * })
     */
    upsert<T extends tipocombustibleUpsertArgs>(args: SelectSubset<T, tipocombustibleUpsertArgs<ExtArgs>>): Prisma__tipocombustibleClient<$Result.GetResult<Prisma.$tipocombustiblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipocombustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleCountArgs} args - Arguments to filter Tipocombustibles to count.
     * @example
     * // Count the number of Tipocombustibles
     * const count = await prisma.tipocombustible.count({
     *   where: {
     *     // ... the filter for the Tipocombustibles we want to count
     *   }
     * })
    **/
    count<T extends tipocombustibleCountArgs>(
      args?: Subset<T, tipocombustibleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipocombustibleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipocombustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipocombustibleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipocombustibleAggregateArgs>(args: Subset<T, TipocombustibleAggregateArgs>): Prisma.PrismaPromise<GetTipocombustibleAggregateType<T>>

    /**
     * Group by Tipocombustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipocombustibleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipocombustibleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipocombustibleGroupByArgs['orderBy'] }
        : { orderBy?: tipocombustibleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipocombustibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipocombustibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipocombustible model
   */
  readonly fields: tipocombustibleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipocombustible.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipocombustibleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    combustiblecarro<T extends tipocombustible$combustiblecarroArgs<ExtArgs> = {}>(args?: Subset<T, tipocombustible$combustiblecarroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$combustiblecarroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipocombustible model
   */
  interface tipocombustibleFieldRefs {
    readonly id: FieldRef<"tipocombustible", 'Int'>
    readonly tipo_de_combustible: FieldRef<"tipocombustible", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipocombustible findUnique
   */
  export type tipocombustibleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter, which tipocombustible to fetch.
     */
    where: tipocombustibleWhereUniqueInput
  }

  /**
   * tipocombustible findUniqueOrThrow
   */
  export type tipocombustibleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter, which tipocombustible to fetch.
     */
    where: tipocombustibleWhereUniqueInput
  }

  /**
   * tipocombustible findFirst
   */
  export type tipocombustibleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter, which tipocombustible to fetch.
     */
    where?: tipocombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipocombustibles to fetch.
     */
    orderBy?: tipocombustibleOrderByWithRelationInput | tipocombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipocombustibles.
     */
    cursor?: tipocombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipocombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipocombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipocombustibles.
     */
    distinct?: TipocombustibleScalarFieldEnum | TipocombustibleScalarFieldEnum[]
  }

  /**
   * tipocombustible findFirstOrThrow
   */
  export type tipocombustibleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter, which tipocombustible to fetch.
     */
    where?: tipocombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipocombustibles to fetch.
     */
    orderBy?: tipocombustibleOrderByWithRelationInput | tipocombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipocombustibles.
     */
    cursor?: tipocombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipocombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipocombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipocombustibles.
     */
    distinct?: TipocombustibleScalarFieldEnum | TipocombustibleScalarFieldEnum[]
  }

  /**
   * tipocombustible findMany
   */
  export type tipocombustibleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter, which tipocombustibles to fetch.
     */
    where?: tipocombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipocombustibles to fetch.
     */
    orderBy?: tipocombustibleOrderByWithRelationInput | tipocombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipocombustibles.
     */
    cursor?: tipocombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipocombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipocombustibles.
     */
    skip?: number
    distinct?: TipocombustibleScalarFieldEnum | TipocombustibleScalarFieldEnum[]
  }

  /**
   * tipocombustible create
   */
  export type tipocombustibleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * The data needed to create a tipocombustible.
     */
    data: XOR<tipocombustibleCreateInput, tipocombustibleUncheckedCreateInput>
  }

  /**
   * tipocombustible createMany
   */
  export type tipocombustibleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipocombustibles.
     */
    data: tipocombustibleCreateManyInput | tipocombustibleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipocombustible createManyAndReturn
   */
  export type tipocombustibleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * The data used to create many tipocombustibles.
     */
    data: tipocombustibleCreateManyInput | tipocombustibleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipocombustible update
   */
  export type tipocombustibleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * The data needed to update a tipocombustible.
     */
    data: XOR<tipocombustibleUpdateInput, tipocombustibleUncheckedUpdateInput>
    /**
     * Choose, which tipocombustible to update.
     */
    where: tipocombustibleWhereUniqueInput
  }

  /**
   * tipocombustible updateMany
   */
  export type tipocombustibleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipocombustibles.
     */
    data: XOR<tipocombustibleUpdateManyMutationInput, tipocombustibleUncheckedUpdateManyInput>
    /**
     * Filter which tipocombustibles to update
     */
    where?: tipocombustibleWhereInput
    /**
     * Limit how many tipocombustibles to update.
     */
    limit?: number
  }

  /**
   * tipocombustible updateManyAndReturn
   */
  export type tipocombustibleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * The data used to update tipocombustibles.
     */
    data: XOR<tipocombustibleUpdateManyMutationInput, tipocombustibleUncheckedUpdateManyInput>
    /**
     * Filter which tipocombustibles to update
     */
    where?: tipocombustibleWhereInput
    /**
     * Limit how many tipocombustibles to update.
     */
    limit?: number
  }

  /**
   * tipocombustible upsert
   */
  export type tipocombustibleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * The filter to search for the tipocombustible to update in case it exists.
     */
    where: tipocombustibleWhereUniqueInput
    /**
     * In case the tipocombustible found by the `where` argument doesn't exist, create a new tipocombustible with this data.
     */
    create: XOR<tipocombustibleCreateInput, tipocombustibleUncheckedCreateInput>
    /**
     * In case the tipocombustible was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipocombustibleUpdateInput, tipocombustibleUncheckedUpdateInput>
  }

  /**
   * tipocombustible delete
   */
  export type tipocombustibleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
    /**
     * Filter which tipocombustible to delete.
     */
    where: tipocombustibleWhereUniqueInput
  }

  /**
   * tipocombustible deleteMany
   */
  export type tipocombustibleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipocombustibles to delete
     */
    where?: tipocombustibleWhereInput
    /**
     * Limit how many tipocombustibles to delete.
     */
    limit?: number
  }

  /**
   * tipocombustible.combustiblecarro
   */
  export type tipocombustible$combustiblecarroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the combustiblecarro
     */
    select?: combustiblecarroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the combustiblecarro
     */
    omit?: combustiblecarroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: combustiblecarroInclude<ExtArgs> | null
    where?: combustiblecarroWhereInput
    orderBy?: combustiblecarroOrderByWithRelationInput | combustiblecarroOrderByWithRelationInput[]
    cursor?: combustiblecarroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombustiblecarroScalarFieldEnum | CombustiblecarroScalarFieldEnum[]
  }

  /**
   * tipocombustible without action
   */
  export type tipocombustibleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipocombustible
     */
    select?: tipocombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipocombustible
     */
    omit?: tipocombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipocombustibleInclude<ExtArgs> | null
  }


  /**
   * Model ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionAvgAggregateOutputType = {
    id: number | null
    id_direccion: number | null
    radio_cobertura: number | null
  }

  export type UbicacionSumAggregateOutputType = {
    id: number | null
    id_direccion: number | null
    radio_cobertura: number | null
  }

  export type UbicacionMinAggregateOutputType = {
    id: number | null
    id_direccion: number | null
    radio_cobertura: number | null
  }

  export type UbicacionMaxAggregateOutputType = {
    id: number | null
    id_direccion: number | null
    radio_cobertura: number | null
  }

  export type UbicacionCountAggregateOutputType = {
    id: number
    id_direccion: number
    radio_cobertura: number
    _all: number
  }


  export type UbicacionAvgAggregateInputType = {
    id?: true
    id_direccion?: true
    radio_cobertura?: true
  }

  export type UbicacionSumAggregateInputType = {
    id?: true
    id_direccion?: true
    radio_cobertura?: true
  }

  export type UbicacionMinAggregateInputType = {
    id?: true
    id_direccion?: true
    radio_cobertura?: true
  }

  export type UbicacionMaxAggregateInputType = {
    id?: true
    id_direccion?: true
    radio_cobertura?: true
  }

  export type UbicacionCountAggregateInputType = {
    id?: true
    id_direccion?: true
    radio_cobertura?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacion to aggregate.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type ubicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ubicacionWhereInput
    orderBy?: ubicacionOrderByWithAggregationInput | ubicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: ubicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _avg?: UbicacionAvgAggregateInputType
    _sum?: UbicacionSumAggregateInputType
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    id: number
    id_direccion: number | null
    radio_cobertura: number | null
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends ubicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type ubicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_direccion?: boolean
    radio_cobertura?: boolean
    direccion?: boolean | ubicacion$direccionArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>


  export type ubicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_direccion?: boolean
    radio_cobertura?: boolean
    direccion?: boolean | ubicacion$direccionArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type ubicacionSelectScalar = {
    id?: boolean
    id_direccion?: boolean
    radio_cobertura?: boolean
  }

  export type ubicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_direccion" | "radio_cobertura", ExtArgs["result"]["ubicacion"]>
  export type ubicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | ubicacion$direccionArgs<ExtArgs>
  }
  export type ubicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | ubicacion$direccionArgs<ExtArgs>
  }

  export type $ubicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ubicacion"
    objects: {
      direccion: Prisma.$direccionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_direccion: number | null
      radio_cobertura: number | null
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type ubicacionGetPayload<S extends boolean | null | undefined | ubicacionDefaultArgs> = $Result.GetResult<Prisma.$ubicacionPayload, S>

  type ubicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ubicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface ubicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ubicacion'], meta: { name: 'ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {ubicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ubicacionFindUniqueArgs>(args: SelectSubset<T, ubicacionFindUniqueArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ubicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ubicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ubicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ubicacionFindFirstArgs>(args?: SelectSubset<T, ubicacionFindFirstArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ubicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ubicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ubicacionFindManyArgs>(args?: SelectSubset<T, ubicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Ubicacion.
     * @param {ubicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends ubicacionDeleteArgs>(args: SelectSubset<T, ubicacionDeleteArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubicacion.
     * @param {ubicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ubicacionUpdateArgs>(args: SelectSubset<T, ubicacionUpdateArgs<ExtArgs>>): Prisma__ubicacionClient<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubicacions.
     * @param {ubicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ubicacionDeleteManyArgs>(args?: SelectSubset<T, ubicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ubicacionUpdateManyArgs>(args: SelectSubset<T, ubicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions and returns the data updated in the database.
     * @param {ubicacionUpdateManyAndReturnArgs} args - Arguments to update many Ubicacions.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubicacions and only return the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ubicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ubicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ubicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends ubicacionCountArgs>(
      args?: Subset<T, ubicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ubicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ubicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ubicacionGroupByArgs['orderBy'] }
        : { orderBy?: ubicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ubicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ubicacion model
   */
  readonly fields: ubicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ubicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direccion<T extends ubicacion$direccionArgs<ExtArgs> = {}>(args?: Subset<T, ubicacion$direccionArgs<ExtArgs>>): Prisma__direccionClient<$Result.GetResult<Prisma.$direccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ubicacion model
   */
  interface ubicacionFieldRefs {
    readonly id: FieldRef<"ubicacion", 'Int'>
    readonly id_direccion: FieldRef<"ubicacion", 'Int'>
    readonly radio_cobertura: FieldRef<"ubicacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ubicacion findUnique
   */
  export type ubicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findUniqueOrThrow
   */
  export type ubicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion findFirst
   */
  export type ubicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findFirstOrThrow
   */
  export type ubicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacion to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion findMany
   */
  export type ubicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter, which ubicacions to fetch.
     */
    where?: ubicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ubicacions to fetch.
     */
    orderBy?: ubicacionOrderByWithRelationInput | ubicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ubicacions.
     */
    cursor?: ubicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * ubicacion update
   */
  export type ubicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a ubicacion.
     */
    data: XOR<ubicacionUpdateInput, ubicacionUncheckedUpdateInput>
    /**
     * Choose, which ubicacion to update.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion updateMany
   */
  export type ubicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
  }

  /**
   * ubicacion updateManyAndReturn
   */
  export type ubicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * The data used to update ubicacions.
     */
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyInput>
    /**
     * Filter which ubicacions to update
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ubicacion delete
   */
  export type ubicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
    /**
     * Filter which ubicacion to delete.
     */
    where: ubicacionWhereUniqueInput
  }

  /**
   * ubicacion deleteMany
   */
  export type ubicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ubicacions to delete
     */
    where?: ubicacionWhereInput
    /**
     * Limit how many ubicacions to delete.
     */
    limit?: number
  }

  /**
   * ubicacion.direccion
   */
  export type ubicacion$direccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the direccion
     */
    select?: direccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the direccion
     */
    omit?: direccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: direccionInclude<ExtArgs> | null
    where?: direccionWhereInput
  }

  /**
   * ubicacion without action
   */
  export type ubicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ubicacion
     */
    select?: ubicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ubicacion
     */
    omit?: ubicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ubicacionInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    id_ciudad: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    id_ciudad: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha_nacimiento: Date | null
    genero: string | null
    id_ciudad: number | null
    contrasena: string | null
    google_id: string | null
    foto: string | null
    telefono: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha_nacimiento: Date | null
    genero: string | null
    id_ciudad: number | null
    contrasena: string | null
    google_id: string | null
    foto: string | null
    telefono: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    fecha_nacimiento: number
    genero: number
    id_ciudad: number
    contrasena: number
    google_id: number
    foto: number
    telefono: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    id_ciudad?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    id_ciudad?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha_nacimiento?: true
    genero?: true
    id_ciudad?: true
    contrasena?: true
    google_id?: true
    foto?: true
    telefono?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha_nacimiento?: true
    genero?: true
    id_ciudad?: true
    contrasena?: true
    google_id?: true
    foto?: true
    telefono?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha_nacimiento?: true
    genero?: true
    id_ciudad?: true
    contrasena?: true
    google_id?: true
    foto?: true
    telefono?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    fecha_nacimiento: Date | null
    genero: string | null
    id_ciudad: number | null
    contrasena: string
    google_id: string | null
    foto: string | null
    telefono: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    id_ciudad?: boolean
    contrasena?: boolean
    google_id?: boolean
    foto?: boolean
    telefono?: boolean
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    id_ciudad?: boolean
    contrasena?: boolean
    google_id?: boolean
    foto?: boolean
    telefono?: boolean
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    id_ciudad?: boolean
    contrasena?: boolean
    google_id?: boolean
    foto?: boolean
    telefono?: boolean
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha_nacimiento?: boolean
    genero?: boolean
    id_ciudad?: boolean
    contrasena?: boolean
    google_id?: boolean
    foto?: boolean
    telefono?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fecha_nacimiento" | "genero" | "id_ciudad" | "contrasena" | "google_id" | "foto" | "telefono", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
    usuario_rol?: boolean | usuario$usuario_rolArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
  }
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | usuario$ciudadArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      ciudad: Prisma.$ciudadPayload<ExtArgs> | null
      usuario_rol: Prisma.$usuario_rolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fecha_nacimiento: Date | null
      genero: string | null
      id_ciudad: number | null
      contrasena: string
      google_id: string | null
      foto: string | null
      telefono: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudad<T extends usuario$ciudadArgs<ExtArgs> = {}>(args?: Subset<T, usuario$ciudadArgs<ExtArgs>>): Prisma__ciudadClient<$Result.GetResult<Prisma.$ciudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario_rol<T extends usuario$usuario_rolArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuario_rolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly fecha_nacimiento: FieldRef<"usuario", 'DateTime'>
    readonly genero: FieldRef<"usuario", 'String'>
    readonly id_ciudad: FieldRef<"usuario", 'Int'>
    readonly contrasena: FieldRef<"usuario", 'String'>
    readonly google_id: FieldRef<"usuario", 'String'>
    readonly foto: FieldRef<"usuario", 'String'>
    readonly telefono: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.ciudad
   */
  export type usuario$ciudadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ciudad
     */
    select?: ciudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ciudad
     */
    omit?: ciudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ciudadInclude<ExtArgs> | null
    where?: ciudadWhereInput
  }

  /**
   * usuario.usuario_rol
   */
  export type usuario$usuario_rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    cursor?: usuario_rolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_rol
   */

  export type AggregateUsuario_rol = {
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  export type Usuario_rolAvgAggregateOutputType = {
    id: number | null
    id_rol: number | null
    id_usuario: number | null
  }

  export type Usuario_rolSumAggregateOutputType = {
    id: number | null
    id_rol: number | null
    id_usuario: number | null
  }

  export type Usuario_rolMinAggregateOutputType = {
    id: number | null
    id_rol: number | null
    id_usuario: number | null
  }

  export type Usuario_rolMaxAggregateOutputType = {
    id: number | null
    id_rol: number | null
    id_usuario: number | null
  }

  export type Usuario_rolCountAggregateOutputType = {
    id: number
    id_rol: number
    id_usuario: number
    _all: number
  }


  export type Usuario_rolAvgAggregateInputType = {
    id?: true
    id_rol?: true
    id_usuario?: true
  }

  export type Usuario_rolSumAggregateInputType = {
    id?: true
    id_rol?: true
    id_usuario?: true
  }

  export type Usuario_rolMinAggregateInputType = {
    id?: true
    id_rol?: true
    id_usuario?: true
  }

  export type Usuario_rolMaxAggregateInputType = {
    id?: true
    id_rol?: true
    id_usuario?: true
  }

  export type Usuario_rolCountAggregateInputType = {
    id?: true
    id_rol?: true
    id_usuario?: true
    _all?: true
  }

  export type Usuario_rolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rol to aggregate.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_rols
    **/
    _count?: true | Usuario_rolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_rolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_rolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_rolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type GetUsuario_rolAggregateType<T extends Usuario_rolAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_rol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_rol[P]>
      : GetScalarType<T[P], AggregateUsuario_rol[P]>
  }




  export type usuario_rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_rolWhereInput
    orderBy?: usuario_rolOrderByWithAggregationInput | usuario_rolOrderByWithAggregationInput[]
    by: Usuario_rolScalarFieldEnum[] | Usuario_rolScalarFieldEnum
    having?: usuario_rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_rolCountAggregateInputType | true
    _avg?: Usuario_rolAvgAggregateInputType
    _sum?: Usuario_rolSumAggregateInputType
    _min?: Usuario_rolMinAggregateInputType
    _max?: Usuario_rolMaxAggregateInputType
  }

  export type Usuario_rolGroupByOutputType = {
    id: number
    id_rol: number | null
    id_usuario: number | null
    _count: Usuario_rolCountAggregateOutputType | null
    _avg: Usuario_rolAvgAggregateOutputType | null
    _sum: Usuario_rolSumAggregateOutputType | null
    _min: Usuario_rolMinAggregateOutputType | null
    _max: Usuario_rolMaxAggregateOutputType | null
  }

  type GetUsuario_rolGroupByPayload<T extends usuario_rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_rolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_rolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>
        }
      >
    >


  export type usuario_rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rol?: boolean
    id_usuario?: boolean
    carro?: boolean | usuario_rol$carroArgs<ExtArgs>
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
    _count?: boolean | Usuario_rolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rol?: boolean
    id_usuario?: boolean
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rol?: boolean
    id_usuario?: boolean
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_rol"]>

  export type usuario_rolSelectScalar = {
    id?: boolean
    id_rol?: boolean
    id_usuario?: boolean
  }

  export type usuario_rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_rol" | "id_usuario", ExtArgs["result"]["usuario_rol"]>
  export type usuario_rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | usuario_rol$carroArgs<ExtArgs>
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
    _count?: boolean | Usuario_rolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuario_rolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
  }
  export type usuario_rolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | usuario_rol$rolArgs<ExtArgs>
    usuario?: boolean | usuario_rol$usuarioArgs<ExtArgs>
  }

  export type $usuario_rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_rol"
    objects: {
      carro: Prisma.$carroPayload<ExtArgs>[]
      rol: Prisma.$rolPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_rol: number | null
      id_usuario: number | null
    }, ExtArgs["result"]["usuario_rol"]>
    composites: {}
  }

  type usuario_rolGetPayload<S extends boolean | null | undefined | usuario_rolDefaultArgs> = $Result.GetResult<Prisma.$usuario_rolPayload, S>

  type usuario_rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_rolCountAggregateInputType | true
    }

  export interface usuario_rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_rol'], meta: { name: 'usuario_rol' } }
    /**
     * Find zero or one Usuario_rol that matches the filter.
     * @param {usuario_rolFindUniqueArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_rolFindUniqueArgs>(args: SelectSubset<T, usuario_rolFindUniqueArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_rolFindUniqueOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_rolFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_rolFindFirstArgs>(args?: SelectSubset<T, usuario_rolFindFirstArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindFirstOrThrowArgs} args - Arguments to find a Usuario_rol
     * @example
     * // Get one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_rolFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany()
     * 
     * // Get first 10 Usuario_rols
     * const usuario_rols = await prisma.usuario_rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuario_rolWithIdOnly = await prisma.usuario_rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuario_rolFindManyArgs>(args?: SelectSubset<T, usuario_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_rol.
     * @param {usuario_rolCreateArgs} args - Arguments to create a Usuario_rol.
     * @example
     * // Create one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.create({
     *   data: {
     *     // ... data to create a Usuario_rol
     *   }
     * })
     * 
     */
    create<T extends usuario_rolCreateArgs>(args: SelectSubset<T, usuario_rolCreateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_rols.
     * @param {usuario_rolCreateManyArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_rolCreateManyArgs>(args?: SelectSubset<T, usuario_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_rols and returns the data saved in the database.
     * @param {usuario_rolCreateManyAndReturnArgs} args - Arguments to create many Usuario_rols.
     * @example
     * // Create many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_rols and only return the `id`
     * const usuario_rolWithIdOnly = await prisma.usuario_rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_rolCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_rol.
     * @param {usuario_rolDeleteArgs} args - Arguments to delete one Usuario_rol.
     * @example
     * // Delete one Usuario_rol
     * const Usuario_rol = await prisma.usuario_rol.delete({
     *   where: {
     *     // ... filter to delete one Usuario_rol
     *   }
     * })
     * 
     */
    delete<T extends usuario_rolDeleteArgs>(args: SelectSubset<T, usuario_rolDeleteArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_rol.
     * @param {usuario_rolUpdateArgs} args - Arguments to update one Usuario_rol.
     * @example
     * // Update one Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_rolUpdateArgs>(args: SelectSubset<T, usuario_rolUpdateArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_rols.
     * @param {usuario_rolDeleteManyArgs} args - Arguments to filter Usuario_rols to delete.
     * @example
     * // Delete a few Usuario_rols
     * const { count } = await prisma.usuario_rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_rolDeleteManyArgs>(args?: SelectSubset<T, usuario_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_rolUpdateManyArgs>(args: SelectSubset<T, usuario_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_rols and returns the data updated in the database.
     * @param {usuario_rolUpdateManyAndReturnArgs} args - Arguments to update many Usuario_rols.
     * @example
     * // Update many Usuario_rols
     * const usuario_rol = await prisma.usuario_rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_rols and only return the `id`
     * const usuario_rolWithIdOnly = await prisma.usuario_rol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuario_rolUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_rol.
     * @param {usuario_rolUpsertArgs} args - Arguments to update or create a Usuario_rol.
     * @example
     * // Update or create a Usuario_rol
     * const usuario_rol = await prisma.usuario_rol.upsert({
     *   create: {
     *     // ... data to create a Usuario_rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_rol we want to update
     *   }
     * })
     */
    upsert<T extends usuario_rolUpsertArgs>(args: SelectSubset<T, usuario_rolUpsertArgs<ExtArgs>>): Prisma__usuario_rolClient<$Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolCountArgs} args - Arguments to filter Usuario_rols to count.
     * @example
     * // Count the number of Usuario_rols
     * const count = await prisma.usuario_rol.count({
     *   where: {
     *     // ... the filter for the Usuario_rols we want to count
     *   }
     * })
    **/
    count<T extends usuario_rolCountArgs>(
      args?: Subset<T, usuario_rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_rolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_rolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuario_rolAggregateArgs>(args: Subset<T, Usuario_rolAggregateArgs>): Prisma.PrismaPromise<GetUsuario_rolAggregateType<T>>

    /**
     * Group by Usuario_rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_rolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuario_rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_rolGroupByArgs['orderBy'] }
        : { orderBy?: usuario_rolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuario_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_rol model
   */
  readonly fields: usuario_rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carro<T extends usuario_rol$carroArgs<ExtArgs> = {}>(args?: Subset<T, usuario_rol$carroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rol<T extends usuario_rol$rolArgs<ExtArgs> = {}>(args?: Subset<T, usuario_rol$rolArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuario_rol$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuario_rol$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario_rol model
   */
  interface usuario_rolFieldRefs {
    readonly id: FieldRef<"usuario_rol", 'Int'>
    readonly id_rol: FieldRef<"usuario_rol", 'Int'>
    readonly id_usuario: FieldRef<"usuario_rol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario_rol findUnique
   */
  export type usuario_rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findUniqueOrThrow
   */
  export type usuario_rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol findFirst
   */
  export type usuario_rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findFirstOrThrow
   */
  export type usuario_rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rol to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_rols.
     */
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol findMany
   */
  export type usuario_rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter, which usuario_rols to fetch.
     */
    where?: usuario_rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_rols to fetch.
     */
    orderBy?: usuario_rolOrderByWithRelationInput | usuario_rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_rols.
     */
    cursor?: usuario_rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_rols.
     */
    skip?: number
    distinct?: Usuario_rolScalarFieldEnum | Usuario_rolScalarFieldEnum[]
  }

  /**
   * usuario_rol create
   */
  export type usuario_rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_rol.
     */
    data?: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
  }

  /**
   * usuario_rol createMany
   */
  export type usuario_rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_rol createManyAndReturn
   */
  export type usuario_rolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_rols.
     */
    data: usuario_rolCreateManyInput | usuario_rolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol update
   */
  export type usuario_rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_rol.
     */
    data: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
    /**
     * Choose, which usuario_rol to update.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol updateMany
   */
  export type usuario_rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
  }

  /**
   * usuario_rol updateManyAndReturn
   */
  export type usuario_rolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * The data used to update usuario_rols.
     */
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyInput>
    /**
     * Filter which usuario_rols to update
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_rol upsert
   */
  export type usuario_rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_rol to update in case it exists.
     */
    where: usuario_rolWhereUniqueInput
    /**
     * In case the usuario_rol found by the `where` argument doesn't exist, create a new usuario_rol with this data.
     */
    create: XOR<usuario_rolCreateInput, usuario_rolUncheckedCreateInput>
    /**
     * In case the usuario_rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_rolUpdateInput, usuario_rolUncheckedUpdateInput>
  }

  /**
   * usuario_rol delete
   */
  export type usuario_rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
    /**
     * Filter which usuario_rol to delete.
     */
    where: usuario_rolWhereUniqueInput
  }

  /**
   * usuario_rol deleteMany
   */
  export type usuario_rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_rols to delete
     */
    where?: usuario_rolWhereInput
    /**
     * Limit how many usuario_rols to delete.
     */
    limit?: number
  }

  /**
   * usuario_rol.carro
   */
  export type usuario_rol$carroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro
     */
    select?: carroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro
     */
    omit?: carroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carroInclude<ExtArgs> | null
    where?: carroWhereInput
    orderBy?: carroOrderByWithRelationInput | carroOrderByWithRelationInput[]
    cursor?: carroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarroScalarFieldEnum | CarroScalarFieldEnum[]
  }

  /**
   * usuario_rol.rol
   */
  export type usuario_rol$rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    where?: rolWhereInput
  }

  /**
   * usuario_rol.usuario
   */
  export type usuario_rol$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * usuario_rol without action
   */
  export type usuario_rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_rol
     */
    select?: usuario_rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_rol
     */
    omit?: usuario_rolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_rolInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Caracteristicas_adicionalesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type Caracteristicas_adicionalesScalarFieldEnum = (typeof Caracteristicas_adicionalesScalarFieldEnum)[keyof typeof Caracteristicas_adicionalesScalarFieldEnum]


  export const CaracteristicasadicionalescarroScalarFieldEnum: {
    id: 'id',
    id_carro: 'id_carro',
    id_caracteristicas_adicionales: 'id_caracteristicas_adicionales'
  };

  export type CaracteristicasadicionalescarroScalarFieldEnum = (typeof CaracteristicasadicionalescarroScalarFieldEnum)[keyof typeof CaracteristicasadicionalescarroScalarFieldEnum]


  export const CarroScalarFieldEnum: {
    id: 'id',
    vim: 'vim',
    anio: 'anio',
    marca: 'marca',
    modelo: 'modelo',
    placa: 'placa',
    id_direccion: 'id_direccion',
    asientos: 'asientos',
    puertas: 'puertas',
    soat: 'soat',
    precio_por_dia: 'precio_por_dia',
    num_mantenimientos: 'num_mantenimientos',
    transmision: 'transmision',
    estado: 'estado',
    id_usuario_rol: 'id_usuario_rol'
  };

  export type CarroScalarFieldEnum = (typeof CarroScalarFieldEnum)[keyof typeof CarroScalarFieldEnum]


  export const CiudadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    id_pais: 'id_pais'
  };

  export type CiudadScalarFieldEnum = (typeof CiudadScalarFieldEnum)[keyof typeof CiudadScalarFieldEnum]


  export const CombustiblecarroScalarFieldEnum: {
    id: 'id',
    id_tipo_combustible: 'id_tipo_combustible',
    id_carro: 'id_carro'
  };

  export type CombustiblecarroScalarFieldEnum = (typeof CombustiblecarroScalarFieldEnum)[keyof typeof CombustiblecarroScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    id_provincia: 'id_provincia',
    calle: 'calle',
    zona: 'zona',
    num_casa: 'num_casa'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const ImagenScalarFieldEnum: {
    id: 'id',
    data: 'data',
    id_carro: 'id_carro'
  };

  export type ImagenScalarFieldEnum = (typeof ImagenScalarFieldEnum)[keyof typeof ImagenScalarFieldEnum]


  export const PaisScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PaisScalarFieldEnum = (typeof PaisScalarFieldEnum)[keyof typeof PaisScalarFieldEnum]


  export const ProvinciaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    id_ciudad: 'id_ciudad'
  };

  export type ProvinciaScalarFieldEnum = (typeof ProvinciaScalarFieldEnum)[keyof typeof ProvinciaScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    rol: 'rol'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id_test: 'id_test',
    namet: 'namet',
    descripcion: 'descripcion'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TipocombustibleScalarFieldEnum: {
    id: 'id',
    tipo_de_combustible: 'tipo_de_combustible'
  };

  export type TipocombustibleScalarFieldEnum = (typeof TipocombustibleScalarFieldEnum)[keyof typeof TipocombustibleScalarFieldEnum]


  export const UbicacionScalarFieldEnum: {
    id: 'id',
    id_direccion: 'id_direccion',
    radio_cobertura: 'radio_cobertura'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha_nacimiento: 'fecha_nacimiento',
    genero: 'genero',
    id_ciudad: 'id_ciudad',
    contrasena: 'contrasena',
    google_id: 'google_id',
    foto: 'foto',
    telefono: 'telefono'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_rolScalarFieldEnum: {
    id: 'id',
    id_rol: 'id_rol',
    id_usuario: 'id_usuario'
  };

  export type Usuario_rolScalarFieldEnum = (typeof Usuario_rolScalarFieldEnum)[keyof typeof Usuario_rolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type caracteristicas_adicionalesWhereInput = {
    AND?: caracteristicas_adicionalesWhereInput | caracteristicas_adicionalesWhereInput[]
    OR?: caracteristicas_adicionalesWhereInput[]
    NOT?: caracteristicas_adicionalesWhereInput | caracteristicas_adicionalesWhereInput[]
    id?: IntFilter<"caracteristicas_adicionales"> | number
    nombre?: StringFilter<"caracteristicas_adicionales"> | string
    caracteristicasadicionalescarro?: CaracteristicasadicionalescarroListRelationFilter
  }

  export type caracteristicas_adicionalesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroOrderByRelationAggregateInput
  }

  export type caracteristicas_adicionalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: caracteristicas_adicionalesWhereInput | caracteristicas_adicionalesWhereInput[]
    OR?: caracteristicas_adicionalesWhereInput[]
    NOT?: caracteristicas_adicionalesWhereInput | caracteristicas_adicionalesWhereInput[]
    caracteristicasadicionalescarro?: CaracteristicasadicionalescarroListRelationFilter
  }, "id" | "nombre">

  export type caracteristicas_adicionalesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: caracteristicas_adicionalesCountOrderByAggregateInput
    _avg?: caracteristicas_adicionalesAvgOrderByAggregateInput
    _max?: caracteristicas_adicionalesMaxOrderByAggregateInput
    _min?: caracteristicas_adicionalesMinOrderByAggregateInput
    _sum?: caracteristicas_adicionalesSumOrderByAggregateInput
  }

  export type caracteristicas_adicionalesScalarWhereWithAggregatesInput = {
    AND?: caracteristicas_adicionalesScalarWhereWithAggregatesInput | caracteristicas_adicionalesScalarWhereWithAggregatesInput[]
    OR?: caracteristicas_adicionalesScalarWhereWithAggregatesInput[]
    NOT?: caracteristicas_adicionalesScalarWhereWithAggregatesInput | caracteristicas_adicionalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"caracteristicas_adicionales"> | number
    nombre?: StringWithAggregatesFilter<"caracteristicas_adicionales"> | string
  }

  export type caracteristicasadicionalescarroWhereInput = {
    AND?: caracteristicasadicionalescarroWhereInput | caracteristicasadicionalescarroWhereInput[]
    OR?: caracteristicasadicionalescarroWhereInput[]
    NOT?: caracteristicasadicionalescarroWhereInput | caracteristicasadicionalescarroWhereInput[]
    id?: IntFilter<"caracteristicasadicionalescarro"> | number
    id_carro?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
    id_caracteristicas_adicionales?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
    caracteristicas_adicionales?: XOR<Caracteristicas_adicionalesNullableScalarRelationFilter, caracteristicas_adicionalesWhereInput> | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
  }

  export type caracteristicasadicionalescarroOrderByWithRelationInput = {
    id?: SortOrder
    id_carro?: SortOrderInput | SortOrder
    id_caracteristicas_adicionales?: SortOrderInput | SortOrder
    caracteristicas_adicionales?: caracteristicas_adicionalesOrderByWithRelationInput
    carro?: carroOrderByWithRelationInput
  }

  export type caracteristicasadicionalescarroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: caracteristicasadicionalescarroWhereInput | caracteristicasadicionalescarroWhereInput[]
    OR?: caracteristicasadicionalescarroWhereInput[]
    NOT?: caracteristicasadicionalescarroWhereInput | caracteristicasadicionalescarroWhereInput[]
    id_carro?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
    id_caracteristicas_adicionales?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
    caracteristicas_adicionales?: XOR<Caracteristicas_adicionalesNullableScalarRelationFilter, caracteristicas_adicionalesWhereInput> | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
  }, "id">

  export type caracteristicasadicionalescarroOrderByWithAggregationInput = {
    id?: SortOrder
    id_carro?: SortOrderInput | SortOrder
    id_caracteristicas_adicionales?: SortOrderInput | SortOrder
    _count?: caracteristicasadicionalescarroCountOrderByAggregateInput
    _avg?: caracteristicasadicionalescarroAvgOrderByAggregateInput
    _max?: caracteristicasadicionalescarroMaxOrderByAggregateInput
    _min?: caracteristicasadicionalescarroMinOrderByAggregateInput
    _sum?: caracteristicasadicionalescarroSumOrderByAggregateInput
  }

  export type caracteristicasadicionalescarroScalarWhereWithAggregatesInput = {
    AND?: caracteristicasadicionalescarroScalarWhereWithAggregatesInput | caracteristicasadicionalescarroScalarWhereWithAggregatesInput[]
    OR?: caracteristicasadicionalescarroScalarWhereWithAggregatesInput[]
    NOT?: caracteristicasadicionalescarroScalarWhereWithAggregatesInput | caracteristicasadicionalescarroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"caracteristicasadicionalescarro"> | number
    id_carro?: IntNullableWithAggregatesFilter<"caracteristicasadicionalescarro"> | number | null
    id_caracteristicas_adicionales?: IntNullableWithAggregatesFilter<"caracteristicasadicionalescarro"> | number | null
  }

  export type carroWhereInput = {
    AND?: carroWhereInput | carroWhereInput[]
    OR?: carroWhereInput[]
    NOT?: carroWhereInput | carroWhereInput[]
    id?: IntFilter<"carro"> | number
    vim?: StringFilter<"carro"> | string
    anio?: IntNullableFilter<"carro"> | number | null
    marca?: StringNullableFilter<"carro"> | string | null
    modelo?: StringNullableFilter<"carro"> | string | null
    placa?: StringFilter<"carro"> | string
    id_direccion?: IntNullableFilter<"carro"> | number | null
    asientos?: IntNullableFilter<"carro"> | number | null
    puertas?: IntNullableFilter<"carro"> | number | null
    soat?: BoolNullableFilter<"carro"> | boolean | null
    precio_por_dia?: DecimalNullableFilter<"carro"> | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: IntNullableFilter<"carro"> | number | null
    transmision?: StringNullableFilter<"carro"> | string | null
    estado?: StringNullableFilter<"carro"> | string | null
    id_usuario_rol?: IntNullableFilter<"carro"> | number | null
    caracteristicasadicionalescarro?: CaracteristicasadicionalescarroListRelationFilter
    direccion?: XOR<DireccionNullableScalarRelationFilter, direccionWhereInput> | null
    usuario_rol?: XOR<Usuario_rolNullableScalarRelationFilter, usuario_rolWhereInput> | null
    combustiblecarro?: CombustiblecarroListRelationFilter
    imagen?: ImagenListRelationFilter
  }

  export type carroOrderByWithRelationInput = {
    id?: SortOrder
    vim?: SortOrder
    anio?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    placa?: SortOrder
    id_direccion?: SortOrderInput | SortOrder
    asientos?: SortOrderInput | SortOrder
    puertas?: SortOrderInput | SortOrder
    soat?: SortOrderInput | SortOrder
    precio_por_dia?: SortOrderInput | SortOrder
    num_mantenimientos?: SortOrderInput | SortOrder
    transmision?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    id_usuario_rol?: SortOrderInput | SortOrder
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroOrderByRelationAggregateInput
    direccion?: direccionOrderByWithRelationInput
    usuario_rol?: usuario_rolOrderByWithRelationInput
    combustiblecarro?: combustiblecarroOrderByRelationAggregateInput
    imagen?: imagenOrderByRelationAggregateInput
  }

  export type carroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vim?: string
    placa?: string
    AND?: carroWhereInput | carroWhereInput[]
    OR?: carroWhereInput[]
    NOT?: carroWhereInput | carroWhereInput[]
    anio?: IntNullableFilter<"carro"> | number | null
    marca?: StringNullableFilter<"carro"> | string | null
    modelo?: StringNullableFilter<"carro"> | string | null
    id_direccion?: IntNullableFilter<"carro"> | number | null
    asientos?: IntNullableFilter<"carro"> | number | null
    puertas?: IntNullableFilter<"carro"> | number | null
    soat?: BoolNullableFilter<"carro"> | boolean | null
    precio_por_dia?: DecimalNullableFilter<"carro"> | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: IntNullableFilter<"carro"> | number | null
    transmision?: StringNullableFilter<"carro"> | string | null
    estado?: StringNullableFilter<"carro"> | string | null
    id_usuario_rol?: IntNullableFilter<"carro"> | number | null
    caracteristicasadicionalescarro?: CaracteristicasadicionalescarroListRelationFilter
    direccion?: XOR<DireccionNullableScalarRelationFilter, direccionWhereInput> | null
    usuario_rol?: XOR<Usuario_rolNullableScalarRelationFilter, usuario_rolWhereInput> | null
    combustiblecarro?: CombustiblecarroListRelationFilter
    imagen?: ImagenListRelationFilter
  }, "id" | "vim" | "placa">

  export type carroOrderByWithAggregationInput = {
    id?: SortOrder
    vim?: SortOrder
    anio?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    placa?: SortOrder
    id_direccion?: SortOrderInput | SortOrder
    asientos?: SortOrderInput | SortOrder
    puertas?: SortOrderInput | SortOrder
    soat?: SortOrderInput | SortOrder
    precio_por_dia?: SortOrderInput | SortOrder
    num_mantenimientos?: SortOrderInput | SortOrder
    transmision?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    id_usuario_rol?: SortOrderInput | SortOrder
    _count?: carroCountOrderByAggregateInput
    _avg?: carroAvgOrderByAggregateInput
    _max?: carroMaxOrderByAggregateInput
    _min?: carroMinOrderByAggregateInput
    _sum?: carroSumOrderByAggregateInput
  }

  export type carroScalarWhereWithAggregatesInput = {
    AND?: carroScalarWhereWithAggregatesInput | carroScalarWhereWithAggregatesInput[]
    OR?: carroScalarWhereWithAggregatesInput[]
    NOT?: carroScalarWhereWithAggregatesInput | carroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carro"> | number
    vim?: StringWithAggregatesFilter<"carro"> | string
    anio?: IntNullableWithAggregatesFilter<"carro"> | number | null
    marca?: StringNullableWithAggregatesFilter<"carro"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"carro"> | string | null
    placa?: StringWithAggregatesFilter<"carro"> | string
    id_direccion?: IntNullableWithAggregatesFilter<"carro"> | number | null
    asientos?: IntNullableWithAggregatesFilter<"carro"> | number | null
    puertas?: IntNullableWithAggregatesFilter<"carro"> | number | null
    soat?: BoolNullableWithAggregatesFilter<"carro"> | boolean | null
    precio_por_dia?: DecimalNullableWithAggregatesFilter<"carro"> | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: IntNullableWithAggregatesFilter<"carro"> | number | null
    transmision?: StringNullableWithAggregatesFilter<"carro"> | string | null
    estado?: StringNullableWithAggregatesFilter<"carro"> | string | null
    id_usuario_rol?: IntNullableWithAggregatesFilter<"carro"> | number | null
  }

  export type ciudadWhereInput = {
    AND?: ciudadWhereInput | ciudadWhereInput[]
    OR?: ciudadWhereInput[]
    NOT?: ciudadWhereInput | ciudadWhereInput[]
    id?: IntFilter<"ciudad"> | number
    nombre?: StringFilter<"ciudad"> | string
    id_pais?: IntNullableFilter<"ciudad"> | number | null
    pais?: XOR<PaisNullableScalarRelationFilter, paisWhereInput> | null
    provincia?: ProvinciaListRelationFilter
    usuario?: UsuarioListRelationFilter
  }

  export type ciudadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrderInput | SortOrder
    pais?: paisOrderByWithRelationInput
    provincia?: provinciaOrderByRelationAggregateInput
    usuario?: usuarioOrderByRelationAggregateInput
  }

  export type ciudadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ciudadWhereInput | ciudadWhereInput[]
    OR?: ciudadWhereInput[]
    NOT?: ciudadWhereInput | ciudadWhereInput[]
    nombre?: StringFilter<"ciudad"> | string
    id_pais?: IntNullableFilter<"ciudad"> | number | null
    pais?: XOR<PaisNullableScalarRelationFilter, paisWhereInput> | null
    provincia?: ProvinciaListRelationFilter
    usuario?: UsuarioListRelationFilter
  }, "id">

  export type ciudadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrderInput | SortOrder
    _count?: ciudadCountOrderByAggregateInput
    _avg?: ciudadAvgOrderByAggregateInput
    _max?: ciudadMaxOrderByAggregateInput
    _min?: ciudadMinOrderByAggregateInput
    _sum?: ciudadSumOrderByAggregateInput
  }

  export type ciudadScalarWhereWithAggregatesInput = {
    AND?: ciudadScalarWhereWithAggregatesInput | ciudadScalarWhereWithAggregatesInput[]
    OR?: ciudadScalarWhereWithAggregatesInput[]
    NOT?: ciudadScalarWhereWithAggregatesInput | ciudadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ciudad"> | number
    nombre?: StringWithAggregatesFilter<"ciudad"> | string
    id_pais?: IntNullableWithAggregatesFilter<"ciudad"> | number | null
  }

  export type combustiblecarroWhereInput = {
    AND?: combustiblecarroWhereInput | combustiblecarroWhereInput[]
    OR?: combustiblecarroWhereInput[]
    NOT?: combustiblecarroWhereInput | combustiblecarroWhereInput[]
    id?: IntFilter<"combustiblecarro"> | number
    id_tipo_combustible?: IntNullableFilter<"combustiblecarro"> | number | null
    id_carro?: IntNullableFilter<"combustiblecarro"> | number | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
    tipocombustible?: XOR<TipocombustibleNullableScalarRelationFilter, tipocombustibleWhereInput> | null
  }

  export type combustiblecarroOrderByWithRelationInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrderInput | SortOrder
    id_carro?: SortOrderInput | SortOrder
    carro?: carroOrderByWithRelationInput
    tipocombustible?: tipocombustibleOrderByWithRelationInput
  }

  export type combustiblecarroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: combustiblecarroWhereInput | combustiblecarroWhereInput[]
    OR?: combustiblecarroWhereInput[]
    NOT?: combustiblecarroWhereInput | combustiblecarroWhereInput[]
    id_tipo_combustible?: IntNullableFilter<"combustiblecarro"> | number | null
    id_carro?: IntNullableFilter<"combustiblecarro"> | number | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
    tipocombustible?: XOR<TipocombustibleNullableScalarRelationFilter, tipocombustibleWhereInput> | null
  }, "id">

  export type combustiblecarroOrderByWithAggregationInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrderInput | SortOrder
    id_carro?: SortOrderInput | SortOrder
    _count?: combustiblecarroCountOrderByAggregateInput
    _avg?: combustiblecarroAvgOrderByAggregateInput
    _max?: combustiblecarroMaxOrderByAggregateInput
    _min?: combustiblecarroMinOrderByAggregateInput
    _sum?: combustiblecarroSumOrderByAggregateInput
  }

  export type combustiblecarroScalarWhereWithAggregatesInput = {
    AND?: combustiblecarroScalarWhereWithAggregatesInput | combustiblecarroScalarWhereWithAggregatesInput[]
    OR?: combustiblecarroScalarWhereWithAggregatesInput[]
    NOT?: combustiblecarroScalarWhereWithAggregatesInput | combustiblecarroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"combustiblecarro"> | number
    id_tipo_combustible?: IntNullableWithAggregatesFilter<"combustiblecarro"> | number | null
    id_carro?: IntNullableWithAggregatesFilter<"combustiblecarro"> | number | null
  }

  export type direccionWhereInput = {
    AND?: direccionWhereInput | direccionWhereInput[]
    OR?: direccionWhereInput[]
    NOT?: direccionWhereInput | direccionWhereInput[]
    id?: IntFilter<"direccion"> | number
    id_provincia?: IntNullableFilter<"direccion"> | number | null
    calle?: StringNullableFilter<"direccion"> | string | null
    zona?: StringNullableFilter<"direccion"> | string | null
    num_casa?: StringNullableFilter<"direccion"> | string | null
    carro?: CarroListRelationFilter
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, provinciaWhereInput> | null
    ubicacion?: UbicacionListRelationFilter
  }

  export type direccionOrderByWithRelationInput = {
    id?: SortOrder
    id_provincia?: SortOrderInput | SortOrder
    calle?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    num_casa?: SortOrderInput | SortOrder
    carro?: carroOrderByRelationAggregateInput
    provincia?: provinciaOrderByWithRelationInput
    ubicacion?: ubicacionOrderByRelationAggregateInput
  }

  export type direccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: direccionWhereInput | direccionWhereInput[]
    OR?: direccionWhereInput[]
    NOT?: direccionWhereInput | direccionWhereInput[]
    id_provincia?: IntNullableFilter<"direccion"> | number | null
    calle?: StringNullableFilter<"direccion"> | string | null
    zona?: StringNullableFilter<"direccion"> | string | null
    num_casa?: StringNullableFilter<"direccion"> | string | null
    carro?: CarroListRelationFilter
    provincia?: XOR<ProvinciaNullableScalarRelationFilter, provinciaWhereInput> | null
    ubicacion?: UbicacionListRelationFilter
  }, "id">

  export type direccionOrderByWithAggregationInput = {
    id?: SortOrder
    id_provincia?: SortOrderInput | SortOrder
    calle?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    num_casa?: SortOrderInput | SortOrder
    _count?: direccionCountOrderByAggregateInput
    _avg?: direccionAvgOrderByAggregateInput
    _max?: direccionMaxOrderByAggregateInput
    _min?: direccionMinOrderByAggregateInput
    _sum?: direccionSumOrderByAggregateInput
  }

  export type direccionScalarWhereWithAggregatesInput = {
    AND?: direccionScalarWhereWithAggregatesInput | direccionScalarWhereWithAggregatesInput[]
    OR?: direccionScalarWhereWithAggregatesInput[]
    NOT?: direccionScalarWhereWithAggregatesInput | direccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"direccion"> | number
    id_provincia?: IntNullableWithAggregatesFilter<"direccion"> | number | null
    calle?: StringNullableWithAggregatesFilter<"direccion"> | string | null
    zona?: StringNullableWithAggregatesFilter<"direccion"> | string | null
    num_casa?: StringNullableWithAggregatesFilter<"direccion"> | string | null
  }

  export type imagenWhereInput = {
    AND?: imagenWhereInput | imagenWhereInput[]
    OR?: imagenWhereInput[]
    NOT?: imagenWhereInput | imagenWhereInput[]
    id?: IntFilter<"imagen"> | number
    data?: StringFilter<"imagen"> | string
    id_carro?: IntNullableFilter<"imagen"> | number | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
  }

  export type imagenOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    id_carro?: SortOrderInput | SortOrder
    carro?: carroOrderByWithRelationInput
  }

  export type imagenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imagenWhereInput | imagenWhereInput[]
    OR?: imagenWhereInput[]
    NOT?: imagenWhereInput | imagenWhereInput[]
    data?: StringFilter<"imagen"> | string
    id_carro?: IntNullableFilter<"imagen"> | number | null
    carro?: XOR<CarroNullableScalarRelationFilter, carroWhereInput> | null
  }, "id">

  export type imagenOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    id_carro?: SortOrderInput | SortOrder
    _count?: imagenCountOrderByAggregateInput
    _avg?: imagenAvgOrderByAggregateInput
    _max?: imagenMaxOrderByAggregateInput
    _min?: imagenMinOrderByAggregateInput
    _sum?: imagenSumOrderByAggregateInput
  }

  export type imagenScalarWhereWithAggregatesInput = {
    AND?: imagenScalarWhereWithAggregatesInput | imagenScalarWhereWithAggregatesInput[]
    OR?: imagenScalarWhereWithAggregatesInput[]
    NOT?: imagenScalarWhereWithAggregatesInput | imagenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"imagen"> | number
    data?: StringWithAggregatesFilter<"imagen"> | string
    id_carro?: IntNullableWithAggregatesFilter<"imagen"> | number | null
  }

  export type paisWhereInput = {
    AND?: paisWhereInput | paisWhereInput[]
    OR?: paisWhereInput[]
    NOT?: paisWhereInput | paisWhereInput[]
    id?: IntFilter<"pais"> | number
    nombre?: StringFilter<"pais"> | string
    ciudad?: CiudadListRelationFilter
  }

  export type paisOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: ciudadOrderByRelationAggregateInput
  }

  export type paisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: paisWhereInput | paisWhereInput[]
    OR?: paisWhereInput[]
    NOT?: paisWhereInput | paisWhereInput[]
    ciudad?: CiudadListRelationFilter
  }, "id" | "nombre">

  export type paisOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: paisCountOrderByAggregateInput
    _avg?: paisAvgOrderByAggregateInput
    _max?: paisMaxOrderByAggregateInput
    _min?: paisMinOrderByAggregateInput
    _sum?: paisSumOrderByAggregateInput
  }

  export type paisScalarWhereWithAggregatesInput = {
    AND?: paisScalarWhereWithAggregatesInput | paisScalarWhereWithAggregatesInput[]
    OR?: paisScalarWhereWithAggregatesInput[]
    NOT?: paisScalarWhereWithAggregatesInput | paisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pais"> | number
    nombre?: StringWithAggregatesFilter<"pais"> | string
  }

  export type provinciaWhereInput = {
    AND?: provinciaWhereInput | provinciaWhereInput[]
    OR?: provinciaWhereInput[]
    NOT?: provinciaWhereInput | provinciaWhereInput[]
    id?: IntFilter<"provincia"> | number
    nombre?: StringFilter<"provincia"> | string
    id_ciudad?: IntNullableFilter<"provincia"> | number | null
    direccion?: DireccionListRelationFilter
    ciudad?: XOR<CiudadNullableScalarRelationFilter, ciudadWhereInput> | null
  }

  export type provinciaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_ciudad?: SortOrderInput | SortOrder
    direccion?: direccionOrderByRelationAggregateInput
    ciudad?: ciudadOrderByWithRelationInput
  }

  export type provinciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: provinciaWhereInput | provinciaWhereInput[]
    OR?: provinciaWhereInput[]
    NOT?: provinciaWhereInput | provinciaWhereInput[]
    nombre?: StringFilter<"provincia"> | string
    id_ciudad?: IntNullableFilter<"provincia"> | number | null
    direccion?: DireccionListRelationFilter
    ciudad?: XOR<CiudadNullableScalarRelationFilter, ciudadWhereInput> | null
  }, "id">

  export type provinciaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_ciudad?: SortOrderInput | SortOrder
    _count?: provinciaCountOrderByAggregateInput
    _avg?: provinciaAvgOrderByAggregateInput
    _max?: provinciaMaxOrderByAggregateInput
    _min?: provinciaMinOrderByAggregateInput
    _sum?: provinciaSumOrderByAggregateInput
  }

  export type provinciaScalarWhereWithAggregatesInput = {
    AND?: provinciaScalarWhereWithAggregatesInput | provinciaScalarWhereWithAggregatesInput[]
    OR?: provinciaScalarWhereWithAggregatesInput[]
    NOT?: provinciaScalarWhereWithAggregatesInput | provinciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"provincia"> | number
    nombre?: StringWithAggregatesFilter<"provincia"> | string
    id_ciudad?: IntNullableWithAggregatesFilter<"provincia"> | number | null
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id?: IntFilter<"rol"> | number
    rol?: StringFilter<"rol"> | string
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id?: SortOrder
    rol?: SortOrder
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    rol?: StringFilter<"rol"> | string
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id">

  export type rolOrderByWithAggregationInput = {
    id?: SortOrder
    rol?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rol"> | number
    rol?: StringWithAggregatesFilter<"rol"> | string
  }

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    id_test?: IntFilter<"test"> | number
    namet?: StringNullableFilter<"test"> | string | null
    descripcion?: StringNullableFilter<"test"> | string | null
  }

  export type testOrderByWithRelationInput = {
    id_test?: SortOrder
    namet?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
  }

  export type testWhereUniqueInput = Prisma.AtLeast<{
    id_test?: number
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    namet?: StringNullableFilter<"test"> | string | null
    descripcion?: StringNullableFilter<"test"> | string | null
  }, "id_test">

  export type testOrderByWithAggregationInput = {
    id_test?: SortOrder
    namet?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: testCountOrderByAggregateInput
    _avg?: testAvgOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
    _sum?: testSumOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    OR?: testScalarWhereWithAggregatesInput[]
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    id_test?: IntWithAggregatesFilter<"test"> | number
    namet?: StringNullableWithAggregatesFilter<"test"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"test"> | string | null
  }

  export type tipocombustibleWhereInput = {
    AND?: tipocombustibleWhereInput | tipocombustibleWhereInput[]
    OR?: tipocombustibleWhereInput[]
    NOT?: tipocombustibleWhereInput | tipocombustibleWhereInput[]
    id?: IntFilter<"tipocombustible"> | number
    tipo_de_combustible?: StringFilter<"tipocombustible"> | string
    combustiblecarro?: CombustiblecarroListRelationFilter
  }

  export type tipocombustibleOrderByWithRelationInput = {
    id?: SortOrder
    tipo_de_combustible?: SortOrder
    combustiblecarro?: combustiblecarroOrderByRelationAggregateInput
  }

  export type tipocombustibleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tipo_de_combustible?: string
    AND?: tipocombustibleWhereInput | tipocombustibleWhereInput[]
    OR?: tipocombustibleWhereInput[]
    NOT?: tipocombustibleWhereInput | tipocombustibleWhereInput[]
    combustiblecarro?: CombustiblecarroListRelationFilter
  }, "id" | "tipo_de_combustible">

  export type tipocombustibleOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_de_combustible?: SortOrder
    _count?: tipocombustibleCountOrderByAggregateInput
    _avg?: tipocombustibleAvgOrderByAggregateInput
    _max?: tipocombustibleMaxOrderByAggregateInput
    _min?: tipocombustibleMinOrderByAggregateInput
    _sum?: tipocombustibleSumOrderByAggregateInput
  }

  export type tipocombustibleScalarWhereWithAggregatesInput = {
    AND?: tipocombustibleScalarWhereWithAggregatesInput | tipocombustibleScalarWhereWithAggregatesInput[]
    OR?: tipocombustibleScalarWhereWithAggregatesInput[]
    NOT?: tipocombustibleScalarWhereWithAggregatesInput | tipocombustibleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipocombustible"> | number
    tipo_de_combustible?: StringWithAggregatesFilter<"tipocombustible"> | string
  }

  export type ubicacionWhereInput = {
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    id?: IntFilter<"ubicacion"> | number
    id_direccion?: IntNullableFilter<"ubicacion"> | number | null
    radio_cobertura?: IntNullableFilter<"ubicacion"> | number | null
    direccion?: XOR<DireccionNullableScalarRelationFilter, direccionWhereInput> | null
  }

  export type ubicacionOrderByWithRelationInput = {
    id?: SortOrder
    id_direccion?: SortOrderInput | SortOrder
    radio_cobertura?: SortOrderInput | SortOrder
    direccion?: direccionOrderByWithRelationInput
  }

  export type ubicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ubicacionWhereInput | ubicacionWhereInput[]
    OR?: ubicacionWhereInput[]
    NOT?: ubicacionWhereInput | ubicacionWhereInput[]
    id_direccion?: IntNullableFilter<"ubicacion"> | number | null
    radio_cobertura?: IntNullableFilter<"ubicacion"> | number | null
    direccion?: XOR<DireccionNullableScalarRelationFilter, direccionWhereInput> | null
  }, "id">

  export type ubicacionOrderByWithAggregationInput = {
    id?: SortOrder
    id_direccion?: SortOrderInput | SortOrder
    radio_cobertura?: SortOrderInput | SortOrder
    _count?: ubicacionCountOrderByAggregateInput
    _avg?: ubicacionAvgOrderByAggregateInput
    _max?: ubicacionMaxOrderByAggregateInput
    _min?: ubicacionMinOrderByAggregateInput
    _sum?: ubicacionSumOrderByAggregateInput
  }

  export type ubicacionScalarWhereWithAggregatesInput = {
    AND?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    OR?: ubicacionScalarWhereWithAggregatesInput[]
    NOT?: ubicacionScalarWhereWithAggregatesInput | ubicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ubicacion"> | number
    id_direccion?: IntNullableWithAggregatesFilter<"ubicacion"> | number | null
    radio_cobertura?: IntNullableWithAggregatesFilter<"ubicacion"> | number | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    genero?: StringNullableFilter<"usuario"> | string | null
    id_ciudad?: IntNullableFilter<"usuario"> | number | null
    contrasena?: StringFilter<"usuario"> | string
    google_id?: StringNullableFilter<"usuario"> | string | null
    foto?: StringNullableFilter<"usuario"> | string | null
    telefono?: StringNullableFilter<"usuario"> | string | null
    ciudad?: XOR<CiudadNullableScalarRelationFilter, ciudadWhereInput> | null
    usuario_rol?: Usuario_rolListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    id_ciudad?: SortOrderInput | SortOrder
    contrasena?: SortOrder
    google_id?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    ciudad?: ciudadOrderByWithRelationInput
    usuario_rol?: usuario_rolOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    google_id?: string
    telefono?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    genero?: StringNullableFilter<"usuario"> | string | null
    id_ciudad?: IntNullableFilter<"usuario"> | number | null
    contrasena?: StringFilter<"usuario"> | string
    foto?: StringNullableFilter<"usuario"> | string | null
    ciudad?: XOR<CiudadNullableScalarRelationFilter, ciudadWhereInput> | null
    usuario_rol?: Usuario_rolListRelationFilter
  }, "id" | "google_id" | "telefono">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    genero?: SortOrderInput | SortOrder
    id_ciudad?: SortOrderInput | SortOrder
    contrasena?: SortOrder
    google_id?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
    genero?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    id_ciudad?: IntNullableWithAggregatesFilter<"usuario"> | number | null
    contrasena?: StringWithAggregatesFilter<"usuario"> | string
    google_id?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    foto?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"usuario"> | string | null
  }

  export type usuario_rolWhereInput = {
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id?: IntFilter<"usuario_rol"> | number
    id_rol?: IntNullableFilter<"usuario_rol"> | number | null
    id_usuario?: IntNullableFilter<"usuario_rol"> | number | null
    carro?: CarroListRelationFilter
    rol?: XOR<RolNullableScalarRelationFilter, rolWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type usuario_rolOrderByWithRelationInput = {
    id?: SortOrder
    id_rol?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    carro?: carroOrderByRelationAggregateInput
    rol?: rolOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuario_rolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuario_rolWhereInput | usuario_rolWhereInput[]
    OR?: usuario_rolWhereInput[]
    NOT?: usuario_rolWhereInput | usuario_rolWhereInput[]
    id_rol?: IntNullableFilter<"usuario_rol"> | number | null
    id_usuario?: IntNullableFilter<"usuario_rol"> | number | null
    carro?: CarroListRelationFilter
    rol?: XOR<RolNullableScalarRelationFilter, rolWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id">

  export type usuario_rolOrderByWithAggregationInput = {
    id?: SortOrder
    id_rol?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: usuario_rolCountOrderByAggregateInput
    _avg?: usuario_rolAvgOrderByAggregateInput
    _max?: usuario_rolMaxOrderByAggregateInput
    _min?: usuario_rolMinOrderByAggregateInput
    _sum?: usuario_rolSumOrderByAggregateInput
  }

  export type usuario_rolScalarWhereWithAggregatesInput = {
    AND?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    OR?: usuario_rolScalarWhereWithAggregatesInput[]
    NOT?: usuario_rolScalarWhereWithAggregatesInput | usuario_rolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario_rol"> | number
    id_rol?: IntNullableWithAggregatesFilter<"usuario_rol"> | number | null
    id_usuario?: IntNullableWithAggregatesFilter<"usuario_rol"> | number | null
  }

  export type caracteristicas_adicionalesCreateInput = {
    nombre: string
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCaracteristicas_adicionalesInput
  }

  export type caracteristicas_adicionalesUncheckedCreateInput = {
    id?: number
    nombre: string
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCaracteristicas_adicionalesInput
  }

  export type caracteristicas_adicionalesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCaracteristicas_adicionalesNestedInput
  }

  export type caracteristicas_adicionalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCaracteristicas_adicionalesNestedInput
  }

  export type caracteristicas_adicionalesCreateManyInput = {
    id?: number
    nombre: string
  }

  export type caracteristicas_adicionalesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type caracteristicas_adicionalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type caracteristicasadicionalescarroCreateInput = {
    caracteristicas_adicionales?: caracteristicas_adicionalesCreateNestedOneWithoutCaracteristicasadicionalescarroInput
    carro?: carroCreateNestedOneWithoutCaracteristicasadicionalescarroInput
  }

  export type caracteristicasadicionalescarroUncheckedCreateInput = {
    id?: number
    id_carro?: number | null
    id_caracteristicas_adicionales?: number | null
  }

  export type caracteristicasadicionalescarroUpdateInput = {
    caracteristicas_adicionales?: caracteristicas_adicionalesUpdateOneWithoutCaracteristicasadicionalescarroNestedInput
    carro?: carroUpdateOneWithoutCaracteristicasadicionalescarroNestedInput
  }

  export type caracteristicasadicionalescarroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
    id_caracteristicas_adicionales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type caracteristicasadicionalescarroCreateManyInput = {
    id?: number
    id_carro?: number | null
    id_caracteristicas_adicionales?: number | null
  }

  export type caracteristicasadicionalescarroUpdateManyMutationInput = {

  }

  export type caracteristicasadicionalescarroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
    id_caracteristicas_adicionales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carroCreateInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput
    direccion?: direccionCreateNestedOneWithoutCarroInput
    usuario_rol?: usuario_rolCreateNestedOneWithoutCarroInput
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutCarroInput
    imagen?: imagenCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutCarroInput
    imagen?: imagenUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroUpdateInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput
    direccion?: direccionUpdateOneWithoutCarroNestedInput
    usuario_rol?: usuario_rolUpdateOneWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUpdateManyWithoutCarroNestedInput
    imagen?: imagenUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput
    imagen?: imagenUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type carroCreateManyInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
  }

  export type carroUpdateManyMutationInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ciudadCreateInput = {
    nombre: string
    pais?: paisCreateNestedOneWithoutCiudadInput
    provincia?: provinciaCreateNestedManyWithoutCiudadInput
    usuario?: usuarioCreateNestedManyWithoutCiudadInput
  }

  export type ciudadUncheckedCreateInput = {
    id?: number
    nombre: string
    id_pais?: number | null
    provincia?: provinciaUncheckedCreateNestedManyWithoutCiudadInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type ciudadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: paisUpdateOneWithoutCiudadNestedInput
    provincia?: provinciaUpdateManyWithoutCiudadNestedInput
    usuario?: usuarioUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    provincia?: provinciaUncheckedUpdateManyWithoutCiudadNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadCreateManyInput = {
    id?: number
    nombre: string
    id_pais?: number | null
  }

  export type ciudadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ciudadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroCreateInput = {
    carro?: carroCreateNestedOneWithoutCombustiblecarroInput
    tipocombustible?: tipocombustibleCreateNestedOneWithoutCombustiblecarroInput
  }

  export type combustiblecarroUncheckedCreateInput = {
    id?: number
    id_tipo_combustible?: number | null
    id_carro?: number | null
  }

  export type combustiblecarroUpdateInput = {
    carro?: carroUpdateOneWithoutCombustiblecarroNestedInput
    tipocombustible?: tipocombustibleUpdateOneWithoutCombustiblecarroNestedInput
  }

  export type combustiblecarroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_combustible?: NullableIntFieldUpdateOperationsInput | number | null
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroCreateManyInput = {
    id?: number
    id_tipo_combustible?: number | null
    id_carro?: number | null
  }

  export type combustiblecarroUpdateManyMutationInput = {

  }

  export type combustiblecarroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_combustible?: NullableIntFieldUpdateOperationsInput | number | null
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type direccionCreateInput = {
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroCreateNestedManyWithoutDireccionInput
    provincia?: provinciaCreateNestedOneWithoutDireccionInput
    ubicacion?: ubicacionCreateNestedManyWithoutDireccionInput
  }

  export type direccionUncheckedCreateInput = {
    id?: number
    id_provincia?: number | null
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroUncheckedCreateNestedManyWithoutDireccionInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type direccionUpdateInput = {
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUpdateManyWithoutDireccionNestedInput
    provincia?: provinciaUpdateOneWithoutDireccionNestedInput
    ubicacion?: ubicacionUpdateManyWithoutDireccionNestedInput
  }

  export type direccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_provincia?: NullableIntFieldUpdateOperationsInput | number | null
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUncheckedUpdateManyWithoutDireccionNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type direccionCreateManyInput = {
    id?: number
    id_provincia?: number | null
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
  }

  export type direccionUpdateManyMutationInput = {
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type direccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_provincia?: NullableIntFieldUpdateOperationsInput | number | null
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imagenCreateInput = {
    data: string
    carro?: carroCreateNestedOneWithoutImagenInput
  }

  export type imagenUncheckedCreateInput = {
    id?: number
    data: string
    id_carro?: number | null
  }

  export type imagenUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    carro?: carroUpdateOneWithoutImagenNestedInput
  }

  export type imagenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagenCreateManyInput = {
    id?: number
    data: string
    id_carro?: number | null
  }

  export type imagenUpdateManyMutationInput = {
    data?: StringFieldUpdateOperationsInput | string
  }

  export type imagenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paisCreateInput = {
    nombre: string
    ciudad?: ciudadCreateNestedManyWithoutPaisInput
  }

  export type paisUncheckedCreateInput = {
    id?: number
    nombre: string
    ciudad?: ciudadUncheckedCreateNestedManyWithoutPaisInput
  }

  export type paisUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: ciudadUpdateManyWithoutPaisNestedInput
  }

  export type paisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: ciudadUncheckedUpdateManyWithoutPaisNestedInput
  }

  export type paisCreateManyInput = {
    id?: number
    nombre: string
  }

  export type paisUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type paisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type provinciaCreateInput = {
    nombre: string
    direccion?: direccionCreateNestedManyWithoutProvinciaInput
    ciudad?: ciudadCreateNestedOneWithoutProvinciaInput
  }

  export type provinciaUncheckedCreateInput = {
    id?: number
    nombre: string
    id_ciudad?: number | null
    direccion?: direccionUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type provinciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: direccionUpdateManyWithoutProvinciaNestedInput
    ciudad?: ciudadUpdateOneWithoutProvinciaNestedInput
  }

  export type provinciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
    direccion?: direccionUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type provinciaCreateManyInput = {
    id?: number
    nombre: string
    id_ciudad?: number | null
  }

  export type provinciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type provinciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rolCreateInput = {
    rol: string
    usuario_rol?: usuario_rolCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id?: number
    rol: string
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    rol?: StringFieldUpdateOperationsInput | string
    usuario_rol?: usuario_rolUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id?: number
    rol: string
  }

  export type rolUpdateManyMutationInput = {
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type testCreateInput = {
    id_test: number
    namet?: string | null
    descripcion?: string | null
  }

  export type testUncheckedCreateInput = {
    id_test: number
    namet?: string | null
    descripcion?: string | null
  }

  export type testUpdateInput = {
    id_test?: IntFieldUpdateOperationsInput | number
    namet?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUncheckedUpdateInput = {
    id_test?: IntFieldUpdateOperationsInput | number
    namet?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testCreateManyInput = {
    id_test: number
    namet?: string | null
    descripcion?: string | null
  }

  export type testUpdateManyMutationInput = {
    id_test?: IntFieldUpdateOperationsInput | number
    namet?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testUncheckedUpdateManyInput = {
    id_test?: IntFieldUpdateOperationsInput | number
    namet?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipocombustibleCreateInput = {
    tipo_de_combustible: string
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutTipocombustibleInput
  }

  export type tipocombustibleUncheckedCreateInput = {
    id?: number
    tipo_de_combustible: string
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutTipocombustibleInput
  }

  export type tipocombustibleUpdateInput = {
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
    combustiblecarro?: combustiblecarroUpdateManyWithoutTipocombustibleNestedInput
  }

  export type tipocombustibleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutTipocombustibleNestedInput
  }

  export type tipocombustibleCreateManyInput = {
    id?: number
    tipo_de_combustible: string
  }

  export type tipocombustibleUpdateManyMutationInput = {
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
  }

  export type tipocombustibleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
  }

  export type ubicacionUpdateInput = {
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
    direccion?: direccionUpdateOneWithoutUbicacionNestedInput
  }

  export type ubicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUpdateManyMutationInput = {
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioCreateInput = {
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
    ciudad?: ciudadCreateNestedOneWithoutUsuarioInput
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    id_ciudad?: number | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: ciudadUpdateOneWithoutUsuarioNestedInput
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    id_ciudad?: number | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_rolCreateInput = {
    carro?: carroCreateNestedManyWithoutUsuario_rolInput
    rol?: rolCreateNestedOneWithoutUsuario_rolInput
    usuario?: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateInput = {
    id?: number
    id_rol?: number | null
    id_usuario?: number | null
    carro?: carroUncheckedCreateNestedManyWithoutUsuario_rolInput
  }

  export type usuario_rolUpdateInput = {
    carro?: carroUpdateManyWithoutUsuario_rolNestedInput
    rol?: rolUpdateOneWithoutUsuario_rolNestedInput
    usuario?: usuarioUpdateOneWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    carro?: carroUncheckedUpdateManyWithoutUsuario_rolNestedInput
  }

  export type usuario_rolCreateManyInput = {
    id?: number
    id_rol?: number | null
    id_usuario?: number | null
  }

  export type usuario_rolUpdateManyMutationInput = {

  }

  export type usuario_rolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CaracteristicasadicionalescarroListRelationFilter = {
    every?: caracteristicasadicionalescarroWhereInput
    some?: caracteristicasadicionalescarroWhereInput
    none?: caracteristicasadicionalescarroWhereInput
  }

  export type caracteristicasadicionalescarroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type caracteristicas_adicionalesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type caracteristicas_adicionalesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type caracteristicas_adicionalesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type caracteristicas_adicionalesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type caracteristicas_adicionalesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Caracteristicas_adicionalesNullableScalarRelationFilter = {
    is?: caracteristicas_adicionalesWhereInput | null
    isNot?: caracteristicas_adicionalesWhereInput | null
  }

  export type CarroNullableScalarRelationFilter = {
    is?: carroWhereInput | null
    isNot?: carroWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type caracteristicasadicionalescarroCountOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
    id_caracteristicas_adicionales?: SortOrder
  }

  export type caracteristicasadicionalescarroAvgOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
    id_caracteristicas_adicionales?: SortOrder
  }

  export type caracteristicasadicionalescarroMaxOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
    id_caracteristicas_adicionales?: SortOrder
  }

  export type caracteristicasadicionalescarroMinOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
    id_caracteristicas_adicionales?: SortOrder
  }

  export type caracteristicasadicionalescarroSumOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
    id_caracteristicas_adicionales?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DireccionNullableScalarRelationFilter = {
    is?: direccionWhereInput | null
    isNot?: direccionWhereInput | null
  }

  export type Usuario_rolNullableScalarRelationFilter = {
    is?: usuario_rolWhereInput | null
    isNot?: usuario_rolWhereInput | null
  }

  export type CombustiblecarroListRelationFilter = {
    every?: combustiblecarroWhereInput
    some?: combustiblecarroWhereInput
    none?: combustiblecarroWhereInput
  }

  export type ImagenListRelationFilter = {
    every?: imagenWhereInput
    some?: imagenWhereInput
    none?: imagenWhereInput
  }

  export type combustiblecarroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imagenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carroCountOrderByAggregateInput = {
    id?: SortOrder
    vim?: SortOrder
    anio?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    id_direccion?: SortOrder
    asientos?: SortOrder
    puertas?: SortOrder
    soat?: SortOrder
    precio_por_dia?: SortOrder
    num_mantenimientos?: SortOrder
    transmision?: SortOrder
    estado?: SortOrder
    id_usuario_rol?: SortOrder
  }

  export type carroAvgOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    id_direccion?: SortOrder
    asientos?: SortOrder
    puertas?: SortOrder
    precio_por_dia?: SortOrder
    num_mantenimientos?: SortOrder
    id_usuario_rol?: SortOrder
  }

  export type carroMaxOrderByAggregateInput = {
    id?: SortOrder
    vim?: SortOrder
    anio?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    id_direccion?: SortOrder
    asientos?: SortOrder
    puertas?: SortOrder
    soat?: SortOrder
    precio_por_dia?: SortOrder
    num_mantenimientos?: SortOrder
    transmision?: SortOrder
    estado?: SortOrder
    id_usuario_rol?: SortOrder
  }

  export type carroMinOrderByAggregateInput = {
    id?: SortOrder
    vim?: SortOrder
    anio?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    id_direccion?: SortOrder
    asientos?: SortOrder
    puertas?: SortOrder
    soat?: SortOrder
    precio_por_dia?: SortOrder
    num_mantenimientos?: SortOrder
    transmision?: SortOrder
    estado?: SortOrder
    id_usuario_rol?: SortOrder
  }

  export type carroSumOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    id_direccion?: SortOrder
    asientos?: SortOrder
    puertas?: SortOrder
    precio_por_dia?: SortOrder
    num_mantenimientos?: SortOrder
    id_usuario_rol?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PaisNullableScalarRelationFilter = {
    is?: paisWhereInput | null
    isNot?: paisWhereInput | null
  }

  export type ProvinciaListRelationFilter = {
    every?: provinciaWhereInput
    some?: provinciaWhereInput
    none?: provinciaWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type provinciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ciudadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type ciudadAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type ciudadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type ciudadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type ciudadSumOrderByAggregateInput = {
    id?: SortOrder
    id_pais?: SortOrder
  }

  export type TipocombustibleNullableScalarRelationFilter = {
    is?: tipocombustibleWhereInput | null
    isNot?: tipocombustibleWhereInput | null
  }

  export type combustiblecarroCountOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrder
    id_carro?: SortOrder
  }

  export type combustiblecarroAvgOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrder
    id_carro?: SortOrder
  }

  export type combustiblecarroMaxOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrder
    id_carro?: SortOrder
  }

  export type combustiblecarroMinOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrder
    id_carro?: SortOrder
  }

  export type combustiblecarroSumOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_combustible?: SortOrder
    id_carro?: SortOrder
  }

  export type CarroListRelationFilter = {
    every?: carroWhereInput
    some?: carroWhereInput
    none?: carroWhereInput
  }

  export type ProvinciaNullableScalarRelationFilter = {
    is?: provinciaWhereInput | null
    isNot?: provinciaWhereInput | null
  }

  export type UbicacionListRelationFilter = {
    every?: ubicacionWhereInput
    some?: ubicacionWhereInput
    none?: ubicacionWhereInput
  }

  export type carroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ubicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type direccionCountOrderByAggregateInput = {
    id?: SortOrder
    id_provincia?: SortOrder
    calle?: SortOrder
    zona?: SortOrder
    num_casa?: SortOrder
  }

  export type direccionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_provincia?: SortOrder
  }

  export type direccionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_provincia?: SortOrder
    calle?: SortOrder
    zona?: SortOrder
    num_casa?: SortOrder
  }

  export type direccionMinOrderByAggregateInput = {
    id?: SortOrder
    id_provincia?: SortOrder
    calle?: SortOrder
    zona?: SortOrder
    num_casa?: SortOrder
  }

  export type direccionSumOrderByAggregateInput = {
    id?: SortOrder
    id_provincia?: SortOrder
  }

  export type imagenCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    id_carro?: SortOrder
  }

  export type imagenAvgOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
  }

  export type imagenMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    id_carro?: SortOrder
  }

  export type imagenMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    id_carro?: SortOrder
  }

  export type imagenSumOrderByAggregateInput = {
    id?: SortOrder
    id_carro?: SortOrder
  }

  export type CiudadListRelationFilter = {
    every?: ciudadWhereInput
    some?: ciudadWhereInput
    none?: ciudadWhereInput
  }

  export type ciudadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paisCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type paisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type paisMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type paisMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type paisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DireccionListRelationFilter = {
    every?: direccionWhereInput
    some?: direccionWhereInput
    none?: direccionWhereInput
  }

  export type CiudadNullableScalarRelationFilter = {
    is?: ciudadWhereInput | null
    isNot?: ciudadWhereInput | null
  }

  export type direccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provinciaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_ciudad?: SortOrder
  }

  export type provinciaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ciudad?: SortOrder
  }

  export type provinciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_ciudad?: SortOrder
  }

  export type provinciaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_ciudad?: SortOrder
  }

  export type provinciaSumOrderByAggregateInput = {
    id?: SortOrder
    id_ciudad?: SortOrder
  }

  export type Usuario_rolListRelationFilter = {
    every?: usuario_rolWhereInput
    some?: usuario_rolWhereInput
    none?: usuario_rolWhereInput
  }

  export type usuario_rolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id?: SortOrder
    rol?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id?: SortOrder
    rol?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id?: SortOrder
    rol?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testCountOrderByAggregateInput = {
    id_test?: SortOrder
    namet?: SortOrder
    descripcion?: SortOrder
  }

  export type testAvgOrderByAggregateInput = {
    id_test?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    id_test?: SortOrder
    namet?: SortOrder
    descripcion?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    id_test?: SortOrder
    namet?: SortOrder
    descripcion?: SortOrder
  }

  export type testSumOrderByAggregateInput = {
    id_test?: SortOrder
  }

  export type tipocombustibleCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_combustible?: SortOrder
  }

  export type tipocombustibleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipocombustibleMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_combustible?: SortOrder
  }

  export type tipocombustibleMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_de_combustible?: SortOrder
  }

  export type tipocombustibleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ubicacionCountOrderByAggregateInput = {
    id?: SortOrder
    id_direccion?: SortOrder
    radio_cobertura?: SortOrder
  }

  export type ubicacionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_direccion?: SortOrder
    radio_cobertura?: SortOrder
  }

  export type ubicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    id_direccion?: SortOrder
    radio_cobertura?: SortOrder
  }

  export type ubicacionMinOrderByAggregateInput = {
    id?: SortOrder
    id_direccion?: SortOrder
    radio_cobertura?: SortOrder
  }

  export type ubicacionSumOrderByAggregateInput = {
    id?: SortOrder
    id_direccion?: SortOrder
    radio_cobertura?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    id_ciudad?: SortOrder
    contrasena?: SortOrder
    google_id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_ciudad?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    id_ciudad?: SortOrder
    contrasena?: SortOrder
    google_id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_nacimiento?: SortOrder
    genero?: SortOrder
    id_ciudad?: SortOrder
    contrasena?: SortOrder
    google_id?: SortOrder
    foto?: SortOrder
    telefono?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_ciudad?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RolNullableScalarRelationFilter = {
    is?: rolWhereInput | null
    isNot?: rolWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type usuario_rolCountOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuario_rolAvgOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuario_rolMaxOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuario_rolMinOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    id_usuario?: SortOrder
  }

  export type usuario_rolSumOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    id_usuario?: SortOrder
  }

  export type caracteristicasadicionalescarroCreateNestedManyWithoutCaracteristicas_adicionalesInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput> | caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInputEnvelope
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
  }

  export type caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCaracteristicas_adicionalesInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput> | caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInputEnvelope
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type caracteristicasadicionalescarroUpdateManyWithoutCaracteristicas_adicionalesNestedInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput> | caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput[]
    upsert?: caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCaracteristicas_adicionalesInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInputEnvelope
    set?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    disconnect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    delete?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    update?: caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCaracteristicas_adicionalesInput[]
    updateMany?: caracteristicasadicionalescarroUpdateManyWithWhereWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpdateManyWithWhereWithoutCaracteristicas_adicionalesInput[]
    deleteMany?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type caracteristicasadicionalescarroUncheckedUpdateManyWithoutCaracteristicas_adicionalesNestedInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput> | caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput[]
    upsert?: caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCaracteristicas_adicionalesInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInputEnvelope
    set?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    disconnect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    delete?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    update?: caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCaracteristicas_adicionalesInput[]
    updateMany?: caracteristicasadicionalescarroUpdateManyWithWhereWithoutCaracteristicas_adicionalesInput | caracteristicasadicionalescarroUpdateManyWithWhereWithoutCaracteristicas_adicionalesInput[]
    deleteMany?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
  }

  export type caracteristicas_adicionalesCreateNestedOneWithoutCaracteristicasadicionalescarroInput = {
    create?: XOR<caracteristicas_adicionalesCreateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    connectOrCreate?: caracteristicas_adicionalesCreateOrConnectWithoutCaracteristicasadicionalescarroInput
    connect?: caracteristicas_adicionalesWhereUniqueInput
  }

  export type carroCreateNestedOneWithoutCaracteristicasadicionalescarroInput = {
    create?: XOR<carroCreateWithoutCaracteristicasadicionalescarroInput, carroUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    connectOrCreate?: carroCreateOrConnectWithoutCaracteristicasadicionalescarroInput
    connect?: carroWhereUniqueInput
  }

  export type caracteristicas_adicionalesUpdateOneWithoutCaracteristicasadicionalescarroNestedInput = {
    create?: XOR<caracteristicas_adicionalesCreateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    connectOrCreate?: caracteristicas_adicionalesCreateOrConnectWithoutCaracteristicasadicionalescarroInput
    upsert?: caracteristicas_adicionalesUpsertWithoutCaracteristicasadicionalescarroInput
    disconnect?: caracteristicas_adicionalesWhereInput | boolean
    delete?: caracteristicas_adicionalesWhereInput | boolean
    connect?: caracteristicas_adicionalesWhereUniqueInput
    update?: XOR<XOR<caracteristicas_adicionalesUpdateToOneWithWhereWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUpdateWithoutCaracteristicasadicionalescarroInput>, caracteristicas_adicionalesUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
  }

  export type carroUpdateOneWithoutCaracteristicasadicionalescarroNestedInput = {
    create?: XOR<carroCreateWithoutCaracteristicasadicionalescarroInput, carroUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    connectOrCreate?: carroCreateOrConnectWithoutCaracteristicasadicionalescarroInput
    upsert?: carroUpsertWithoutCaracteristicasadicionalescarroInput
    disconnect?: carroWhereInput | boolean
    delete?: carroWhereInput | boolean
    connect?: carroWhereUniqueInput
    update?: XOR<XOR<carroUpdateToOneWithWhereWithoutCaracteristicasadicionalescarroInput, carroUpdateWithoutCaracteristicasadicionalescarroInput>, carroUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput> | caracteristicasadicionalescarroCreateWithoutCarroInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput | caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCarroInputEnvelope
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
  }

  export type direccionCreateNestedOneWithoutCarroInput = {
    create?: XOR<direccionCreateWithoutCarroInput, direccionUncheckedCreateWithoutCarroInput>
    connectOrCreate?: direccionCreateOrConnectWithoutCarroInput
    connect?: direccionWhereUniqueInput
  }

  export type usuario_rolCreateNestedOneWithoutCarroInput = {
    create?: XOR<usuario_rolCreateWithoutCarroInput, usuario_rolUncheckedCreateWithoutCarroInput>
    connectOrCreate?: usuario_rolCreateOrConnectWithoutCarroInput
    connect?: usuario_rolWhereUniqueInput
  }

  export type combustiblecarroCreateNestedManyWithoutCarroInput = {
    create?: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput> | combustiblecarroCreateWithoutCarroInput[] | combustiblecarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutCarroInput | combustiblecarroCreateOrConnectWithoutCarroInput[]
    createMany?: combustiblecarroCreateManyCarroInputEnvelope
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
  }

  export type imagenCreateNestedManyWithoutCarroInput = {
    create?: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput> | imagenCreateWithoutCarroInput[] | imagenUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: imagenCreateOrConnectWithoutCarroInput | imagenCreateOrConnectWithoutCarroInput[]
    createMany?: imagenCreateManyCarroInputEnvelope
    connect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
  }

  export type caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput> | caracteristicasadicionalescarroCreateWithoutCarroInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput | caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCarroInputEnvelope
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
  }

  export type combustiblecarroUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput> | combustiblecarroCreateWithoutCarroInput[] | combustiblecarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutCarroInput | combustiblecarroCreateOrConnectWithoutCarroInput[]
    createMany?: combustiblecarroCreateManyCarroInputEnvelope
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
  }

  export type imagenUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput> | imagenCreateWithoutCarroInput[] | imagenUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: imagenCreateOrConnectWithoutCarroInput | imagenCreateOrConnectWithoutCarroInput[]
    createMany?: imagenCreateManyCarroInputEnvelope
    connect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput> | caracteristicasadicionalescarroCreateWithoutCarroInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput | caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput[]
    upsert?: caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCarroInput | caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCarroInputEnvelope
    set?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    disconnect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    delete?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    update?: caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCarroInput | caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: caracteristicasadicionalescarroUpdateManyWithWhereWithoutCarroInput | caracteristicasadicionalescarroUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
  }

  export type direccionUpdateOneWithoutCarroNestedInput = {
    create?: XOR<direccionCreateWithoutCarroInput, direccionUncheckedCreateWithoutCarroInput>
    connectOrCreate?: direccionCreateOrConnectWithoutCarroInput
    upsert?: direccionUpsertWithoutCarroInput
    disconnect?: direccionWhereInput | boolean
    delete?: direccionWhereInput | boolean
    connect?: direccionWhereUniqueInput
    update?: XOR<XOR<direccionUpdateToOneWithWhereWithoutCarroInput, direccionUpdateWithoutCarroInput>, direccionUncheckedUpdateWithoutCarroInput>
  }

  export type usuario_rolUpdateOneWithoutCarroNestedInput = {
    create?: XOR<usuario_rolCreateWithoutCarroInput, usuario_rolUncheckedCreateWithoutCarroInput>
    connectOrCreate?: usuario_rolCreateOrConnectWithoutCarroInput
    upsert?: usuario_rolUpsertWithoutCarroInput
    disconnect?: usuario_rolWhereInput | boolean
    delete?: usuario_rolWhereInput | boolean
    connect?: usuario_rolWhereUniqueInput
    update?: XOR<XOR<usuario_rolUpdateToOneWithWhereWithoutCarroInput, usuario_rolUpdateWithoutCarroInput>, usuario_rolUncheckedUpdateWithoutCarroInput>
  }

  export type combustiblecarroUpdateManyWithoutCarroNestedInput = {
    create?: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput> | combustiblecarroCreateWithoutCarroInput[] | combustiblecarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutCarroInput | combustiblecarroCreateOrConnectWithoutCarroInput[]
    upsert?: combustiblecarroUpsertWithWhereUniqueWithoutCarroInput | combustiblecarroUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: combustiblecarroCreateManyCarroInputEnvelope
    set?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    disconnect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    delete?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    update?: combustiblecarroUpdateWithWhereUniqueWithoutCarroInput | combustiblecarroUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: combustiblecarroUpdateManyWithWhereWithoutCarroInput | combustiblecarroUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
  }

  export type imagenUpdateManyWithoutCarroNestedInput = {
    create?: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput> | imagenCreateWithoutCarroInput[] | imagenUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: imagenCreateOrConnectWithoutCarroInput | imagenCreateOrConnectWithoutCarroInput[]
    upsert?: imagenUpsertWithWhereUniqueWithoutCarroInput | imagenUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: imagenCreateManyCarroInputEnvelope
    set?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    disconnect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    delete?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    connect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    update?: imagenUpdateWithWhereUniqueWithoutCarroInput | imagenUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: imagenUpdateManyWithWhereWithoutCarroInput | imagenUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: imagenScalarWhereInput | imagenScalarWhereInput[]
  }

  export type caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput> | caracteristicasadicionalescarroCreateWithoutCarroInput[] | caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput | caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput[]
    upsert?: caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCarroInput | caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: caracteristicasadicionalescarroCreateManyCarroInputEnvelope
    set?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    disconnect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    delete?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    connect?: caracteristicasadicionalescarroWhereUniqueInput | caracteristicasadicionalescarroWhereUniqueInput[]
    update?: caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCarroInput | caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: caracteristicasadicionalescarroUpdateManyWithWhereWithoutCarroInput | caracteristicasadicionalescarroUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
  }

  export type combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput> | combustiblecarroCreateWithoutCarroInput[] | combustiblecarroUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutCarroInput | combustiblecarroCreateOrConnectWithoutCarroInput[]
    upsert?: combustiblecarroUpsertWithWhereUniqueWithoutCarroInput | combustiblecarroUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: combustiblecarroCreateManyCarroInputEnvelope
    set?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    disconnect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    delete?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    update?: combustiblecarroUpdateWithWhereUniqueWithoutCarroInput | combustiblecarroUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: combustiblecarroUpdateManyWithWhereWithoutCarroInput | combustiblecarroUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
  }

  export type imagenUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput> | imagenCreateWithoutCarroInput[] | imagenUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: imagenCreateOrConnectWithoutCarroInput | imagenCreateOrConnectWithoutCarroInput[]
    upsert?: imagenUpsertWithWhereUniqueWithoutCarroInput | imagenUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: imagenCreateManyCarroInputEnvelope
    set?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    disconnect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    delete?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    connect?: imagenWhereUniqueInput | imagenWhereUniqueInput[]
    update?: imagenUpdateWithWhereUniqueWithoutCarroInput | imagenUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: imagenUpdateManyWithWhereWithoutCarroInput | imagenUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: imagenScalarWhereInput | imagenScalarWhereInput[]
  }

  export type paisCreateNestedOneWithoutCiudadInput = {
    create?: XOR<paisCreateWithoutCiudadInput, paisUncheckedCreateWithoutCiudadInput>
    connectOrCreate?: paisCreateOrConnectWithoutCiudadInput
    connect?: paisWhereUniqueInput
  }

  export type provinciaCreateNestedManyWithoutCiudadInput = {
    create?: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput> | provinciaCreateWithoutCiudadInput[] | provinciaUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: provinciaCreateOrConnectWithoutCiudadInput | provinciaCreateOrConnectWithoutCiudadInput[]
    createMany?: provinciaCreateManyCiudadInputEnvelope
    connect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
  }

  export type usuarioCreateNestedManyWithoutCiudadInput = {
    create?: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput> | usuarioCreateWithoutCiudadInput[] | usuarioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutCiudadInput | usuarioCreateOrConnectWithoutCiudadInput[]
    createMany?: usuarioCreateManyCiudadInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type provinciaUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput> | provinciaCreateWithoutCiudadInput[] | provinciaUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: provinciaCreateOrConnectWithoutCiudadInput | provinciaCreateOrConnectWithoutCiudadInput[]
    createMany?: provinciaCreateManyCiudadInputEnvelope
    connect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput> | usuarioCreateWithoutCiudadInput[] | usuarioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutCiudadInput | usuarioCreateOrConnectWithoutCiudadInput[]
    createMany?: usuarioCreateManyCiudadInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type paisUpdateOneWithoutCiudadNestedInput = {
    create?: XOR<paisCreateWithoutCiudadInput, paisUncheckedCreateWithoutCiudadInput>
    connectOrCreate?: paisCreateOrConnectWithoutCiudadInput
    upsert?: paisUpsertWithoutCiudadInput
    disconnect?: paisWhereInput | boolean
    delete?: paisWhereInput | boolean
    connect?: paisWhereUniqueInput
    update?: XOR<XOR<paisUpdateToOneWithWhereWithoutCiudadInput, paisUpdateWithoutCiudadInput>, paisUncheckedUpdateWithoutCiudadInput>
  }

  export type provinciaUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput> | provinciaCreateWithoutCiudadInput[] | provinciaUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: provinciaCreateOrConnectWithoutCiudadInput | provinciaCreateOrConnectWithoutCiudadInput[]
    upsert?: provinciaUpsertWithWhereUniqueWithoutCiudadInput | provinciaUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: provinciaCreateManyCiudadInputEnvelope
    set?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    disconnect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    delete?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    connect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    update?: provinciaUpdateWithWhereUniqueWithoutCiudadInput | provinciaUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: provinciaUpdateManyWithWhereWithoutCiudadInput | provinciaUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: provinciaScalarWhereInput | provinciaScalarWhereInput[]
  }

  export type usuarioUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput> | usuarioCreateWithoutCiudadInput[] | usuarioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutCiudadInput | usuarioCreateOrConnectWithoutCiudadInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutCiudadInput | usuarioUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: usuarioCreateManyCiudadInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutCiudadInput | usuarioUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutCiudadInput | usuarioUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type provinciaUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput> | provinciaCreateWithoutCiudadInput[] | provinciaUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: provinciaCreateOrConnectWithoutCiudadInput | provinciaCreateOrConnectWithoutCiudadInput[]
    upsert?: provinciaUpsertWithWhereUniqueWithoutCiudadInput | provinciaUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: provinciaCreateManyCiudadInputEnvelope
    set?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    disconnect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    delete?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    connect?: provinciaWhereUniqueInput | provinciaWhereUniqueInput[]
    update?: provinciaUpdateWithWhereUniqueWithoutCiudadInput | provinciaUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: provinciaUpdateManyWithWhereWithoutCiudadInput | provinciaUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: provinciaScalarWhereInput | provinciaScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput> | usuarioCreateWithoutCiudadInput[] | usuarioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutCiudadInput | usuarioCreateOrConnectWithoutCiudadInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutCiudadInput | usuarioUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: usuarioCreateManyCiudadInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutCiudadInput | usuarioUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutCiudadInput | usuarioUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type carroCreateNestedOneWithoutCombustiblecarroInput = {
    create?: XOR<carroCreateWithoutCombustiblecarroInput, carroUncheckedCreateWithoutCombustiblecarroInput>
    connectOrCreate?: carroCreateOrConnectWithoutCombustiblecarroInput
    connect?: carroWhereUniqueInput
  }

  export type tipocombustibleCreateNestedOneWithoutCombustiblecarroInput = {
    create?: XOR<tipocombustibleCreateWithoutCombustiblecarroInput, tipocombustibleUncheckedCreateWithoutCombustiblecarroInput>
    connectOrCreate?: tipocombustibleCreateOrConnectWithoutCombustiblecarroInput
    connect?: tipocombustibleWhereUniqueInput
  }

  export type carroUpdateOneWithoutCombustiblecarroNestedInput = {
    create?: XOR<carroCreateWithoutCombustiblecarroInput, carroUncheckedCreateWithoutCombustiblecarroInput>
    connectOrCreate?: carroCreateOrConnectWithoutCombustiblecarroInput
    upsert?: carroUpsertWithoutCombustiblecarroInput
    disconnect?: carroWhereInput | boolean
    delete?: carroWhereInput | boolean
    connect?: carroWhereUniqueInput
    update?: XOR<XOR<carroUpdateToOneWithWhereWithoutCombustiblecarroInput, carroUpdateWithoutCombustiblecarroInput>, carroUncheckedUpdateWithoutCombustiblecarroInput>
  }

  export type tipocombustibleUpdateOneWithoutCombustiblecarroNestedInput = {
    create?: XOR<tipocombustibleCreateWithoutCombustiblecarroInput, tipocombustibleUncheckedCreateWithoutCombustiblecarroInput>
    connectOrCreate?: tipocombustibleCreateOrConnectWithoutCombustiblecarroInput
    upsert?: tipocombustibleUpsertWithoutCombustiblecarroInput
    disconnect?: tipocombustibleWhereInput | boolean
    delete?: tipocombustibleWhereInput | boolean
    connect?: tipocombustibleWhereUniqueInput
    update?: XOR<XOR<tipocombustibleUpdateToOneWithWhereWithoutCombustiblecarroInput, tipocombustibleUpdateWithoutCombustiblecarroInput>, tipocombustibleUncheckedUpdateWithoutCombustiblecarroInput>
  }

  export type carroCreateNestedManyWithoutDireccionInput = {
    create?: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput> | carroCreateWithoutDireccionInput[] | carroUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: carroCreateOrConnectWithoutDireccionInput | carroCreateOrConnectWithoutDireccionInput[]
    createMany?: carroCreateManyDireccionInputEnvelope
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
  }

  export type provinciaCreateNestedOneWithoutDireccionInput = {
    create?: XOR<provinciaCreateWithoutDireccionInput, provinciaUncheckedCreateWithoutDireccionInput>
    connectOrCreate?: provinciaCreateOrConnectWithoutDireccionInput
    connect?: provinciaWhereUniqueInput
  }

  export type ubicacionCreateNestedManyWithoutDireccionInput = {
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
  }

  export type carroUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput> | carroCreateWithoutDireccionInput[] | carroUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: carroCreateOrConnectWithoutDireccionInput | carroCreateOrConnectWithoutDireccionInput[]
    createMany?: carroCreateManyDireccionInputEnvelope
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
  }

  export type ubicacionUncheckedCreateNestedManyWithoutDireccionInput = {
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
  }

  export type carroUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput> | carroCreateWithoutDireccionInput[] | carroUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: carroCreateOrConnectWithoutDireccionInput | carroCreateOrConnectWithoutDireccionInput[]
    upsert?: carroUpsertWithWhereUniqueWithoutDireccionInput | carroUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: carroCreateManyDireccionInputEnvelope
    set?: carroWhereUniqueInput | carroWhereUniqueInput[]
    disconnect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    delete?: carroWhereUniqueInput | carroWhereUniqueInput[]
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    update?: carroUpdateWithWhereUniqueWithoutDireccionInput | carroUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: carroUpdateManyWithWhereWithoutDireccionInput | carroUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: carroScalarWhereInput | carroScalarWhereInput[]
  }

  export type provinciaUpdateOneWithoutDireccionNestedInput = {
    create?: XOR<provinciaCreateWithoutDireccionInput, provinciaUncheckedCreateWithoutDireccionInput>
    connectOrCreate?: provinciaCreateOrConnectWithoutDireccionInput
    upsert?: provinciaUpsertWithoutDireccionInput
    disconnect?: provinciaWhereInput | boolean
    delete?: provinciaWhereInput | boolean
    connect?: provinciaWhereUniqueInput
    update?: XOR<XOR<provinciaUpdateToOneWithWhereWithoutDireccionInput, provinciaUpdateWithoutDireccionInput>, provinciaUncheckedUpdateWithoutDireccionInput>
  }

  export type ubicacionUpdateManyWithoutDireccionNestedInput = {
    set?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    disconnect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    delete?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    update?: ubicacionUpdateWithWhereUniqueWithoutDireccionInput | ubicacionUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: ubicacionUpdateManyWithWhereWithoutDireccionInput | ubicacionUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
  }

  export type carroUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput> | carroCreateWithoutDireccionInput[] | carroUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: carroCreateOrConnectWithoutDireccionInput | carroCreateOrConnectWithoutDireccionInput[]
    upsert?: carroUpsertWithWhereUniqueWithoutDireccionInput | carroUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: carroCreateManyDireccionInputEnvelope
    set?: carroWhereUniqueInput | carroWhereUniqueInput[]
    disconnect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    delete?: carroWhereUniqueInput | carroWhereUniqueInput[]
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    update?: carroUpdateWithWhereUniqueWithoutDireccionInput | carroUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: carroUpdateManyWithWhereWithoutDireccionInput | carroUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: carroScalarWhereInput | carroScalarWhereInput[]
  }

  export type ubicacionUncheckedUpdateManyWithoutDireccionNestedInput = {
    set?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    disconnect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    delete?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    connect?: ubicacionWhereUniqueInput | ubicacionWhereUniqueInput[]
    update?: ubicacionUpdateWithWhereUniqueWithoutDireccionInput | ubicacionUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: ubicacionUpdateManyWithWhereWithoutDireccionInput | ubicacionUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
  }

  export type carroCreateNestedOneWithoutImagenInput = {
    create?: XOR<carroCreateWithoutImagenInput, carroUncheckedCreateWithoutImagenInput>
    connectOrCreate?: carroCreateOrConnectWithoutImagenInput
    connect?: carroWhereUniqueInput
  }

  export type carroUpdateOneWithoutImagenNestedInput = {
    create?: XOR<carroCreateWithoutImagenInput, carroUncheckedCreateWithoutImagenInput>
    connectOrCreate?: carroCreateOrConnectWithoutImagenInput
    upsert?: carroUpsertWithoutImagenInput
    disconnect?: carroWhereInput | boolean
    delete?: carroWhereInput | boolean
    connect?: carroWhereUniqueInput
    update?: XOR<XOR<carroUpdateToOneWithWhereWithoutImagenInput, carroUpdateWithoutImagenInput>, carroUncheckedUpdateWithoutImagenInput>
  }

  export type ciudadCreateNestedManyWithoutPaisInput = {
    create?: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput> | ciudadCreateWithoutPaisInput[] | ciudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ciudadCreateOrConnectWithoutPaisInput | ciudadCreateOrConnectWithoutPaisInput[]
    createMany?: ciudadCreateManyPaisInputEnvelope
    connect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
  }

  export type ciudadUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput> | ciudadCreateWithoutPaisInput[] | ciudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ciudadCreateOrConnectWithoutPaisInput | ciudadCreateOrConnectWithoutPaisInput[]
    createMany?: ciudadCreateManyPaisInputEnvelope
    connect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
  }

  export type ciudadUpdateManyWithoutPaisNestedInput = {
    create?: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput> | ciudadCreateWithoutPaisInput[] | ciudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ciudadCreateOrConnectWithoutPaisInput | ciudadCreateOrConnectWithoutPaisInput[]
    upsert?: ciudadUpsertWithWhereUniqueWithoutPaisInput | ciudadUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: ciudadCreateManyPaisInputEnvelope
    set?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    disconnect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    delete?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    connect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    update?: ciudadUpdateWithWhereUniqueWithoutPaisInput | ciudadUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: ciudadUpdateManyWithWhereWithoutPaisInput | ciudadUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: ciudadScalarWhereInput | ciudadScalarWhereInput[]
  }

  export type ciudadUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput> | ciudadCreateWithoutPaisInput[] | ciudadUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ciudadCreateOrConnectWithoutPaisInput | ciudadCreateOrConnectWithoutPaisInput[]
    upsert?: ciudadUpsertWithWhereUniqueWithoutPaisInput | ciudadUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: ciudadCreateManyPaisInputEnvelope
    set?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    disconnect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    delete?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    connect?: ciudadWhereUniqueInput | ciudadWhereUniqueInput[]
    update?: ciudadUpdateWithWhereUniqueWithoutPaisInput | ciudadUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: ciudadUpdateManyWithWhereWithoutPaisInput | ciudadUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: ciudadScalarWhereInput | ciudadScalarWhereInput[]
  }

  export type direccionCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput> | direccionCreateWithoutProvinciaInput[] | direccionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: direccionCreateOrConnectWithoutProvinciaInput | direccionCreateOrConnectWithoutProvinciaInput[]
    createMany?: direccionCreateManyProvinciaInputEnvelope
    connect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
  }

  export type ciudadCreateNestedOneWithoutProvinciaInput = {
    create?: XOR<ciudadCreateWithoutProvinciaInput, ciudadUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: ciudadCreateOrConnectWithoutProvinciaInput
    connect?: ciudadWhereUniqueInput
  }

  export type direccionUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput> | direccionCreateWithoutProvinciaInput[] | direccionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: direccionCreateOrConnectWithoutProvinciaInput | direccionCreateOrConnectWithoutProvinciaInput[]
    createMany?: direccionCreateManyProvinciaInputEnvelope
    connect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
  }

  export type direccionUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput> | direccionCreateWithoutProvinciaInput[] | direccionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: direccionCreateOrConnectWithoutProvinciaInput | direccionCreateOrConnectWithoutProvinciaInput[]
    upsert?: direccionUpsertWithWhereUniqueWithoutProvinciaInput | direccionUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: direccionCreateManyProvinciaInputEnvelope
    set?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    disconnect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    delete?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    connect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    update?: direccionUpdateWithWhereUniqueWithoutProvinciaInput | direccionUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: direccionUpdateManyWithWhereWithoutProvinciaInput | direccionUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: direccionScalarWhereInput | direccionScalarWhereInput[]
  }

  export type ciudadUpdateOneWithoutProvinciaNestedInput = {
    create?: XOR<ciudadCreateWithoutProvinciaInput, ciudadUncheckedCreateWithoutProvinciaInput>
    connectOrCreate?: ciudadCreateOrConnectWithoutProvinciaInput
    upsert?: ciudadUpsertWithoutProvinciaInput
    disconnect?: ciudadWhereInput | boolean
    delete?: ciudadWhereInput | boolean
    connect?: ciudadWhereUniqueInput
    update?: XOR<XOR<ciudadUpdateToOneWithWhereWithoutProvinciaInput, ciudadUpdateWithoutProvinciaInput>, ciudadUncheckedUpdateWithoutProvinciaInput>
  }

  export type direccionUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput> | direccionCreateWithoutProvinciaInput[] | direccionUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: direccionCreateOrConnectWithoutProvinciaInput | direccionCreateOrConnectWithoutProvinciaInput[]
    upsert?: direccionUpsertWithWhereUniqueWithoutProvinciaInput | direccionUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: direccionCreateManyProvinciaInputEnvelope
    set?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    disconnect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    delete?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    connect?: direccionWhereUniqueInput | direccionWhereUniqueInput[]
    update?: direccionUpdateWithWhereUniqueWithoutProvinciaInput | direccionUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: direccionUpdateManyWithWhereWithoutProvinciaInput | direccionUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: direccionScalarWhereInput | direccionScalarWhereInput[]
  }

  export type usuario_rolCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type usuario_rolUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput> | usuario_rolCreateWithoutRolInput[] | usuario_rolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutRolInput | usuario_rolCreateOrConnectWithoutRolInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutRolInput | usuario_rolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: usuario_rolCreateManyRolInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutRolInput | usuario_rolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutRolInput | usuario_rolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type combustiblecarroCreateNestedManyWithoutTipocombustibleInput = {
    create?: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput> | combustiblecarroCreateWithoutTipocombustibleInput[] | combustiblecarroUncheckedCreateWithoutTipocombustibleInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutTipocombustibleInput | combustiblecarroCreateOrConnectWithoutTipocombustibleInput[]
    createMany?: combustiblecarroCreateManyTipocombustibleInputEnvelope
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
  }

  export type combustiblecarroUncheckedCreateNestedManyWithoutTipocombustibleInput = {
    create?: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput> | combustiblecarroCreateWithoutTipocombustibleInput[] | combustiblecarroUncheckedCreateWithoutTipocombustibleInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutTipocombustibleInput | combustiblecarroCreateOrConnectWithoutTipocombustibleInput[]
    createMany?: combustiblecarroCreateManyTipocombustibleInputEnvelope
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
  }

  export type combustiblecarroUpdateManyWithoutTipocombustibleNestedInput = {
    create?: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput> | combustiblecarroCreateWithoutTipocombustibleInput[] | combustiblecarroUncheckedCreateWithoutTipocombustibleInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutTipocombustibleInput | combustiblecarroCreateOrConnectWithoutTipocombustibleInput[]
    upsert?: combustiblecarroUpsertWithWhereUniqueWithoutTipocombustibleInput | combustiblecarroUpsertWithWhereUniqueWithoutTipocombustibleInput[]
    createMany?: combustiblecarroCreateManyTipocombustibleInputEnvelope
    set?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    disconnect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    delete?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    update?: combustiblecarroUpdateWithWhereUniqueWithoutTipocombustibleInput | combustiblecarroUpdateWithWhereUniqueWithoutTipocombustibleInput[]
    updateMany?: combustiblecarroUpdateManyWithWhereWithoutTipocombustibleInput | combustiblecarroUpdateManyWithWhereWithoutTipocombustibleInput[]
    deleteMany?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
  }

  export type combustiblecarroUncheckedUpdateManyWithoutTipocombustibleNestedInput = {
    create?: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput> | combustiblecarroCreateWithoutTipocombustibleInput[] | combustiblecarroUncheckedCreateWithoutTipocombustibleInput[]
    connectOrCreate?: combustiblecarroCreateOrConnectWithoutTipocombustibleInput | combustiblecarroCreateOrConnectWithoutTipocombustibleInput[]
    upsert?: combustiblecarroUpsertWithWhereUniqueWithoutTipocombustibleInput | combustiblecarroUpsertWithWhereUniqueWithoutTipocombustibleInput[]
    createMany?: combustiblecarroCreateManyTipocombustibleInputEnvelope
    set?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    disconnect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    delete?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    connect?: combustiblecarroWhereUniqueInput | combustiblecarroWhereUniqueInput[]
    update?: combustiblecarroUpdateWithWhereUniqueWithoutTipocombustibleInput | combustiblecarroUpdateWithWhereUniqueWithoutTipocombustibleInput[]
    updateMany?: combustiblecarroUpdateManyWithWhereWithoutTipocombustibleInput | combustiblecarroUpdateManyWithWhereWithoutTipocombustibleInput[]
    deleteMany?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
  }

  export type direccionUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<direccionCreateWithoutUbicacionInput, direccionUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: direccionCreateOrConnectWithoutUbicacionInput
    upsert?: direccionUpsertWithoutUbicacionInput
    disconnect?: direccionWhereInput | boolean
    delete?: direccionWhereInput | boolean
    connect?: direccionWhereUniqueInput
    update?: XOR<XOR<direccionUpdateToOneWithWhereWithoutUbicacionInput, direccionUpdateWithoutUbicacionInput>, direccionUncheckedUpdateWithoutUbicacionInput>
  }

  export type ciudadCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ciudadCreateWithoutUsuarioInput, ciudadUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ciudadCreateOrConnectWithoutUsuarioInput
    connect?: ciudadWhereUniqueInput
  }

  export type usuario_rolCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ciudadUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ciudadCreateWithoutUsuarioInput, ciudadUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ciudadCreateOrConnectWithoutUsuarioInput
    upsert?: ciudadUpsertWithoutUsuarioInput
    disconnect?: ciudadWhereInput | boolean
    delete?: ciudadWhereInput | boolean
    connect?: ciudadWhereUniqueInput
    update?: XOR<XOR<ciudadUpdateToOneWithWhereWithoutUsuarioInput, ciudadUpdateWithoutUsuarioInput>, ciudadUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput> | usuario_rolCreateWithoutUsuarioInput[] | usuario_rolUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_rolCreateOrConnectWithoutUsuarioInput | usuario_rolCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_rolCreateManyUsuarioInputEnvelope
    set?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    disconnect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    delete?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    connect?: usuario_rolWhereUniqueInput | usuario_rolWhereUniqueInput[]
    update?: usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_rolUpdateManyWithWhereWithoutUsuarioInput | usuario_rolUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
  }

  export type carroCreateNestedManyWithoutUsuario_rolInput = {
    create?: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput> | carroCreateWithoutUsuario_rolInput[] | carroUncheckedCreateWithoutUsuario_rolInput[]
    connectOrCreate?: carroCreateOrConnectWithoutUsuario_rolInput | carroCreateOrConnectWithoutUsuario_rolInput[]
    createMany?: carroCreateManyUsuario_rolInputEnvelope
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
  }

  export type rolCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    connect?: rolWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuario_rolInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    connect?: usuarioWhereUniqueInput
  }

  export type carroUncheckedCreateNestedManyWithoutUsuario_rolInput = {
    create?: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput> | carroCreateWithoutUsuario_rolInput[] | carroUncheckedCreateWithoutUsuario_rolInput[]
    connectOrCreate?: carroCreateOrConnectWithoutUsuario_rolInput | carroCreateOrConnectWithoutUsuario_rolInput[]
    createMany?: carroCreateManyUsuario_rolInputEnvelope
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
  }

  export type carroUpdateManyWithoutUsuario_rolNestedInput = {
    create?: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput> | carroCreateWithoutUsuario_rolInput[] | carroUncheckedCreateWithoutUsuario_rolInput[]
    connectOrCreate?: carroCreateOrConnectWithoutUsuario_rolInput | carroCreateOrConnectWithoutUsuario_rolInput[]
    upsert?: carroUpsertWithWhereUniqueWithoutUsuario_rolInput | carroUpsertWithWhereUniqueWithoutUsuario_rolInput[]
    createMany?: carroCreateManyUsuario_rolInputEnvelope
    set?: carroWhereUniqueInput | carroWhereUniqueInput[]
    disconnect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    delete?: carroWhereUniqueInput | carroWhereUniqueInput[]
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    update?: carroUpdateWithWhereUniqueWithoutUsuario_rolInput | carroUpdateWithWhereUniqueWithoutUsuario_rolInput[]
    updateMany?: carroUpdateManyWithWhereWithoutUsuario_rolInput | carroUpdateManyWithWhereWithoutUsuario_rolInput[]
    deleteMany?: carroScalarWhereInput | carroScalarWhereInput[]
  }

  export type rolUpdateOneWithoutUsuario_rolNestedInput = {
    create?: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: rolCreateOrConnectWithoutUsuario_rolInput
    upsert?: rolUpsertWithoutUsuario_rolInput
    disconnect?: rolWhereInput | boolean
    delete?: rolWhereInput | boolean
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutUsuario_rolInput, rolUpdateWithoutUsuario_rolInput>, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateOneWithoutUsuario_rolNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_rolInput
    upsert?: usuarioUpsertWithoutUsuario_rolInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuario_rolInput, usuarioUpdateWithoutUsuario_rolInput>, usuarioUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type carroUncheckedUpdateManyWithoutUsuario_rolNestedInput = {
    create?: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput> | carroCreateWithoutUsuario_rolInput[] | carroUncheckedCreateWithoutUsuario_rolInput[]
    connectOrCreate?: carroCreateOrConnectWithoutUsuario_rolInput | carroCreateOrConnectWithoutUsuario_rolInput[]
    upsert?: carroUpsertWithWhereUniqueWithoutUsuario_rolInput | carroUpsertWithWhereUniqueWithoutUsuario_rolInput[]
    createMany?: carroCreateManyUsuario_rolInputEnvelope
    set?: carroWhereUniqueInput | carroWhereUniqueInput[]
    disconnect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    delete?: carroWhereUniqueInput | carroWhereUniqueInput[]
    connect?: carroWhereUniqueInput | carroWhereUniqueInput[]
    update?: carroUpdateWithWhereUniqueWithoutUsuario_rolInput | carroUpdateWithWhereUniqueWithoutUsuario_rolInput[]
    updateMany?: carroUpdateManyWithWhereWithoutUsuario_rolInput | carroUpdateManyWithWhereWithoutUsuario_rolInput[]
    deleteMany?: carroScalarWhereInput | carroScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput = {
    carro?: carroCreateNestedOneWithoutCaracteristicasadicionalescarroInput
  }

  export type caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput = {
    id?: number
    id_carro?: number | null
  }

  export type caracteristicasadicionalescarroCreateOrConnectWithoutCaracteristicas_adicionalesInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    create: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput>
  }

  export type caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInputEnvelope = {
    data: caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInput | caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInput[]
    skipDuplicates?: boolean
  }

  export type caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCaracteristicas_adicionalesInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    update: XOR<caracteristicasadicionalescarroUpdateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedUpdateWithoutCaracteristicas_adicionalesInput>
    create: XOR<caracteristicasadicionalescarroCreateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedCreateWithoutCaracteristicas_adicionalesInput>
  }

  export type caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCaracteristicas_adicionalesInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    data: XOR<caracteristicasadicionalescarroUpdateWithoutCaracteristicas_adicionalesInput, caracteristicasadicionalescarroUncheckedUpdateWithoutCaracteristicas_adicionalesInput>
  }

  export type caracteristicasadicionalescarroUpdateManyWithWhereWithoutCaracteristicas_adicionalesInput = {
    where: caracteristicasadicionalescarroScalarWhereInput
    data: XOR<caracteristicasadicionalescarroUpdateManyMutationInput, caracteristicasadicionalescarroUncheckedUpdateManyWithoutCaracteristicas_adicionalesInput>
  }

  export type caracteristicasadicionalescarroScalarWhereInput = {
    AND?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
    OR?: caracteristicasadicionalescarroScalarWhereInput[]
    NOT?: caracteristicasadicionalescarroScalarWhereInput | caracteristicasadicionalescarroScalarWhereInput[]
    id?: IntFilter<"caracteristicasadicionalescarro"> | number
    id_carro?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
    id_caracteristicas_adicionales?: IntNullableFilter<"caracteristicasadicionalescarro"> | number | null
  }

  export type caracteristicas_adicionalesCreateWithoutCaracteristicasadicionalescarroInput = {
    nombre: string
  }

  export type caracteristicas_adicionalesUncheckedCreateWithoutCaracteristicasadicionalescarroInput = {
    id?: number
    nombre: string
  }

  export type caracteristicas_adicionalesCreateOrConnectWithoutCaracteristicasadicionalescarroInput = {
    where: caracteristicas_adicionalesWhereUniqueInput
    create: XOR<caracteristicas_adicionalesCreateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
  }

  export type carroCreateWithoutCaracteristicasadicionalescarroInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    direccion?: direccionCreateNestedOneWithoutCarroInput
    usuario_rol?: usuario_rolCreateNestedOneWithoutCarroInput
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutCarroInput
    imagen?: imagenCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateWithoutCaracteristicasadicionalescarroInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutCarroInput
    imagen?: imagenUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroCreateOrConnectWithoutCaracteristicasadicionalescarroInput = {
    where: carroWhereUniqueInput
    create: XOR<carroCreateWithoutCaracteristicasadicionalescarroInput, carroUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
  }

  export type caracteristicas_adicionalesUpsertWithoutCaracteristicasadicionalescarroInput = {
    update: XOR<caracteristicas_adicionalesUpdateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
    create: XOR<caracteristicas_adicionalesCreateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    where?: caracteristicas_adicionalesWhereInput
  }

  export type caracteristicas_adicionalesUpdateToOneWithWhereWithoutCaracteristicasadicionalescarroInput = {
    where?: caracteristicas_adicionalesWhereInput
    data: XOR<caracteristicas_adicionalesUpdateWithoutCaracteristicasadicionalescarroInput, caracteristicas_adicionalesUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
  }

  export type caracteristicas_adicionalesUpdateWithoutCaracteristicasadicionalescarroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type caracteristicas_adicionalesUncheckedUpdateWithoutCaracteristicasadicionalescarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type carroUpsertWithoutCaracteristicasadicionalescarroInput = {
    update: XOR<carroUpdateWithoutCaracteristicasadicionalescarroInput, carroUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
    create: XOR<carroCreateWithoutCaracteristicasadicionalescarroInput, carroUncheckedCreateWithoutCaracteristicasadicionalescarroInput>
    where?: carroWhereInput
  }

  export type carroUpdateToOneWithWhereWithoutCaracteristicasadicionalescarroInput = {
    where?: carroWhereInput
    data: XOR<carroUpdateWithoutCaracteristicasadicionalescarroInput, carroUncheckedUpdateWithoutCaracteristicasadicionalescarroInput>
  }

  export type carroUpdateWithoutCaracteristicasadicionalescarroInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: direccionUpdateOneWithoutCarroNestedInput
    usuario_rol?: usuario_rolUpdateOneWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUpdateManyWithoutCarroNestedInput
    imagen?: imagenUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateWithoutCaracteristicasadicionalescarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput
    imagen?: imagenUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type caracteristicasadicionalescarroCreateWithoutCarroInput = {
    caracteristicas_adicionales?: caracteristicas_adicionalesCreateNestedOneWithoutCaracteristicasadicionalescarroInput
  }

  export type caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput = {
    id?: number
    id_caracteristicas_adicionales?: number | null
  }

  export type caracteristicasadicionalescarroCreateOrConnectWithoutCarroInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    create: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput>
  }

  export type caracteristicasadicionalescarroCreateManyCarroInputEnvelope = {
    data: caracteristicasadicionalescarroCreateManyCarroInput | caracteristicasadicionalescarroCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type direccionCreateWithoutCarroInput = {
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    provincia?: provinciaCreateNestedOneWithoutDireccionInput
    ubicacion?: ubicacionCreateNestedManyWithoutDireccionInput
  }

  export type direccionUncheckedCreateWithoutCarroInput = {
    id?: number
    id_provincia?: number | null
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type direccionCreateOrConnectWithoutCarroInput = {
    where: direccionWhereUniqueInput
    create: XOR<direccionCreateWithoutCarroInput, direccionUncheckedCreateWithoutCarroInput>
  }

  export type usuario_rolCreateWithoutCarroInput = {
    rol?: rolCreateNestedOneWithoutUsuario_rolInput
    usuario?: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutCarroInput = {
    id?: number
    id_rol?: number | null
    id_usuario?: number | null
  }

  export type usuario_rolCreateOrConnectWithoutCarroInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutCarroInput, usuario_rolUncheckedCreateWithoutCarroInput>
  }

  export type combustiblecarroCreateWithoutCarroInput = {
    tipocombustible?: tipocombustibleCreateNestedOneWithoutCombustiblecarroInput
  }

  export type combustiblecarroUncheckedCreateWithoutCarroInput = {
    id?: number
    id_tipo_combustible?: number | null
  }

  export type combustiblecarroCreateOrConnectWithoutCarroInput = {
    where: combustiblecarroWhereUniqueInput
    create: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput>
  }

  export type combustiblecarroCreateManyCarroInputEnvelope = {
    data: combustiblecarroCreateManyCarroInput | combustiblecarroCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type imagenCreateWithoutCarroInput = {
    data: string
  }

  export type imagenUncheckedCreateWithoutCarroInput = {
    id?: number
    data: string
  }

  export type imagenCreateOrConnectWithoutCarroInput = {
    where: imagenWhereUniqueInput
    create: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput>
  }

  export type imagenCreateManyCarroInputEnvelope = {
    data: imagenCreateManyCarroInput | imagenCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type caracteristicasadicionalescarroUpsertWithWhereUniqueWithoutCarroInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    update: XOR<caracteristicasadicionalescarroUpdateWithoutCarroInput, caracteristicasadicionalescarroUncheckedUpdateWithoutCarroInput>
    create: XOR<caracteristicasadicionalescarroCreateWithoutCarroInput, caracteristicasadicionalescarroUncheckedCreateWithoutCarroInput>
  }

  export type caracteristicasadicionalescarroUpdateWithWhereUniqueWithoutCarroInput = {
    where: caracteristicasadicionalescarroWhereUniqueInput
    data: XOR<caracteristicasadicionalescarroUpdateWithoutCarroInput, caracteristicasadicionalescarroUncheckedUpdateWithoutCarroInput>
  }

  export type caracteristicasadicionalescarroUpdateManyWithWhereWithoutCarroInput = {
    where: caracteristicasadicionalescarroScalarWhereInput
    data: XOR<caracteristicasadicionalescarroUpdateManyMutationInput, caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroInput>
  }

  export type direccionUpsertWithoutCarroInput = {
    update: XOR<direccionUpdateWithoutCarroInput, direccionUncheckedUpdateWithoutCarroInput>
    create: XOR<direccionCreateWithoutCarroInput, direccionUncheckedCreateWithoutCarroInput>
    where?: direccionWhereInput
  }

  export type direccionUpdateToOneWithWhereWithoutCarroInput = {
    where?: direccionWhereInput
    data: XOR<direccionUpdateWithoutCarroInput, direccionUncheckedUpdateWithoutCarroInput>
  }

  export type direccionUpdateWithoutCarroInput = {
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    provincia?: provinciaUpdateOneWithoutDireccionNestedInput
    ubicacion?: ubicacionUpdateManyWithoutDireccionNestedInput
  }

  export type direccionUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_provincia?: NullableIntFieldUpdateOperationsInput | number | null
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: ubicacionUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type usuario_rolUpsertWithoutCarroInput = {
    update: XOR<usuario_rolUpdateWithoutCarroInput, usuario_rolUncheckedUpdateWithoutCarroInput>
    create: XOR<usuario_rolCreateWithoutCarroInput, usuario_rolUncheckedCreateWithoutCarroInput>
    where?: usuario_rolWhereInput
  }

  export type usuario_rolUpdateToOneWithWhereWithoutCarroInput = {
    where?: usuario_rolWhereInput
    data: XOR<usuario_rolUpdateWithoutCarroInput, usuario_rolUncheckedUpdateWithoutCarroInput>
  }

  export type usuario_rolUpdateWithoutCarroInput = {
    rol?: rolUpdateOneWithoutUsuario_rolNestedInput
    usuario?: usuarioUpdateOneWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroUpsertWithWhereUniqueWithoutCarroInput = {
    where: combustiblecarroWhereUniqueInput
    update: XOR<combustiblecarroUpdateWithoutCarroInput, combustiblecarroUncheckedUpdateWithoutCarroInput>
    create: XOR<combustiblecarroCreateWithoutCarroInput, combustiblecarroUncheckedCreateWithoutCarroInput>
  }

  export type combustiblecarroUpdateWithWhereUniqueWithoutCarroInput = {
    where: combustiblecarroWhereUniqueInput
    data: XOR<combustiblecarroUpdateWithoutCarroInput, combustiblecarroUncheckedUpdateWithoutCarroInput>
  }

  export type combustiblecarroUpdateManyWithWhereWithoutCarroInput = {
    where: combustiblecarroScalarWhereInput
    data: XOR<combustiblecarroUpdateManyMutationInput, combustiblecarroUncheckedUpdateManyWithoutCarroInput>
  }

  export type combustiblecarroScalarWhereInput = {
    AND?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
    OR?: combustiblecarroScalarWhereInput[]
    NOT?: combustiblecarroScalarWhereInput | combustiblecarroScalarWhereInput[]
    id?: IntFilter<"combustiblecarro"> | number
    id_tipo_combustible?: IntNullableFilter<"combustiblecarro"> | number | null
    id_carro?: IntNullableFilter<"combustiblecarro"> | number | null
  }

  export type imagenUpsertWithWhereUniqueWithoutCarroInput = {
    where: imagenWhereUniqueInput
    update: XOR<imagenUpdateWithoutCarroInput, imagenUncheckedUpdateWithoutCarroInput>
    create: XOR<imagenCreateWithoutCarroInput, imagenUncheckedCreateWithoutCarroInput>
  }

  export type imagenUpdateWithWhereUniqueWithoutCarroInput = {
    where: imagenWhereUniqueInput
    data: XOR<imagenUpdateWithoutCarroInput, imagenUncheckedUpdateWithoutCarroInput>
  }

  export type imagenUpdateManyWithWhereWithoutCarroInput = {
    where: imagenScalarWhereInput
    data: XOR<imagenUpdateManyMutationInput, imagenUncheckedUpdateManyWithoutCarroInput>
  }

  export type imagenScalarWhereInput = {
    AND?: imagenScalarWhereInput | imagenScalarWhereInput[]
    OR?: imagenScalarWhereInput[]
    NOT?: imagenScalarWhereInput | imagenScalarWhereInput[]
    id?: IntFilter<"imagen"> | number
    data?: StringFilter<"imagen"> | string
    id_carro?: IntNullableFilter<"imagen"> | number | null
  }

  export type paisCreateWithoutCiudadInput = {
    nombre: string
  }

  export type paisUncheckedCreateWithoutCiudadInput = {
    id?: number
    nombre: string
  }

  export type paisCreateOrConnectWithoutCiudadInput = {
    where: paisWhereUniqueInput
    create: XOR<paisCreateWithoutCiudadInput, paisUncheckedCreateWithoutCiudadInput>
  }

  export type provinciaCreateWithoutCiudadInput = {
    nombre: string
    direccion?: direccionCreateNestedManyWithoutProvinciaInput
  }

  export type provinciaUncheckedCreateWithoutCiudadInput = {
    id?: number
    nombre: string
    direccion?: direccionUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type provinciaCreateOrConnectWithoutCiudadInput = {
    where: provinciaWhereUniqueInput
    create: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput>
  }

  export type provinciaCreateManyCiudadInputEnvelope = {
    data: provinciaCreateManyCiudadInput | provinciaCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutCiudadInput = {
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
    usuario_rol?: usuario_rolCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCiudadInput = {
    id?: number
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
    usuario_rol?: usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCiudadInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput>
  }

  export type usuarioCreateManyCiudadInputEnvelope = {
    data: usuarioCreateManyCiudadInput | usuarioCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type paisUpsertWithoutCiudadInput = {
    update: XOR<paisUpdateWithoutCiudadInput, paisUncheckedUpdateWithoutCiudadInput>
    create: XOR<paisCreateWithoutCiudadInput, paisUncheckedCreateWithoutCiudadInput>
    where?: paisWhereInput
  }

  export type paisUpdateToOneWithWhereWithoutCiudadInput = {
    where?: paisWhereInput
    data: XOR<paisUpdateWithoutCiudadInput, paisUncheckedUpdateWithoutCiudadInput>
  }

  export type paisUpdateWithoutCiudadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type paisUncheckedUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type provinciaUpsertWithWhereUniqueWithoutCiudadInput = {
    where: provinciaWhereUniqueInput
    update: XOR<provinciaUpdateWithoutCiudadInput, provinciaUncheckedUpdateWithoutCiudadInput>
    create: XOR<provinciaCreateWithoutCiudadInput, provinciaUncheckedCreateWithoutCiudadInput>
  }

  export type provinciaUpdateWithWhereUniqueWithoutCiudadInput = {
    where: provinciaWhereUniqueInput
    data: XOR<provinciaUpdateWithoutCiudadInput, provinciaUncheckedUpdateWithoutCiudadInput>
  }

  export type provinciaUpdateManyWithWhereWithoutCiudadInput = {
    where: provinciaScalarWhereInput
    data: XOR<provinciaUpdateManyMutationInput, provinciaUncheckedUpdateManyWithoutCiudadInput>
  }

  export type provinciaScalarWhereInput = {
    AND?: provinciaScalarWhereInput | provinciaScalarWhereInput[]
    OR?: provinciaScalarWhereInput[]
    NOT?: provinciaScalarWhereInput | provinciaScalarWhereInput[]
    id?: IntFilter<"provincia"> | number
    nombre?: StringFilter<"provincia"> | string
    id_ciudad?: IntNullableFilter<"provincia"> | number | null
  }

  export type usuarioUpsertWithWhereUniqueWithoutCiudadInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutCiudadInput, usuarioUncheckedUpdateWithoutCiudadInput>
    create: XOR<usuarioCreateWithoutCiudadInput, usuarioUncheckedCreateWithoutCiudadInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutCiudadInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutCiudadInput, usuarioUncheckedUpdateWithoutCiudadInput>
  }

  export type usuarioUpdateManyWithWhereWithoutCiudadInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutCiudadInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"usuario"> | Date | string | null
    genero?: StringNullableFilter<"usuario"> | string | null
    id_ciudad?: IntNullableFilter<"usuario"> | number | null
    contrasena?: StringFilter<"usuario"> | string
    google_id?: StringNullableFilter<"usuario"> | string | null
    foto?: StringNullableFilter<"usuario"> | string | null
    telefono?: StringNullableFilter<"usuario"> | string | null
  }

  export type carroCreateWithoutCombustiblecarroInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput
    direccion?: direccionCreateNestedOneWithoutCarroInput
    usuario_rol?: usuario_rolCreateNestedOneWithoutCarroInput
    imagen?: imagenCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateWithoutCombustiblecarroInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput
    imagen?: imagenUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroCreateOrConnectWithoutCombustiblecarroInput = {
    where: carroWhereUniqueInput
    create: XOR<carroCreateWithoutCombustiblecarroInput, carroUncheckedCreateWithoutCombustiblecarroInput>
  }

  export type tipocombustibleCreateWithoutCombustiblecarroInput = {
    tipo_de_combustible: string
  }

  export type tipocombustibleUncheckedCreateWithoutCombustiblecarroInput = {
    id?: number
    tipo_de_combustible: string
  }

  export type tipocombustibleCreateOrConnectWithoutCombustiblecarroInput = {
    where: tipocombustibleWhereUniqueInput
    create: XOR<tipocombustibleCreateWithoutCombustiblecarroInput, tipocombustibleUncheckedCreateWithoutCombustiblecarroInput>
  }

  export type carroUpsertWithoutCombustiblecarroInput = {
    update: XOR<carroUpdateWithoutCombustiblecarroInput, carroUncheckedUpdateWithoutCombustiblecarroInput>
    create: XOR<carroCreateWithoutCombustiblecarroInput, carroUncheckedCreateWithoutCombustiblecarroInput>
    where?: carroWhereInput
  }

  export type carroUpdateToOneWithWhereWithoutCombustiblecarroInput = {
    where?: carroWhereInput
    data: XOR<carroUpdateWithoutCombustiblecarroInput, carroUncheckedUpdateWithoutCombustiblecarroInput>
  }

  export type carroUpdateWithoutCombustiblecarroInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput
    direccion?: direccionUpdateOneWithoutCarroNestedInput
    usuario_rol?: usuario_rolUpdateOneWithoutCarroNestedInput
    imagen?: imagenUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateWithoutCombustiblecarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput
    imagen?: imagenUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type tipocombustibleUpsertWithoutCombustiblecarroInput = {
    update: XOR<tipocombustibleUpdateWithoutCombustiblecarroInput, tipocombustibleUncheckedUpdateWithoutCombustiblecarroInput>
    create: XOR<tipocombustibleCreateWithoutCombustiblecarroInput, tipocombustibleUncheckedCreateWithoutCombustiblecarroInput>
    where?: tipocombustibleWhereInput
  }

  export type tipocombustibleUpdateToOneWithWhereWithoutCombustiblecarroInput = {
    where?: tipocombustibleWhereInput
    data: XOR<tipocombustibleUpdateWithoutCombustiblecarroInput, tipocombustibleUncheckedUpdateWithoutCombustiblecarroInput>
  }

  export type tipocombustibleUpdateWithoutCombustiblecarroInput = {
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
  }

  export type tipocombustibleUncheckedUpdateWithoutCombustiblecarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_de_combustible?: StringFieldUpdateOperationsInput | string
  }

  export type carroCreateWithoutDireccionInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput
    usuario_rol?: usuario_rolCreateNestedOneWithoutCarroInput
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutCarroInput
    imagen?: imagenCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateWithoutDireccionInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutCarroInput
    imagen?: imagenUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroCreateOrConnectWithoutDireccionInput = {
    where: carroWhereUniqueInput
    create: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput>
  }

  export type carroCreateManyDireccionInputEnvelope = {
    data: carroCreateManyDireccionInput | carroCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type provinciaCreateWithoutDireccionInput = {
    nombre: string
    ciudad?: ciudadCreateNestedOneWithoutProvinciaInput
  }

  export type provinciaUncheckedCreateWithoutDireccionInput = {
    id?: number
    nombre: string
    id_ciudad?: number | null
  }

  export type provinciaCreateOrConnectWithoutDireccionInput = {
    where: provinciaWhereUniqueInput
    create: XOR<provinciaCreateWithoutDireccionInput, provinciaUncheckedCreateWithoutDireccionInput>
  }

  export type carroUpsertWithWhereUniqueWithoutDireccionInput = {
    where: carroWhereUniqueInput
    update: XOR<carroUpdateWithoutDireccionInput, carroUncheckedUpdateWithoutDireccionInput>
    create: XOR<carroCreateWithoutDireccionInput, carroUncheckedCreateWithoutDireccionInput>
  }

  export type carroUpdateWithWhereUniqueWithoutDireccionInput = {
    where: carroWhereUniqueInput
    data: XOR<carroUpdateWithoutDireccionInput, carroUncheckedUpdateWithoutDireccionInput>
  }

  export type carroUpdateManyWithWhereWithoutDireccionInput = {
    where: carroScalarWhereInput
    data: XOR<carroUpdateManyMutationInput, carroUncheckedUpdateManyWithoutDireccionInput>
  }

  export type carroScalarWhereInput = {
    AND?: carroScalarWhereInput | carroScalarWhereInput[]
    OR?: carroScalarWhereInput[]
    NOT?: carroScalarWhereInput | carroScalarWhereInput[]
    id?: IntFilter<"carro"> | number
    vim?: StringFilter<"carro"> | string
    anio?: IntNullableFilter<"carro"> | number | null
    marca?: StringNullableFilter<"carro"> | string | null
    modelo?: StringNullableFilter<"carro"> | string | null
    placa?: StringFilter<"carro"> | string
    id_direccion?: IntNullableFilter<"carro"> | number | null
    asientos?: IntNullableFilter<"carro"> | number | null
    puertas?: IntNullableFilter<"carro"> | number | null
    soat?: BoolNullableFilter<"carro"> | boolean | null
    precio_por_dia?: DecimalNullableFilter<"carro"> | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: IntNullableFilter<"carro"> | number | null
    transmision?: StringNullableFilter<"carro"> | string | null
    estado?: StringNullableFilter<"carro"> | string | null
    id_usuario_rol?: IntNullableFilter<"carro"> | number | null
  }

  export type provinciaUpsertWithoutDireccionInput = {
    update: XOR<provinciaUpdateWithoutDireccionInput, provinciaUncheckedUpdateWithoutDireccionInput>
    create: XOR<provinciaCreateWithoutDireccionInput, provinciaUncheckedCreateWithoutDireccionInput>
    where?: provinciaWhereInput
  }

  export type provinciaUpdateToOneWithWhereWithoutDireccionInput = {
    where?: provinciaWhereInput
    data: XOR<provinciaUpdateWithoutDireccionInput, provinciaUncheckedUpdateWithoutDireccionInput>
  }

  export type provinciaUpdateWithoutDireccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: ciudadUpdateOneWithoutProvinciaNestedInput
  }

  export type provinciaUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUpdateWithWhereUniqueWithoutDireccionInput = {
    where: ubicacionWhereUniqueInput
    data: XOR<ubicacionUpdateWithoutDireccionInput, ubicacionUncheckedUpdateWithoutDireccionInput>
  }

  export type ubicacionUpdateManyWithWhereWithoutDireccionInput = {
    where: ubicacionScalarWhereInput
    data: XOR<ubicacionUpdateManyMutationInput, ubicacionUncheckedUpdateManyWithoutDireccionInput>
  }

  export type ubicacionScalarWhereInput = {
    AND?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
    OR?: ubicacionScalarWhereInput[]
    NOT?: ubicacionScalarWhereInput | ubicacionScalarWhereInput[]
    id?: IntFilter<"ubicacion"> | number
    id_direccion?: IntNullableFilter<"ubicacion"> | number | null
    radio_cobertura?: IntNullableFilter<"ubicacion"> | number | null
  }

  export type carroCreateWithoutImagenInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput
    direccion?: direccionCreateNestedOneWithoutCarroInput
    usuario_rol?: usuario_rolCreateNestedOneWithoutCarroInput
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateWithoutImagenInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroCreateOrConnectWithoutImagenInput = {
    where: carroWhereUniqueInput
    create: XOR<carroCreateWithoutImagenInput, carroUncheckedCreateWithoutImagenInput>
  }

  export type carroUpsertWithoutImagenInput = {
    update: XOR<carroUpdateWithoutImagenInput, carroUncheckedUpdateWithoutImagenInput>
    create: XOR<carroCreateWithoutImagenInput, carroUncheckedCreateWithoutImagenInput>
    where?: carroWhereInput
  }

  export type carroUpdateToOneWithWhereWithoutImagenInput = {
    where?: carroWhereInput
    data: XOR<carroUpdateWithoutImagenInput, carroUncheckedUpdateWithoutImagenInput>
  }

  export type carroUpdateWithoutImagenInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput
    direccion?: direccionUpdateOneWithoutCarroNestedInput
    usuario_rol?: usuario_rolUpdateOneWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateWithoutImagenInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type ciudadCreateWithoutPaisInput = {
    nombre: string
    provincia?: provinciaCreateNestedManyWithoutCiudadInput
    usuario?: usuarioCreateNestedManyWithoutCiudadInput
  }

  export type ciudadUncheckedCreateWithoutPaisInput = {
    id?: number
    nombre: string
    provincia?: provinciaUncheckedCreateNestedManyWithoutCiudadInput
    usuario?: usuarioUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type ciudadCreateOrConnectWithoutPaisInput = {
    where: ciudadWhereUniqueInput
    create: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput>
  }

  export type ciudadCreateManyPaisInputEnvelope = {
    data: ciudadCreateManyPaisInput | ciudadCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type ciudadUpsertWithWhereUniqueWithoutPaisInput = {
    where: ciudadWhereUniqueInput
    update: XOR<ciudadUpdateWithoutPaisInput, ciudadUncheckedUpdateWithoutPaisInput>
    create: XOR<ciudadCreateWithoutPaisInput, ciudadUncheckedCreateWithoutPaisInput>
  }

  export type ciudadUpdateWithWhereUniqueWithoutPaisInput = {
    where: ciudadWhereUniqueInput
    data: XOR<ciudadUpdateWithoutPaisInput, ciudadUncheckedUpdateWithoutPaisInput>
  }

  export type ciudadUpdateManyWithWhereWithoutPaisInput = {
    where: ciudadScalarWhereInput
    data: XOR<ciudadUpdateManyMutationInput, ciudadUncheckedUpdateManyWithoutPaisInput>
  }

  export type ciudadScalarWhereInput = {
    AND?: ciudadScalarWhereInput | ciudadScalarWhereInput[]
    OR?: ciudadScalarWhereInput[]
    NOT?: ciudadScalarWhereInput | ciudadScalarWhereInput[]
    id?: IntFilter<"ciudad"> | number
    nombre?: StringFilter<"ciudad"> | string
    id_pais?: IntNullableFilter<"ciudad"> | number | null
  }

  export type direccionCreateWithoutProvinciaInput = {
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroCreateNestedManyWithoutDireccionInput
    ubicacion?: ubicacionCreateNestedManyWithoutDireccionInput
  }

  export type direccionUncheckedCreateWithoutProvinciaInput = {
    id?: number
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroUncheckedCreateNestedManyWithoutDireccionInput
    ubicacion?: ubicacionUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type direccionCreateOrConnectWithoutProvinciaInput = {
    where: direccionWhereUniqueInput
    create: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput>
  }

  export type direccionCreateManyProvinciaInputEnvelope = {
    data: direccionCreateManyProvinciaInput | direccionCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type ciudadCreateWithoutProvinciaInput = {
    nombre: string
    pais?: paisCreateNestedOneWithoutCiudadInput
    usuario?: usuarioCreateNestedManyWithoutCiudadInput
  }

  export type ciudadUncheckedCreateWithoutProvinciaInput = {
    id?: number
    nombre: string
    id_pais?: number | null
    usuario?: usuarioUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type ciudadCreateOrConnectWithoutProvinciaInput = {
    where: ciudadWhereUniqueInput
    create: XOR<ciudadCreateWithoutProvinciaInput, ciudadUncheckedCreateWithoutProvinciaInput>
  }

  export type direccionUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: direccionWhereUniqueInput
    update: XOR<direccionUpdateWithoutProvinciaInput, direccionUncheckedUpdateWithoutProvinciaInput>
    create: XOR<direccionCreateWithoutProvinciaInput, direccionUncheckedCreateWithoutProvinciaInput>
  }

  export type direccionUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: direccionWhereUniqueInput
    data: XOR<direccionUpdateWithoutProvinciaInput, direccionUncheckedUpdateWithoutProvinciaInput>
  }

  export type direccionUpdateManyWithWhereWithoutProvinciaInput = {
    where: direccionScalarWhereInput
    data: XOR<direccionUpdateManyMutationInput, direccionUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type direccionScalarWhereInput = {
    AND?: direccionScalarWhereInput | direccionScalarWhereInput[]
    OR?: direccionScalarWhereInput[]
    NOT?: direccionScalarWhereInput | direccionScalarWhereInput[]
    id?: IntFilter<"direccion"> | number
    id_provincia?: IntNullableFilter<"direccion"> | number | null
    calle?: StringNullableFilter<"direccion"> | string | null
    zona?: StringNullableFilter<"direccion"> | string | null
    num_casa?: StringNullableFilter<"direccion"> | string | null
  }

  export type ciudadUpsertWithoutProvinciaInput = {
    update: XOR<ciudadUpdateWithoutProvinciaInput, ciudadUncheckedUpdateWithoutProvinciaInput>
    create: XOR<ciudadCreateWithoutProvinciaInput, ciudadUncheckedCreateWithoutProvinciaInput>
    where?: ciudadWhereInput
  }

  export type ciudadUpdateToOneWithWhereWithoutProvinciaInput = {
    where?: ciudadWhereInput
    data: XOR<ciudadUpdateWithoutProvinciaInput, ciudadUncheckedUpdateWithoutProvinciaInput>
  }

  export type ciudadUpdateWithoutProvinciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: paisUpdateOneWithoutCiudadNestedInput
    usuario?: usuarioUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: usuarioUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type usuario_rolCreateWithoutRolInput = {
    carro?: carroCreateNestedManyWithoutUsuario_rolInput
    usuario?: usuarioCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutRolInput = {
    id?: number
    id_usuario?: number | null
    carro?: carroUncheckedCreateNestedManyWithoutUsuario_rolInput
  }

  export type usuario_rolCreateOrConnectWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolCreateManyRolInputEnvelope = {
    data: usuario_rolCreateManyRolInput | usuario_rolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
    create: XOR<usuario_rolCreateWithoutRolInput, usuario_rolUncheckedCreateWithoutRolInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutRolInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutRolInput, usuario_rolUncheckedUpdateWithoutRolInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutRolInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutRolInput>
  }

  export type usuario_rolScalarWhereInput = {
    AND?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    OR?: usuario_rolScalarWhereInput[]
    NOT?: usuario_rolScalarWhereInput | usuario_rolScalarWhereInput[]
    id?: IntFilter<"usuario_rol"> | number
    id_rol?: IntNullableFilter<"usuario_rol"> | number | null
    id_usuario?: IntNullableFilter<"usuario_rol"> | number | null
  }

  export type combustiblecarroCreateWithoutTipocombustibleInput = {
    carro?: carroCreateNestedOneWithoutCombustiblecarroInput
  }

  export type combustiblecarroUncheckedCreateWithoutTipocombustibleInput = {
    id?: number
    id_carro?: number | null
  }

  export type combustiblecarroCreateOrConnectWithoutTipocombustibleInput = {
    where: combustiblecarroWhereUniqueInput
    create: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput>
  }

  export type combustiblecarroCreateManyTipocombustibleInputEnvelope = {
    data: combustiblecarroCreateManyTipocombustibleInput | combustiblecarroCreateManyTipocombustibleInput[]
    skipDuplicates?: boolean
  }

  export type combustiblecarroUpsertWithWhereUniqueWithoutTipocombustibleInput = {
    where: combustiblecarroWhereUniqueInput
    update: XOR<combustiblecarroUpdateWithoutTipocombustibleInput, combustiblecarroUncheckedUpdateWithoutTipocombustibleInput>
    create: XOR<combustiblecarroCreateWithoutTipocombustibleInput, combustiblecarroUncheckedCreateWithoutTipocombustibleInput>
  }

  export type combustiblecarroUpdateWithWhereUniqueWithoutTipocombustibleInput = {
    where: combustiblecarroWhereUniqueInput
    data: XOR<combustiblecarroUpdateWithoutTipocombustibleInput, combustiblecarroUncheckedUpdateWithoutTipocombustibleInput>
  }

  export type combustiblecarroUpdateManyWithWhereWithoutTipocombustibleInput = {
    where: combustiblecarroScalarWhereInput
    data: XOR<combustiblecarroUpdateManyMutationInput, combustiblecarroUncheckedUpdateManyWithoutTipocombustibleInput>
  }

  export type direccionCreateWithoutUbicacionInput = {
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroCreateNestedManyWithoutDireccionInput
    provincia?: provinciaCreateNestedOneWithoutDireccionInput
  }

  export type direccionUncheckedCreateWithoutUbicacionInput = {
    id?: number
    id_provincia?: number | null
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
    carro?: carroUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type direccionCreateOrConnectWithoutUbicacionInput = {
    where: direccionWhereUniqueInput
    create: XOR<direccionCreateWithoutUbicacionInput, direccionUncheckedCreateWithoutUbicacionInput>
  }

  export type direccionUpsertWithoutUbicacionInput = {
    update: XOR<direccionUpdateWithoutUbicacionInput, direccionUncheckedUpdateWithoutUbicacionInput>
    create: XOR<direccionCreateWithoutUbicacionInput, direccionUncheckedCreateWithoutUbicacionInput>
    where?: direccionWhereInput
  }

  export type direccionUpdateToOneWithWhereWithoutUbicacionInput = {
    where?: direccionWhereInput
    data: XOR<direccionUpdateWithoutUbicacionInput, direccionUncheckedUpdateWithoutUbicacionInput>
  }

  export type direccionUpdateWithoutUbicacionInput = {
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUpdateManyWithoutDireccionNestedInput
    provincia?: provinciaUpdateOneWithoutDireccionNestedInput
  }

  export type direccionUncheckedUpdateWithoutUbicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_provincia?: NullableIntFieldUpdateOperationsInput | number | null
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type ciudadCreateWithoutUsuarioInput = {
    nombre: string
    pais?: paisCreateNestedOneWithoutCiudadInput
    provincia?: provinciaCreateNestedManyWithoutCiudadInput
  }

  export type ciudadUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    id_pais?: number | null
    provincia?: provinciaUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type ciudadCreateOrConnectWithoutUsuarioInput = {
    where: ciudadWhereUniqueInput
    create: XOR<ciudadCreateWithoutUsuarioInput, ciudadUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolCreateWithoutUsuarioInput = {
    carro?: carroCreateNestedManyWithoutUsuario_rolInput
    rol?: rolCreateNestedOneWithoutUsuario_rolInput
  }

  export type usuario_rolUncheckedCreateWithoutUsuarioInput = {
    id?: number
    id_rol?: number | null
    carro?: carroUncheckedCreateNestedManyWithoutUsuario_rolInput
  }

  export type usuario_rolCreateOrConnectWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolCreateManyUsuarioInputEnvelope = {
    data: usuario_rolCreateManyUsuarioInput | usuario_rolCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ciudadUpsertWithoutUsuarioInput = {
    update: XOR<ciudadUpdateWithoutUsuarioInput, ciudadUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ciudadCreateWithoutUsuarioInput, ciudadUncheckedCreateWithoutUsuarioInput>
    where?: ciudadWhereInput
  }

  export type ciudadUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ciudadWhereInput
    data: XOR<ciudadUpdateWithoutUsuarioInput, ciudadUncheckedUpdateWithoutUsuarioInput>
  }

  export type ciudadUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: paisUpdateOneWithoutCiudadNestedInput
    provincia?: provinciaUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: NullableIntFieldUpdateOperationsInput | number | null
    provincia?: provinciaUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    update: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuario_rolCreateWithoutUsuarioInput, usuario_rolUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_rolWhereUniqueInput
    data: XOR<usuario_rolUpdateWithoutUsuarioInput, usuario_rolUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_rolUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuario_rolScalarWhereInput
    data: XOR<usuario_rolUpdateManyMutationInput, usuario_rolUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type carroCreateWithoutUsuario_rolInput = {
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroCreateNestedManyWithoutCarroInput
    direccion?: direccionCreateNestedOneWithoutCarroInput
    combustiblecarro?: combustiblecarroCreateNestedManyWithoutCarroInput
    imagen?: imagenCreateNestedManyWithoutCarroInput
  }

  export type carroUncheckedCreateWithoutUsuario_rolInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedCreateNestedManyWithoutCarroInput
    combustiblecarro?: combustiblecarroUncheckedCreateNestedManyWithoutCarroInput
    imagen?: imagenUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carroCreateOrConnectWithoutUsuario_rolInput = {
    where: carroWhereUniqueInput
    create: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput>
  }

  export type carroCreateManyUsuario_rolInputEnvelope = {
    data: carroCreateManyUsuario_rolInput | carroCreateManyUsuario_rolInput[]
    skipDuplicates?: boolean
  }

  export type rolCreateWithoutUsuario_rolInput = {
    rol: string
  }

  export type rolUncheckedCreateWithoutUsuario_rolInput = {
    id?: number
    rol: string
  }

  export type rolCreateOrConnectWithoutUsuario_rolInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
  }

  export type usuarioCreateWithoutUsuario_rolInput = {
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
    ciudad?: ciudadCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuario_rolInput = {
    id?: number
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    id_ciudad?: number | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
  }

  export type usuarioCreateOrConnectWithoutUsuario_rolInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
  }

  export type carroUpsertWithWhereUniqueWithoutUsuario_rolInput = {
    where: carroWhereUniqueInput
    update: XOR<carroUpdateWithoutUsuario_rolInput, carroUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<carroCreateWithoutUsuario_rolInput, carroUncheckedCreateWithoutUsuario_rolInput>
  }

  export type carroUpdateWithWhereUniqueWithoutUsuario_rolInput = {
    where: carroWhereUniqueInput
    data: XOR<carroUpdateWithoutUsuario_rolInput, carroUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type carroUpdateManyWithWhereWithoutUsuario_rolInput = {
    where: carroScalarWhereInput
    data: XOR<carroUpdateManyMutationInput, carroUncheckedUpdateManyWithoutUsuario_rolInput>
  }

  export type rolUpsertWithoutUsuario_rolInput = {
    update: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<rolCreateWithoutUsuario_rolInput, rolUncheckedCreateWithoutUsuario_rolInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutUsuario_rolInput, rolUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type rolUpdateWithoutUsuario_rolInput = {
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateWithoutUsuario_rolInput = {
    id?: IntFieldUpdateOperationsInput | number
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpsertWithoutUsuario_rolInput = {
    update: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
    create: XOR<usuarioCreateWithoutUsuario_rolInput, usuarioUncheckedCreateWithoutUsuario_rolInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuario_rolInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuario_rolInput, usuarioUncheckedUpdateWithoutUsuario_rolInput>
  }

  export type usuarioUpdateWithoutUsuario_rolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: ciudadUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuario_rolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    id_ciudad?: NullableIntFieldUpdateOperationsInput | number | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type caracteristicasadicionalescarroCreateManyCaracteristicas_adicionalesInput = {
    id?: number
    id_carro?: number | null
  }

  export type caracteristicasadicionalescarroUpdateWithoutCaracteristicas_adicionalesInput = {
    carro?: carroUpdateOneWithoutCaracteristicasadicionalescarroNestedInput
  }

  export type caracteristicasadicionalescarroUncheckedUpdateWithoutCaracteristicas_adicionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type caracteristicasadicionalescarroUncheckedUpdateManyWithoutCaracteristicas_adicionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type caracteristicasadicionalescarroCreateManyCarroInput = {
    id?: number
    id_caracteristicas_adicionales?: number | null
  }

  export type combustiblecarroCreateManyCarroInput = {
    id?: number
    id_tipo_combustible?: number | null
  }

  export type imagenCreateManyCarroInput = {
    id?: number
    data: string
  }

  export type caracteristicasadicionalescarroUpdateWithoutCarroInput = {
    caracteristicas_adicionales?: caracteristicas_adicionalesUpdateOneWithoutCaracteristicasadicionalescarroNestedInput
  }

  export type caracteristicasadicionalescarroUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_caracteristicas_adicionales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_caracteristicas_adicionales?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroUpdateWithoutCarroInput = {
    tipocombustible?: tipocombustibleUpdateOneWithoutCombustiblecarroNestedInput
  }

  export type combustiblecarroUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_combustible?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroUncheckedUpdateManyWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_combustible?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagenUpdateWithoutCarroInput = {
    data?: StringFieldUpdateOperationsInput | string
  }

  export type imagenUncheckedUpdateWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
  }

  export type imagenUncheckedUpdateManyWithoutCarroInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: StringFieldUpdateOperationsInput | string
  }

  export type provinciaCreateManyCiudadInput = {
    id?: number
    nombre: string
  }

  export type usuarioCreateManyCiudadInput = {
    id?: number
    nombre: string
    fecha_nacimiento?: Date | string | null
    genero?: string | null
    contrasena: string
    google_id?: string | null
    foto?: string | null
    telefono?: string | null
  }

  export type provinciaUpdateWithoutCiudadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: direccionUpdateManyWithoutProvinciaNestedInput
  }

  export type provinciaUncheckedUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: direccionUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type provinciaUncheckedUpdateManyWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpdateWithoutCiudadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_rol?: usuario_rolUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_rol?: usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genero?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carroCreateManyDireccionInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
    id_usuario_rol?: number | null
  }

  export type carroUpdateWithoutDireccionInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput
    usuario_rol?: usuario_rolUpdateOneWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUpdateManyWithoutCarroNestedInput
    imagen?: imagenUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput
    imagen?: imagenUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    id_usuario_rol?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUpdateWithoutDireccionInput = {
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ubicacionUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    radio_cobertura?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ciudadCreateManyPaisInput = {
    id?: number
    nombre: string
  }

  export type ciudadUpdateWithoutPaisInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    provincia?: provinciaUpdateManyWithoutCiudadNestedInput
    usuario?: usuarioUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadUncheckedUpdateWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    provincia?: provinciaUncheckedUpdateManyWithoutCiudadNestedInput
    usuario?: usuarioUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type ciudadUncheckedUpdateManyWithoutPaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type direccionCreateManyProvinciaInput = {
    id?: number
    calle?: string | null
    zona?: string | null
    num_casa?: string | null
  }

  export type direccionUpdateWithoutProvinciaInput = {
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUpdateManyWithoutDireccionNestedInput
    ubicacion?: ubicacionUpdateManyWithoutDireccionNestedInput
  }

  export type direccionUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
    carro?: carroUncheckedUpdateManyWithoutDireccionNestedInput
    ubicacion?: ubicacionUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type direccionUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    calle?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    num_casa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_rolCreateManyRolInput = {
    id?: number
    id_usuario?: number | null
  }

  export type usuario_rolUpdateWithoutRolInput = {
    carro?: carroUpdateManyWithoutUsuario_rolNestedInput
    usuario?: usuarioUpdateOneWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    carro?: carroUncheckedUpdateManyWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroCreateManyTipocombustibleInput = {
    id?: number
    id_carro?: number | null
  }

  export type combustiblecarroUpdateWithoutTipocombustibleInput = {
    carro?: carroUpdateOneWithoutCombustiblecarroNestedInput
  }

  export type combustiblecarroUncheckedUpdateWithoutTipocombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type combustiblecarroUncheckedUpdateManyWithoutTipocombustibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_carro?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuario_rolCreateManyUsuarioInput = {
    id?: number
    id_rol?: number | null
  }

  export type usuario_rolUpdateWithoutUsuarioInput = {
    carro?: carroUpdateManyWithoutUsuario_rolNestedInput
    rol?: rolUpdateOneWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: NullableIntFieldUpdateOperationsInput | number | null
    carro?: carroUncheckedUpdateManyWithoutUsuario_rolNestedInput
  }

  export type usuario_rolUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carroCreateManyUsuario_rolInput = {
    id?: number
    vim: string
    anio?: number | null
    marca?: string | null
    modelo?: string | null
    placa: string
    id_direccion?: number | null
    asientos?: number | null
    puertas?: number | null
    soat?: boolean | null
    precio_por_dia?: Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: number | null
    transmision?: string | null
    estado?: string | null
  }

  export type carroUpdateWithoutUsuario_rolInput = {
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUpdateManyWithoutCarroNestedInput
    direccion?: direccionUpdateOneWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUpdateManyWithoutCarroNestedInput
    imagen?: imagenUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateWithoutUsuario_rolInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    caracteristicasadicionalescarro?: caracteristicasadicionalescarroUncheckedUpdateManyWithoutCarroNestedInput
    combustiblecarro?: combustiblecarroUncheckedUpdateManyWithoutCarroNestedInput
    imagen?: imagenUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type carroUncheckedUpdateManyWithoutUsuario_rolInput = {
    id?: IntFieldUpdateOperationsInput | number
    vim?: StringFieldUpdateOperationsInput | string
    anio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    placa?: StringFieldUpdateOperationsInput | string
    id_direccion?: NullableIntFieldUpdateOperationsInput | number | null
    asientos?: NullableIntFieldUpdateOperationsInput | number | null
    puertas?: NullableIntFieldUpdateOperationsInput | number | null
    soat?: NullableBoolFieldUpdateOperationsInput | boolean | null
    precio_por_dia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    num_mantenimientos?: NullableIntFieldUpdateOperationsInput | number | null
    transmision?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}