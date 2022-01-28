export interface UseCase<L, R> {
  execute(input: L): Promise<R>;
}
