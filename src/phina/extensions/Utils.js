/**
 * @method  $extend
 * 他のライブラリと競合しちゃうので extend -> $extend としました
 */
export function $extend() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      this[property] = source[property];
    }
  }, this);
  return this;
}
  
/**
 * @method  $safe
 * 安全拡張
 * 上書きしない
 */
export function $safe() {
  Array.prototype.forEach.call(arguments, function(source) {
    for (var property in source) {
      if (this[property] === undefined) this[property] = source[property];
    }
  }, this);
  return this;
}

/**
 * @method times
 * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
 *
 * ### Example
 *     arr = [];
 *     (5).times(function(i){
 *       arr.push(i);
 *     }); // => [0, 1, 2, 3, 4]
 *
 * @param {Function} fn コールバック関数
 * @param {Object} [self=this] 関数内で this として参照される値。デフォルトは自分自身。
 */
export function times(fn, self) {
  self = self || this;
  for (var i=0; i<this; ++i) {
    fn.call(self, i, this);
  }
  return this;
}

/**
 * @method randint
 * 指定された範囲内でランダムな整数値を返します。
 * 
 * @param {Number} min 範囲の最小値
 * @param {Number} max 範囲の最大値
 * @return {Number} ランダムな整数値
 */
export function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
