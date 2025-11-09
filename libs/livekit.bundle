var livekitClient = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/livekit-client/dist/livekit-client.umd.js
  var require_livekit_client_umd = __commonJS({
    "node_modules/livekit-client/dist/livekit-client.umd.js"(exports, module) {
      !(function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).LivekitClient = {});
      })(exports, (function(e) {
        "use strict";
        function t(e2, t2) {
          return t2.forEach((function(t3) {
            t3 && "string" != typeof t3 && !Array.isArray(t3) && Object.keys(t3).forEach((function(n2) {
              if ("default" !== n2 && !(n2 in e2)) {
                var i2 = Object.getOwnPropertyDescriptor(t3, n2);
                Object.defineProperty(e2, n2, i2.get ? i2 : { enumerable: true, get: function() {
                  return t3[n2];
                } });
              }
            }));
          })), Object.freeze(e2);
        }
        var n = Object.defineProperty, i = (e2, t2, i2) => ((e3, t3, i3) => t3 in e3 ? n(e3, t3, { enumerable: true, configurable: true, writable: true, value: i3 }) : e3[t3] = i3)(e2, "symbol" != typeof t2 ? t2 + "" : t2, i2);
        class s {
          constructor() {
            i(this, "_locking"), i(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0;
          }
          isLocked() {
            return this._locks > 0;
          }
          lock() {
            let e2;
            this._locks += 1;
            const t2 = new Promise(((t3) => e2 = () => {
              this._locks -= 1, t3();
            })), n2 = this._locking.then((() => e2));
            return this._locking = this._locking.then((() => t2)), n2;
          }
        }
        function r(e2, t2) {
          if (!e2) throw new Error(t2);
        }
        const o = 34028234663852886e22, a = -34028234663852886e22, c = 4294967295, d = 2147483647, l = -2147483648;
        function u(e2) {
          if ("number" != typeof e2) throw new Error("invalid int 32: " + typeof e2);
          if (!Number.isInteger(e2) || e2 > d || e2 < l) throw new Error("invalid int 32: " + e2);
        }
        function h(e2) {
          if ("number" != typeof e2) throw new Error("invalid uint 32: " + typeof e2);
          if (!Number.isInteger(e2) || e2 > c || e2 < 0) throw new Error("invalid uint 32: " + e2);
        }
        function p(e2) {
          if ("number" != typeof e2) throw new Error("invalid float 32: " + typeof e2);
          if (Number.isFinite(e2) && (e2 > o || e2 < a)) throw new Error("invalid float 32: " + e2);
        }
        const m = Symbol("@bufbuild/protobuf/enum-type");
        function g(e2) {
          const t2 = e2[m];
          return r(t2, "missing enum type on enum object"), t2;
        }
        function v(e2, t2, n2, i2) {
          e2[m] = f(t2, n2.map(((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] }))));
        }
        function f(e2, t2, n2) {
          const i2 = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), r2 = [];
          for (const e3 of t2) {
            const t3 = b(e3);
            r2.push(t3), i2[e3.name] = t3, s2[e3.no] = t3;
          }
          return { typeName: e2, values: r2, findName: (e3) => i2[e3], findNumber: (e3) => s2[e3] };
        }
        function k(e2, t2, n2) {
          const i2 = {};
          for (const e3 of t2) {
            const t3 = b(e3);
            i2[t3.localName] = t3.no, i2[t3.no] = t3.localName;
          }
          return v(i2, e2, t2), i2;
        }
        function b(e2) {
          return "localName" in e2 ? e2 : Object.assign(Object.assign({}, e2), { localName: e2.name });
        }
        class y {
          equals(e2) {
            return this.getType().runtime.util.equals(this.getType(), this, e2);
          }
          clone() {
            return this.getType().runtime.util.clone(this);
          }
          fromBinary(e2, t2) {
            const n2 = this.getType().runtime.bin, i2 = n2.makeReadOptions(t2);
            return n2.readMessage(this, i2.readerFactory(e2), e2.byteLength, i2), this;
          }
          fromJson(e2, t2) {
            const n2 = this.getType(), i2 = n2.runtime.json, s2 = i2.makeReadOptions(t2);
            return i2.readMessage(n2, e2, s2, this), this;
          }
          fromJsonString(e2, t2) {
            let n2;
            try {
              n2 = JSON.parse(e2);
            } catch (e3) {
              throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(e3 instanceof Error ? e3.message : String(e3)));
            }
            return this.fromJson(n2, t2);
          }
          toBinary(e2) {
            const t2 = this.getType().runtime.bin, n2 = t2.makeWriteOptions(e2), i2 = n2.writerFactory();
            return t2.writeMessage(this, i2, n2), i2.finish();
          }
          toJson(e2) {
            const t2 = this.getType().runtime.json, n2 = t2.makeWriteOptions(e2);
            return t2.writeMessage(this, n2);
          }
          toJsonString(e2) {
            var t2;
            const n2 = this.toJson(e2);
            return JSON.stringify(n2, null, null !== (t2 = null == e2 ? void 0 : e2.prettySpaces) && void 0 !== t2 ? t2 : 0);
          }
          toJSON() {
            return this.toJson({ emitDefaultValues: true });
          }
          getType() {
            return Object.getPrototypeOf(this).constructor;
          }
        }
        function T() {
          let e2 = 0, t2 = 0;
          for (let n3 = 0; n3 < 28; n3 += 7) {
            let i2 = this.buf[this.pos++];
            if (e2 |= (127 & i2) << n3, 0 == (128 & i2)) return this.assertBounds(), [e2, t2];
          }
          let n2 = this.buf[this.pos++];
          if (e2 |= (15 & n2) << 28, t2 = (112 & n2) >> 4, 0 == (128 & n2)) return this.assertBounds(), [e2, t2];
          for (let n3 = 3; n3 <= 31; n3 += 7) {
            let i2 = this.buf[this.pos++];
            if (t2 |= (127 & i2) << n3, 0 == (128 & i2)) return this.assertBounds(), [e2, t2];
          }
          throw new Error("invalid varint");
        }
        function C(e2, t2, n2) {
          for (let i3 = 0; i3 < 28; i3 += 7) {
            const s3 = e2 >>> i3, r2 = !(s3 >>> 7 == 0 && 0 == t2), o2 = 255 & (r2 ? 128 | s3 : s3);
            if (n2.push(o2), !r2) return;
          }
          const i2 = e2 >>> 28 & 15 | (7 & t2) << 4, s2 = !(t2 >> 3 == 0);
          if (n2.push(255 & (s2 ? 128 | i2 : i2)), s2) {
            for (let e3 = 3; e3 < 31; e3 += 7) {
              const i3 = t2 >>> e3, s3 = !(i3 >>> 7 == 0), r2 = 255 & (s3 ? 128 | i3 : i3);
              if (n2.push(r2), !s3) return;
            }
            n2.push(t2 >>> 31 & 1);
          }
        }
        const S = 4294967296;
        function E(e2) {
          const t2 = "-" === e2[0];
          t2 && (e2 = e2.slice(1));
          const n2 = 1e6;
          let i2 = 0, s2 = 0;
          function r2(t3, r3) {
            const o2 = Number(e2.slice(t3, r3));
            s2 *= n2, i2 = i2 * n2 + o2, i2 >= S && (s2 += i2 / S | 0, i2 %= S);
          }
          return r2(-24, -18), r2(-18, -12), r2(-12, -6), r2(-6), t2 ? R(i2, s2) : P(i2, s2);
        }
        function w(e2, t2) {
          if ({ lo: e2, hi: t2 } = (function(e3, t3) {
            return { lo: e3 >>> 0, hi: t3 >>> 0 };
          })(e2, t2), t2 <= 2097151) return String(S * t2 + e2);
          const n2 = 16777215 & (e2 >>> 24 | t2 << 8), i2 = t2 >> 16 & 65535;
          let s2 = (16777215 & e2) + 6777216 * n2 + 6710656 * i2, r2 = n2 + 8147497 * i2, o2 = 2 * i2;
          const a2 = 1e7;
          return s2 >= a2 && (r2 += Math.floor(s2 / a2), s2 %= a2), r2 >= a2 && (o2 += Math.floor(r2 / a2), r2 %= a2), o2.toString() + I(r2) + I(s2);
        }
        function P(e2, t2) {
          return { lo: 0 | e2, hi: 0 | t2 };
        }
        function R(e2, t2) {
          return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, P(e2, t2);
        }
        const I = (e2) => {
          const t2 = String(e2);
          return "0000000".slice(t2.length) + t2;
        };
        function O(e2, t2) {
          if (e2 >= 0) {
            for (; e2 > 127; ) t2.push(127 & e2 | 128), e2 >>>= 7;
            t2.push(e2);
          } else {
            for (let n2 = 0; n2 < 9; n2++) t2.push(127 & e2 | 128), e2 >>= 7;
            t2.push(1);
          }
        }
        function D() {
          let e2 = this.buf[this.pos++], t2 = 127 & e2;
          if (0 == (128 & e2)) return this.assertBounds(), t2;
          if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, 0 == (128 & e2)) return this.assertBounds(), t2;
          if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, 0 == (128 & e2)) return this.assertBounds(), t2;
          if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, 0 == (128 & e2)) return this.assertBounds(), t2;
          e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
          for (let t3 = 5; 0 != (128 & e2) && t3 < 10; t3++) e2 = this.buf[this.pos++];
          if (0 != (128 & e2)) throw new Error("invalid varint");
          return this.assertBounds(), t2 >>> 0;
        }
        const x = (function() {
          const e2 = new DataView(new ArrayBuffer(8));
          if ("function" == typeof BigInt && "function" == typeof e2.getBigInt64 && "function" == typeof e2.getBigUint64 && "function" == typeof e2.setBigInt64 && "function" == typeof e2.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
            const t3 = BigInt("-9223372036854775808"), n3 = BigInt("9223372036854775807"), i2 = BigInt("0"), s2 = BigInt("18446744073709551615");
            return { zero: BigInt(0), supported: true, parse(e3) {
              const i3 = "bigint" == typeof e3 ? e3 : BigInt(e3);
              if (i3 > n3 || i3 < t3) throw new Error("int64 invalid: ".concat(e3));
              return i3;
            }, uParse(e3) {
              const t4 = "bigint" == typeof e3 ? e3 : BigInt(e3);
              if (t4 > s2 || t4 < i2) throw new Error("uint64 invalid: ".concat(e3));
              return t4;
            }, enc(t4) {
              return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
            }, uEnc(t4) {
              return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
            }, dec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigInt64(0, true)), uDec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigUint64(0, true)) };
          }
          const t2 = (e3) => r(/^-?[0-9]+$/.test(e3), "int64 invalid: ".concat(e3)), n2 = (e3) => r(/^[0-9]+$/.test(e3), "uint64 invalid: ".concat(e3));
          return { zero: "0", supported: false, parse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), e3), enc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), E(e3)), uEnc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), E(e3)), dec: (e3, t3) => (function(e4, t4) {
            let n3 = P(e4, t4);
            const i2 = 2147483648 & n3.hi;
            i2 && (n3 = R(n3.lo, n3.hi));
            const s2 = w(n3.lo, n3.hi);
            return i2 ? "-" + s2 : s2;
          })(e3, t3), uDec: (e3, t3) => w(e3, t3) };
        })();
        var M, A, _;
        function N(e2, t2, n2) {
          if (t2 === n2) return true;
          if (e2 == M.BYTES) {
            if (!(t2 instanceof Uint8Array && n2 instanceof Uint8Array)) return false;
            if (t2.length !== n2.length) return false;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== n2[e3]) return false;
            return true;
          }
          switch (e2) {
            case M.UINT64:
            case M.FIXED64:
            case M.INT64:
            case M.SFIXED64:
            case M.SINT64:
              return t2 == n2;
          }
          return false;
        }
        function L(e2, t2) {
          switch (e2) {
            case M.BOOL:
              return false;
            case M.UINT64:
            case M.FIXED64:
            case M.INT64:
            case M.SFIXED64:
            case M.SINT64:
              return 0 == t2 ? x.zero : "0";
            case M.DOUBLE:
            case M.FLOAT:
              return 0;
            case M.BYTES:
              return new Uint8Array(0);
            case M.STRING:
              return "";
            default:
              return 0;
          }
        }
        function U(e2, t2) {
          switch (e2) {
            case M.BOOL:
              return false === t2;
            case M.STRING:
              return "" === t2;
            case M.BYTES:
              return t2 instanceof Uint8Array && !t2.byteLength;
            default:
              return 0 == t2;
          }
        }
        !(function(e2) {
          e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64";
        })(M || (M = {})), (function(e2) {
          e2[e2.BIGINT = 0] = "BIGINT", e2[e2.STRING = 1] = "STRING";
        })(A || (A = {})), (function(e2) {
          e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32";
        })(_ || (_ = {}));
        class j {
          constructor(e2) {
            this.stack = [], this.textEncoder = null != e2 ? e2 : new TextEncoder(), this.chunks = [], this.buf = [];
          }
          finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e2 = 0;
            for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
            let t2 = new Uint8Array(e2), n2 = 0;
            for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], n2), n2 += this.chunks[e3].length;
            return this.chunks = [], t2;
          }
          fork() {
            return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
          }
          join() {
            let e2 = this.finish(), t2 = this.stack.pop();
            if (!t2) throw new Error("invalid state, fork stack empty");
            return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
          }
          tag(e2, t2) {
            return this.uint32((e2 << 3 | t2) >>> 0);
          }
          raw(e2) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
          }
          uint32(e2) {
            for (h(e2); e2 > 127; ) this.buf.push(127 & e2 | 128), e2 >>>= 7;
            return this.buf.push(e2), this;
          }
          int32(e2) {
            return u(e2), O(e2, this.buf), this;
          }
          bool(e2) {
            return this.buf.push(e2 ? 1 : 0), this;
          }
          bytes(e2) {
            return this.uint32(e2.byteLength), this.raw(e2);
          }
          string(e2) {
            let t2 = this.textEncoder.encode(e2);
            return this.uint32(t2.byteLength), this.raw(t2);
          }
          float(e2) {
            p(e2);
            let t2 = new Uint8Array(4);
            return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
          }
          double(e2) {
            let t2 = new Uint8Array(8);
            return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
          }
          fixed32(e2) {
            h(e2);
            let t2 = new Uint8Array(4);
            return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
          }
          sfixed32(e2) {
            u(e2);
            let t2 = new Uint8Array(4);
            return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
          }
          sint32(e2) {
            return u(e2), O(e2 = (e2 << 1 ^ e2 >> 31) >>> 0, this.buf), this;
          }
          sfixed64(e2) {
            let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = x.enc(e2);
            return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
          }
          fixed64(e2) {
            let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = x.uEnc(e2);
            return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
          }
          int64(e2) {
            let t2 = x.enc(e2);
            return C(t2.lo, t2.hi, this.buf), this;
          }
          sint64(e2) {
            let t2 = x.enc(e2), n2 = t2.hi >> 31;
            return C(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
          }
          uint64(e2) {
            let t2 = x.uEnc(e2);
            return C(t2.lo, t2.hi, this.buf), this;
          }
        }
        class F {
          constructor(e2, t2) {
            this.varint64 = T, this.uint32 = D, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = null != t2 ? t2 : new TextDecoder();
          }
          tag() {
            let e2 = this.uint32(), t2 = e2 >>> 3, n2 = 7 & e2;
            if (t2 <= 0 || n2 < 0 || n2 > 5) throw new Error("illegal tag: field no " + t2 + " wire type " + n2);
            return [t2, n2];
          }
          skip(e2, t2) {
            let n2 = this.pos;
            switch (e2) {
              case _.Varint:
                for (; 128 & this.buf[this.pos++]; ) ;
                break;
              case _.Bit64:
                this.pos += 4;
              case _.Bit32:
                this.pos += 4;
                break;
              case _.LengthDelimited:
                let n3 = this.uint32();
                this.pos += n3;
                break;
              case _.StartGroup:
                for (; ; ) {
                  const [e3, n4] = this.tag();
                  if (n4 === _.EndGroup) {
                    if (void 0 !== t2 && e3 !== t2) throw new Error("invalid end group tag");
                    break;
                  }
                  this.skip(n4, e3);
                }
                break;
              default:
                throw new Error("cant skip wire type " + e2);
            }
            return this.assertBounds(), this.buf.subarray(n2, this.pos);
          }
          assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
          }
          int32() {
            return 0 | this.uint32();
          }
          sint32() {
            let e2 = this.uint32();
            return e2 >>> 1 ^ -(1 & e2);
          }
          int64() {
            return x.dec(...this.varint64());
          }
          uint64() {
            return x.uDec(...this.varint64());
          }
          sint64() {
            let [e2, t2] = this.varint64(), n2 = -(1 & e2);
            return e2 = (e2 >>> 1 | (1 & t2) << 31) ^ n2, t2 = t2 >>> 1 ^ n2, x.dec(e2, t2);
          }
          bool() {
            let [e2, t2] = this.varint64();
            return 0 !== e2 || 0 !== t2;
          }
          fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, true);
          }
          sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, true);
          }
          fixed64() {
            return x.uDec(this.sfixed32(), this.sfixed32());
          }
          sfixed64() {
            return x.dec(this.sfixed32(), this.sfixed32());
          }
          float() {
            return this.view.getFloat32((this.pos += 4) - 4, true);
          }
          double() {
            return this.view.getFloat64((this.pos += 8) - 8, true);
          }
          bytes() {
            let e2 = this.uint32(), t2 = this.pos;
            return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
          }
          string() {
            return this.textDecoder.decode(this.bytes());
          }
        }
        function B(e2) {
          const t2 = e2.field.localName, n2 = /* @__PURE__ */ Object.create(null);
          return n2[t2] = (function(e3) {
            const t3 = e3.field;
            if (t3.repeated) return [];
            if (void 0 !== t3.default) return t3.default;
            switch (t3.kind) {
              case "enum":
                return t3.T.values[0].no;
              case "scalar":
                return L(t3.T, t3.L);
              case "message":
                const e4 = t3.T, n3 = new e4();
                return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(n3) : n3;
              case "map":
                throw "map fields are not allowed to be extensions";
            }
          })(e2), [n2, () => n2[t2]];
        }
        let V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), q = [];
        for (let e2 = 0; e2 < V.length; e2++) q[V[e2].charCodeAt(0)] = e2;
        q["-".charCodeAt(0)] = V.indexOf("+"), q["_".charCodeAt(0)] = V.indexOf("/");
        const K = { dec(e2) {
          let t2 = 3 * e2.length / 4;
          "=" == e2[e2.length - 2] ? t2 -= 2 : "=" == e2[e2.length - 1] && (t2 -= 1);
          let n2, i2 = new Uint8Array(t2), s2 = 0, r2 = 0, o2 = 0;
          for (let t3 = 0; t3 < e2.length; t3++) {
            if (n2 = q[e2.charCodeAt(t3)], void 0 === n2) switch (e2[t3]) {
              case "=":
                r2 = 0;
              case "\n":
              case "\r":
              case "	":
              case " ":
                continue;
              default:
                throw Error("invalid base64 string.");
            }
            switch (r2) {
              case 0:
                o2 = n2, r2 = 1;
                break;
              case 1:
                i2[s2++] = o2 << 2 | (48 & n2) >> 4, o2 = n2, r2 = 2;
                break;
              case 2:
                i2[s2++] = (15 & o2) << 4 | (60 & n2) >> 2, o2 = n2, r2 = 3;
                break;
              case 3:
                i2[s2++] = (3 & o2) << 6 | n2, r2 = 0;
            }
          }
          if (1 == r2) throw Error("invalid base64 string.");
          return i2.subarray(0, s2);
        }, enc(e2) {
          let t2, n2 = "", i2 = 0, s2 = 0;
          for (let r2 = 0; r2 < e2.length; r2++) switch (t2 = e2[r2], i2) {
            case 0:
              n2 += V[t2 >> 2], s2 = (3 & t2) << 4, i2 = 1;
              break;
            case 1:
              n2 += V[s2 | t2 >> 4], s2 = (15 & t2) << 2, i2 = 2;
              break;
            case 2:
              n2 += V[s2 | t2 >> 6], n2 += V[63 & t2], i2 = 0;
          }
          return i2 && (n2 += V[s2], n2 += "=", 1 == i2 && (n2 += "=")), n2;
        } };
        function H(e2, t2, n2) {
          z(t2, e2);
          const i2 = t2.runtime.bin.makeReadOptions(n2), s2 = (function(e3, t3) {
            if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
              for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
              return [];
            }
            return e3.filter(((e4) => e4.no === t3.no));
          })(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), [r2, o2] = B(t2);
          for (const e3 of s2) t2.runtime.bin.readField(r2, i2.readerFactory(e3.data), t2.field, e3.wireType, i2);
          return o2();
        }
        function W(e2, t2, n2, i2) {
          z(t2, e2);
          const s2 = t2.runtime.bin.makeReadOptions(i2), r2 = t2.runtime.bin.makeWriteOptions(i2);
          if (G(e2, t2)) {
            const n3 = e2.getType().runtime.bin.listUnknownFields(e2).filter(((e3) => e3.no != t2.field.no));
            e2.getType().runtime.bin.discardUnknownFields(e2);
            for (const t3 of n3) e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
          }
          const o2 = r2.writerFactory();
          let a2 = t2.field;
          a2.opt || a2.repeated || "enum" != a2.kind && "scalar" != a2.kind || (a2 = Object.assign(Object.assign({}, t2.field), { opt: true })), t2.runtime.bin.writeField(a2, n2, o2, r2);
          const c2 = s2.readerFactory(o2.finish());
          for (; c2.pos < c2.len; ) {
            const [t3, n3] = c2.tag(), i3 = c2.skip(n3, t3);
            e2.getType().runtime.bin.onUnknownField(e2, t3, n3, i3);
          }
        }
        function G(e2, t2) {
          const n2 = e2.getType();
          return t2.extendee.typeName === n2.typeName && !!n2.runtime.bin.listUnknownFields(e2).find(((e3) => e3.no == t2.field.no));
        }
        function z(e2, t2) {
          r(e2.extendee.typeName == t2.getType().typeName, "extension ".concat(e2.typeName, " can only be applied to message ").concat(e2.extendee.typeName));
        }
        function J(e2, t2) {
          const n2 = e2.localName;
          if (e2.repeated) return t2[n2].length > 0;
          if (e2.oneof) return t2[e2.oneof.localName].case === n2;
          switch (e2.kind) {
            case "enum":
            case "scalar":
              return e2.opt || e2.req ? void 0 !== t2[n2] : "enum" == e2.kind ? t2[n2] !== e2.T.values[0].no : !U(e2.T, t2[n2]);
            case "message":
              return void 0 !== t2[n2];
            case "map":
              return Object.keys(t2[n2]).length > 0;
          }
        }
        function Q(e2, t2) {
          const n2 = e2.localName, i2 = !e2.opt && !e2.req;
          if (e2.repeated) t2[n2] = [];
          else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
          else switch (e2.kind) {
            case "map":
              t2[n2] = {};
              break;
            case "enum":
              t2[n2] = i2 ? e2.T.values[0].no : void 0;
              break;
            case "scalar":
              t2[n2] = i2 ? L(e2.T, e2.L) : void 0;
              break;
            case "message":
              t2[n2] = void 0;
          }
        }
        function Y(e2, t2) {
          if (null === e2 || "object" != typeof e2) return false;
          if (!Object.getOwnPropertyNames(y.prototype).every(((t3) => t3 in e2 && "function" == typeof e2[t3]))) return false;
          const n2 = e2.getType();
          return null !== n2 && "function" == typeof n2 && "typeName" in n2 && "string" == typeof n2.typeName && (void 0 === t2 || n2.typeName == t2.typeName);
        }
        function X(e2, t2) {
          return Y(t2) || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2);
        }
        M.DOUBLE, M.FLOAT, M.INT64, M.UINT64, M.INT32, M.UINT32, M.BOOL, M.STRING, M.BYTES;
        const Z = { ignoreUnknownFields: false }, $ = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
        function ee(e2) {
          return e2 ? Object.assign(Object.assign({}, Z), e2) : Z;
        }
        function te(e2) {
          return e2 ? Object.assign(Object.assign({}, $), e2) : $;
        }
        const ne = Symbol(), ie = Symbol();
        function se(e2) {
          if (null === e2) return "null";
          switch (typeof e2) {
            case "object":
              return Array.isArray(e2) ? "array" : "object";
            case "string":
              return e2.length > 100 ? "string" : '"'.concat(e2.split('"').join('\\"'), '"');
            default:
              return String(e2);
          }
        }
        function re(e2, t2, n2, i2, s2) {
          let o2 = n2.localName;
          if (n2.repeated) {
            if (r("map" != n2.kind), null === t2) return;
            if (!Array.isArray(t2)) throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(t2)));
            const a2 = e2[o2];
            for (const e3 of t2) {
              if (null === e3) throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(e3)));
              switch (n2.kind) {
                case "message":
                  a2.push(n2.T.fromJson(e3, i2));
                  break;
                case "enum":
                  const t3 = ce(n2.T, e3, i2.ignoreUnknownFields, true);
                  t3 !== ie && a2.push(t3);
                  break;
                case "scalar":
                  try {
                    a2.push(ae(n2.T, e3, n2.L, true));
                  } catch (t4) {
                    let i3 = "cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(e3));
                    throw t4 instanceof Error && t4.message.length > 0 && (i3 += ": ".concat(t4.message)), new Error(i3);
                  }
              }
            }
          } else if ("map" == n2.kind) {
            if (null === t2) return;
            if ("object" != typeof t2 || Array.isArray(t2)) throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(t2)));
            const r2 = e2[o2];
            for (const [e3, o3] of Object.entries(t2)) {
              if (null === o3) throw new Error("cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: map value null"));
              let a2;
              try {
                a2 = oe(n2.K, e3);
              } catch (e4) {
                let i3 = "cannot decode map key for field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(t2));
                throw e4 instanceof Error && e4.message.length > 0 && (i3 += ": ".concat(e4.message)), new Error(i3);
              }
              switch (n2.V.kind) {
                case "message":
                  r2[a2] = n2.V.T.fromJson(o3, i2);
                  break;
                case "enum":
                  const e4 = ce(n2.V.T, o3, i2.ignoreUnknownFields, true);
                  e4 !== ie && (r2[a2] = e4);
                  break;
                case "scalar":
                  try {
                    r2[a2] = ae(n2.V.T, o3, A.BIGINT, true);
                  } catch (e5) {
                    let i3 = "cannot decode map value for field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(t2));
                    throw e5 instanceof Error && e5.message.length > 0 && (i3 += ": ".concat(e5.message)), new Error(i3);
                  }
              }
            }
          } else switch (n2.oneof && (e2 = e2[n2.oneof.localName] = { case: o2 }, o2 = "value"), n2.kind) {
            case "message":
              const r2 = n2.T;
              if (null === t2 && "google.protobuf.Value" != r2.typeName) return;
              let a2 = e2[o2];
              Y(a2) ? a2.fromJson(t2, i2) : (e2[o2] = a2 = r2.fromJson(t2, i2), r2.fieldWrapper && !n2.oneof && (e2[o2] = r2.fieldWrapper.unwrapField(a2)));
              break;
            case "enum":
              const c2 = ce(n2.T, t2, i2.ignoreUnknownFields, false);
              switch (c2) {
                case ne:
                  Q(n2, e2);
                  break;
                case ie:
                  break;
                default:
                  e2[o2] = c2;
              }
              break;
            case "scalar":
              try {
                const i3 = ae(n2.T, t2, n2.L, false);
                if (i3 === ne) Q(n2, e2);
                else e2[o2] = i3;
              } catch (e3) {
                let i3 = "cannot decode field ".concat(s2.typeName, ".").concat(n2.name, " from JSON: ").concat(se(t2));
                throw e3 instanceof Error && e3.message.length > 0 && (i3 += ": ".concat(e3.message)), new Error(i3);
              }
          }
        }
        function oe(e2, t2) {
          if (e2 === M.BOOL) switch (t2) {
            case "true":
              t2 = true;
              break;
            case "false":
              t2 = false;
          }
          return ae(e2, t2, A.BIGINT, true).toString();
        }
        function ae(e2, t2, n2, i2) {
          if (null === t2) return i2 ? L(e2, n2) : ne;
          switch (e2) {
            case M.DOUBLE:
            case M.FLOAT:
              if ("NaN" === t2) return Number.NaN;
              if ("Infinity" === t2) return Number.POSITIVE_INFINITY;
              if ("-Infinity" === t2) return Number.NEGATIVE_INFINITY;
              if ("" === t2) break;
              if ("string" == typeof t2 && t2.trim().length !== t2.length) break;
              if ("string" != typeof t2 && "number" != typeof t2) break;
              const i3 = Number(t2);
              if (Number.isNaN(i3)) break;
              if (!Number.isFinite(i3)) break;
              return e2 == M.FLOAT && p(i3), i3;
            case M.INT32:
            case M.FIXED32:
            case M.SFIXED32:
            case M.SINT32:
            case M.UINT32:
              let s2;
              if ("number" == typeof t2 ? s2 = t2 : "string" == typeof t2 && t2.length > 0 && t2.trim().length === t2.length && (s2 = Number(t2)), void 0 === s2) break;
              return e2 == M.UINT32 || e2 == M.FIXED32 ? h(s2) : u(s2), s2;
            case M.INT64:
            case M.SFIXED64:
            case M.SINT64:
              if ("number" != typeof t2 && "string" != typeof t2) break;
              const r2 = x.parse(t2);
              return n2 ? r2.toString() : r2;
            case M.FIXED64:
            case M.UINT64:
              if ("number" != typeof t2 && "string" != typeof t2) break;
              const o2 = x.uParse(t2);
              return n2 ? o2.toString() : o2;
            case M.BOOL:
              if ("boolean" != typeof t2) break;
              return t2;
            case M.STRING:
              if ("string" != typeof t2) break;
              try {
                encodeURIComponent(t2);
              } catch (e3) {
                throw new Error("invalid UTF8");
              }
              return t2;
            case M.BYTES:
              if ("" === t2) return new Uint8Array(0);
              if ("string" != typeof t2) break;
              return K.dec(t2);
          }
          throw new Error();
        }
        function ce(e2, t2, n2, i2) {
          if (null === t2) return "google.protobuf.NullValue" == e2.typeName ? 0 : i2 ? e2.values[0].no : ne;
          switch (typeof t2) {
            case "number":
              if (Number.isInteger(t2)) return t2;
              break;
            case "string":
              const i3 = e2.findName(t2);
              if (void 0 !== i3) return i3.no;
              if (n2) return ie;
          }
          throw new Error("cannot decode enum ".concat(e2.typeName, " from JSON: ").concat(se(t2)));
        }
        function de(e2) {
          return !(!e2.repeated && "map" != e2.kind) || !e2.oneof && ("message" != e2.kind && (!e2.opt && !e2.req));
        }
        function le(e2, t2, n2) {
          if ("map" == e2.kind) {
            r("object" == typeof t2 && null != t2);
            const i2 = {}, s2 = Object.entries(t2);
            switch (e2.V.kind) {
              case "scalar":
                for (const [t4, n3] of s2) i2[t4.toString()] = he(e2.V.T, n3);
                break;
              case "message":
                for (const [e3, t4] of s2) i2[e3.toString()] = t4.toJson(n2);
                break;
              case "enum":
                const t3 = e2.V.T;
                for (const [e3, r2] of s2) i2[e3.toString()] = ue(t3, r2, n2.enumAsInteger);
            }
            return n2.emitDefaultValues || s2.length > 0 ? i2 : void 0;
          }
          if (e2.repeated) {
            r(Array.isArray(t2));
            const i2 = [];
            switch (e2.kind) {
              case "scalar":
                for (let n3 = 0; n3 < t2.length; n3++) i2.push(he(e2.T, t2[n3]));
                break;
              case "enum":
                for (let s2 = 0; s2 < t2.length; s2++) i2.push(ue(e2.T, t2[s2], n2.enumAsInteger));
                break;
              case "message":
                for (let e3 = 0; e3 < t2.length; e3++) i2.push(t2[e3].toJson(n2));
            }
            return n2.emitDefaultValues || i2.length > 0 ? i2 : void 0;
          }
          switch (e2.kind) {
            case "scalar":
              return he(e2.T, t2);
            case "enum":
              return ue(e2.T, t2, n2.enumAsInteger);
            case "message":
              return X(e2.T, t2).toJson(n2);
          }
        }
        function ue(e2, t2, n2) {
          var i2;
          if (r("number" == typeof t2), "google.protobuf.NullValue" == e2.typeName) return null;
          if (n2) return t2;
          const s2 = e2.findNumber(t2);
          return null !== (i2 = null == s2 ? void 0 : s2.name) && void 0 !== i2 ? i2 : t2;
        }
        function he(e2, t2) {
          switch (e2) {
            case M.INT32:
            case M.SFIXED32:
            case M.SINT32:
            case M.FIXED32:
            case M.UINT32:
              return r("number" == typeof t2), t2;
            case M.FLOAT:
            case M.DOUBLE:
              return r("number" == typeof t2), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
            case M.STRING:
              return r("string" == typeof t2), t2;
            case M.BOOL:
              return r("boolean" == typeof t2), t2;
            case M.UINT64:
            case M.FIXED64:
            case M.INT64:
            case M.SFIXED64:
            case M.SINT64:
              return r("bigint" == typeof t2 || "string" == typeof t2 || "number" == typeof t2), t2.toString();
            case M.BYTES:
              return r(t2 instanceof Uint8Array), K.enc(t2);
          }
        }
        const pe = Symbol("@bufbuild/protobuf/unknown-fields"), me = { readUnknownFields: true, readerFactory: (e2) => new F(e2) }, ge = { writeUnknownFields: true, writerFactory: () => new j() };
        function ve(e2) {
          return e2 ? Object.assign(Object.assign({}, me), e2) : me;
        }
        function fe(e2) {
          return e2 ? Object.assign(Object.assign({}, ge), e2) : ge;
        }
        function ke(e2, t2, n2, i2, s2) {
          let { repeated: r2, localName: o2 } = n2;
          switch (n2.oneof && ((e2 = e2[n2.oneof.localName]).case != o2 && delete e2.value, e2.case = o2, o2 = "value"), n2.kind) {
            case "scalar":
            case "enum":
              const a2 = "enum" == n2.kind ? M.INT32 : n2.T;
              let c2 = Te;
              if ("scalar" == n2.kind && n2.L > 0 && (c2 = ye), r2) {
                let n3 = e2[o2];
                if (i2 == _.LengthDelimited && a2 != M.STRING && a2 != M.BYTES) {
                  let e3 = t2.uint32() + t2.pos;
                  for (; t2.pos < e3; ) n3.push(c2(t2, a2));
                } else n3.push(c2(t2, a2));
              } else e2[o2] = c2(t2, a2);
              break;
            case "message":
              const d2 = n2.T;
              r2 ? e2[o2].push(be(t2, new d2(), s2, n2)) : Y(e2[o2]) ? be(t2, e2[o2], s2, n2) : (e2[o2] = be(t2, new d2(), s2, n2), !d2.fieldWrapper || n2.oneof || n2.repeated || (e2[o2] = d2.fieldWrapper.unwrapField(e2[o2])));
              break;
            case "map":
              let [l2, u2] = (function(e3, t3, n3) {
                const i3 = t3.uint32(), s3 = t3.pos + i3;
                let r3, o3;
                for (; t3.pos < s3; ) {
                  const [i4] = t3.tag();
                  switch (i4) {
                    case 1:
                      r3 = Te(t3, e3.K);
                      break;
                    case 2:
                      switch (e3.V.kind) {
                        case "scalar":
                          o3 = Te(t3, e3.V.T);
                          break;
                        case "enum":
                          o3 = t3.int32();
                          break;
                        case "message":
                          o3 = be(t3, new e3.V.T(), n3, void 0);
                      }
                  }
                }
                void 0 === r3 && (r3 = L(e3.K, A.BIGINT));
                "string" != typeof r3 && "number" != typeof r3 && (r3 = r3.toString());
                if (void 0 === o3) switch (e3.V.kind) {
                  case "scalar":
                    o3 = L(e3.V.T, A.BIGINT);
                    break;
                  case "enum":
                    o3 = e3.V.T.values[0].no;
                    break;
                  case "message":
                    o3 = new e3.V.T();
                }
                return [r3, o3];
              })(n2, t2, s2);
              e2[o2][l2] = u2;
          }
        }
        function be(e2, t2, n2, i2) {
          const s2 = t2.getType().runtime.bin, r2 = null == i2 ? void 0 : i2.delimited;
          return s2.readMessage(t2, e2, r2 ? i2.no : e2.uint32(), n2, r2), t2;
        }
        function ye(e2, t2) {
          const n2 = Te(e2, t2);
          return "bigint" == typeof n2 ? n2.toString() : n2;
        }
        function Te(e2, t2) {
          switch (t2) {
            case M.STRING:
              return e2.string();
            case M.BOOL:
              return e2.bool();
            case M.DOUBLE:
              return e2.double();
            case M.FLOAT:
              return e2.float();
            case M.INT32:
              return e2.int32();
            case M.INT64:
              return e2.int64();
            case M.UINT64:
              return e2.uint64();
            case M.FIXED64:
              return e2.fixed64();
            case M.BYTES:
              return e2.bytes();
            case M.FIXED32:
              return e2.fixed32();
            case M.SFIXED32:
              return e2.sfixed32();
            case M.SFIXED64:
              return e2.sfixed64();
            case M.SINT64:
              return e2.sint64();
            case M.UINT32:
              return e2.uint32();
            case M.SINT32:
              return e2.sint32();
          }
        }
        function Ce(e2, t2, n2, i2) {
          r(void 0 !== t2);
          const s2 = e2.repeated;
          switch (e2.kind) {
            case "scalar":
            case "enum":
              let o2 = "enum" == e2.kind ? M.INT32 : e2.T;
              if (s2) if (r(Array.isArray(t2)), e2.packed) !(function(e3, t3, n3, i3) {
                if (!i3.length) return;
                e3.tag(n3, _.LengthDelimited).fork();
                let [, s3] = Pe(t3);
                for (let t4 = 0; t4 < i3.length; t4++) e3[s3](i3[t4]);
                e3.join();
              })(n2, o2, e2.no, t2);
              else for (const i3 of t2) we(n2, o2, e2.no, i3);
              else we(n2, o2, e2.no, t2);
              break;
            case "message":
              if (s2) {
                r(Array.isArray(t2));
                for (const s3 of t2) Ee(n2, i2, e2, s3);
              } else Ee(n2, i2, e2, t2);
              break;
            case "map":
              r("object" == typeof t2 && null != t2);
              for (const [s3, r2] of Object.entries(t2)) Se(n2, i2, e2, s3, r2);
          }
        }
        function Se(e2, t2, n2, i2, s2) {
          e2.tag(n2.no, _.LengthDelimited), e2.fork();
          let o2 = i2;
          switch (n2.K) {
            case M.INT32:
            case M.FIXED32:
            case M.UINT32:
            case M.SFIXED32:
            case M.SINT32:
              o2 = Number.parseInt(i2);
              break;
            case M.BOOL:
              r("true" == i2 || "false" == i2), o2 = "true" == i2;
          }
          switch (we(e2, n2.K, 1, o2), n2.V.kind) {
            case "scalar":
              we(e2, n2.V.T, 2, s2);
              break;
            case "enum":
              we(e2, M.INT32, 2, s2);
              break;
            case "message":
              r(void 0 !== s2), e2.tag(2, _.LengthDelimited).bytes(s2.toBinary(t2));
          }
          e2.join();
        }
        function Ee(e2, t2, n2, i2) {
          const s2 = X(n2.T, i2);
          n2.delimited ? e2.tag(n2.no, _.StartGroup).raw(s2.toBinary(t2)).tag(n2.no, _.EndGroup) : e2.tag(n2.no, _.LengthDelimited).bytes(s2.toBinary(t2));
        }
        function we(e2, t2, n2, i2) {
          r(void 0 !== i2);
          let [s2, o2] = Pe(t2);
          e2.tag(n2, s2)[o2](i2);
        }
        function Pe(e2) {
          let t2 = _.Varint;
          switch (e2) {
            case M.BYTES:
            case M.STRING:
              t2 = _.LengthDelimited;
              break;
            case M.DOUBLE:
            case M.FIXED64:
            case M.SFIXED64:
              t2 = _.Bit64;
              break;
            case M.FIXED32:
            case M.SFIXED32:
            case M.FLOAT:
              t2 = _.Bit32;
          }
          return [t2, M[e2].toLowerCase()];
        }
        function Re(e2) {
          if (void 0 === e2) return e2;
          if (Y(e2)) return e2.clone();
          if (e2 instanceof Uint8Array) {
            const t2 = new Uint8Array(e2.byteLength);
            return t2.set(e2), t2;
          }
          return e2;
        }
        function Ie(e2) {
          return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
        }
        class Oe {
          constructor(e2, t2) {
            this._fields = e2, this._normalizer = t2;
          }
          findJsonName(e2) {
            if (!this.jsonNames) {
              const e3 = {};
              for (const t2 of this.list()) e3[t2.jsonName] = e3[t2.name] = t2;
              this.jsonNames = e3;
            }
            return this.jsonNames[e2];
          }
          find(e2) {
            if (!this.numbers) {
              const e3 = {};
              for (const t2 of this.list()) e3[t2.no] = t2;
              this.numbers = e3;
            }
            return this.numbers[e2];
          }
          list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all;
          }
          byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort(((e2, t2) => e2.no - t2.no))), this.numbersAsc;
          }
          byMember() {
            if (!this.members) {
              this.members = [];
              const e2 = this.members;
              let t2;
              for (const n2 of this.list()) n2.oneof ? n2.oneof !== t2 && (t2 = n2.oneof, e2.push(t2)) : e2.push(n2);
            }
            return this.members;
          }
        }
        function De(e2, t2) {
          const n2 = Me(e2);
          return t2 ? n2 : Ue(Le(n2));
        }
        const xe = Me;
        function Me(e2) {
          let t2 = false;
          const n2 = [];
          for (let i2 = 0; i2 < e2.length; i2++) {
            let s2 = e2.charAt(i2);
            switch (s2) {
              case "_":
                t2 = true;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                n2.push(s2), t2 = false;
                break;
              default:
                t2 && (t2 = false, s2 = s2.toUpperCase()), n2.push(s2);
            }
          }
          return n2.join("");
        }
        const Ae = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), _e = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ne = (e2) => "".concat(e2, "$"), Le = (e2) => _e.has(e2) ? Ne(e2) : e2, Ue = (e2) => Ae.has(e2) ? Ne(e2) : e2;
        class je {
          constructor(e2) {
            this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e2, this.localName = De(e2, false);
          }
          addField(e2) {
            r(e2.oneof === this, "field ".concat(e2.name, " not one of ").concat(this.name)), this.fields.push(e2);
          }
          findField(e2) {
            if (!this._lookup) {
              this._lookup = /* @__PURE__ */ Object.create(null);
              for (let e3 = 0; e3 < this.fields.length; e3++) this._lookup[this.fields[e3].localName] = this.fields[e3];
            }
            return this._lookup[e2];
          }
        }
        const Fe = (Be = (e2) => new Oe(e2, ((e3) => (function(e4, t2) {
          var n2, i2, s2, r2, o2, a2;
          const c2 = [];
          let d2;
          for (const t3 of "function" == typeof e4 ? e4() : e4) {
            const e5 = t3;
            if (e5.localName = De(t3.name, void 0 !== t3.oneof), e5.jsonName = null !== (n2 = t3.jsonName) && void 0 !== n2 ? n2 : xe(t3.name), e5.repeated = null !== (i2 = t3.repeated) && void 0 !== i2 && i2, "scalar" == t3.kind && (e5.L = null !== (s2 = t3.L) && void 0 !== s2 ? s2 : A.BIGINT), e5.delimited = null !== (r2 = t3.delimited) && void 0 !== r2 && r2, e5.req = null !== (o2 = t3.req) && void 0 !== o2 && o2, e5.opt = null !== (a2 = t3.opt) && void 0 !== a2 && a2, void 0 === t3.packed && (e5.packed = "enum" == t3.kind || "scalar" == t3.kind && t3.T != M.BYTES && t3.T != M.STRING), void 0 !== t3.oneof) {
              const n3 = "string" == typeof t3.oneof ? t3.oneof : t3.oneof.name;
              d2 && d2.name == n3 || (d2 = new je(n3)), e5.oneof = d2, d2.addField(e5);
            }
            c2.push(e5);
          }
          return c2;
        })(e3))), Ve = (e2) => {
          for (const t2 of e2.getType().fields.byMember()) {
            if (t2.opt) continue;
            const n2 = t2.localName, i2 = e2;
            if (t2.repeated) i2[n2] = [];
            else switch (t2.kind) {
              case "oneof":
                i2[n2] = { case: void 0 };
                break;
              case "enum":
                i2[n2] = 0;
                break;
              case "map":
                i2[n2] = {};
                break;
              case "scalar":
                i2[n2] = L(t2.T, t2.L);
            }
          }
        }, { syntax: "proto3", json: { makeReadOptions: ee, makeWriteOptions: te, readMessage(e2, t2, n2, i2) {
          if (null == t2 || Array.isArray(t2) || "object" != typeof t2) throw new Error("cannot decode message ".concat(e2.typeName, " from JSON: ").concat(se(t2)));
          i2 = null != i2 ? i2 : new e2();
          const s2 = /* @__PURE__ */ new Map(), r2 = n2.typeRegistry;
          for (const [o2, a2] of Object.entries(t2)) {
            const t3 = e2.fields.findJsonName(o2);
            if (t3) {
              if (t3.oneof) {
                if (null === a2 && "scalar" == t3.kind) continue;
                const n3 = s2.get(t3.oneof);
                if (void 0 !== n3) throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: multiple keys for oneof "').concat(t3.oneof.name, '" present: "').concat(n3, '", "').concat(o2, '"'));
                s2.set(t3.oneof, o2);
              }
              re(i2, a2, t3, n2, e2);
            } else {
              let t4 = false;
              if ((null == r2 ? void 0 : r2.findExtension) && o2.startsWith("[") && o2.endsWith("]")) {
                const s3 = r2.findExtension(o2.substring(1, o2.length - 1));
                if (s3 && s3.extendee.typeName == e2.typeName) {
                  t4 = true;
                  const [e3, r3] = B(s3);
                  re(e3, a2, s3.field, n2, s3), W(i2, s3, r3(), n2);
                }
              }
              if (!t4 && !n2.ignoreUnknownFields) throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: key "').concat(o2, '" is unknown'));
            }
          }
          return i2;
        }, writeMessage(e2, t2) {
          const n2 = e2.getType(), i2 = {};
          let s2;
          try {
            for (s2 of n2.fields.byNumber()) {
              if (!J(s2, e2)) {
                if (s2.req) throw "required field not set";
                if (!t2.emitDefaultValues) continue;
                if (!de(s2)) continue;
              }
              const n3 = le(s2, s2.oneof ? e2[s2.oneof.localName].value : e2[s2.localName], t2);
              void 0 !== n3 && (i2[t2.useProtoFieldName ? s2.name : s2.jsonName] = n3);
            }
            const r2 = t2.typeRegistry;
            if (null == r2 ? void 0 : r2.findExtensionFor) for (const s3 of n2.runtime.bin.listUnknownFields(e2)) {
              const o2 = r2.findExtensionFor(n2.typeName, s3.no);
              if (o2 && G(e2, o2)) {
                const n3 = H(e2, o2, t2), s4 = le(o2.field, n3, t2);
                void 0 !== s4 && (i2[o2.field.jsonName] = s4);
              }
            }
          } catch (e3) {
            const t3 = s2 ? "cannot encode field ".concat(n2.typeName, ".").concat(s2.name, " to JSON") : "cannot encode message ".concat(n2.typeName, " to JSON"), i3 = e3 instanceof Error ? e3.message : String(e3);
            throw new Error(t3 + (i3.length > 0 ? ": ".concat(i3) : ""));
          }
          return i2;
        }, readScalar: (e2, t2, n2) => ae(e2, t2, null != n2 ? n2 : A.BIGINT, true), writeScalar(e2, t2, n2) {
          if (void 0 !== t2) return n2 || U(e2, t2) ? he(e2, t2) : void 0;
        }, debug: se }, bin: { makeReadOptions: ve, makeWriteOptions: fe, listUnknownFields(e2) {
          var t2;
          return null !== (t2 = e2[pe]) && void 0 !== t2 ? t2 : [];
        }, discardUnknownFields(e2) {
          delete e2[pe];
        }, writeUnknownFields(e2, t2) {
          const n2 = e2[pe];
          if (n2) for (const e3 of n2) t2.tag(e3.no, e3.wireType).raw(e3.data);
        }, onUnknownField(e2, t2, n2, i2) {
          const s2 = e2;
          Array.isArray(s2[pe]) || (s2[pe] = []), s2[pe].push({ no: t2, wireType: n2, data: i2 });
        }, readMessage(e2, t2, n2, i2, s2) {
          const r2 = e2.getType(), o2 = s2 ? t2.len : t2.pos + n2;
          let a2, c2;
          for (; t2.pos < o2 && ([a2, c2] = t2.tag(), true !== s2 || c2 != _.EndGroup); ) {
            const n3 = r2.fields.find(a2);
            if (n3) ke(e2, t2, n3, c2, i2);
            else {
              const n4 = t2.skip(c2, a2);
              i2.readUnknownFields && this.onUnknownField(e2, a2, c2, n4);
            }
          }
          if (s2 && (c2 != _.EndGroup || a2 !== n2)) throw new Error("invalid end group tag");
        }, readField: ke, writeMessage(e2, t2, n2) {
          const i2 = e2.getType();
          for (const s2 of i2.fields.byNumber()) if (J(s2, e2)) Ce(s2, s2.oneof ? e2[s2.oneof.localName].value : e2[s2.localName], t2, n2);
          else if (s2.req) throw new Error("cannot encode field ".concat(i2.typeName, ".").concat(s2.name, " to binary: required field not set"));
          return n2.writeUnknownFields && this.writeUnknownFields(e2, t2), t2;
        }, writeField(e2, t2, n2, i2) {
          void 0 !== t2 && Ce(e2, t2, n2, i2);
        } }, util: Object.assign(Object.assign({}, { setEnumType: v, initPartial(e2, t2) {
          if (void 0 === e2) return;
          const n2 = t2.getType();
          for (const i2 of n2.fields.byMember()) {
            const n3 = i2.localName, s2 = t2, r2 = e2;
            if (null != r2[n3]) switch (i2.kind) {
              case "oneof":
                const e3 = r2[n3].case;
                if (void 0 === e3) continue;
                const t3 = i2.findField(e3);
                let o2 = r2[n3].value;
                t3 && "message" == t3.kind && !Y(o2, t3.T) ? o2 = new t3.T(o2) : t3 && "scalar" === t3.kind && t3.T === M.BYTES && (o2 = Ie(o2)), s2[n3] = { case: e3, value: o2 };
                break;
              case "scalar":
              case "enum":
                let a2 = r2[n3];
                i2.T === M.BYTES && (a2 = i2.repeated ? a2.map(Ie) : Ie(a2)), s2[n3] = a2;
                break;
              case "map":
                switch (i2.V.kind) {
                  case "scalar":
                  case "enum":
                    if (i2.V.T === M.BYTES) for (const [e5, t4] of Object.entries(r2[n3])) s2[n3][e5] = Ie(t4);
                    else Object.assign(s2[n3], r2[n3]);
                    break;
                  case "message":
                    const e4 = i2.V.T;
                    for (const t4 of Object.keys(r2[n3])) {
                      let i3 = r2[n3][t4];
                      e4.fieldWrapper || (i3 = new e4(i3)), s2[n3][t4] = i3;
                    }
                }
                break;
              case "message":
                const c2 = i2.T;
                if (i2.repeated) s2[n3] = r2[n3].map(((e4) => Y(e4, c2) ? e4 : new c2(e4)));
                else {
                  const e4 = r2[n3];
                  c2.fieldWrapper ? "google.protobuf.BytesValue" === c2.typeName ? s2[n3] = Ie(e4) : s2[n3] = e4 : s2[n3] = Y(e4, c2) ? e4 : new c2(e4);
                }
            }
          }
        }, equals: (e2, t2, n2) => t2 === n2 || !(!t2 || !n2) && e2.fields.byMember().every(((e3) => {
          const i2 = t2[e3.localName], s2 = n2[e3.localName];
          if (e3.repeated) {
            if (i2.length !== s2.length) return false;
            switch (e3.kind) {
              case "message":
                return i2.every(((t3, n3) => e3.T.equals(t3, s2[n3])));
              case "scalar":
                return i2.every(((t3, n3) => N(e3.T, t3, s2[n3])));
              case "enum":
                return i2.every(((e4, t3) => N(M.INT32, e4, s2[t3])));
            }
            throw new Error("repeated cannot contain ".concat(e3.kind));
          }
          switch (e3.kind) {
            case "message":
              let t3 = i2, n3 = s2;
              return e3.T.fieldWrapper && (void 0 === t3 || Y(t3) || (t3 = e3.T.fieldWrapper.wrapField(t3)), void 0 === n3 || Y(n3) || (n3 = e3.T.fieldWrapper.wrapField(n3))), e3.T.equals(t3, n3);
            case "enum":
              return N(M.INT32, i2, s2);
            case "scalar":
              return N(e3.T, i2, s2);
            case "oneof":
              if (i2.case !== s2.case) return false;
              const r2 = e3.findField(i2.case);
              if (void 0 === r2) return true;
              switch (r2.kind) {
                case "message":
                  return r2.T.equals(i2.value, s2.value);
                case "enum":
                  return N(M.INT32, i2.value, s2.value);
                case "scalar":
                  return N(r2.T, i2.value, s2.value);
              }
              throw new Error("oneof cannot contain ".concat(r2.kind));
            case "map":
              const o2 = Object.keys(i2).concat(Object.keys(s2));
              switch (e3.V.kind) {
                case "message":
                  const t4 = e3.V.T;
                  return o2.every(((e4) => t4.equals(i2[e4], s2[e4])));
                case "enum":
                  return o2.every(((e4) => N(M.INT32, i2[e4], s2[e4])));
                case "scalar":
                  const n4 = e3.V.T;
                  return o2.every(((e4) => N(n4, i2[e4], s2[e4])));
              }
          }
        })), clone(e2) {
          const t2 = e2.getType(), n2 = new t2(), i2 = n2;
          for (const n3 of t2.fields.byMember()) {
            const t3 = e2[n3.localName];
            let s2;
            if (n3.repeated) s2 = t3.map(Re);
            else if ("map" == n3.kind) {
              s2 = i2[n3.localName];
              for (const [e3, n4] of Object.entries(t3)) s2[e3] = Re(n4);
            } else s2 = "oneof" == n3.kind ? n3.findField(t3.case) ? { case: t3.case, value: Re(t3.value) } : { case: void 0 } : Re(t3);
            i2[n3.localName] = s2;
          }
          for (const n3 of t2.runtime.bin.listUnknownFields(e2)) t2.runtime.bin.onUnknownField(i2, n3.no, n3.wireType, n3.data);
          return n2;
        } }), { newFieldList: Be, initFields: Ve }), makeMessageType(e2, t2, n2) {
          return (function(e3, t3, n3, i2) {
            var s2;
            const r2 = null !== (s2 = null == i2 ? void 0 : i2.localName) && void 0 !== s2 ? s2 : t3.substring(t3.lastIndexOf(".") + 1), o2 = { [r2]: function(t4) {
              e3.util.initFields(this), e3.util.initPartial(t4, this);
            } }[r2];
            return Object.setPrototypeOf(o2.prototype, new y()), Object.assign(o2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(n3), fromBinary: (e4, t4) => new o2().fromBinary(e4, t4), fromJson: (e4, t4) => new o2().fromJson(e4, t4), fromJsonString: (e4, t4) => new o2().fromJsonString(e4, t4), equals: (t4, n4) => e3.util.equals(o2, t4, n4) }), o2;
          })(this, e2, t2, n2);
        }, makeEnum: k, makeEnumType: f, getEnumType: g, makeExtension(e2, t2, n2) {
          return /* @__PURE__ */ (function(e3, t3, n3, i2) {
            let s2;
            return { typeName: t3, extendee: n3, get field() {
              if (!s2) {
                const n4 = "function" == typeof i2 ? i2() : i2;
                n4.name = t3.split(".").pop(), n4.jsonName = "[".concat(t3, "]"), s2 = e3.util.newFieldList([n4]).list()[0];
              }
              return s2;
            }, runtime: e3 };
          })(this, e2, t2, n2);
        } });
        var Be, Ve;
        class qe extends y {
          constructor(e2) {
            super(), this.seconds = x.zero, this.nanos = 0, Fe.util.initPartial(e2, this);
          }
          fromJson(e2, t2) {
            if ("string" != typeof e2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(Fe.json.debug(e2)));
            const n2 = e2.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!n2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            const i2 = Date.parse(n2[1] + "-" + n2[2] + "-" + n2[3] + "T" + n2[4] + ":" + n2[5] + ":" + n2[6] + (n2[8] ? n2[8] : "Z"));
            if (Number.isNaN(i2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            if (i2 < Date.parse("0001-01-01T00:00:00Z") || i2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            return this.seconds = x.parse(i2 / 1e3), this.nanos = 0, n2[7] && (this.nanos = parseInt("1" + n2[7] + "0".repeat(9 - n2[7].length)) - 1e9), this;
          }
          toJson(e2) {
            const t2 = 1e3 * Number(this.seconds);
            if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
            let n2 = "Z";
            if (this.nanos > 0) {
              const e3 = (this.nanos + 1e9).toString().substring(1);
              n2 = "000000" === e3.substring(3) ? "." + e3.substring(0, 3) + "Z" : "000" === e3.substring(6) ? "." + e3.substring(0, 6) + "Z" : "." + e3 + "Z";
            }
            return new Date(t2).toISOString().replace(".000Z", n2);
          }
          toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
          }
          static now() {
            return qe.fromDate(/* @__PURE__ */ new Date());
          }
          static fromDate(e2) {
            const t2 = e2.getTime();
            return new qe({ seconds: x.parse(Math.floor(t2 / 1e3)), nanos: t2 % 1e3 * 1e6 });
          }
          static fromBinary(e2, t2) {
            return new qe().fromBinary(e2, t2);
          }
          static fromJson(e2, t2) {
            return new qe().fromJson(e2, t2);
          }
          static fromJsonString(e2, t2) {
            return new qe().fromJsonString(e2, t2);
          }
          static equals(e2, t2) {
            return Fe.util.equals(qe, e2, t2);
          }
        }
        qe.runtime = Fe, qe.typeName = "google.protobuf.Timestamp", qe.fields = Fe.util.newFieldList((() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]));
        const Ke = Fe.makeMessageType("livekit.MetricsBatch", (() => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: qe }, { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "time_series", kind: "message", T: He, repeated: true }, { no: 5, name: "events", kind: "message", T: Ge, repeated: true }])), He = Fe.makeMessageType("livekit.TimeSeriesMetric", (() => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "samples", kind: "message", T: We, repeated: true }, { no: 5, name: "rid", kind: "scalar", T: 13 }])), We = Fe.makeMessageType("livekit.MetricSample", (() => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: qe }, { no: 3, name: "value", kind: "scalar", T: 2 }])), Ge = Fe.makeMessageType("livekit.EventMetric", (() => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 }, { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 6, name: "normalized_start_timestamp", kind: "message", T: qe }, { no: 7, name: "normalized_end_timestamp", kind: "message", T: qe, opt: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "rid", kind: "scalar", T: 13 }])), ze = Fe.makeEnum("livekit.BackupCodecPolicy", [{ no: 0, name: "PREFER_REGRESSION" }, { no: 1, name: "SIMULCAST" }, { no: 2, name: "REGRESSION" }]), Je = Fe.makeEnum("livekit.TrackType", [{ no: 0, name: "AUDIO" }, { no: 1, name: "VIDEO" }, { no: 2, name: "DATA" }]), Qe = Fe.makeEnum("livekit.TrackSource", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "CAMERA" }, { no: 2, name: "MICROPHONE" }, { no: 3, name: "SCREEN_SHARE" }, { no: 4, name: "SCREEN_SHARE_AUDIO" }]), Ye = Fe.makeEnum("livekit.VideoQuality", [{ no: 0, name: "LOW" }, { no: 1, name: "MEDIUM" }, { no: 2, name: "HIGH" }, { no: 3, name: "OFF" }]), Xe = Fe.makeEnum("livekit.ConnectionQuality", [{ no: 0, name: "POOR" }, { no: 1, name: "GOOD" }, { no: 2, name: "EXCELLENT" }, { no: 3, name: "LOST" }]), Ze = Fe.makeEnum("livekit.ClientConfigSetting", [{ no: 0, name: "UNSET" }, { no: 1, name: "DISABLED" }, { no: 2, name: "ENABLED" }]), $e = Fe.makeEnum("livekit.DisconnectReason", [{ no: 0, name: "UNKNOWN_REASON" }, { no: 1, name: "CLIENT_INITIATED" }, { no: 2, name: "DUPLICATE_IDENTITY" }, { no: 3, name: "SERVER_SHUTDOWN" }, { no: 4, name: "PARTICIPANT_REMOVED" }, { no: 5, name: "ROOM_DELETED" }, { no: 6, name: "STATE_MISMATCH" }, { no: 7, name: "JOIN_FAILURE" }, { no: 8, name: "MIGRATION" }, { no: 9, name: "SIGNAL_CLOSE" }, { no: 10, name: "ROOM_CLOSED" }, { no: 11, name: "USER_UNAVAILABLE" }, { no: 12, name: "USER_REJECTED" }, { no: 13, name: "SIP_TRUNK_FAILURE" }, { no: 14, name: "CONNECTION_TIMEOUT" }, { no: 15, name: "MEDIA_FAILURE" }]), et = Fe.makeEnum("livekit.ReconnectReason", [{ no: 0, name: "RR_UNKNOWN" }, { no: 1, name: "RR_SIGNAL_DISCONNECTED" }, { no: 2, name: "RR_PUBLISHER_FAILED" }, { no: 3, name: "RR_SUBSCRIBER_FAILED" }, { no: 4, name: "RR_SWITCH_CANDIDATE" }]), tt = Fe.makeEnum("livekit.SubscriptionError", [{ no: 0, name: "SE_UNKNOWN" }, { no: 1, name: "SE_CODEC_UNSUPPORTED" }, { no: 2, name: "SE_TRACK_NOTFOUND" }]), nt = Fe.makeEnum("livekit.AudioTrackFeature", [{ no: 0, name: "TF_STEREO" }, { no: 1, name: "TF_NO_DTX" }, { no: 2, name: "TF_AUTO_GAIN_CONTROL" }, { no: 3, name: "TF_ECHO_CANCELLATION" }, { no: 4, name: "TF_NOISE_SUPPRESSION" }, { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" }, { no: 6, name: "TF_PRECONNECT_BUFFER" }]), it = Fe.makeMessageType("livekit.Room", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 14, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 5, name: "creation_time", kind: "scalar", T: 3 }, { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 }, { no: 6, name: "turn_password", kind: "scalar", T: 9 }, { no: 7, name: "enabled_codecs", kind: "message", T: st, repeated: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "num_participants", kind: "scalar", T: 13 }, { no: 11, name: "num_publishers", kind: "scalar", T: 13 }, { no: 10, name: "active_recording", kind: "scalar", T: 8 }, { no: 13, name: "version", kind: "message", T: Nt }])), st = Fe.makeMessageType("livekit.Codec", (() => [{ no: 1, name: "mime", kind: "scalar", T: 9 }, { no: 2, name: "fmtp_line", kind: "scalar", T: 9 }])), rt = Fe.makeMessageType("livekit.ParticipantPermission", (() => [{ no: 1, name: "can_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "can_publish", kind: "scalar", T: 8 }, { no: 3, name: "can_publish_data", kind: "scalar", T: 8 }, { no: 9, name: "can_publish_sources", kind: "enum", T: Fe.getEnumType(Qe), repeated: true }, { no: 7, name: "hidden", kind: "scalar", T: 8 }, { no: 8, name: "recorder", kind: "scalar", T: 8 }, { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 }, { no: 11, name: "agent", kind: "scalar", T: 8 }, { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 }])), ot = Fe.makeMessageType("livekit.ParticipantInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "identity", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Fe.getEnumType(at) }, { no: 4, name: "tracks", kind: "message", T: ht, repeated: true }, { no: 5, name: "metadata", kind: "scalar", T: 9 }, { no: 6, name: "joined_at", kind: "scalar", T: 3 }, { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 10, name: "version", kind: "scalar", T: 13 }, { no: 11, name: "permission", kind: "message", T: rt }, { no: 12, name: "region", kind: "scalar", T: 9 }, { no: 13, name: "is_publisher", kind: "scalar", T: 8 }, { no: 14, name: "kind", kind: "enum", T: Fe.getEnumType(ct) }, { no: 15, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 16, name: "disconnect_reason", kind: "enum", T: Fe.getEnumType($e) }, { no: 18, name: "kind_details", kind: "enum", T: Fe.getEnumType(dt), repeated: true }])), at = Fe.makeEnum("livekit.ParticipantInfo.State", [{ no: 0, name: "JOINING" }, { no: 1, name: "JOINED" }, { no: 2, name: "ACTIVE" }, { no: 3, name: "DISCONNECTED" }]), ct = Fe.makeEnum("livekit.ParticipantInfo.Kind", [{ no: 0, name: "STANDARD" }, { no: 1, name: "INGRESS" }, { no: 2, name: "EGRESS" }, { no: 3, name: "SIP" }, { no: 4, name: "AGENT" }]), dt = Fe.makeEnum("livekit.ParticipantInfo.KindDetail", [{ no: 0, name: "CLOUD_AGENT" }, { no: 1, name: "FORWARDED" }]), lt = Fe.makeEnum("livekit.Encryption.Type", [{ no: 0, name: "NONE" }, { no: 1, name: "GCM" }, { no: 2, name: "CUSTOM" }]), ut = Fe.makeMessageType("livekit.SimulcastCodecInfo", (() => [{ no: 1, name: "mime_type", kind: "scalar", T: 9 }, { no: 2, name: "mid", kind: "scalar", T: 9 }, { no: 3, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: pt, repeated: true }])), ht = Fe.makeMessageType("livekit.TrackInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: Fe.getEnumType(Je) }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "muted", kind: "scalar", T: 8 }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "simulcast", kind: "scalar", T: 8 }, { no: 8, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 9, name: "source", kind: "enum", T: Fe.getEnumType(Qe) }, { no: 10, name: "layers", kind: "message", T: pt, repeated: true }, { no: 11, name: "mime_type", kind: "scalar", T: 9 }, { no: 12, name: "mid", kind: "scalar", T: 9 }, { no: 13, name: "codecs", kind: "message", T: ut, repeated: true }, { no: 14, name: "stereo", kind: "scalar", T: 8 }, { no: 15, name: "disable_red", kind: "scalar", T: 8 }, { no: 16, name: "encryption", kind: "enum", T: Fe.getEnumType(lt) }, { no: 17, name: "stream", kind: "scalar", T: 9 }, { no: 18, name: "version", kind: "message", T: Nt }, { no: 19, name: "audio_features", kind: "enum", T: Fe.getEnumType(nt), repeated: true }, { no: 20, name: "backup_codec_policy", kind: "enum", T: Fe.getEnumType(ze) }])), pt = Fe.makeMessageType("livekit.VideoLayer", (() => [{ no: 1, name: "quality", kind: "enum", T: Fe.getEnumType(Ye) }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }, { no: 4, name: "bitrate", kind: "scalar", T: 13 }, { no: 5, name: "ssrc", kind: "scalar", T: 13 }, { no: 6, name: "spatial_layer", kind: "scalar", T: 5 }, { no: 7, name: "rid", kind: "scalar", T: 9 }])), mt = Fe.makeMessageType("livekit.DataPacket", (() => [{ no: 1, name: "kind", kind: "enum", T: Fe.getEnumType(gt) }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }, { no: 5, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "user", kind: "message", T: kt, oneof: "value" }, { no: 3, name: "speaker", kind: "message", T: vt, oneof: "value" }, { no: 6, name: "sip_dtmf", kind: "message", T: bt, oneof: "value" }, { no: 7, name: "transcription", kind: "message", T: yt, oneof: "value" }, { no: 8, name: "metrics", kind: "message", T: Ke, oneof: "value" }, { no: 9, name: "chat_message", kind: "message", T: Ct, oneof: "value" }, { no: 10, name: "rpc_request", kind: "message", T: St, oneof: "value" }, { no: 11, name: "rpc_ack", kind: "message", T: Et, oneof: "value" }, { no: 12, name: "rpc_response", kind: "message", T: wt, oneof: "value" }, { no: 13, name: "stream_header", kind: "message", T: Ft, oneof: "value" }, { no: 14, name: "stream_chunk", kind: "message", T: Bt, oneof: "value" }, { no: 15, name: "stream_trailer", kind: "message", T: Vt, oneof: "value" }, { no: 16, name: "sequence", kind: "scalar", T: 13 }, { no: 17, name: "participant_sid", kind: "scalar", T: 9 }])), gt = Fe.makeEnum("livekit.DataPacket.Kind", [{ no: 0, name: "RELIABLE" }, { no: 1, name: "LOSSY" }]), vt = Fe.makeMessageType("livekit.ActiveSpeakerUpdate", (() => [{ no: 1, name: "speakers", kind: "message", T: ft, repeated: true }])), ft = Fe.makeMessageType("livekit.SpeakerInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "level", kind: "scalar", T: 2 }, { no: 3, name: "active", kind: "scalar", T: 8 }])), kt = Fe.makeMessageType("livekit.UserPacket", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 5, name: "participant_identity", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 12 }, { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "topic", kind: "scalar", T: 9, opt: true }, { no: 8, name: "id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "start_time", kind: "scalar", T: 4, opt: true }, { no: 10, name: "end_time", kind: "scalar", T: 4, opt: true }, { no: 11, name: "nonce", kind: "scalar", T: 12 }])), bt = Fe.makeMessageType("livekit.SipDTMF", (() => [{ no: 3, name: "code", kind: "scalar", T: 13 }, { no: 4, name: "digit", kind: "scalar", T: 9 }])), yt = Fe.makeMessageType("livekit.Transcription", (() => [{ no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 }, { no: 3, name: "track_id", kind: "scalar", T: 9 }, { no: 4, name: "segments", kind: "message", T: Tt, repeated: true }])), Tt = Fe.makeMessageType("livekit.TranscriptionSegment", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_time", kind: "scalar", T: 4 }, { no: 4, name: "end_time", kind: "scalar", T: 4 }, { no: 5, name: "final", kind: "scalar", T: 8 }, { no: 6, name: "language", kind: "scalar", T: 9 }])), Ct = Fe.makeMessageType("livekit.ChatMessage", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: true }, { no: 4, name: "message", kind: "scalar", T: 9 }, { no: 5, name: "deleted", kind: "scalar", T: 8 }, { no: 6, name: "generated", kind: "scalar", T: 8 }])), St = Fe.makeMessageType("livekit.RpcRequest", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "method", kind: "scalar", T: 9 }, { no: 3, name: "payload", kind: "scalar", T: 9 }, { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 }, { no: 5, name: "version", kind: "scalar", T: 13 }])), Et = Fe.makeMessageType("livekit.RpcAck", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }])), wt = Fe.makeMessageType("livekit.RpcResponse", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" }, { no: 3, name: "error", kind: "message", T: Pt, oneof: "value" }])), Pt = Fe.makeMessageType("livekit.RpcError", (() => [{ no: 1, name: "code", kind: "scalar", T: 13 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "data", kind: "scalar", T: 9 }])), Rt = Fe.makeMessageType("livekit.ParticipantTracks", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: true }])), It = Fe.makeMessageType("livekit.ServerInfo", (() => [{ no: 1, name: "edition", kind: "enum", T: Fe.getEnumType(Ot) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "region", kind: "scalar", T: 9 }, { no: 5, name: "node_id", kind: "scalar", T: 9 }, { no: 6, name: "debug_info", kind: "scalar", T: 9 }, { no: 7, name: "agent_protocol", kind: "scalar", T: 5 }])), Ot = Fe.makeEnum("livekit.ServerInfo.Edition", [{ no: 0, name: "Standard" }, { no: 1, name: "Cloud" }]), Dt = Fe.makeMessageType("livekit.ClientInfo", (() => [{ no: 1, name: "sdk", kind: "enum", T: Fe.getEnumType(xt) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "os", kind: "scalar", T: 9 }, { no: 5, name: "os_version", kind: "scalar", T: 9 }, { no: 6, name: "device_model", kind: "scalar", T: 9 }, { no: 7, name: "browser", kind: "scalar", T: 9 }, { no: 8, name: "browser_version", kind: "scalar", T: 9 }, { no: 9, name: "address", kind: "scalar", T: 9 }, { no: 10, name: "network", kind: "scalar", T: 9 }, { no: 11, name: "other_sdks", kind: "scalar", T: 9 }])), xt = Fe.makeEnum("livekit.ClientInfo.SDK", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "JS" }, { no: 2, name: "SWIFT" }, { no: 3, name: "ANDROID" }, { no: 4, name: "FLUTTER" }, { no: 5, name: "GO" }, { no: 6, name: "UNITY" }, { no: 7, name: "REACT_NATIVE" }, { no: 8, name: "RUST" }, { no: 9, name: "PYTHON" }, { no: 10, name: "CPP" }, { no: 11, name: "UNITY_WEB" }, { no: 12, name: "NODE" }, { no: 13, name: "UNREAL" }, { no: 14, name: "ESP32" }]), Mt = Fe.makeMessageType("livekit.ClientConfiguration", (() => [{ no: 1, name: "video", kind: "message", T: At }, { no: 2, name: "screen", kind: "message", T: At }, { no: 3, name: "resume_connection", kind: "enum", T: Fe.getEnumType(Ze) }, { no: 4, name: "disabled_codecs", kind: "message", T: _t }, { no: 5, name: "force_relay", kind: "enum", T: Fe.getEnumType(Ze) }])), At = Fe.makeMessageType("livekit.VideoConfiguration", (() => [{ no: 1, name: "hardware_encoder", kind: "enum", T: Fe.getEnumType(Ze) }])), _t = Fe.makeMessageType("livekit.DisabledCodecs", (() => [{ no: 1, name: "codecs", kind: "message", T: st, repeated: true }, { no: 2, name: "publish", kind: "message", T: st, repeated: true }])), Nt = Fe.makeMessageType("livekit.TimedVersion", (() => [{ no: 1, name: "unix_micro", kind: "scalar", T: 3 }, { no: 2, name: "ticks", kind: "scalar", T: 5 }])), Lt = Fe.makeEnum("livekit.DataStream.OperationType", [{ no: 0, name: "CREATE" }, { no: 1, name: "UPDATE" }, { no: 2, name: "DELETE" }, { no: 3, name: "REACTION" }]), Ut = Fe.makeMessageType("livekit.DataStream.TextHeader", (() => [{ no: 1, name: "operation_type", kind: "enum", T: Fe.getEnumType(Lt) }, { no: 2, name: "version", kind: "scalar", T: 5 }, { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 }, { no: 4, name: "attached_stream_ids", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "generated", kind: "scalar", T: 8 }]), { localName: "DataStream_TextHeader" }), jt = Fe.makeMessageType("livekit.DataStream.ByteHeader", (() => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), { localName: "DataStream_ByteHeader" }), Ft = Fe.makeMessageType("livekit.DataStream.Header", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "topic", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 5, name: "total_length", kind: "scalar", T: 4, opt: true }, { no: 7, name: "encryption_type", kind: "enum", T: Fe.getEnumType(lt) }, { no: 8, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "text_header", kind: "message", T: Ut, oneof: "content_header" }, { no: 10, name: "byte_header", kind: "message", T: jt, oneof: "content_header" }]), { localName: "DataStream_Header" }), Bt = Fe.makeMessageType("livekit.DataStream.Chunk", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "chunk_index", kind: "scalar", T: 4 }, { no: 3, name: "content", kind: "scalar", T: 12 }, { no: 4, name: "version", kind: "scalar", T: 5 }, { no: 5, name: "iv", kind: "scalar", T: 12, opt: true }]), { localName: "DataStream_Chunk" }), Vt = Fe.makeMessageType("livekit.DataStream.Trailer", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), { localName: "DataStream_Trailer" }), qt = Fe.makeEnum("livekit.SignalTarget", [{ no: 0, name: "PUBLISHER" }, { no: 1, name: "SUBSCRIBER" }]), Kt = Fe.makeEnum("livekit.StreamState", [{ no: 0, name: "ACTIVE" }, { no: 1, name: "PAUSED" }]), Ht = Fe.makeEnum("livekit.CandidateProtocol", [{ no: 0, name: "UDP" }, { no: 1, name: "TCP" }, { no: 2, name: "TLS" }]), Wt = Fe.makeMessageType("livekit.SignalRequest", (() => [{ no: 1, name: "offer", kind: "message", T: tn, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: tn, oneof: "message" }, { no: 3, name: "trickle", kind: "message", T: Qt, oneof: "message" }, { no: 4, name: "add_track", kind: "message", T: Jt, oneof: "message" }, { no: 5, name: "mute", kind: "message", T: Yt, oneof: "message" }, { no: 6, name: "subscription", kind: "message", T: sn, oneof: "message" }, { no: 7, name: "track_setting", kind: "message", T: rn, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: cn, oneof: "message" }, { no: 10, name: "update_layers", kind: "message", T: ln, oneof: "message" }, { no: 11, name: "subscription_permission", kind: "message", T: Sn, oneof: "message" }, { no: 12, name: "sync_state", kind: "message", T: Pn, oneof: "message" }, { no: 13, name: "simulate", kind: "message", T: On, oneof: "message" }, { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" }, { no: 15, name: "update_metadata", kind: "message", T: un, oneof: "message" }, { no: 16, name: "ping_req", kind: "message", T: Dn, oneof: "message" }, { no: 17, name: "update_audio_track", kind: "message", T: on, oneof: "message" }, { no: 18, name: "update_video_track", kind: "message", T: an, oneof: "message" }])), Gt = Fe.makeMessageType("livekit.SignalResponse", (() => [{ no: 1, name: "join", kind: "message", T: Xt, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: tn, oneof: "message" }, { no: 3, name: "offer", kind: "message", T: tn, oneof: "message" }, { no: 4, name: "trickle", kind: "message", T: Qt, oneof: "message" }, { no: 5, name: "update", kind: "message", T: nn, oneof: "message" }, { no: 6, name: "track_published", kind: "message", T: $t, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: cn, oneof: "message" }, { no: 9, name: "mute", kind: "message", T: Yt, oneof: "message" }, { no: 10, name: "speakers_changed", kind: "message", T: pn, oneof: "message" }, { no: 11, name: "room_update", kind: "message", T: mn, oneof: "message" }, { no: 12, name: "connection_quality", kind: "message", T: vn, oneof: "message" }, { no: 13, name: "stream_state_update", kind: "message", T: kn, oneof: "message" }, { no: 14, name: "subscribed_quality_update", kind: "message", T: Tn, oneof: "message" }, { no: 15, name: "subscription_permission_update", kind: "message", T: En, oneof: "message" }, { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" }, { no: 17, name: "track_unpublished", kind: "message", T: en, oneof: "message" }, { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" }, { no: 19, name: "reconnect", kind: "message", T: Zt, oneof: "message" }, { no: 20, name: "pong_resp", kind: "message", T: xn, oneof: "message" }, { no: 21, name: "subscription_response", kind: "message", T: _n, oneof: "message" }, { no: 22, name: "request_response", kind: "message", T: Nn, oneof: "message" }, { no: 23, name: "track_subscribed", kind: "message", T: Un, oneof: "message" }, { no: 24, name: "room_moved", kind: "message", T: wn, oneof: "message" }])), zt = Fe.makeMessageType("livekit.SimulcastCodec", (() => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "cid", kind: "scalar", T: 9 }])), Jt = Fe.makeMessageType("livekit.AddTrackRequest", (() => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "enum", T: Fe.getEnumType(Je) }, { no: 4, name: "width", kind: "scalar", T: 13 }, { no: 5, name: "height", kind: "scalar", T: 13 }, { no: 6, name: "muted", kind: "scalar", T: 8 }, { no: 7, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 8, name: "source", kind: "enum", T: Fe.getEnumType(Qe) }, { no: 9, name: "layers", kind: "message", T: pt, repeated: true }, { no: 10, name: "simulcast_codecs", kind: "message", T: zt, repeated: true }, { no: 11, name: "sid", kind: "scalar", T: 9 }, { no: 12, name: "stereo", kind: "scalar", T: 8 }, { no: 13, name: "disable_red", kind: "scalar", T: 8 }, { no: 14, name: "encryption", kind: "enum", T: Fe.getEnumType(lt) }, { no: 15, name: "stream", kind: "scalar", T: 9 }, { no: 16, name: "backup_codec_policy", kind: "enum", T: Fe.getEnumType(ze) }, { no: 17, name: "audio_features", kind: "enum", T: Fe.getEnumType(nt), repeated: true }])), Qt = Fe.makeMessageType("livekit.TrickleRequest", (() => [{ no: 1, name: "candidateInit", kind: "scalar", T: 9 }, { no: 2, name: "target", kind: "enum", T: Fe.getEnumType(qt) }, { no: 3, name: "final", kind: "scalar", T: 8 }])), Yt = Fe.makeMessageType("livekit.MuteTrackRequest", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "muted", kind: "scalar", T: 8 }])), Xt = Fe.makeMessageType("livekit.JoinResponse", (() => [{ no: 1, name: "room", kind: "message", T: it }, { no: 2, name: "participant", kind: "message", T: ot }, { no: 3, name: "other_participants", kind: "message", T: ot, repeated: true }, { no: 4, name: "server_version", kind: "scalar", T: 9 }, { no: 5, name: "ice_servers", kind: "message", T: hn, repeated: true }, { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 }, { no: 7, name: "alternative_url", kind: "scalar", T: 9 }, { no: 8, name: "client_configuration", kind: "message", T: Mt }, { no: 9, name: "server_region", kind: "scalar", T: 9 }, { no: 10, name: "ping_timeout", kind: "scalar", T: 5 }, { no: 11, name: "ping_interval", kind: "scalar", T: 5 }, { no: 12, name: "server_info", kind: "message", T: It }, { no: 13, name: "sif_trailer", kind: "scalar", T: 12 }, { no: 14, name: "enabled_publish_codecs", kind: "message", T: st, repeated: true }, { no: 15, name: "fast_publish", kind: "scalar", T: 8 }])), Zt = Fe.makeMessageType("livekit.ReconnectResponse", (() => [{ no: 1, name: "ice_servers", kind: "message", T: hn, repeated: true }, { no: 2, name: "client_configuration", kind: "message", T: Mt }, { no: 3, name: "server_info", kind: "message", T: It }, { no: 4, name: "last_message_seq", kind: "scalar", T: 13 }])), $t = Fe.makeMessageType("livekit.TrackPublishedResponse", (() => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "track", kind: "message", T: ht }])), en = Fe.makeMessageType("livekit.TrackUnpublishedResponse", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }])), tn = Fe.makeMessageType("livekit.SessionDescription", (() => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "sdp", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 13 }])), nn = Fe.makeMessageType("livekit.ParticipantUpdate", (() => [{ no: 1, name: "participants", kind: "message", T: ot, repeated: true }])), sn = Fe.makeMessageType("livekit.UpdateSubscription", (() => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "participant_tracks", kind: "message", T: Rt, repeated: true }])), rn = Fe.makeMessageType("livekit.UpdateTrackSettings", (() => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "disabled", kind: "scalar", T: 8 }, { no: 4, name: "quality", kind: "enum", T: Fe.getEnumType(Ye) }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "fps", kind: "scalar", T: 13 }, { no: 8, name: "priority", kind: "scalar", T: 13 }])), on = Fe.makeMessageType("livekit.UpdateLocalAudioTrack", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "features", kind: "enum", T: Fe.getEnumType(nt), repeated: true }])), an = Fe.makeMessageType("livekit.UpdateLocalVideoTrack", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }])), cn = Fe.makeMessageType("livekit.LeaveRequest", (() => [{ no: 1, name: "can_reconnect", kind: "scalar", T: 8 }, { no: 2, name: "reason", kind: "enum", T: Fe.getEnumType($e) }, { no: 3, name: "action", kind: "enum", T: Fe.getEnumType(dn) }, { no: 4, name: "regions", kind: "message", T: Mn }])), dn = Fe.makeEnum("livekit.LeaveRequest.Action", [{ no: 0, name: "DISCONNECT" }, { no: 1, name: "RESUME" }, { no: 2, name: "RECONNECT" }]), ln = Fe.makeMessageType("livekit.UpdateVideoLayers", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "layers", kind: "message", T: pt, repeated: true }])), un = Fe.makeMessageType("livekit.UpdateParticipantMetadata", (() => [{ no: 1, name: "metadata", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 4, name: "request_id", kind: "scalar", T: 13 }])), hn = Fe.makeMessageType("livekit.ICEServer", (() => [{ no: 1, name: "urls", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "credential", kind: "scalar", T: 9 }])), pn = Fe.makeMessageType("livekit.SpeakersChanged", (() => [{ no: 1, name: "speakers", kind: "message", T: ft, repeated: true }])), mn = Fe.makeMessageType("livekit.RoomUpdate", (() => [{ no: 1, name: "room", kind: "message", T: it }])), gn = Fe.makeMessageType("livekit.ConnectionQualityInfo", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "quality", kind: "enum", T: Fe.getEnumType(Xe) }, { no: 3, name: "score", kind: "scalar", T: 2 }])), vn = Fe.makeMessageType("livekit.ConnectionQualityUpdate", (() => [{ no: 1, name: "updates", kind: "message", T: gn, repeated: true }])), fn = Fe.makeMessageType("livekit.StreamStateInfo", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Fe.getEnumType(Kt) }])), kn = Fe.makeMessageType("livekit.StreamStateUpdate", (() => [{ no: 1, name: "stream_states", kind: "message", T: fn, repeated: true }])), bn = Fe.makeMessageType("livekit.SubscribedQuality", (() => [{ no: 1, name: "quality", kind: "enum", T: Fe.getEnumType(Ye) }, { no: 2, name: "enabled", kind: "scalar", T: 8 }])), yn = Fe.makeMessageType("livekit.SubscribedCodec", (() => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "qualities", kind: "message", T: bn, repeated: true }])), Tn = Fe.makeMessageType("livekit.SubscribedQualityUpdate", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_qualities", kind: "message", T: bn, repeated: true }, { no: 3, name: "subscribed_codecs", kind: "message", T: yn, repeated: true }])), Cn = Fe.makeMessageType("livekit.TrackPermission", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "all_tracks", kind: "scalar", T: 8 }, { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }])), Sn = Fe.makeMessageType("livekit.SubscriptionPermission", (() => [{ no: 1, name: "all_participants", kind: "scalar", T: 8 }, { no: 2, name: "track_permissions", kind: "message", T: Cn, repeated: true }])), En = Fe.makeMessageType("livekit.SubscriptionPermissionUpdate", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "allowed", kind: "scalar", T: 8 }])), wn = Fe.makeMessageType("livekit.RoomMovedResponse", (() => [{ no: 1, name: "room", kind: "message", T: it }, { no: 2, name: "token", kind: "scalar", T: 9 }, { no: 3, name: "participant", kind: "message", T: ot }, { no: 4, name: "other_participants", kind: "message", T: ot, repeated: true }])), Pn = Fe.makeMessageType("livekit.SyncState", (() => [{ no: 1, name: "answer", kind: "message", T: tn }, { no: 2, name: "subscription", kind: "message", T: sn }, { no: 3, name: "publish_tracks", kind: "message", T: $t, repeated: true }, { no: 4, name: "data_channels", kind: "message", T: In, repeated: true }, { no: 5, name: "offer", kind: "message", T: tn }, { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "datachannel_receive_states", kind: "message", T: Rn, repeated: true }])), Rn = Fe.makeMessageType("livekit.DataChannelReceiveState", (() => [{ no: 1, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 2, name: "last_seq", kind: "scalar", T: 13 }])), In = Fe.makeMessageType("livekit.DataChannelInfo", (() => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 13 }, { no: 3, name: "target", kind: "enum", T: Fe.getEnumType(qt) }])), On = Fe.makeMessageType("livekit.SimulateScenario", (() => [{ no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" }, { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" }, { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" }, { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" }, { no: 5, name: "switch_candidate_protocol", kind: "enum", T: Fe.getEnumType(Ht), oneof: "scenario" }, { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3, oneof: "scenario" }, { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8, oneof: "scenario" }, { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8, oneof: "scenario" }, { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8, oneof: "scenario" }])), Dn = Fe.makeMessageType("livekit.Ping", (() => [{ no: 1, name: "timestamp", kind: "scalar", T: 3 }, { no: 2, name: "rtt", kind: "scalar", T: 3 }])), xn = Fe.makeMessageType("livekit.Pong", (() => [{ no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }])), Mn = Fe.makeMessageType("livekit.RegionSettings", (() => [{ no: 1, name: "regions", kind: "message", T: An, repeated: true }])), An = Fe.makeMessageType("livekit.RegionInfo", (() => [{ no: 1, name: "region", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "distance", kind: "scalar", T: 3 }])), _n = Fe.makeMessageType("livekit.SubscriptionResponse", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "err", kind: "enum", T: Fe.getEnumType(tt) }])), Nn = Fe.makeMessageType("livekit.RequestResponse", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "reason", kind: "enum", T: Fe.getEnumType(Ln) }, { no: 3, name: "message", kind: "scalar", T: 9 }])), Ln = Fe.makeEnum("livekit.RequestResponse.Reason", [{ no: 0, name: "OK" }, { no: 1, name: "NOT_FOUND" }, { no: 2, name: "NOT_ALLOWED" }, { no: 3, name: "LIMIT_EXCEEDED" }]), Un = Fe.makeMessageType("livekit.TrackSubscribed", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }]));
        function jn(e2) {
          return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
        }
        var Fn, Bn = { exports: {} }, Vn = Bn.exports;
        var qn, Kn, Hn = (Fn || (Fn = 1, (function(e2) {
          var t2, n2;
          t2 = Vn, n2 = function() {
            var e3 = function() {
            }, t3 = "undefined", n3 = typeof window !== t3 && typeof window.navigator !== t3 && /Trident\/|MSIE /.test(window.navigator.userAgent), i2 = ["trace", "debug", "info", "warn", "error"], s2 = {}, r2 = null;
            function o2(e4, t4) {
              var n4 = e4[t4];
              if ("function" == typeof n4.bind) return n4.bind(e4);
              try {
                return Function.prototype.bind.call(n4, e4);
              } catch (t5) {
                return function() {
                  return Function.prototype.apply.apply(n4, [e4, arguments]);
                };
              }
            }
            function a2() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
            }
            function c2() {
              for (var n4 = this.getLevel(), s3 = 0; s3 < i2.length; s3++) {
                var r3 = i2[s3];
                this[r3] = s3 < n4 ? e3 : this.methodFactory(r3, n4, this.name);
              }
              if (this.log = this.debug, typeof console === t3 && n4 < this.levels.SILENT) return "No console available for logging";
            }
            function d2(e4) {
              return function() {
                typeof console !== t3 && (c2.call(this), this[e4].apply(this, arguments));
              };
            }
            function l2(i3, s3, r3) {
              return (function(i4) {
                return "debug" === i4 && (i4 = "log"), typeof console !== t3 && ("trace" === i4 && n3 ? a2 : void 0 !== console[i4] ? o2(console, i4) : void 0 !== console.log ? o2(console, "log") : e3);
              })(i3) || d2.apply(this, arguments);
            }
            function u2(e4, n4) {
              var o3, a3, d3, u3 = this, h3 = "loglevel";
              function p2() {
                var e5;
                if (typeof window !== t3 && h3) {
                  try {
                    e5 = window.localStorage[h3];
                  } catch (e6) {
                  }
                  if (typeof e5 === t3) try {
                    var n5 = window.document.cookie, i3 = encodeURIComponent(h3), s3 = n5.indexOf(i3 + "=");
                    -1 !== s3 && (e5 = /^([^;]+)/.exec(n5.slice(s3 + i3.length + 1))[1]);
                  } catch (e6) {
                  }
                  return void 0 === u3.levels[e5] && (e5 = void 0), e5;
                }
              }
              function m2(e5) {
                var t4 = e5;
                if ("string" == typeof t4 && void 0 !== u3.levels[t4.toUpperCase()] && (t4 = u3.levels[t4.toUpperCase()]), "number" == typeof t4 && t4 >= 0 && t4 <= u3.levels.SILENT) return t4;
                throw new TypeError("log.setLevel() called with invalid level: " + e5);
              }
              "string" == typeof e4 ? h3 += ":" + e4 : "symbol" == typeof e4 && (h3 = void 0), u3.name = e4, u3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, u3.methodFactory = n4 || l2, u3.getLevel = function() {
                return null != d3 ? d3 : null != a3 ? a3 : o3;
              }, u3.setLevel = function(e5, n5) {
                return d3 = m2(e5), false !== n5 && (function(e6) {
                  var n6 = (i2[e6] || "silent").toUpperCase();
                  if (typeof window !== t3 && h3) {
                    try {
                      return void (window.localStorage[h3] = n6);
                    } catch (e7) {
                    }
                    try {
                      window.document.cookie = encodeURIComponent(h3) + "=" + n6 + ";";
                    } catch (e7) {
                    }
                  }
                })(d3), c2.call(u3);
              }, u3.setDefaultLevel = function(e5) {
                a3 = m2(e5), p2() || u3.setLevel(e5, false);
              }, u3.resetLevel = function() {
                d3 = null, (function() {
                  if (typeof window !== t3 && h3) {
                    try {
                      window.localStorage.removeItem(h3);
                    } catch (e5) {
                    }
                    try {
                      window.document.cookie = encodeURIComponent(h3) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                    } catch (e5) {
                    }
                  }
                })(), c2.call(u3);
              }, u3.enableAll = function(e5) {
                u3.setLevel(u3.levels.TRACE, e5);
              }, u3.disableAll = function(e5) {
                u3.setLevel(u3.levels.SILENT, e5);
              }, u3.rebuild = function() {
                if (r2 !== u3 && (o3 = m2(r2.getLevel())), c2.call(u3), r2 === u3) for (var e5 in s2) s2[e5].rebuild();
              }, o3 = m2(r2 ? r2.getLevel() : "WARN");
              var g2 = p2();
              null != g2 && (d3 = m2(g2)), c2.call(u3);
            }
            (r2 = new u2()).getLogger = function(e4) {
              if ("symbol" != typeof e4 && "string" != typeof e4 || "" === e4) throw new TypeError("You must supply a name when creating a logger.");
              var t4 = s2[e4];
              return t4 || (t4 = s2[e4] = new u2(e4, r2.methodFactory)), t4;
            };
            var h2 = typeof window !== t3 ? window.log : void 0;
            return r2.noConflict = function() {
              return typeof window !== t3 && window.log === r2 && (window.log = h2), r2;
            }, r2.getLoggers = function() {
              return s2;
            }, r2.default = r2, r2;
          }, e2.exports ? e2.exports = n2() : t2.log = n2();
        })(Bn)), Bn.exports);
        e.LogLevel = void 0, (qn = e.LogLevel || (e.LogLevel = {}))[qn.trace = 0] = "trace", qn[qn.debug = 1] = "debug", qn[qn.info = 2] = "info", qn[qn.warn = 3] = "warn", qn[qn.error = 4] = "error", qn[qn.silent = 5] = "silent", e.LoggerNames = void 0, (Kn = e.LoggerNames || (e.LoggerNames = {})).Default = "livekit", Kn.Room = "livekit-room", Kn.Participant = "livekit-participant", Kn.Track = "livekit-track", Kn.Publication = "livekit-track-publication", Kn.Engine = "livekit-engine", Kn.Signal = "livekit-signal", Kn.PCManager = "livekit-pc-manager", Kn.PCTransport = "livekit-pc-transport", Kn.E2EE = "lk-e2ee";
        let Wn = Hn.getLogger("livekit");
        const Gn = Object.values(e.LoggerNames).map(((e2) => Hn.getLogger(e2)));
        function zn(e2) {
          const t2 = Hn.getLogger(e2);
          return t2.setDefaultLevel(Wn.getLevel()), t2;
        }
        Wn.setDefaultLevel(e.LogLevel.info);
        const Jn = Hn.getLogger("lk-e2ee"), Qn = 7e3, Yn = [0, 300, 1200, 2700, 4800, Qn, Qn, Qn, Qn, Qn];
        class Xn {
          constructor(e2) {
            this._retryDelays = void 0 !== e2 ? [...e2] : Yn;
          }
          nextRetryDelayInMs(e2) {
            if (e2.retryCount >= this._retryDelays.length) return null;
            const t2 = this._retryDelays[e2.retryCount];
            return e2.retryCount <= 1 ? t2 : t2 + 1e3 * Math.random();
          }
        }
        function Zn(e2, t2, n2, i2) {
          return new (n2 || (n2 = Promise))((function(s2, r2) {
            function o2(e3) {
              try {
                c2(i2.next(e3));
              } catch (e4) {
                r2(e4);
              }
            }
            function a2(e3) {
              try {
                c2(i2.throw(e3));
              } catch (e4) {
                r2(e4);
              }
            }
            function c2(e3) {
              var t3;
              e3.done ? s2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
                e4(t3);
              }))).then(o2, a2);
            }
            c2((i2 = i2.apply(e2, t2 || [])).next());
          }));
        }
        function $n(e2) {
          var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e2[t2], i2 = 0;
          if (n2) return n2.call(e2);
          if (e2 && "number" == typeof e2.length) return { next: function() {
            return e2 && i2 >= e2.length && (e2 = void 0), { value: e2 && e2[i2++], done: !e2 };
          } };
          throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function ei(e2) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t2, n2 = e2[Symbol.asyncIterator];
          return n2 ? n2.call(e2) : (e2 = $n(e2), t2 = {}, i2("next"), i2("throw"), i2("return"), t2[Symbol.asyncIterator] = function() {
            return this;
          }, t2);
          function i2(n3) {
            t2[n3] = e2[n3] && function(t3) {
              return new Promise((function(i3, s2) {
                (function(e3, t4, n4, i4) {
                  Promise.resolve(i4).then((function(t5) {
                    e3({ value: t5, done: n4 });
                  }), t4);
                })(i3, s2, (t3 = e2[n3](t3)).done, t3.value);
              }));
            };
          }
        }
        "function" == typeof SuppressedError && SuppressedError;
        var ti, ni = { exports: {} };
        var ii = (function() {
          if (ti) return ni.exports;
          ti = 1;
          var e2, t2 = "object" == typeof Reflect ? Reflect : null, n2 = t2 && "function" == typeof t2.apply ? t2.apply : function(e3, t3, n3) {
            return Function.prototype.apply.call(e3, t3, n3);
          };
          e2 = t2 && "function" == typeof t2.ownKeys ? t2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
            return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
          } : function(e3) {
            return Object.getOwnPropertyNames(e3);
          };
          var i2 = Number.isNaN || function(e3) {
            return e3 != e3;
          };
          function s2() {
            s2.init.call(this);
          }
          ni.exports = s2, ni.exports.once = function(e3, t3) {
            return new Promise((function(n3, i3) {
              function s3(n4) {
                e3.removeListener(t3, r3), i3(n4);
              }
              function r3() {
                "function" == typeof e3.removeListener && e3.removeListener("error", s3), n3([].slice.call(arguments));
              }
              m2(e3, t3, r3, { once: true }), "error" !== t3 && (function(e4, t4, n4) {
                "function" == typeof e4.on && m2(e4, "error", t4, n4);
              })(e3, s3, { once: true });
            }));
          }, s2.EventEmitter = s2, s2.prototype._events = void 0, s2.prototype._eventsCount = 0, s2.prototype._maxListeners = void 0;
          var r2 = 10;
          function o2(e3) {
            if ("function" != typeof e3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
          }
          function a2(e3) {
            return void 0 === e3._maxListeners ? s2.defaultMaxListeners : e3._maxListeners;
          }
          function c2(e3, t3, n3, i3) {
            var s3, r3, c3, d3;
            if (o2(n3), void 0 === (r3 = e3._events) ? (r3 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== r3.newListener && (e3.emit("newListener", t3, n3.listener ? n3.listener : n3), r3 = e3._events), c3 = r3[t3]), void 0 === c3) c3 = r3[t3] = n3, ++e3._eventsCount;
            else if ("function" == typeof c3 ? c3 = r3[t3] = i3 ? [n3, c3] : [c3, n3] : i3 ? c3.unshift(n3) : c3.push(n3), (s3 = a2(e3)) > 0 && c3.length > s3 && !c3.warned) {
              c3.warned = true;
              var l3 = new Error("Possible EventEmitter memory leak detected. " + c3.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              l3.name = "MaxListenersExceededWarning", l3.emitter = e3, l3.type = t3, l3.count = c3.length, d3 = l3, console && console.warn && console.warn(d3);
            }
            return e3;
          }
          function d2() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function l2(e3, t3, n3) {
            var i3 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: n3 }, s3 = d2.bind(i3);
            return s3.listener = n3, i3.wrapFn = s3, s3;
          }
          function u2(e3, t3, n3) {
            var i3 = e3._events;
            if (void 0 === i3) return [];
            var s3 = i3[t3];
            return void 0 === s3 ? [] : "function" == typeof s3 ? n3 ? [s3.listener || s3] : [s3] : n3 ? (function(e4) {
              for (var t4 = new Array(e4.length), n4 = 0; n4 < t4.length; ++n4) t4[n4] = e4[n4].listener || e4[n4];
              return t4;
            })(s3) : p2(s3, s3.length);
          }
          function h2(e3) {
            var t3 = this._events;
            if (void 0 !== t3) {
              var n3 = t3[e3];
              if ("function" == typeof n3) return 1;
              if (void 0 !== n3) return n3.length;
            }
            return 0;
          }
          function p2(e3, t3) {
            for (var n3 = new Array(t3), i3 = 0; i3 < t3; ++i3) n3[i3] = e3[i3];
            return n3;
          }
          function m2(e3, t3, n3, i3) {
            if ("function" == typeof e3.on) i3.once ? e3.once(t3, n3) : e3.on(t3, n3);
            else {
              if ("function" != typeof e3.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3);
              e3.addEventListener(t3, (function s3(r3) {
                i3.once && e3.removeEventListener(t3, s3), n3(r3);
              }));
            }
          }
          return Object.defineProperty(s2, "defaultMaxListeners", { enumerable: true, get: function() {
            return r2;
          }, set: function(e3) {
            if ("number" != typeof e3 || e3 < 0 || i2(e3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
            r2 = e3;
          } }), s2.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, s2.prototype.setMaxListeners = function(e3) {
            if ("number" != typeof e3 || e3 < 0 || i2(e3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
            return this._maxListeners = e3, this;
          }, s2.prototype.getMaxListeners = function() {
            return a2(this);
          }, s2.prototype.emit = function(e3) {
            for (var t3 = [], i3 = 1; i3 < arguments.length; i3++) t3.push(arguments[i3]);
            var s3 = "error" === e3, r3 = this._events;
            if (void 0 !== r3) s3 = s3 && void 0 === r3.error;
            else if (!s3) return false;
            if (s3) {
              var o3;
              if (t3.length > 0 && (o3 = t3[0]), o3 instanceof Error) throw o3;
              var a3 = new Error("Unhandled error." + (o3 ? " (" + o3.message + ")" : ""));
              throw a3.context = o3, a3;
            }
            var c3 = r3[e3];
            if (void 0 === c3) return false;
            if ("function" == typeof c3) n2(c3, this, t3);
            else {
              var d3 = c3.length, l3 = p2(c3, d3);
              for (i3 = 0; i3 < d3; ++i3) n2(l3[i3], this, t3);
            }
            return true;
          }, s2.prototype.addListener = function(e3, t3) {
            return c2(this, e3, t3, false);
          }, s2.prototype.on = s2.prototype.addListener, s2.prototype.prependListener = function(e3, t3) {
            return c2(this, e3, t3, true);
          }, s2.prototype.once = function(e3, t3) {
            return o2(t3), this.on(e3, l2(this, e3, t3)), this;
          }, s2.prototype.prependOnceListener = function(e3, t3) {
            return o2(t3), this.prependListener(e3, l2(this, e3, t3)), this;
          }, s2.prototype.removeListener = function(e3, t3) {
            var n3, i3, s3, r3, a3;
            if (o2(t3), void 0 === (i3 = this._events)) return this;
            if (void 0 === (n3 = i3[e3])) return this;
            if (n3 === t3 || n3.listener === t3) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete i3[e3], i3.removeListener && this.emit("removeListener", e3, n3.listener || t3));
            else if ("function" != typeof n3) {
              for (s3 = -1, r3 = n3.length - 1; r3 >= 0; r3--) if (n3[r3] === t3 || n3[r3].listener === t3) {
                a3 = n3[r3].listener, s3 = r3;
                break;
              }
              if (s3 < 0) return this;
              0 === s3 ? n3.shift() : (function(e4, t4) {
                for (; t4 + 1 < e4.length; t4++) e4[t4] = e4[t4 + 1];
                e4.pop();
              })(n3, s3), 1 === n3.length && (i3[e3] = n3[0]), void 0 !== i3.removeListener && this.emit("removeListener", e3, a3 || t3);
            }
            return this;
          }, s2.prototype.off = s2.prototype.removeListener, s2.prototype.removeAllListeners = function(e3) {
            var t3, n3, i3;
            if (void 0 === (n3 = this._events)) return this;
            if (void 0 === n3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e3]), this;
            if (0 === arguments.length) {
              var s3, r3 = Object.keys(n3);
              for (i3 = 0; i3 < r3.length; ++i3) "removeListener" !== (s3 = r3[i3]) && this.removeAllListeners(s3);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if ("function" == typeof (t3 = n3[e3])) this.removeListener(e3, t3);
            else if (void 0 !== t3) for (i3 = t3.length - 1; i3 >= 0; i3--) this.removeListener(e3, t3[i3]);
            return this;
          }, s2.prototype.listeners = function(e3) {
            return u2(this, e3, true);
          }, s2.prototype.rawListeners = function(e3) {
            return u2(this, e3, false);
          }, s2.listenerCount = function(e3, t3) {
            return "function" == typeof e3.listenerCount ? e3.listenerCount(t3) : h2.call(e3, t3);
          }, s2.prototype.listenerCount = h2, s2.prototype.eventNames = function() {
            return this._eventsCount > 0 ? e2(this._events) : [];
          }, ni.exports;
        })();
        let si = true, ri = true;
        function oi(e2, t2, n2) {
          const i2 = e2.match(t2);
          return i2 && i2.length >= n2 && parseFloat(i2[n2], 10);
        }
        function ai(e2, t2, n2) {
          if (!e2.RTCPeerConnection) return;
          const i2 = e2.RTCPeerConnection.prototype, s2 = i2.addEventListener;
          i2.addEventListener = function(e3, i3) {
            if (e3 !== t2) return s2.apply(this, arguments);
            const r3 = (e4) => {
              const t3 = n2(e4);
              t3 && (i3.handleEvent ? i3.handleEvent(t3) : i3(t3));
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[t2] || (this._eventMap[t2] = /* @__PURE__ */ new Map()), this._eventMap[t2].set(i3, r3), s2.apply(this, [e3, r3]);
          };
          const r2 = i2.removeEventListener;
          i2.removeEventListener = function(e3, n3) {
            if (e3 !== t2 || !this._eventMap || !this._eventMap[t2]) return r2.apply(this, arguments);
            if (!this._eventMap[t2].has(n3)) return r2.apply(this, arguments);
            const i3 = this._eventMap[t2].get(n3);
            return this._eventMap[t2].delete(n3), 0 === this._eventMap[t2].size && delete this._eventMap[t2], 0 === Object.keys(this._eventMap).length && delete this._eventMap, r2.apply(this, [e3, i3]);
          }, Object.defineProperty(i2, "on" + t2, { get() {
            return this["_on" + t2];
          }, set(e3) {
            this["_on" + t2] && (this.removeEventListener(t2, this["_on" + t2]), delete this["_on" + t2]), e3 && this.addEventListener(t2, this["_on" + t2] = e3);
          }, enumerable: true, configurable: true });
        }
        function ci(e2) {
          return "boolean" != typeof e2 ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (si = e2, e2 ? "adapter.js logging disabled" : "adapter.js logging enabled");
        }
        function di(e2) {
          return "boolean" != typeof e2 ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (ri = !e2, "adapter.js deprecation warnings " + (e2 ? "disabled" : "enabled"));
        }
        function li() {
          if ("object" == typeof window) {
            if (si) return;
            "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
          }
        }
        function ui(e2, t2) {
          ri && console.warn(e2 + " is deprecated, please use " + t2 + " instead.");
        }
        function hi(e2) {
          return "[object Object]" === Object.prototype.toString.call(e2);
        }
        function pi(e2) {
          return hi(e2) ? Object.keys(e2).reduce((function(t2, n2) {
            const i2 = hi(e2[n2]), s2 = i2 ? pi(e2[n2]) : e2[n2], r2 = i2 && !Object.keys(s2).length;
            return void 0 === s2 || r2 ? t2 : Object.assign(t2, { [n2]: s2 });
          }), {}) : e2;
        }
        function mi(e2, t2, n2) {
          t2 && !n2.has(t2.id) && (n2.set(t2.id, t2), Object.keys(t2).forEach(((i2) => {
            i2.endsWith("Id") ? mi(e2, e2.get(t2[i2]), n2) : i2.endsWith("Ids") && t2[i2].forEach(((t3) => {
              mi(e2, e2.get(t3), n2);
            }));
          })));
        }
        function gi(e2, t2, n2) {
          const i2 = n2 ? "outbound-rtp" : "inbound-rtp", s2 = /* @__PURE__ */ new Map();
          if (null === t2) return s2;
          const r2 = [];
          return e2.forEach(((e3) => {
            "track" === e3.type && e3.trackIdentifier === t2.id && r2.push(e3);
          })), r2.forEach(((t3) => {
            e2.forEach(((n3) => {
              n3.type === i2 && n3.trackId === t3.id && mi(e2, n3, s2);
            }));
          })), s2;
        }
        const vi = li;
        function fi(e2, t2) {
          const n2 = e2 && e2.navigator;
          if (!n2.mediaDevices) return;
          const i2 = function(e3) {
            if ("object" != typeof e3 || e3.mandatory || e3.optional) return e3;
            const t3 = {};
            return Object.keys(e3).forEach(((n3) => {
              if ("require" === n3 || "advanced" === n3 || "mediaSource" === n3) return;
              const i3 = "object" == typeof e3[n3] ? e3[n3] : { ideal: e3[n3] };
              void 0 !== i3.exact && "number" == typeof i3.exact && (i3.min = i3.max = i3.exact);
              const s3 = function(e4, t4) {
                return e4 ? e4 + t4.charAt(0).toUpperCase() + t4.slice(1) : "deviceId" === t4 ? "sourceId" : t4;
              };
              if (void 0 !== i3.ideal) {
                t3.optional = t3.optional || [];
                let e4 = {};
                "number" == typeof i3.ideal ? (e4[s3("min", n3)] = i3.ideal, t3.optional.push(e4), e4 = {}, e4[s3("max", n3)] = i3.ideal, t3.optional.push(e4)) : (e4[s3("", n3)] = i3.ideal, t3.optional.push(e4));
              }
              void 0 !== i3.exact && "number" != typeof i3.exact ? (t3.mandatory = t3.mandatory || {}, t3.mandatory[s3("", n3)] = i3.exact) : ["min", "max"].forEach(((e4) => {
                void 0 !== i3[e4] && (t3.mandatory = t3.mandatory || {}, t3.mandatory[s3(e4, n3)] = i3[e4]);
              }));
            })), e3.advanced && (t3.optional = (t3.optional || []).concat(e3.advanced)), t3;
          }, s2 = function(e3, s3) {
            if (t2.version >= 61) return s3(e3);
            if ((e3 = JSON.parse(JSON.stringify(e3))) && "object" == typeof e3.audio) {
              const t3 = function(e4, t4, n3) {
                t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
              };
              t3((e3 = JSON.parse(JSON.stringify(e3))).audio, "autoGainControl", "googAutoGainControl"), t3(e3.audio, "noiseSuppression", "googNoiseSuppression"), e3.audio = i2(e3.audio);
            }
            if (e3 && "object" == typeof e3.video) {
              let r3 = e3.video.facingMode;
              r3 = r3 && ("object" == typeof r3 ? r3 : { ideal: r3 });
              const o2 = t2.version < 66;
              if (r3 && ("user" === r3.exact || "environment" === r3.exact || "user" === r3.ideal || "environment" === r3.ideal) && (!n2.mediaDevices.getSupportedConstraints || !n2.mediaDevices.getSupportedConstraints().facingMode || o2)) {
                let t3;
                if (delete e3.video.facingMode, "environment" === r3.exact || "environment" === r3.ideal ? t3 = ["back", "rear"] : "user" !== r3.exact && "user" !== r3.ideal || (t3 = ["front"]), t3) return n2.mediaDevices.enumerateDevices().then(((n3) => {
                  let o3 = (n3 = n3.filter(((e4) => "videoinput" === e4.kind))).find(((e4) => t3.some(((t4) => e4.label.toLowerCase().includes(t4)))));
                  return !o3 && n3.length && t3.includes("back") && (o3 = n3[n3.length - 1]), o3 && (e3.video.deviceId = r3.exact ? { exact: o3.deviceId } : { ideal: o3.deviceId }), e3.video = i2(e3.video), vi("chrome: " + JSON.stringify(e3)), s3(e3);
                }));
              }
              e3.video = i2(e3.video);
            }
            return vi("chrome: " + JSON.stringify(e3)), s3(e3);
          }, r2 = function(e3) {
            return t2.version >= 64 ? e3 : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e3.name] || e3.name, message: e3.message, constraint: e3.constraint || e3.constraintName, toString() {
              return this.name + (this.message && ": ") + this.message;
            } };
          };
          if (n2.getUserMedia = function(e3, t3, i3) {
            s2(e3, ((e4) => {
              n2.webkitGetUserMedia(e4, t3, ((e5) => {
                i3 && i3(r2(e5));
              }));
            }));
          }.bind(n2), n2.mediaDevices.getUserMedia) {
            const e3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
            n2.mediaDevices.getUserMedia = function(t3) {
              return s2(t3, ((t4) => e3(t4).then(((e4) => {
                if (t4.audio && !e4.getAudioTracks().length || t4.video && !e4.getVideoTracks().length) throw e4.getTracks().forEach(((e5) => {
                  e5.stop();
                })), new DOMException("", "NotFoundError");
                return e4;
              }), ((e4) => Promise.reject(r2(e4))))));
            };
          }
        }
        function ki(e2) {
          e2.MediaStream = e2.MediaStream || e2.webkitMediaStream;
        }
        function bi(e2) {
          if ("object" == typeof e2 && e2.RTCPeerConnection && !("ontrack" in e2.RTCPeerConnection.prototype)) {
            Object.defineProperty(e2.RTCPeerConnection.prototype, "ontrack", { get() {
              return this._ontrack;
            }, set(e3) {
              this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e3);
            }, enumerable: true, configurable: true });
            const t2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
            e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
              return this._ontrackpoly || (this._ontrackpoly = (t3) => {
                t3.stream.addEventListener("addtrack", ((n2) => {
                  let i2;
                  i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(((e3) => e3.track && e3.track.id === n2.track.id)) : { track: n2.track };
                  const s2 = new Event("track");
                  s2.track = n2.track, s2.receiver = i2, s2.transceiver = { receiver: i2 }, s2.streams = [t3.stream], this.dispatchEvent(s2);
                })), t3.stream.getTracks().forEach(((n2) => {
                  let i2;
                  i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(((e3) => e3.track && e3.track.id === n2.id)) : { track: n2 };
                  const s2 = new Event("track");
                  s2.track = n2, s2.receiver = i2, s2.transceiver = { receiver: i2 }, s2.streams = [t3.stream], this.dispatchEvent(s2);
                }));
              }, this.addEventListener("addstream", this._ontrackpoly)), t2.apply(this, arguments);
            };
          } else ai(e2, "track", ((e3) => (e3.transceiver || Object.defineProperty(e3, "transceiver", { value: { receiver: e3.receiver } }), e3)));
        }
        function yi(e2) {
          if ("object" == typeof e2 && e2.RTCPeerConnection && !("getSenders" in e2.RTCPeerConnection.prototype) && "createDTMFSender" in e2.RTCPeerConnection.prototype) {
            const t2 = function(e3, t3) {
              return { track: t3, get dtmf() {
                return void 0 === this._dtmf && ("audio" === t3.kind ? this._dtmf = e3.createDTMFSender(t3) : this._dtmf = null), this._dtmf;
              }, _pc: e3 };
            };
            if (!e2.RTCPeerConnection.prototype.getSenders) {
              e2.RTCPeerConnection.prototype.getSenders = function() {
                return this._senders = this._senders || [], this._senders.slice();
              };
              const n3 = e2.RTCPeerConnection.prototype.addTrack;
              e2.RTCPeerConnection.prototype.addTrack = function(e3, i4) {
                let s2 = n3.apply(this, arguments);
                return s2 || (s2 = t2(this, e3), this._senders.push(s2)), s2;
              };
              const i3 = e2.RTCPeerConnection.prototype.removeTrack;
              e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
                i3.apply(this, arguments);
                const t3 = this._senders.indexOf(e3);
                -1 !== t3 && this._senders.splice(t3, 1);
              };
            }
            const n2 = e2.RTCPeerConnection.prototype.addStream;
            e2.RTCPeerConnection.prototype.addStream = function(e3) {
              this._senders = this._senders || [], n2.apply(this, [e3]), e3.getTracks().forEach(((e4) => {
                this._senders.push(t2(this, e4));
              }));
            };
            const i2 = e2.RTCPeerConnection.prototype.removeStream;
            e2.RTCPeerConnection.prototype.removeStream = function(e3) {
              this._senders = this._senders || [], i2.apply(this, [e3]), e3.getTracks().forEach(((e4) => {
                const t3 = this._senders.find(((t4) => t4.track === e4));
                t3 && this._senders.splice(this._senders.indexOf(t3), 1);
              }));
            };
          } else if ("object" == typeof e2 && e2.RTCPeerConnection && "getSenders" in e2.RTCPeerConnection.prototype && "createDTMFSender" in e2.RTCPeerConnection.prototype && e2.RTCRtpSender && !("dtmf" in e2.RTCRtpSender.prototype)) {
            const t2 = e2.RTCPeerConnection.prototype.getSenders;
            e2.RTCPeerConnection.prototype.getSenders = function() {
              const e3 = t2.apply(this, []);
              return e3.forEach(((e4) => e4._pc = this)), e3;
            }, Object.defineProperty(e2.RTCRtpSender.prototype, "dtmf", { get() {
              return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
            } });
          }
        }
        function Ti(e2) {
          if (!("object" == typeof e2 && e2.RTCPeerConnection && e2.RTCRtpSender && e2.RTCRtpReceiver)) return;
          if (!("getStats" in e2.RTCRtpSender.prototype)) {
            const t3 = e2.RTCPeerConnection.prototype.getSenders;
            t3 && (e2.RTCPeerConnection.prototype.getSenders = function() {
              const e3 = t3.apply(this, []);
              return e3.forEach(((e4) => e4._pc = this)), e3;
            });
            const n2 = e2.RTCPeerConnection.prototype.addTrack;
            n2 && (e2.RTCPeerConnection.prototype.addTrack = function() {
              const e3 = n2.apply(this, arguments);
              return e3._pc = this, e3;
            }), e2.RTCRtpSender.prototype.getStats = function() {
              const e3 = this;
              return this._pc.getStats().then(((t4) => gi(t4, e3.track, true)));
            };
          }
          if (!("getStats" in e2.RTCRtpReceiver.prototype)) {
            const t3 = e2.RTCPeerConnection.prototype.getReceivers;
            t3 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
              const e3 = t3.apply(this, []);
              return e3.forEach(((e4) => e4._pc = this)), e3;
            }), ai(e2, "track", ((e3) => (e3.receiver._pc = e3.srcElement, e3))), e2.RTCRtpReceiver.prototype.getStats = function() {
              const e3 = this;
              return this._pc.getStats().then(((t4) => gi(t4, e3.track, false)));
            };
          }
          if (!("getStats" in e2.RTCRtpSender.prototype) || !("getStats" in e2.RTCRtpReceiver.prototype)) return;
          const t2 = e2.RTCPeerConnection.prototype.getStats;
          e2.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof e2.MediaStreamTrack) {
              const e3 = arguments[0];
              let t3, n2, i2;
              return this.getSenders().forEach(((n3) => {
                n3.track === e3 && (t3 ? i2 = true : t3 = n3);
              })), this.getReceivers().forEach(((t4) => (t4.track === e3 && (n2 ? i2 = true : n2 = t4), t4.track === e3))), i2 || t3 && n2 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t3 ? t3.getStats() : n2 ? n2.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
            }
            return t2.apply(this, arguments);
          };
        }
        function Ci(e2) {
          e2.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(((e3) => this._shimmedLocalStreams[e3][0]));
          };
          const t2 = e2.RTCPeerConnection.prototype.addTrack;
          e2.RTCPeerConnection.prototype.addTrack = function(e3, n3) {
            if (!n3) return t2.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const i3 = t2.apply(this, arguments);
            return this._shimmedLocalStreams[n3.id] ? -1 === this._shimmedLocalStreams[n3.id].indexOf(i3) && this._shimmedLocalStreams[n3.id].push(i3) : this._shimmedLocalStreams[n3.id] = [n3, i3], i3;
          };
          const n2 = e2.RTCPeerConnection.prototype.addStream;
          e2.RTCPeerConnection.prototype.addStream = function(e3) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3.getTracks().forEach(((e4) => {
              if (this.getSenders().find(((t4) => t4.track === e4))) throw new DOMException("Track already exists.", "InvalidAccessError");
            }));
            const t3 = this.getSenders();
            n2.apply(this, arguments);
            const i3 = this.getSenders().filter(((e4) => -1 === t3.indexOf(e4)));
            this._shimmedLocalStreams[e3.id] = [e3].concat(i3);
          };
          const i2 = e2.RTCPeerConnection.prototype.removeStream;
          e2.RTCPeerConnection.prototype.removeStream = function(e3) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e3.id], i2.apply(this, arguments);
          };
          const s2 = e2.RTCPeerConnection.prototype.removeTrack;
          e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3 && Object.keys(this._shimmedLocalStreams).forEach(((t3) => {
              const n3 = this._shimmedLocalStreams[t3].indexOf(e3);
              -1 !== n3 && this._shimmedLocalStreams[t3].splice(n3, 1), 1 === this._shimmedLocalStreams[t3].length && delete this._shimmedLocalStreams[t3];
            })), s2.apply(this, arguments);
          };
        }
        function Si(e2, t2) {
          if (!e2.RTCPeerConnection) return;
          if (e2.RTCPeerConnection.prototype.addTrack && t2.version >= 65) return Ci(e2);
          const n2 = e2.RTCPeerConnection.prototype.getLocalStreams;
          e2.RTCPeerConnection.prototype.getLocalStreams = function() {
            const e3 = n2.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, e3.map(((e4) => this._reverseStreams[e4.id]));
          };
          const i2 = e2.RTCPeerConnection.prototype.addStream;
          e2.RTCPeerConnection.prototype.addStream = function(t3) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t3.getTracks().forEach(((e3) => {
              if (this.getSenders().find(((t4) => t4.track === e3))) throw new DOMException("Track already exists.", "InvalidAccessError");
            })), !this._reverseStreams[t3.id]) {
              const n3 = new e2.MediaStream(t3.getTracks());
              this._streams[t3.id] = n3, this._reverseStreams[n3.id] = t3, t3 = n3;
            }
            i2.apply(this, [t3]);
          };
          const s2 = e2.RTCPeerConnection.prototype.removeStream;
          function r2(e3, t3) {
            let n3 = t3.sdp;
            return Object.keys(e3._reverseStreams || []).forEach(((t4) => {
              const i3 = e3._reverseStreams[t4], s3 = e3._streams[i3.id];
              n3 = n3.replace(new RegExp(s3.id, "g"), i3.id);
            })), new RTCSessionDescription({ type: t3.type, sdp: n3 });
          }
          e2.RTCPeerConnection.prototype.removeStream = function(e3) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, s2.apply(this, [this._streams[e3.id] || e3]), delete this._reverseStreams[this._streams[e3.id] ? this._streams[e3.id].id : e3.id], delete this._streams[e3.id];
          }, e2.RTCPeerConnection.prototype.addTrack = function(t3, n3) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            const i3 = [].slice.call(arguments, 1);
            if (1 !== i3.length || !i3[0].getTracks().find(((e3) => e3 === t3))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
            if (this.getSenders().find(((e3) => e3.track === t3))) throw new DOMException("Track already exists.", "InvalidAccessError");
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const s3 = this._streams[n3.id];
            if (s3) s3.addTrack(t3), Promise.resolve().then((() => {
              this.dispatchEvent(new Event("negotiationneeded"));
            }));
            else {
              const i4 = new e2.MediaStream([t3]);
              this._streams[n3.id] = i4, this._reverseStreams[i4.id] = n3, this.addStream(i4);
            }
            return this.getSenders().find(((e3) => e3.track === t3));
          }, ["createOffer", "createAnswer"].forEach((function(t3) {
            const n3 = e2.RTCPeerConnection.prototype[t3], i3 = { [t3]() {
              const e3 = arguments;
              return arguments.length && "function" == typeof arguments[0] ? n3.apply(this, [(t4) => {
                const n4 = r2(this, t4);
                e3[0].apply(null, [n4]);
              }, (t4) => {
                e3[1] && e3[1].apply(null, t4);
              }, arguments[2]]) : n3.apply(this, arguments).then(((e4) => r2(this, e4)));
            } };
            e2.RTCPeerConnection.prototype[t3] = i3[t3];
          }));
          const o2 = e2.RTCPeerConnection.prototype.setLocalDescription;
          e2.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = (function(e3, t3) {
              let n3 = t3.sdp;
              return Object.keys(e3._reverseStreams || []).forEach(((t4) => {
                const i3 = e3._reverseStreams[t4], s3 = e3._streams[i3.id];
                n3 = n3.replace(new RegExp(i3.id, "g"), s3.id);
              })), new RTCSessionDescription({ type: t3.type, sdp: n3 });
            })(this, arguments[0]), o2.apply(this, arguments)) : o2.apply(this, arguments);
          };
          const a2 = Object.getOwnPropertyDescriptor(e2.RTCPeerConnection.prototype, "localDescription");
          Object.defineProperty(e2.RTCPeerConnection.prototype, "localDescription", { get() {
            const e3 = a2.get.apply(this);
            return "" === e3.type ? e3 : r2(this, e3);
          } }), e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
            if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
            if (!e3._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
            if (!(e3._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
            let t3;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach(((n3) => {
              this._streams[n3].getTracks().find(((t4) => e3.track === t4)) && (t3 = this._streams[n3]);
            })), t3 && (1 === t3.getTracks().length ? this.removeStream(this._reverseStreams[t3.id]) : t3.removeTrack(e3.track), this.dispatchEvent(new Event("negotiationneeded")));
          };
        }
        function Ei(e2, t2) {
          !e2.RTCPeerConnection && e2.webkitRTCPeerConnection && (e2.RTCPeerConnection = e2.webkitRTCPeerConnection), e2.RTCPeerConnection && t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t3) {
            const n2 = e2.RTCPeerConnection.prototype[t3], i2 = { [t3]() {
              return arguments[0] = new ("addIceCandidate" === t3 ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
            } };
            e2.RTCPeerConnection.prototype[t3] = i2[t3];
          }));
        }
        function wi(e2, t2) {
          ai(e2, "negotiationneeded", ((e3) => {
            const n2 = e3.target;
            if (!(t2.version < 72 || n2.getConfiguration && "plan-b" === n2.getConfiguration().sdpSemantics) || "stable" === n2.signalingState) return e3;
          }));
        }
        var Pi = Object.freeze({ __proto__: null, fixNegotiationNeeded: wi, shimAddTrackRemoveTrack: Si, shimAddTrackRemoveTrackWithNative: Ci, shimGetSendersWithDtmf: yi, shimGetUserMedia: fi, shimMediaStream: ki, shimOnTrack: bi, shimPeerConnection: Ei, shimSenderReceiverGetStats: Ti });
        function Ri(e2, t2) {
          const n2 = e2 && e2.navigator, i2 = e2 && e2.MediaStreamTrack;
          if (n2.getUserMedia = function(e3, t3, i3) {
            ui("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n2.mediaDevices.getUserMedia(e3).then(t3, i3);
          }, !(t2.version > 55 && "autoGainControl" in n2.mediaDevices.getSupportedConstraints())) {
            const e3 = function(e4, t4, n3) {
              t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
            }, t3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
            if (n2.mediaDevices.getUserMedia = function(n3) {
              return "object" == typeof n3 && "object" == typeof n3.audio && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3.audio, "autoGainControl", "mozAutoGainControl"), e3(n3.audio, "noiseSuppression", "mozNoiseSuppression")), t3(n3);
            }, i2 && i2.prototype.getSettings) {
              const t4 = i2.prototype.getSettings;
              i2.prototype.getSettings = function() {
                const n3 = t4.apply(this, arguments);
                return e3(n3, "mozAutoGainControl", "autoGainControl"), e3(n3, "mozNoiseSuppression", "noiseSuppression"), n3;
              };
            }
            if (i2 && i2.prototype.applyConstraints) {
              const t4 = i2.prototype.applyConstraints;
              i2.prototype.applyConstraints = function(n3) {
                return "audio" === this.kind && "object" == typeof n3 && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3, "autoGainControl", "mozAutoGainControl"), e3(n3, "noiseSuppression", "mozNoiseSuppression")), t4.apply(this, [n3]);
              };
            }
          }
        }
        function Ii(e2) {
          "object" == typeof e2 && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
            return { receiver: this.receiver };
          } });
        }
        function Oi(e2, t2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection && !e2.mozRTCPeerConnection) return;
          !e2.RTCPeerConnection && e2.mozRTCPeerConnection && (e2.RTCPeerConnection = e2.mozRTCPeerConnection), t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t3) {
            const n3 = e2.RTCPeerConnection.prototype[t3], i3 = { [t3]() {
              return arguments[0] = new ("addIceCandidate" === t3 ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n3.apply(this, arguments);
            } };
            e2.RTCPeerConnection.prototype[t3] = i3[t3];
          }));
          const n2 = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, i2 = e2.RTCPeerConnection.prototype.getStats;
          e2.RTCPeerConnection.prototype.getStats = function() {
            const [e3, s2, r2] = arguments;
            return i2.apply(this, [e3 || null]).then(((e4) => {
              if (t2.version < 53 && !s2) try {
                e4.forEach(((e5) => {
                  e5.type = n2[e5.type] || e5.type;
                }));
              } catch (t3) {
                if ("TypeError" !== t3.name) throw t3;
                e4.forEach(((t4, i3) => {
                  e4.set(i3, Object.assign({}, t4, { type: n2[t4.type] || t4.type }));
                }));
              }
              return e4;
            })).then(s2, r2);
          };
        }
        function Di(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection || !e2.RTCRtpSender) return;
          if (e2.RTCRtpSender && "getStats" in e2.RTCRtpSender.prototype) return;
          const t2 = e2.RTCPeerConnection.prototype.getSenders;
          t2 && (e2.RTCPeerConnection.prototype.getSenders = function() {
            const e3 = t2.apply(this, []);
            return e3.forEach(((e4) => e4._pc = this)), e3;
          });
          const n2 = e2.RTCPeerConnection.prototype.addTrack;
          n2 && (e2.RTCPeerConnection.prototype.addTrack = function() {
            const e3 = n2.apply(this, arguments);
            return e3._pc = this, e3;
          }), e2.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
          };
        }
        function xi(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection || !e2.RTCRtpSender) return;
          if (e2.RTCRtpSender && "getStats" in e2.RTCRtpReceiver.prototype) return;
          const t2 = e2.RTCPeerConnection.prototype.getReceivers;
          t2 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
            const e3 = t2.apply(this, []);
            return e3.forEach(((e4) => e4._pc = this)), e3;
          }), ai(e2, "track", ((e3) => (e3.receiver._pc = e3.srcElement, e3))), e2.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track);
          };
        }
        function Mi(e2) {
          e2.RTCPeerConnection && !("removeStream" in e2.RTCPeerConnection.prototype) && (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
            ui("removeStream", "removeTrack"), this.getSenders().forEach(((t2) => {
              t2.track && e3.getTracks().includes(t2.track) && this.removeTrack(t2);
            }));
          });
        }
        function Ai(e2) {
          e2.DataChannel && !e2.RTCDataChannel && (e2.RTCDataChannel = e2.DataChannel);
        }
        function _i(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
          const t2 = e2.RTCPeerConnection.prototype.addTransceiver;
          t2 && (e2.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            let e3 = arguments[1] && arguments[1].sendEncodings;
            void 0 === e3 && (e3 = []), e3 = [...e3];
            const n2 = e3.length > 0;
            n2 && e3.forEach(((e4) => {
              if ("rid" in e4) {
                if (!/^[a-z0-9]{0,16}$/i.test(e4.rid)) throw new TypeError("Invalid RID value provided.");
              }
              if ("scaleResolutionDownBy" in e4 && !(parseFloat(e4.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
              if ("maxFramerate" in e4 && !(parseFloat(e4.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
            }));
            const i2 = t2.apply(this, arguments);
            if (n2) {
              const { sender: t3 } = i2, n3 = t3.getParameters();
              (!("encodings" in n3) || 1 === n3.encodings.length && 0 === Object.keys(n3.encodings[0]).length) && (n3.encodings = e3, t3.sendEncodings = e3, this.setParametersPromises.push(t3.setParameters(n3).then((() => {
                delete t3.sendEncodings;
              })).catch((() => {
                delete t3.sendEncodings;
              }))));
            }
            return i2;
          });
        }
        function Ni(e2) {
          if ("object" != typeof e2 || !e2.RTCRtpSender) return;
          const t2 = e2.RTCRtpSender.prototype.getParameters;
          t2 && (e2.RTCRtpSender.prototype.getParameters = function() {
            const e3 = t2.apply(this, arguments);
            return "encodings" in e3 || (e3.encodings = [].concat(this.sendEncodings || [{}])), e3;
          });
        }
        function Li(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
          const t2 = e2.RTCPeerConnection.prototype.createOffer;
          e2.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t2.apply(this, arguments))).finally((() => {
              this.setParametersPromises = [];
            })) : t2.apply(this, arguments);
          };
        }
        function Ui(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
          const t2 = e2.RTCPeerConnection.prototype.createAnswer;
          e2.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t2.apply(this, arguments))).finally((() => {
              this.setParametersPromises = [];
            })) : t2.apply(this, arguments);
          };
        }
        var ji = Object.freeze({ __proto__: null, shimAddTransceiver: _i, shimCreateAnswer: Ui, shimCreateOffer: Li, shimGetDisplayMedia: function(e2, t2) {
          e2.navigator.mediaDevices && "getDisplayMedia" in e2.navigator.mediaDevices || e2.navigator.mediaDevices && (e2.navigator.mediaDevices.getDisplayMedia = function(n2) {
            if (!n2 || !n2.video) {
              const e3 = new DOMException("getDisplayMedia without video constraints is undefined");
              return e3.name = "NotFoundError", e3.code = 8, Promise.reject(e3);
            }
            return true === n2.video ? n2.video = { mediaSource: t2 } : n2.video.mediaSource = t2, e2.navigator.mediaDevices.getUserMedia(n2);
          });
        }, shimGetParameters: Ni, shimGetUserMedia: Ri, shimOnTrack: Ii, shimPeerConnection: Oi, shimRTCDataChannel: Ai, shimReceiverGetStats: xi, shimRemoveStream: Mi, shimSenderGetStats: Di });
        function Fi(e2) {
          if ("object" == typeof e2 && e2.RTCPeerConnection) {
            if ("getLocalStreams" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.getLocalStreams = function() {
              return this._localStreams || (this._localStreams = []), this._localStreams;
            }), !("addStream" in e2.RTCPeerConnection.prototype)) {
              const t2 = e2.RTCPeerConnection.prototype.addTrack;
              e2.RTCPeerConnection.prototype.addStream = function(e3) {
                this._localStreams || (this._localStreams = []), this._localStreams.includes(e3) || this._localStreams.push(e3), e3.getAudioTracks().forEach(((n2) => t2.call(this, n2, e3))), e3.getVideoTracks().forEach(((n2) => t2.call(this, n2, e3)));
              }, e2.RTCPeerConnection.prototype.addTrack = function(e3) {
                for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), s2 = 1; s2 < n2; s2++) i2[s2 - 1] = arguments[s2];
                return i2 && i2.forEach(((e4) => {
                  this._localStreams ? this._localStreams.includes(e4) || this._localStreams.push(e4) : this._localStreams = [e4];
                })), t2.apply(this, arguments);
              };
            }
            "removeStream" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
              this._localStreams || (this._localStreams = []);
              const t2 = this._localStreams.indexOf(e3);
              if (-1 === t2) return;
              this._localStreams.splice(t2, 1);
              const n2 = e3.getTracks();
              this.getSenders().forEach(((e4) => {
                n2.includes(e4.track) && this.removeTrack(e4);
              }));
            });
          }
        }
        function Bi(e2) {
          if ("object" == typeof e2 && e2.RTCPeerConnection && ("getRemoteStreams" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : [];
          }), !("onaddstream" in e2.RTCPeerConnection.prototype))) {
            Object.defineProperty(e2.RTCPeerConnection.prototype, "onaddstream", { get() {
              return this._onaddstream;
            }, set(e3) {
              this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e3), this.addEventListener("track", this._onaddstreampoly = (e4) => {
                e4.streams.forEach(((e5) => {
                  if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e5)) return;
                  this._remoteStreams.push(e5);
                  const t3 = new Event("addstream");
                  t3.stream = e5, this.dispatchEvent(t3);
                }));
              });
            } });
            const t2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
            e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
              const e3 = this;
              return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t3) {
                t3.streams.forEach(((t4) => {
                  if (e3._remoteStreams || (e3._remoteStreams = []), e3._remoteStreams.indexOf(t4) >= 0) return;
                  e3._remoteStreams.push(t4);
                  const n2 = new Event("addstream");
                  n2.stream = t4, e3.dispatchEvent(n2);
                }));
              }), t2.apply(e3, arguments);
            };
          }
        }
        function Vi(e2) {
          if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
          const t2 = e2.RTCPeerConnection.prototype, n2 = t2.createOffer, i2 = t2.createAnswer, s2 = t2.setLocalDescription, r2 = t2.setRemoteDescription, o2 = t2.addIceCandidate;
          t2.createOffer = function(e3, t3) {
            const i3 = arguments.length >= 2 ? arguments[2] : arguments[0], s3 = n2.apply(this, [i3]);
            return t3 ? (s3.then(e3, t3), Promise.resolve()) : s3;
          }, t2.createAnswer = function(e3, t3) {
            const n3 = arguments.length >= 2 ? arguments[2] : arguments[0], s3 = i2.apply(this, [n3]);
            return t3 ? (s3.then(e3, t3), Promise.resolve()) : s3;
          };
          let a2 = function(e3, t3, n3) {
            const i3 = s2.apply(this, [e3]);
            return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
          };
          t2.setLocalDescription = a2, a2 = function(e3, t3, n3) {
            const i3 = r2.apply(this, [e3]);
            return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
          }, t2.setRemoteDescription = a2, a2 = function(e3, t3, n3) {
            const i3 = o2.apply(this, [e3]);
            return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
          }, t2.addIceCandidate = a2;
        }
        function qi(e2) {
          const t2 = e2 && e2.navigator;
          if (t2.mediaDevices && t2.mediaDevices.getUserMedia) {
            const e3 = t2.mediaDevices, n2 = e3.getUserMedia.bind(e3);
            t2.mediaDevices.getUserMedia = (e4) => n2(Ki(e4));
          }
          !t2.getUserMedia && t2.mediaDevices && t2.mediaDevices.getUserMedia && (t2.getUserMedia = function(e3, n2, i2) {
            t2.mediaDevices.getUserMedia(e3).then(n2, i2);
          }.bind(t2));
        }
        function Ki(e2) {
          return e2 && void 0 !== e2.video ? Object.assign({}, e2, { video: pi(e2.video) }) : e2;
        }
        function Hi(e2) {
          if (!e2.RTCPeerConnection) return;
          const t2 = e2.RTCPeerConnection;
          e2.RTCPeerConnection = function(e3, n2) {
            if (e3 && e3.iceServers) {
              const t3 = [];
              for (let n3 = 0; n3 < e3.iceServers.length; n3++) {
                let i2 = e3.iceServers[n3];
                void 0 === i2.urls && i2.url ? (ui("RTCIceServer.url", "RTCIceServer.urls"), i2 = JSON.parse(JSON.stringify(i2)), i2.urls = i2.url, delete i2.url, t3.push(i2)) : t3.push(e3.iceServers[n3]);
              }
              e3.iceServers = t3;
            }
            return new t2(e3, n2);
          }, e2.RTCPeerConnection.prototype = t2.prototype, "generateCertificate" in t2 && Object.defineProperty(e2.RTCPeerConnection, "generateCertificate", { get: () => t2.generateCertificate });
        }
        function Wi(e2) {
          "object" == typeof e2 && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
            return { receiver: this.receiver };
          } });
        }
        function Gi(e2) {
          const t2 = e2.RTCPeerConnection.prototype.createOffer;
          e2.RTCPeerConnection.prototype.createOffer = function(e3) {
            if (e3) {
              void 0 !== e3.offerToReceiveAudio && (e3.offerToReceiveAudio = !!e3.offerToReceiveAudio);
              const t3 = this.getTransceivers().find(((e4) => "audio" === e4.receiver.track.kind));
              false === e3.offerToReceiveAudio && t3 ? "sendrecv" === t3.direction ? t3.setDirection ? t3.setDirection("sendonly") : t3.direction = "sendonly" : "recvonly" === t3.direction && (t3.setDirection ? t3.setDirection("inactive") : t3.direction = "inactive") : true !== e3.offerToReceiveAudio || t3 || this.addTransceiver("audio", { direction: "recvonly" }), void 0 !== e3.offerToReceiveVideo && (e3.offerToReceiveVideo = !!e3.offerToReceiveVideo);
              const n2 = this.getTransceivers().find(((e4) => "video" === e4.receiver.track.kind));
              false === e3.offerToReceiveVideo && n2 ? "sendrecv" === n2.direction ? n2.setDirection ? n2.setDirection("sendonly") : n2.direction = "sendonly" : "recvonly" === n2.direction && (n2.setDirection ? n2.setDirection("inactive") : n2.direction = "inactive") : true !== e3.offerToReceiveVideo || n2 || this.addTransceiver("video", { direction: "recvonly" });
            }
            return t2.apply(this, arguments);
          };
        }
        function zi(e2) {
          "object" != typeof e2 || e2.AudioContext || (e2.AudioContext = e2.webkitAudioContext);
        }
        var Ji, Qi = Object.freeze({ __proto__: null, shimAudioContext: zi, shimCallbacksAPI: Vi, shimConstraints: Ki, shimCreateOfferLegacy: Gi, shimGetUserMedia: qi, shimLocalStreamsAPI: Fi, shimRTCIceServerUrls: Hi, shimRemoteStreamsAPI: Bi, shimTrackEventTransceiver: Wi }), Yi = { exports: {} };
        var Xi = (Ji || (Ji = 1, (function(e2) {
          const t2 = { generateIdentifier: function() {
            return Math.random().toString(36).substring(2, 12);
          } };
          t2.localCName = t2.generateIdentifier(), t2.splitLines = function(e3) {
            return e3.trim().split("\n").map(((e4) => e4.trim()));
          }, t2.splitSections = function(e3) {
            return e3.split("\nm=").map(((e4, t3) => (t3 > 0 ? "m=" + e4 : e4).trim() + "\r\n"));
          }, t2.getDescription = function(e3) {
            const n2 = t2.splitSections(e3);
            return n2 && n2[0];
          }, t2.getMediaSections = function(e3) {
            const n2 = t2.splitSections(e3);
            return n2.shift(), n2;
          }, t2.matchPrefix = function(e3, n2) {
            return t2.splitLines(e3).filter(((e4) => 0 === e4.indexOf(n2)));
          }, t2.parseCandidate = function(e3) {
            let t3;
            t3 = 0 === e3.indexOf("a=candidate:") ? e3.substring(12).split(" ") : e3.substring(10).split(" ");
            const n2 = { foundation: t3[0], component: { 1: "rtp", 2: "rtcp" }[t3[1]] || t3[1], protocol: t3[2].toLowerCase(), priority: parseInt(t3[3], 10), ip: t3[4], address: t3[4], port: parseInt(t3[5], 10), type: t3[7] };
            for (let e4 = 8; e4 < t3.length; e4 += 2) switch (t3[e4]) {
              case "raddr":
                n2.relatedAddress = t3[e4 + 1];
                break;
              case "rport":
                n2.relatedPort = parseInt(t3[e4 + 1], 10);
                break;
              case "tcptype":
                n2.tcpType = t3[e4 + 1];
                break;
              case "ufrag":
                n2.ufrag = t3[e4 + 1], n2.usernameFragment = t3[e4 + 1];
                break;
              default:
                void 0 === n2[t3[e4]] && (n2[t3[e4]] = t3[e4 + 1]);
            }
            return n2;
          }, t2.writeCandidate = function(e3) {
            const t3 = [];
            t3.push(e3.foundation);
            const n2 = e3.component;
            "rtp" === n2 ? t3.push(1) : "rtcp" === n2 ? t3.push(2) : t3.push(n2), t3.push(e3.protocol.toUpperCase()), t3.push(e3.priority), t3.push(e3.address || e3.ip), t3.push(e3.port);
            const i2 = e3.type;
            return t3.push("typ"), t3.push(i2), "host" !== i2 && e3.relatedAddress && e3.relatedPort && (t3.push("raddr"), t3.push(e3.relatedAddress), t3.push("rport"), t3.push(e3.relatedPort)), e3.tcpType && "tcp" === e3.protocol.toLowerCase() && (t3.push("tcptype"), t3.push(e3.tcpType)), (e3.usernameFragment || e3.ufrag) && (t3.push("ufrag"), t3.push(e3.usernameFragment || e3.ufrag)), "candidate:" + t3.join(" ");
          }, t2.parseIceOptions = function(e3) {
            return e3.substring(14).split(" ");
          }, t2.parseRtpMap = function(e3) {
            let t3 = e3.substring(9).split(" ");
            const n2 = { payloadType: parseInt(t3.shift(), 10) };
            return t3 = t3[0].split("/"), n2.name = t3[0], n2.clockRate = parseInt(t3[1], 10), n2.channels = 3 === t3.length ? parseInt(t3[2], 10) : 1, n2.numChannels = n2.channels, n2;
          }, t2.writeRtpMap = function(e3) {
            let t3 = e3.payloadType;
            void 0 !== e3.preferredPayloadType && (t3 = e3.preferredPayloadType);
            const n2 = e3.channels || e3.numChannels || 1;
            return "a=rtpmap:" + t3 + " " + e3.name + "/" + e3.clockRate + (1 !== n2 ? "/" + n2 : "") + "\r\n";
          }, t2.parseExtmap = function(e3) {
            const t3 = e3.substring(9).split(" ");
            return { id: parseInt(t3[0], 10), direction: t3[0].indexOf("/") > 0 ? t3[0].split("/")[1] : "sendrecv", uri: t3[1], attributes: t3.slice(2).join(" ") };
          }, t2.writeExtmap = function(e3) {
            return "a=extmap:" + (e3.id || e3.preferredId) + (e3.direction && "sendrecv" !== e3.direction ? "/" + e3.direction : "") + " " + e3.uri + (e3.attributes ? " " + e3.attributes : "") + "\r\n";
          }, t2.parseFmtp = function(e3) {
            const t3 = {};
            let n2;
            const i2 = e3.substring(e3.indexOf(" ") + 1).split(";");
            for (let e4 = 0; e4 < i2.length; e4++) n2 = i2[e4].trim().split("="), t3[n2[0].trim()] = n2[1];
            return t3;
          }, t2.writeFmtp = function(e3) {
            let t3 = "", n2 = e3.payloadType;
            if (void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.parameters && Object.keys(e3.parameters).length) {
              const i2 = [];
              Object.keys(e3.parameters).forEach(((t4) => {
                void 0 !== e3.parameters[t4] ? i2.push(t4 + "=" + e3.parameters[t4]) : i2.push(t4);
              })), t3 += "a=fmtp:" + n2 + " " + i2.join(";") + "\r\n";
            }
            return t3;
          }, t2.parseRtcpFb = function(e3) {
            const t3 = e3.substring(e3.indexOf(" ") + 1).split(" ");
            return { type: t3.shift(), parameter: t3.join(" ") };
          }, t2.writeRtcpFb = function(e3) {
            let t3 = "", n2 = e3.payloadType;
            return void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.rtcpFeedback && e3.rtcpFeedback.length && e3.rtcpFeedback.forEach(((e4) => {
              t3 += "a=rtcp-fb:" + n2 + " " + e4.type + (e4.parameter && e4.parameter.length ? " " + e4.parameter : "") + "\r\n";
            })), t3;
          }, t2.parseSsrcMedia = function(e3) {
            const t3 = e3.indexOf(" "), n2 = { ssrc: parseInt(e3.substring(7, t3), 10) }, i2 = e3.indexOf(":", t3);
            return i2 > -1 ? (n2.attribute = e3.substring(t3 + 1, i2), n2.value = e3.substring(i2 + 1)) : n2.attribute = e3.substring(t3 + 1), n2;
          }, t2.parseSsrcGroup = function(e3) {
            const t3 = e3.substring(13).split(" ");
            return { semantics: t3.shift(), ssrcs: t3.map(((e4) => parseInt(e4, 10))) };
          }, t2.getMid = function(e3) {
            const n2 = t2.matchPrefix(e3, "a=mid:")[0];
            if (n2) return n2.substring(6);
          }, t2.parseFingerprint = function(e3) {
            const t3 = e3.substring(14).split(" ");
            return { algorithm: t3[0].toLowerCase(), value: t3[1].toUpperCase() };
          }, t2.getDtlsParameters = function(e3, n2) {
            return { role: "auto", fingerprints: t2.matchPrefix(e3 + n2, "a=fingerprint:").map(t2.parseFingerprint) };
          }, t2.writeDtlsParameters = function(e3, t3) {
            let n2 = "a=setup:" + t3 + "\r\n";
            return e3.fingerprints.forEach(((e4) => {
              n2 += "a=fingerprint:" + e4.algorithm + " " + e4.value + "\r\n";
            })), n2;
          }, t2.parseCryptoLine = function(e3) {
            const t3 = e3.substring(9).split(" ");
            return { tag: parseInt(t3[0], 10), cryptoSuite: t3[1], keyParams: t3[2], sessionParams: t3.slice(3) };
          }, t2.writeCryptoLine = function(e3) {
            return "a=crypto:" + e3.tag + " " + e3.cryptoSuite + " " + ("object" == typeof e3.keyParams ? t2.writeCryptoKeyParams(e3.keyParams) : e3.keyParams) + (e3.sessionParams ? " " + e3.sessionParams.join(" ") : "") + "\r\n";
          }, t2.parseCryptoKeyParams = function(e3) {
            if (0 !== e3.indexOf("inline:")) return null;
            const t3 = e3.substring(7).split("|");
            return { keyMethod: "inline", keySalt: t3[0], lifeTime: t3[1], mkiValue: t3[2] ? t3[2].split(":")[0] : void 0, mkiLength: t3[2] ? t3[2].split(":")[1] : void 0 };
          }, t2.writeCryptoKeyParams = function(e3) {
            return e3.keyMethod + ":" + e3.keySalt + (e3.lifeTime ? "|" + e3.lifeTime : "") + (e3.mkiValue && e3.mkiLength ? "|" + e3.mkiValue + ":" + e3.mkiLength : "");
          }, t2.getCryptoParameters = function(e3, n2) {
            return t2.matchPrefix(e3 + n2, "a=crypto:").map(t2.parseCryptoLine);
          }, t2.getIceParameters = function(e3, n2) {
            const i2 = t2.matchPrefix(e3 + n2, "a=ice-ufrag:")[0], s2 = t2.matchPrefix(e3 + n2, "a=ice-pwd:")[0];
            return i2 && s2 ? { usernameFragment: i2.substring(12), password: s2.substring(10) } : null;
          }, t2.writeIceParameters = function(e3) {
            let t3 = "a=ice-ufrag:" + e3.usernameFragment + "\r\na=ice-pwd:" + e3.password + "\r\n";
            return e3.iceLite && (t3 += "a=ice-lite\r\n"), t3;
          }, t2.parseRtpParameters = function(e3) {
            const n2 = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, i2 = t2.splitLines(e3)[0].split(" ");
            n2.profile = i2[2];
            for (let s3 = 3; s3 < i2.length; s3++) {
              const r2 = i2[s3], o2 = t2.matchPrefix(e3, "a=rtpmap:" + r2 + " ")[0];
              if (o2) {
                const i3 = t2.parseRtpMap(o2), s4 = t2.matchPrefix(e3, "a=fmtp:" + r2 + " ");
                switch (i3.parameters = s4.length ? t2.parseFmtp(s4[0]) : {}, i3.rtcpFeedback = t2.matchPrefix(e3, "a=rtcp-fb:" + r2 + " ").map(t2.parseRtcpFb), n2.codecs.push(i3), i3.name.toUpperCase()) {
                  case "RED":
                  case "ULPFEC":
                    n2.fecMechanisms.push(i3.name.toUpperCase());
                }
              }
            }
            t2.matchPrefix(e3, "a=extmap:").forEach(((e4) => {
              n2.headerExtensions.push(t2.parseExtmap(e4));
            }));
            const s2 = t2.matchPrefix(e3, "a=rtcp-fb:* ").map(t2.parseRtcpFb);
            return n2.codecs.forEach(((e4) => {
              s2.forEach(((t3) => {
                e4.rtcpFeedback.find(((e5) => e5.type === t3.type && e5.parameter === t3.parameter)) || e4.rtcpFeedback.push(t3);
              }));
            })), n2;
          }, t2.writeRtpDescription = function(e3, n2) {
            let i2 = "";
            i2 += "m=" + e3 + " ", i2 += n2.codecs.length > 0 ? "9" : "0", i2 += " " + (n2.profile || "UDP/TLS/RTP/SAVPF") + " ", i2 += n2.codecs.map(((e4) => void 0 !== e4.preferredPayloadType ? e4.preferredPayloadType : e4.payloadType)).join(" ") + "\r\n", i2 += "c=IN IP4 0.0.0.0\r\n", i2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n2.codecs.forEach(((e4) => {
              i2 += t2.writeRtpMap(e4), i2 += t2.writeFmtp(e4), i2 += t2.writeRtcpFb(e4);
            }));
            let s2 = 0;
            return n2.codecs.forEach(((e4) => {
              e4.maxptime > s2 && (s2 = e4.maxptime);
            })), s2 > 0 && (i2 += "a=maxptime:" + s2 + "\r\n"), n2.headerExtensions && n2.headerExtensions.forEach(((e4) => {
              i2 += t2.writeExtmap(e4);
            })), i2;
          }, t2.parseRtpEncodingParameters = function(e3) {
            const n2 = [], i2 = t2.parseRtpParameters(e3), s2 = -1 !== i2.fecMechanisms.indexOf("RED"), r2 = -1 !== i2.fecMechanisms.indexOf("ULPFEC"), o2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "cname" === e4.attribute)), a2 = o2.length > 0 && o2[0].ssrc;
            let c2;
            const d2 = t2.matchPrefix(e3, "a=ssrc-group:FID").map(((e4) => e4.substring(17).split(" ").map(((e5) => parseInt(e5, 10)))));
            d2.length > 0 && d2[0].length > 1 && d2[0][0] === a2 && (c2 = d2[0][1]), i2.codecs.forEach(((e4) => {
              if ("RTX" === e4.name.toUpperCase() && e4.parameters.apt) {
                let t3 = { ssrc: a2, codecPayloadType: parseInt(e4.parameters.apt, 10) };
                a2 && c2 && (t3.rtx = { ssrc: c2 }), n2.push(t3), s2 && (t3 = JSON.parse(JSON.stringify(t3)), t3.fec = { ssrc: a2, mechanism: r2 ? "red+ulpfec" : "red" }, n2.push(t3));
              }
            })), 0 === n2.length && a2 && n2.push({ ssrc: a2 });
            let l2 = t2.matchPrefix(e3, "b=");
            return l2.length && (l2 = 0 === l2[0].indexOf("b=TIAS:") ? parseInt(l2[0].substring(7), 10) : 0 === l2[0].indexOf("b=AS:") ? 1e3 * parseInt(l2[0].substring(5), 10) * 0.95 - 16e3 : void 0, n2.forEach(((e4) => {
              e4.maxBitrate = l2;
            }))), n2;
          }, t2.parseRtcpParameters = function(e3) {
            const n2 = {}, i2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "cname" === e4.attribute))[0];
            i2 && (n2.cname = i2.value, n2.ssrc = i2.ssrc);
            const s2 = t2.matchPrefix(e3, "a=rtcp-rsize");
            n2.reducedSize = s2.length > 0, n2.compound = 0 === s2.length;
            const r2 = t2.matchPrefix(e3, "a=rtcp-mux");
            return n2.mux = r2.length > 0, n2;
          }, t2.writeRtcpParameters = function(e3) {
            let t3 = "";
            return e3.reducedSize && (t3 += "a=rtcp-rsize\r\n"), e3.mux && (t3 += "a=rtcp-mux\r\n"), void 0 !== e3.ssrc && e3.cname && (t3 += "a=ssrc:" + e3.ssrc + " cname:" + e3.cname + "\r\n"), t3;
          }, t2.parseMsid = function(e3) {
            let n2;
            const i2 = t2.matchPrefix(e3, "a=msid:");
            if (1 === i2.length) return n2 = i2[0].substring(7).split(" "), { stream: n2[0], track: n2[1] };
            const s2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "msid" === e4.attribute));
            return s2.length > 0 ? (n2 = s2[0].value.split(" "), { stream: n2[0], track: n2[1] }) : void 0;
          }, t2.parseSctpDescription = function(e3) {
            const n2 = t2.parseMLine(e3), i2 = t2.matchPrefix(e3, "a=max-message-size:");
            let s2;
            i2.length > 0 && (s2 = parseInt(i2[0].substring(19), 10)), isNaN(s2) && (s2 = 65536);
            const r2 = t2.matchPrefix(e3, "a=sctp-port:");
            if (r2.length > 0) return { port: parseInt(r2[0].substring(12), 10), protocol: n2.fmt, maxMessageSize: s2 };
            const o2 = t2.matchPrefix(e3, "a=sctpmap:");
            if (o2.length > 0) {
              const e4 = o2[0].substring(10).split(" ");
              return { port: parseInt(e4[0], 10), protocol: e4[1], maxMessageSize: s2 };
            }
          }, t2.writeSctpDescription = function(e3, t3) {
            let n2 = [];
            return n2 = "DTLS/SCTP" !== e3.protocol ? ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t3.port + "\r\n"] : ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t3.port + " " + t3.protocol + " 65535\r\n"], void 0 !== t3.maxMessageSize && n2.push("a=max-message-size:" + t3.maxMessageSize + "\r\n"), n2.join("");
          }, t2.generateSessionId = function() {
            return Math.random().toString().substr(2, 22);
          }, t2.writeSessionBoilerplate = function(e3, n2, i2) {
            let s2;
            const r2 = void 0 !== n2 ? n2 : 2;
            return s2 = e3 || t2.generateSessionId(), "v=0\r\no=" + (i2 || "thisisadapterortc") + " " + s2 + " " + r2 + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
          }, t2.getDirection = function(e3, n2) {
            const i2 = t2.splitLines(e3);
            for (let e4 = 0; e4 < i2.length; e4++) switch (i2[e4]) {
              case "a=sendrecv":
              case "a=sendonly":
              case "a=recvonly":
              case "a=inactive":
                return i2[e4].substring(2);
            }
            return n2 ? t2.getDirection(n2) : "sendrecv";
          }, t2.getKind = function(e3) {
            return t2.splitLines(e3)[0].split(" ")[0].substring(2);
          }, t2.isRejected = function(e3) {
            return "0" === e3.split(" ", 2)[1];
          }, t2.parseMLine = function(e3) {
            const n2 = t2.splitLines(e3)[0].substring(2).split(" ");
            return { kind: n2[0], port: parseInt(n2[1], 10), protocol: n2[2], fmt: n2.slice(3).join(" ") };
          }, t2.parseOLine = function(e3) {
            const n2 = t2.matchPrefix(e3, "o=")[0].substring(2).split(" ");
            return { username: n2[0], sessionId: n2[1], sessionVersion: parseInt(n2[2], 10), netType: n2[3], addressType: n2[4], address: n2[5] };
          }, t2.isValidSDP = function(e3) {
            if ("string" != typeof e3 || 0 === e3.length) return false;
            const n2 = t2.splitLines(e3);
            for (let e4 = 0; e4 < n2.length; e4++) if (n2[e4].length < 2 || "=" !== n2[e4].charAt(1)) return false;
            return true;
          }, e2.exports = t2;
        })(Yi)), Yi.exports), Zi = jn(Xi), $i = t({ __proto__: null, default: Zi }, [Xi]);
        function es(e2) {
          if (!e2.RTCIceCandidate || e2.RTCIceCandidate && "foundation" in e2.RTCIceCandidate.prototype) return;
          const t2 = e2.RTCIceCandidate;
          e2.RTCIceCandidate = function(e3) {
            if ("object" == typeof e3 && e3.candidate && 0 === e3.candidate.indexOf("a=") && ((e3 = JSON.parse(JSON.stringify(e3))).candidate = e3.candidate.substring(2)), e3.candidate && e3.candidate.length) {
              const n2 = new t2(e3), i2 = Zi.parseCandidate(e3.candidate);
              for (const e4 in i2) e4 in n2 || Object.defineProperty(n2, e4, { value: i2[e4] });
              return n2.toJSON = function() {
                return { candidate: n2.candidate, sdpMid: n2.sdpMid, sdpMLineIndex: n2.sdpMLineIndex, usernameFragment: n2.usernameFragment };
              }, n2;
            }
            return new t2(e3);
          }, e2.RTCIceCandidate.prototype = t2.prototype, ai(e2, "icecandidate", ((t3) => (t3.candidate && Object.defineProperty(t3, "candidate", { value: new e2.RTCIceCandidate(t3.candidate), writable: "false" }), t3)));
        }
        function ts(e2) {
          !e2.RTCIceCandidate || e2.RTCIceCandidate && "relayProtocol" in e2.RTCIceCandidate.prototype || ai(e2, "icecandidate", ((e3) => {
            if (e3.candidate) {
              const t2 = Zi.parseCandidate(e3.candidate.candidate);
              "relay" === t2.type && (e3.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t2.priority >> 24]);
            }
            return e3;
          }));
        }
        function ns(e2, t2) {
          if (!e2.RTCPeerConnection) return;
          "sctp" in e2.RTCPeerConnection.prototype || Object.defineProperty(e2.RTCPeerConnection.prototype, "sctp", { get() {
            return void 0 === this._sctp ? null : this._sctp;
          } });
          const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
          e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, "chrome" === t2.browser && t2.version >= 76) {
              const { sdpSemantics: e3 } = this.getConfiguration();
              "plan-b" === e3 && Object.defineProperty(this, "sctp", { get() {
                return void 0 === this._sctp ? null : this._sctp;
              }, enumerable: true, configurable: true });
            }
            if ((function(e3) {
              if (!e3 || !e3.sdp) return false;
              const t3 = Zi.splitSections(e3.sdp);
              return t3.shift(), t3.some(((e4) => {
                const t4 = Zi.parseMLine(e4);
                return t4 && "application" === t4.kind && -1 !== t4.protocol.indexOf("SCTP");
              }));
            })(arguments[0])) {
              const e3 = (function(e4) {
                const t3 = e4.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === t3 || t3.length < 2) return -1;
                const n4 = parseInt(t3[1], 10);
                return n4 != n4 ? -1 : n4;
              })(arguments[0]), n3 = (function(e4) {
                let n4 = 65536;
                return "firefox" === t2.browser && (n4 = t2.version < 57 ? -1 === e4 ? 16384 : 2147483637 : t2.version < 60 ? 57 === t2.version ? 65535 : 65536 : 2147483637), n4;
              })(e3), i2 = (function(e4, n4) {
                let i3 = 65536;
                "firefox" === t2.browser && 57 === t2.version && (i3 = 65535);
                const s3 = Zi.matchPrefix(e4.sdp, "a=max-message-size:");
                return s3.length > 0 ? i3 = parseInt(s3[0].substring(19), 10) : "firefox" === t2.browser && -1 !== n4 && (i3 = 2147483637), i3;
              })(arguments[0], e3);
              let s2;
              s2 = 0 === n3 && 0 === i2 ? Number.POSITIVE_INFINITY : 0 === n3 || 0 === i2 ? Math.max(n3, i2) : Math.min(n3, i2);
              const r2 = {};
              Object.defineProperty(r2, "maxMessageSize", { get: () => s2 }), this._sctp = r2;
            }
            return n2.apply(this, arguments);
          };
        }
        function is(e2) {
          if (!e2.RTCPeerConnection || !("createDataChannel" in e2.RTCPeerConnection.prototype)) return;
          function t2(e3, t3) {
            const n3 = e3.send;
            e3.send = function() {
              const i2 = arguments[0], s2 = i2.length || i2.size || i2.byteLength;
              if ("open" === e3.readyState && t3.sctp && s2 > t3.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t3.sctp.maxMessageSize + " bytes)");
              return n3.apply(e3, arguments);
            };
          }
          const n2 = e2.RTCPeerConnection.prototype.createDataChannel;
          e2.RTCPeerConnection.prototype.createDataChannel = function() {
            const e3 = n2.apply(this, arguments);
            return t2(e3, this), e3;
          }, ai(e2, "datachannel", ((e3) => (t2(e3.channel, e3.target), e3)));
        }
        function ss(e2) {
          if (!e2.RTCPeerConnection || "connectionState" in e2.RTCPeerConnection.prototype) return;
          const t2 = e2.RTCPeerConnection.prototype;
          Object.defineProperty(t2, "connectionState", { get() {
            return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
          }, enumerable: true, configurable: true }), Object.defineProperty(t2, "onconnectionstatechange", { get() {
            return this._onconnectionstatechange || null;
          }, set(e3) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e3 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e3);
          }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach(((e3) => {
            const n2 = t2[e3];
            t2[e3] = function() {
              return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e4) => {
                const t3 = e4.target;
                if (t3._lastConnectionState !== t3.connectionState) {
                  t3._lastConnectionState = t3.connectionState;
                  const n3 = new Event("connectionstatechange", e4);
                  t3.dispatchEvent(n3);
                }
                return e4;
              }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n2.apply(this, arguments);
            };
          }));
        }
        function rs(e2, t2) {
          if (!e2.RTCPeerConnection) return;
          if ("chrome" === t2.browser && t2.version >= 71) return;
          if ("safari" === t2.browser && t2._safariVersion >= 13.1) return;
          const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
          e2.RTCPeerConnection.prototype.setRemoteDescription = function(t3) {
            if (t3 && t3.sdp && -1 !== t3.sdp.indexOf("\na=extmap-allow-mixed")) {
              const n3 = t3.sdp.split("\n").filter(((e3) => "a=extmap-allow-mixed" !== e3.trim())).join("\n");
              e2.RTCSessionDescription && t3 instanceof e2.RTCSessionDescription ? arguments[0] = new e2.RTCSessionDescription({ type: t3.type, sdp: n3 }) : t3.sdp = n3;
            }
            return n2.apply(this, arguments);
          };
        }
        function os(e2, t2) {
          if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype) return;
          const n2 = e2.RTCPeerConnection.prototype.addIceCandidate;
          n2 && 0 !== n2.length && (e2.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0] ? ("chrome" === t2.browser && t2.version < 78 || "firefox" === t2.browser && t2.version < 68 || "safari" === t2.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n2.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
          });
        }
        function as(e2, t2) {
          if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype) return;
          const n2 = e2.RTCPeerConnection.prototype.setLocalDescription;
          n2 && 0 !== n2.length && (e2.RTCPeerConnection.prototype.setLocalDescription = function() {
            let e3 = arguments[0] || {};
            if ("object" != typeof e3 || e3.type && e3.sdp) return n2.apply(this, arguments);
            if (e3 = { type: e3.type, sdp: e3.sdp }, !e3.type) switch (this.signalingState) {
              case "stable":
              case "have-local-offer":
              case "have-remote-pranswer":
                e3.type = "offer";
                break;
              default:
                e3.type = "answer";
            }
            if (e3.sdp || "offer" !== e3.type && "answer" !== e3.type) return n2.apply(this, [e3]);
            return ("offer" === e3.type ? this.createOffer : this.createAnswer).apply(this).then(((e4) => n2.apply(this, [e4])));
          });
        }
        var cs = Object.freeze({ __proto__: null, removeExtmapAllowMixed: rs, shimAddIceCandidateNullOrEmpty: os, shimConnectionState: ss, shimMaxMessageSize: ns, shimParameterlessSetLocalDescription: as, shimRTCIceCandidate: es, shimRTCIceCandidateRelayProtocol: ts, shimSendThrowTypeError: is });
        !(function() {
          let { window: e2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shimChrome: true, shimFirefox: true, shimSafari: true };
          const n2 = li, i2 = (function(e3) {
            const t3 = { browser: null, version: null };
            if (void 0 === e3 || !e3.navigator || !e3.navigator.userAgent) return t3.browser = "Not a browser.", t3;
            const { navigator: n3 } = e3;
            if (n3.userAgentData && n3.userAgentData.brands) {
              const e4 = n3.userAgentData.brands.find(((e5) => "Chromium" === e5.brand));
              if (e4) return { browser: "chrome", version: parseInt(e4.version, 10) };
            }
            if (n3.mozGetUserMedia) t3.browser = "firefox", t3.version = parseInt(oi(n3.userAgent, /Firefox\/(\d+)\./, 1));
            else if (n3.webkitGetUserMedia || false === e3.isSecureContext && e3.webkitRTCPeerConnection) t3.browser = "chrome", t3.version = parseInt(oi(n3.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
            else {
              if (!e3.RTCPeerConnection || !n3.userAgent.match(/AppleWebKit\/(\d+)\./)) return t3.browser = "Not a supported browser.", t3;
              t3.browser = "safari", t3.version = parseInt(oi(n3.userAgent, /AppleWebKit\/(\d+)\./, 1)), t3.supportsUnifiedPlan = e3.RTCRtpTransceiver && "currentDirection" in e3.RTCRtpTransceiver.prototype, t3._safariVersion = oi(n3.userAgent, /Version\/(\d+(\.?\d+))/, 1);
            }
            return t3;
          })(e2), s2 = { browserDetails: i2, commonShim: cs, extractVersion: oi, disableLog: ci, disableWarnings: di, sdp: $i };
          switch (i2.browser) {
            case "chrome":
              if (!Pi || !Ei || !t2.shimChrome) return n2("Chrome shim is not included in this adapter release."), s2;
              if (null === i2.version) return n2("Chrome shim can not determine version, not shimming."), s2;
              n2("adapter.js shimming chrome."), s2.browserShim = Pi, os(e2, i2), as(e2), fi(e2, i2), ki(e2), Ei(e2, i2), bi(e2), Si(e2, i2), yi(e2), Ti(e2), wi(e2, i2), es(e2), ts(e2), ss(e2), ns(e2, i2), is(e2), rs(e2, i2);
              break;
            case "firefox":
              if (!ji || !Oi || !t2.shimFirefox) return n2("Firefox shim is not included in this adapter release."), s2;
              n2("adapter.js shimming firefox."), s2.browserShim = ji, os(e2, i2), as(e2), Ri(e2, i2), Oi(e2, i2), Ii(e2), Mi(e2), Di(e2), xi(e2), Ai(e2), _i(e2), Ni(e2), Li(e2), Ui(e2), es(e2), ss(e2), ns(e2, i2), is(e2);
              break;
            case "safari":
              if (!Qi || !t2.shimSafari) return n2("Safari shim is not included in this adapter release."), s2;
              n2("adapter.js shimming safari."), s2.browserShim = Qi, os(e2, i2), as(e2), Hi(e2), Gi(e2), Vi(e2), Fi(e2), Bi(e2), Wi(e2), qi(e2), zi(e2), es(e2), ts(e2), ns(e2, i2), is(e2), rs(e2, i2);
              break;
            default:
              n2("Unsupported browser!");
          }
        })({ window: "undefined" == typeof window ? void 0 : window });
        const ds = "AES-GCM", ls = "lk_e2ee", us = { sharedKey: false, ratchetSalt: "LKFrameEncryptionKey", ratchetWindowSize: 8, failureTolerance: 10, keyringSize: 16 };
        var hs, ps;
        function ms() {
          return vs() || gs();
        }
        function gs() {
          return void 0 !== window.RTCRtpScriptTransform;
        }
        function vs() {
          return void 0 !== window.RTCRtpSender && void 0 !== window.RTCRtpSender.prototype.createEncodedStreams;
        }
        function fs(e2) {
          return Zn(this, void 0, void 0, (function* () {
            let t2 = new TextEncoder();
            return yield crypto.subtle.importKey("raw", t2.encode(e2), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
          }));
        }
        function ks(e2) {
          return Zn(this, void 0, void 0, (function* () {
            return yield crypto.subtle.importKey("raw", e2, "HKDF", false, ["deriveBits", "deriveKey"]);
          }));
        }
        function bs(e2, t2) {
          const n2 = new TextEncoder().encode(t2);
          switch (e2) {
            case "HKDF":
              return { name: "HKDF", salt: n2, hash: "SHA-256", info: new ArrayBuffer(128) };
            case "PBKDF2":
              return { name: "PBKDF2", salt: n2, hash: "SHA-256", iterations: 1e5 };
            default:
              throw new Error("algorithm ".concat(e2, " is currently unsupported"));
          }
        }
        e.KeyProviderEvent = void 0, (hs = e.KeyProviderEvent || (e.KeyProviderEvent = {})).SetKey = "setKey", hs.RatchetRequest = "ratchetRequest", hs.KeyRatcheted = "keyRatcheted", e.KeyHandlerEvent = void 0, (e.KeyHandlerEvent || (e.KeyHandlerEvent = {})).KeyRatcheted = "keyRatcheted", e.EncryptionEvent = void 0, (ps = e.EncryptionEvent || (e.EncryptionEvent = {})).ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", ps.EncryptionError = "encryptionError", e.CryptorEvent = void 0, (e.CryptorEvent || (e.CryptorEvent = {})).Error = "cryptorError";
        class ys extends ii.EventEmitter {
          constructor() {
            let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            super(), this.onKeyRatcheted = (e2, t3, n2) => {
              Wn.debug("key ratcheted event received", { ratchetResult: e2, participantId: t3, keyIndex: n2 });
            }, this.keyInfoMap = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, us), t2), this.on(e.KeyProviderEvent.KeyRatcheted, this.onKeyRatcheted);
          }
          onSetEncryptionKey(t2, n2, i2) {
            const s2 = { key: t2, participantIdentity: n2, keyIndex: i2 };
            if (!this.options.sharedKey && !n2) throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
            this.keyInfoMap.set("".concat(null != n2 ? n2 : "shared", "-").concat(null != i2 ? i2 : 0), s2), this.emit(e.KeyProviderEvent.SetKey, s2);
          }
          getKeys() {
            return Array.from(this.keyInfoMap.values());
          }
          getOptions() {
            return this.options;
          }
          ratchetKey(t2, n2) {
            this.emit(e.KeyProviderEvent.RatchetRequest, t2, n2);
          }
        }
        class Ts extends Error {
          constructor(e2, t2) {
            super(t2 || "an error has occured"), this.name = "LiveKitError", this.code = e2;
          }
        }
        var Cs, Ss, Es, ws, Ps, Rs, Is, Os;
        e.ConnectionErrorReason = void 0, (Cs = e.ConnectionErrorReason || (e.ConnectionErrorReason = {}))[Cs.NotAllowed = 0] = "NotAllowed", Cs[Cs.ServerUnreachable = 1] = "ServerUnreachable", Cs[Cs.InternalError = 2] = "InternalError", Cs[Cs.Cancelled = 3] = "Cancelled", Cs[Cs.LeaveRequest = 4] = "LeaveRequest", Cs[Cs.Timeout = 5] = "Timeout";
        class Ds extends Ts {
          constructor(t2, n2, i2, s2) {
            super(1, t2), this.name = "ConnectionError", this.status = i2, this.reason = n2, this.context = s2, this.reasonName = e.ConnectionErrorReason[n2];
          }
        }
        class xs extends Ts {
          constructor(e2) {
            super(21, null != e2 ? e2 : "device is unsupported"), this.name = "DeviceUnsupportedError";
          }
        }
        class Ms extends Ts {
          constructor(e2) {
            super(20, null != e2 ? e2 : "track is invalid"), this.name = "TrackInvalidError";
          }
        }
        class As extends Ts {
          constructor(e2) {
            super(10, null != e2 ? e2 : "unsupported server"), this.name = "UnsupportedServer";
          }
        }
        class _s extends Ts {
          constructor(e2) {
            super(12, null != e2 ? e2 : "unexpected connection state"), this.name = "UnexpectedConnectionState";
          }
        }
        class Ns extends Ts {
          constructor(e2) {
            super(13, null != e2 ? e2 : "unable to negotiate"), this.name = "NegotiationError";
          }
        }
        class Ls extends Ts {
          constructor(e2, t2) {
            super(15, e2), this.name = "PublishTrackError", this.status = t2;
          }
        }
        class Us extends Ts {
          constructor(e2, t2) {
            super(15, e2), this.reason = t2, this.reasonName = "string" == typeof t2 ? t2 : Ln[t2];
          }
        }
        e.DataStreamErrorReason = void 0, (Ss = e.DataStreamErrorReason || (e.DataStreamErrorReason = {}))[Ss.AlreadyOpened = 0] = "AlreadyOpened", Ss[Ss.AbnormalEnd = 1] = "AbnormalEnd", Ss[Ss.DecodeFailed = 2] = "DecodeFailed", Ss[Ss.LengthExceeded = 3] = "LengthExceeded", Ss[Ss.Incomplete = 4] = "Incomplete", Ss[Ss.HandlerAlreadyRegistered = 7] = "HandlerAlreadyRegistered";
        class js extends Ts {
          constructor(t2, n2) {
            super(16, t2), this.name = "DataStreamError", this.reason = n2, this.reasonName = e.DataStreamErrorReason[n2];
          }
        }
        e.MediaDeviceFailure = void 0, (Es = e.MediaDeviceFailure || (e.MediaDeviceFailure = {})).PermissionDenied = "PermissionDenied", Es.NotFound = "NotFound", Es.DeviceInUse = "DeviceInUse", Es.Other = "Other", (function(e2) {
          e2.getFailure = function(t2) {
            if (t2 && "name" in t2) return "NotFoundError" === t2.name || "DevicesNotFoundError" === t2.name ? e2.NotFound : "NotAllowedError" === t2.name || "PermissionDeniedError" === t2.name ? e2.PermissionDenied : "NotReadableError" === t2.name || "TrackStartError" === t2.name ? e2.DeviceInUse : e2.Other;
          };
        })(e.MediaDeviceFailure || (e.MediaDeviceFailure = {})), e.CryptorErrorReason = void 0, (ws = e.CryptorErrorReason || (e.CryptorErrorReason = {}))[ws.InvalidKey = 0] = "InvalidKey", ws[ws.MissingKey = 1] = "MissingKey", ws[ws.InternalError = 2] = "InternalError";
        e.RoomEvent = void 0, (Ps = e.RoomEvent || (e.RoomEvent = {})).Connected = "connected", Ps.Reconnecting = "reconnecting", Ps.SignalReconnecting = "signalReconnecting", Ps.Reconnected = "reconnected", Ps.Disconnected = "disconnected", Ps.ConnectionStateChanged = "connectionStateChanged", Ps.Moved = "moved", Ps.MediaDevicesChanged = "mediaDevicesChanged", Ps.ParticipantConnected = "participantConnected", Ps.ParticipantDisconnected = "participantDisconnected", Ps.TrackPublished = "trackPublished", Ps.TrackSubscribed = "trackSubscribed", Ps.TrackSubscriptionFailed = "trackSubscriptionFailed", Ps.TrackUnpublished = "trackUnpublished", Ps.TrackUnsubscribed = "trackUnsubscribed", Ps.TrackMuted = "trackMuted", Ps.TrackUnmuted = "trackUnmuted", Ps.LocalTrackPublished = "localTrackPublished", Ps.LocalTrackUnpublished = "localTrackUnpublished", Ps.LocalAudioSilenceDetected = "localAudioSilenceDetected", Ps.ActiveSpeakersChanged = "activeSpeakersChanged", Ps.ParticipantMetadataChanged = "participantMetadataChanged", Ps.ParticipantNameChanged = "participantNameChanged", Ps.ParticipantAttributesChanged = "participantAttributesChanged", Ps.ParticipantActive = "participantActive", Ps.RoomMetadataChanged = "roomMetadataChanged", Ps.DataReceived = "dataReceived", Ps.SipDTMFReceived = "sipDTMFReceived", Ps.TranscriptionReceived = "transcriptionReceived", Ps.ConnectionQualityChanged = "connectionQualityChanged", Ps.TrackStreamStateChanged = "trackStreamStateChanged", Ps.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", Ps.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", Ps.AudioPlaybackStatusChanged = "audioPlaybackChanged", Ps.VideoPlaybackStatusChanged = "videoPlaybackChanged", Ps.MediaDevicesError = "mediaDevicesError", Ps.ParticipantPermissionsChanged = "participantPermissionsChanged", Ps.SignalConnected = "signalConnected", Ps.RecordingStatusChanged = "recordingStatusChanged", Ps.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", Ps.EncryptionError = "encryptionError", Ps.DCBufferStatusChanged = "dcBufferStatusChanged", Ps.ActiveDeviceChanged = "activeDeviceChanged", Ps.ChatMessage = "chatMessage", Ps.LocalTrackSubscribed = "localTrackSubscribed", Ps.MetricsReceived = "metricsReceived", e.ParticipantEvent = void 0, (Rs = e.ParticipantEvent || (e.ParticipantEvent = {})).TrackPublished = "trackPublished", Rs.TrackSubscribed = "trackSubscribed", Rs.TrackSubscriptionFailed = "trackSubscriptionFailed", Rs.TrackUnpublished = "trackUnpublished", Rs.TrackUnsubscribed = "trackUnsubscribed", Rs.TrackMuted = "trackMuted", Rs.TrackUnmuted = "trackUnmuted", Rs.LocalTrackPublished = "localTrackPublished", Rs.LocalTrackUnpublished = "localTrackUnpublished", Rs.LocalTrackCpuConstrained = "localTrackCpuConstrained", Rs.LocalSenderCreated = "localSenderCreated", Rs.ParticipantMetadataChanged = "participantMetadataChanged", Rs.ParticipantNameChanged = "participantNameChanged", Rs.DataReceived = "dataReceived", Rs.SipDTMFReceived = "sipDTMFReceived", Rs.TranscriptionReceived = "transcriptionReceived", Rs.IsSpeakingChanged = "isSpeakingChanged", Rs.ConnectionQualityChanged = "connectionQualityChanged", Rs.TrackStreamStateChanged = "trackStreamStateChanged", Rs.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", Rs.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", Rs.TrackCpuConstrained = "trackCpuConstrained", Rs.MediaDevicesError = "mediaDevicesError", Rs.AudioStreamAcquired = "audioStreamAcquired", Rs.ParticipantPermissionsChanged = "participantPermissionsChanged", Rs.PCTrackAdded = "pcTrackAdded", Rs.AttributesChanged = "attributesChanged", Rs.LocalTrackSubscribed = "localTrackSubscribed", Rs.ChatMessage = "chatMessage", Rs.Active = "active", e.EngineEvent = void 0, (Is = e.EngineEvent || (e.EngineEvent = {})).TransportsCreated = "transportsCreated", Is.Connected = "connected", Is.Disconnected = "disconnected", Is.Resuming = "resuming", Is.Resumed = "resumed", Is.Restarting = "restarting", Is.Restarted = "restarted", Is.SignalResumed = "signalResumed", Is.SignalRestarted = "signalRestarted", Is.Closing = "closing", Is.MediaTrackAdded = "mediaTrackAdded", Is.ActiveSpeakersUpdate = "activeSpeakersUpdate", Is.DataPacketReceived = "dataPacketReceived", Is.RTPVideoMapUpdate = "rtpVideoMapUpdate", Is.DCBufferStatusChanged = "dcBufferStatusChanged", Is.ParticipantUpdate = "participantUpdate", Is.RoomUpdate = "roomUpdate", Is.SpeakersChanged = "speakersChanged", Is.StreamStateChanged = "streamStateChanged", Is.ConnectionQualityUpdate = "connectionQualityUpdate", Is.SubscriptionError = "subscriptionError", Is.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", Is.RemoteMute = "remoteMute", Is.SubscribedQualityUpdate = "subscribedQualityUpdate", Is.LocalTrackUnpublished = "localTrackUnpublished", Is.LocalTrackSubscribed = "localTrackSubscribed", Is.Offline = "offline", Is.SignalRequestResponse = "signalRequestResponse", Is.SignalConnected = "signalConnected", Is.RoomMoved = "roomMoved", e.TrackEvent = void 0, (Os = e.TrackEvent || (e.TrackEvent = {})).Message = "message", Os.Muted = "muted", Os.Unmuted = "unmuted", Os.Restarted = "restarted", Os.Ended = "ended", Os.Subscribed = "subscribed", Os.Unsubscribed = "unsubscribed", Os.CpuConstrained = "cpuConstrained", Os.UpdateSettings = "updateSettings", Os.UpdateSubscription = "updateSubscription", Os.AudioPlaybackStarted = "audioPlaybackStarted", Os.AudioPlaybackFailed = "audioPlaybackFailed", Os.AudioSilenceDetected = "audioSilenceDetected", Os.VisibilityChanged = "visibilityChanged", Os.VideoDimensionsChanged = "videoDimensionsChanged", Os.VideoPlaybackStarted = "videoPlaybackStarted", Os.VideoPlaybackFailed = "videoPlaybackFailed", Os.ElementAttached = "elementAttached", Os.ElementDetached = "elementDetached", Os.UpstreamPaused = "upstreamPaused", Os.UpstreamResumed = "upstreamResumed", Os.SubscriptionPermissionChanged = "subscriptionPermissionChanged", Os.SubscriptionStatusChanged = "subscriptionStatusChanged", Os.SubscriptionFailed = "subscriptionFailed", Os.TrackProcessorUpdate = "trackProcessorUpdate", Os.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", Os.TranscriptionReceived = "transcriptionReceived", Os.TimeSyncUpdate = "timeSyncUpdate", Os.PreConnectBufferFlushed = "preConnectBufferFlushed";
        const Fs = /version\/(\d+(\.?_?\d+)+)/i;
        let Bs;
        function Vs(e2) {
          let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (void 0 === e2 && "undefined" == typeof navigator) return;
          const n2 = (null != e2 ? e2 : navigator.userAgent).toLowerCase();
          if (void 0 === Bs || t2) {
            const e3 = qs.find(((e4) => {
              let { test: t3 } = e4;
              return t3.test(n2);
            }));
            Bs = null == e3 ? void 0 : e3.describe(n2);
          }
          return Bs;
        }
        const qs = [{ test: /firefox|iceweasel|fxios/i, describe: (e2) => ({ name: "Firefox", version: Ks(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("fxios") ? "iOS" : void 0, osVersion: Hs(e2) }) }, { test: /chrom|crios|crmo/i, describe: (e2) => ({ name: "Chrome", version: Ks(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("crios") ? "iOS" : void 0, osVersion: Hs(e2) }) }, { test: /safari|applewebkit/i, describe: (e2) => ({ name: "Safari", version: Ks(Fs, e2), os: e2.includes("mobile/") ? "iOS" : "macOS", osVersion: Hs(e2) }) }];
        function Ks(e2, t2) {
          let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          const i2 = t2.match(e2);
          return i2 && i2.length >= n2 && i2[n2] || "";
        }
        function Hs(e2) {
          return e2.includes("mac os") ? Ks(/\(.+?(\d+_\d+(:?_\d+)?)/, e2, 1).replace(/_/g, ".") : void 0;
        }
        const Ws = "2.15.7";
        class Gs {
        }
        Gs.setTimeout = function() {
          return setTimeout(...arguments);
        }, Gs.setInterval = function() {
          return setInterval(...arguments);
        }, Gs.clearTimeout = function() {
          return clearTimeout(...arguments);
        }, Gs.clearInterval = function() {
          return clearInterval(...arguments);
        };
        const zs = [];
        e.VideoQuality = void 0, (function(e2) {
          e2[e2.LOW = 0] = "LOW", e2[e2.MEDIUM = 1] = "MEDIUM", e2[e2.HIGH = 2] = "HIGH";
        })(e.VideoQuality || (e.VideoQuality = {}));
        class Js extends ii.EventEmitter {
          get streamState() {
            return this._streamState;
          }
          setStreamState(e2) {
            this._streamState = e2;
          }
          constructor(t2, n2) {
            let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            var s2;
            super(), this.attachedElements = [], this.isMuted = false, this._streamState = Js.StreamState.Active, this.isInBackground = false, this._currentBitrate = 0, this.log = Wn, this.appVisibilityChangedListener = () => {
              this.backgroundTimeout && clearTimeout(this.backgroundTimeout), "hidden" === document.visibilityState ? this.backgroundTimeout = setTimeout((() => this.handleAppVisibilityChanged()), 5e3) : this.handleAppVisibilityChanged();
            }, this.log = zn(null !== (s2 = i2.loggerName) && void 0 !== s2 ? s2 : e.LoggerNames.Track), this.loggerContextCb = i2.loggerContextCb, this.setMaxListeners(100), this.kind = n2, this._mediaStreamTrack = t2, this._mediaStreamID = t2.id, this.source = Js.Source.Unknown;
          }
          get logContext() {
            var e2;
            return Object.assign(Object.assign({}, null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)), ao(this));
          }
          get currentBitrate() {
            return this._currentBitrate;
          }
          get mediaStreamTrack() {
            return this._mediaStreamTrack;
          }
          get mediaStreamID() {
            return this._mediaStreamID;
          }
          attach(t2) {
            let n2 = "audio";
            this.kind === Js.Kind.Video && (n2 = "video"), 0 === this.attachedElements.length && this.kind === Js.Kind.Video && this.addAppVisibilityListener(), t2 || ("audio" === n2 && (zs.forEach(((e2) => {
              null !== e2.parentElement || t2 || (t2 = e2);
            })), t2 && zs.splice(zs.indexOf(t2), 1)), t2 || (t2 = document.createElement(n2))), this.attachedElements.includes(t2) || this.attachedElements.push(t2), Qs(this.mediaStreamTrack, t2);
            const i2 = t2.srcObject.getTracks(), s2 = i2.some(((e2) => "audio" === e2.kind));
            return t2.play().then((() => {
              this.emit(s2 ? e.TrackEvent.AudioPlaybackStarted : e.TrackEvent.VideoPlaybackStarted);
            })).catch(((n3) => {
              "NotAllowedError" === n3.name ? this.emit(s2 ? e.TrackEvent.AudioPlaybackFailed : e.TrackEvent.VideoPlaybackFailed, n3) : "AbortError" === n3.name ? Wn.debug("".concat(s2 ? "audio" : "video", " playback aborted, likely due to new play request")) : Wn.warn("could not playback ".concat(s2 ? "audio" : "video"), n3), s2 && t2 && i2.some(((e2) => "video" === e2.kind)) && "NotAllowedError" === n3.name && (t2.muted = true, t2.play().catch((() => {
              })));
            })), this.emit(e.TrackEvent.ElementAttached, t2), t2;
          }
          detach(t2) {
            try {
              if (t2) {
                Ys(this.mediaStreamTrack, t2);
                const n3 = this.attachedElements.indexOf(t2);
                return n3 >= 0 && (this.attachedElements.splice(n3, 1), this.recycleElement(t2), this.emit(e.TrackEvent.ElementDetached, t2)), t2;
              }
              const n2 = [];
              return this.attachedElements.forEach(((t3) => {
                Ys(this.mediaStreamTrack, t3), n2.push(t3), this.recycleElement(t3), this.emit(e.TrackEvent.ElementDetached, t3);
              })), this.attachedElements = [], n2;
            } finally {
              0 === this.attachedElements.length && this.removeAppVisibilityListener();
            }
          }
          stop() {
            this.stopMonitor(), this._mediaStreamTrack.stop();
          }
          enable() {
            this._mediaStreamTrack.enabled = true;
          }
          disable() {
            this._mediaStreamTrack.enabled = false;
          }
          stopMonitor() {
            this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle);
          }
          updateLoggerOptions(e2) {
            e2.loggerName && (this.log = zn(e2.loggerName)), e2.loggerContextCb && (this.loggerContextCb = e2.loggerContextCb);
          }
          recycleElement(e2) {
            if (e2 instanceof HTMLAudioElement) {
              let t2 = true;
              e2.pause(), zs.forEach(((e3) => {
                e3.parentElement || (t2 = false);
              })), t2 && zs.push(e2);
            }
          }
          handleAppVisibilityChanged() {
            return Zn(this, void 0, void 0, (function* () {
              this.isInBackground = "hidden" === document.visibilityState, this.isInBackground || this.kind !== Js.Kind.Video || setTimeout((() => this.attachedElements.forEach(((e2) => e2.play().catch((() => {
              }))))), 0);
            }));
          }
          addAppVisibilityListener() {
            br() ? (this.isInBackground = "hidden" === document.visibilityState, document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = false;
          }
          removeAppVisibilityListener() {
            br() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener);
          }
        }
        function Qs(e2, t2) {
          let n2, i2;
          n2 = t2.srcObject instanceof MediaStream ? t2.srcObject : new MediaStream(), i2 = "audio" === e2.kind ? n2.getAudioTracks() : n2.getVideoTracks(), i2.includes(e2) || (i2.forEach(((e3) => {
            n2.removeTrack(e3);
          })), n2.addTrack(e2)), gr() && t2 instanceof HTMLVideoElement || (t2.autoplay = true), t2.muted = 0 === n2.getAudioTracks().length, t2 instanceof HTMLVideoElement && (t2.playsInline = true), t2.srcObject !== n2 && (t2.srcObject = n2, (gr() || mr()) && t2 instanceof HTMLVideoElement && setTimeout((() => {
            t2.srcObject = n2, t2.play().catch((() => {
            }));
          }), 0));
        }
        function Ys(e2, t2) {
          if (t2.srcObject instanceof MediaStream) {
            const n2 = t2.srcObject;
            n2.removeTrack(e2), n2.getTracks().length > 0 ? t2.srcObject = n2 : t2.srcObject = null;
          }
        }
        !(function(e2) {
          let t2, n2, i2;
          !(function(e3) {
            e3.Audio = "audio", e3.Video = "video", e3.Unknown = "unknown";
          })(t2 = e2.Kind || (e2.Kind = {})), (function(e3) {
            e3.Camera = "camera", e3.Microphone = "microphone", e3.ScreenShare = "screen_share", e3.ScreenShareAudio = "screen_share_audio", e3.Unknown = "unknown";
          })(n2 = e2.Source || (e2.Source = {})), (function(e3) {
            e3.Active = "active", e3.Paused = "paused", e3.Unknown = "unknown";
          })(i2 = e2.StreamState || (e2.StreamState = {})), e2.kindToProto = function(e3) {
            switch (e3) {
              case t2.Audio:
                return Je.AUDIO;
              case t2.Video:
                return Je.VIDEO;
              default:
                return Je.DATA;
            }
          }, e2.kindFromProto = function(e3) {
            switch (e3) {
              case Je.AUDIO:
                return t2.Audio;
              case Je.VIDEO:
                return t2.Video;
              default:
                return t2.Unknown;
            }
          }, e2.sourceToProto = function(e3) {
            switch (e3) {
              case n2.Camera:
                return Qe.CAMERA;
              case n2.Microphone:
                return Qe.MICROPHONE;
              case n2.ScreenShare:
                return Qe.SCREEN_SHARE;
              case n2.ScreenShareAudio:
                return Qe.SCREEN_SHARE_AUDIO;
              default:
                return Qe.UNKNOWN;
            }
          }, e2.sourceFromProto = function(e3) {
            switch (e3) {
              case Qe.CAMERA:
                return n2.Camera;
              case Qe.MICROPHONE:
                return n2.Microphone;
              case Qe.SCREEN_SHARE:
                return n2.ScreenShare;
              case Qe.SCREEN_SHARE_AUDIO:
                return n2.ScreenShareAudio;
              default:
                return n2.Unknown;
            }
          }, e2.streamStateFromProto = function(e3) {
            switch (e3) {
              case Kt.ACTIVE:
                return i2.Active;
              case Kt.PAUSED:
                return i2.Paused;
              default:
                return i2.Unknown;
            }
          };
        })(Js || (Js = {}));
        class Xs {
          constructor(e2, t2, n2, i2, s2) {
            if ("object" == typeof e2) this.width = e2.width, this.height = e2.height, this.aspectRatio = e2.aspectRatio, this.encoding = { maxBitrate: e2.maxBitrate, maxFramerate: e2.maxFramerate, priority: e2.priority };
            else {
              if (void 0 === t2 || void 0 === n2) throw new TypeError("Unsupported options: provide at least width, height and maxBitrate");
              this.width = e2, this.height = t2, this.aspectRatio = e2 / t2, this.encoding = { maxBitrate: n2, maxFramerate: i2, priority: s2 };
            }
          }
          get resolution() {
            return { width: this.width, height: this.height, frameRate: this.encoding.maxFramerate, aspectRatio: this.aspectRatio };
          }
        }
        const Zs = ["vp8", "h264"], $s = ["vp8", "h264", "vp9", "av1", "h265"];
        function er(e2) {
          return !!Zs.find(((t2) => t2 === e2));
        }
        var tr;
        e.BackupCodecPolicy = void 0, (function(e2) {
          e2[e2.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", e2[e2.SIMULCAST = 1] = "SIMULCAST", e2[e2.REGRESSION = 2] = "REGRESSION";
        })(e.BackupCodecPolicy || (e.BackupCodecPolicy = {})), e.AudioPresets = void 0, (tr = e.AudioPresets || (e.AudioPresets = {})).telephone = { maxBitrate: 12e3 }, tr.speech = { maxBitrate: 24e3 }, tr.music = { maxBitrate: 48e3 }, tr.musicStereo = { maxBitrate: 64e3 }, tr.musicHighQuality = { maxBitrate: 96e3 }, tr.musicHighQualityStereo = { maxBitrate: 128e3 };
        const nr = { h90: new Xs(160, 90, 9e4, 20), h180: new Xs(320, 180, 16e4, 20), h216: new Xs(384, 216, 18e4, 20), h360: new Xs(640, 360, 45e4, 20), h540: new Xs(960, 540, 8e5, 25), h720: new Xs(1280, 720, 17e5, 30), h1080: new Xs(1920, 1080, 3e6, 30), h1440: new Xs(2560, 1440, 5e6, 30), h2160: new Xs(3840, 2160, 8e6, 30) }, ir = { h120: new Xs(160, 120, 7e4, 20), h180: new Xs(240, 180, 125e3, 20), h240: new Xs(320, 240, 14e4, 20), h360: new Xs(480, 360, 33e4, 20), h480: new Xs(640, 480, 5e5, 20), h540: new Xs(720, 540, 6e5, 25), h720: new Xs(960, 720, 13e5, 30), h1080: new Xs(1440, 1080, 23e5, 30), h1440: new Xs(1920, 1440, 38e5, 30) }, sr = { h360fps3: new Xs(640, 360, 2e5, 3, "medium"), h360fps15: new Xs(640, 360, 4e5, 15, "medium"), h720fps5: new Xs(1280, 720, 8e5, 5, "medium"), h720fps15: new Xs(1280, 720, 15e5, 15, "medium"), h720fps30: new Xs(1280, 720, 2e6, 30, "medium"), h1080fps15: new Xs(1920, 1080, 25e5, 15, "medium"), h1080fps30: new Xs(1920, 1080, 5e6, 30, "medium"), original: new Xs(0, 0, 7e6, 30, "medium") }, rr = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
        function or(e2) {
          return Zn(this, void 0, void 0, (function* () {
            return new Promise(((t2) => Gs.setTimeout(t2, e2)));
          }));
        }
        function ar() {
          return "addTransceiver" in RTCPeerConnection.prototype;
        }
        function cr() {
          return "addTrack" in RTCPeerConnection.prototype;
        }
        function dr() {
          if (!("getCapabilities" in RTCRtpSender)) return false;
          if (gr() || mr()) return false;
          const e2 = RTCRtpSender.getCapabilities("video");
          let t2 = false;
          if (e2) {
            for (const n2 of e2.codecs) if ("video/AV1" === n2.mimeType) {
              t2 = true;
              break;
            }
          }
          return t2;
        }
        function lr() {
          if (!("getCapabilities" in RTCRtpSender)) return false;
          if (mr()) return false;
          if (gr()) {
            const e3 = Vs();
            if ((null == e3 ? void 0 : e3.version) && wr(e3.version, "16") < 0) return false;
            if ("iOS" === (null == e3 ? void 0 : e3.os) && (null == e3 ? void 0 : e3.osVersion) && wr(e3.osVersion, "16") < 0) return false;
          }
          const e2 = RTCRtpSender.getCapabilities("video");
          let t2 = false;
          if (e2) {
            for (const n2 of e2.codecs) if ("video/VP9" === n2.mimeType) {
              t2 = true;
              break;
            }
          }
          return t2;
        }
        function ur(e2) {
          return "av1" === e2 || "vp9" === e2;
        }
        function hr(e2) {
          return !(!document || vr()) && (e2 || (e2 = document.createElement("audio")), "setSinkId" in e2);
        }
        function pr() {
          return "undefined" != typeof RTCPeerConnection && (ar() || cr());
        }
        function mr() {
          var e2;
          return "Firefox" === (null === (e2 = Vs()) || void 0 === e2 ? void 0 : e2.name);
        }
        function gr() {
          var e2;
          return "Safari" === (null === (e2 = Vs()) || void 0 === e2 ? void 0 : e2.name);
        }
        function vr() {
          const e2 = Vs();
          return "Safari" === (null == e2 ? void 0 : e2.name) || "iOS" === (null == e2 ? void 0 : e2.os);
        }
        function fr() {
          const e2 = Vs();
          return "Safari" === (null == e2 ? void 0 : e2.name) && e2.version.startsWith("17.") || "iOS" === (null == e2 ? void 0 : e2.os) && !!(null == e2 ? void 0 : e2.osVersion) && wr(e2.osVersion, "17") >= 0;
        }
        function kr() {
          var e2, t2;
          return !!br() && (null !== (t2 = null === (e2 = navigator.userAgentData) || void 0 === e2 ? void 0 : e2.mobile) && void 0 !== t2 ? t2 : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent));
        }
        function br() {
          return "undefined" != typeof document;
        }
        function yr() {
          return "ReactNative" == navigator.product;
        }
        function Tr(e2) {
          return e2.hostname.endsWith(".livekit.cloud") || e2.hostname.endsWith(".livekit.run");
        }
        function Cr() {
          if (global && global.LiveKitReactNativeGlobal) return global.LiveKitReactNativeGlobal;
        }
        function Sr() {
          if (!yr()) return;
          let e2 = Cr();
          return e2 ? e2.platform : void 0;
        }
        function Er() {
          if (br()) return window.devicePixelRatio;
          if (yr()) {
            let e2 = Cr();
            if (e2) return e2.devicePixelRatio;
          }
          return 1;
        }
        function wr(e2, t2) {
          const n2 = e2.split("."), i2 = t2.split("."), s2 = Math.min(n2.length, i2.length);
          for (let e3 = 0; e3 < s2; ++e3) {
            const t3 = parseInt(n2[e3], 10), r2 = parseInt(i2[e3], 10);
            if (t3 > r2) return 1;
            if (t3 < r2) return -1;
            if (e3 === s2 - 1 && t3 === r2) return 0;
          }
          return "" === e2 && "" !== t2 ? -1 : "" === t2 ? 1 : n2.length == i2.length ? 0 : n2.length < i2.length ? -1 : 1;
        }
        function Pr(e2) {
          for (const t2 of e2) t2.target.handleResize(t2);
        }
        function Rr(e2) {
          for (const t2 of e2) t2.target.handleVisibilityChanged(t2);
        }
        let Ir = null;
        const Or = () => (Ir || (Ir = new ResizeObserver(Pr)), Ir);
        let Dr = null;
        const xr = () => (Dr || (Dr = new IntersectionObserver(Rr, { root: null, rootMargin: "0px" })), Dr);
        let Mr, Ar;
        function _r() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const s2 = document.createElement("canvas");
          s2.width = e2, s2.height = t2;
          const r2 = s2.getContext("2d");
          null == r2 || r2.fillRect(0, 0, s2.width, s2.height), i2 && r2 && (r2.beginPath(), r2.arc(e2 / 2, t2 / 2, 50, 0, 2 * Math.PI, true), r2.closePath(), r2.fillStyle = "grey", r2.fill());
          const o2 = s2.captureStream(), [a2] = o2.getTracks();
          if (!a2) throw Error("Could not get empty media stream video track");
          return a2.enabled = n2, a2;
        }
        function Nr() {
          if (!Ar) {
            const e2 = new AudioContext(), t2 = e2.createOscillator(), n2 = e2.createGain();
            n2.gain.setValueAtTime(0, 0);
            const i2 = e2.createMediaStreamDestination();
            if (t2.connect(n2), n2.connect(i2), t2.start(), [Ar] = i2.stream.getAudioTracks(), !Ar) throw Error("Could not get empty media stream audio track");
            Ar.enabled = false;
          }
          return Ar.clone();
        }
        class Lr {
          get isResolved() {
            return this._isResolved;
          }
          constructor(e2, t2) {
            this._isResolved = false, this.onFinally = t2, this.promise = new Promise(((t3, n2) => Zn(this, void 0, void 0, (function* () {
              this.resolve = t3, this.reject = n2, e2 && (yield e2(t3, n2));
            })))).finally((() => {
              var e3;
              this._isResolved = true, null === (e3 = this.onFinally) || void 0 === e3 || e3.call(this);
            }));
          }
        }
        function Ur(e2) {
          if ("string" == typeof e2 || "number" == typeof e2) return e2;
          if (Array.isArray(e2)) return e2[0];
          if (void 0 !== e2.exact) return Array.isArray(e2.exact) ? e2.exact[0] : e2.exact;
          if (void 0 !== e2.ideal) return Array.isArray(e2.ideal) ? e2.ideal[0] : e2.ideal;
          throw Error("could not unwrap constraint");
        }
        function jr(e2) {
          return e2.startsWith("ws") ? e2.replace(/^(ws)/, "http") : e2;
        }
        function Fr(t2) {
          switch (t2.reason) {
            case e.ConnectionErrorReason.LeaveRequest:
              return t2.context;
            case e.ConnectionErrorReason.Cancelled:
              return $e.CLIENT_INITIATED;
            case e.ConnectionErrorReason.NotAllowed:
              return $e.USER_REJECTED;
            case e.ConnectionErrorReason.ServerUnreachable:
              return $e.JOIN_FAILURE;
            default:
              return $e.UNKNOWN_REASON;
          }
        }
        function Br(e2) {
          return void 0 !== e2 ? Number(e2) : void 0;
        }
        function Vr(e2) {
          return void 0 !== e2 ? BigInt(e2) : void 0;
        }
        function qr(e2) {
          return !!e2 && !(e2 instanceof MediaStreamTrack) && e2.isLocal;
        }
        function Kr(e2) {
          return !!e2 && e2.kind == Js.Kind.Audio;
        }
        function Hr(e2) {
          return !!e2 && e2.kind == Js.Kind.Video;
        }
        function Wr(e2) {
          return qr(e2) && Hr(e2);
        }
        function Gr(e2) {
          return qr(e2) && Kr(e2);
        }
        function zr(e2) {
          return !!e2 && !e2.isLocal;
        }
        function Jr(e2) {
          return !!e2 && !e2.isLocal;
        }
        function Qr(e2) {
          return zr(e2) && Hr(e2);
        }
        function Yr(e2) {
          return e2.isLocal;
        }
        function Xr(e2, t2, n2) {
          var i2, s2, r2, o2;
          const { optionsWithoutProcessor: a2, audioProcessor: c2, videoProcessor: d2 } = co(null != e2 ? e2 : {}), l2 = null == t2 ? void 0 : t2.processor, u2 = null == n2 ? void 0 : n2.processor, h2 = null != a2 ? a2 : {};
          return true === h2.audio && (h2.audio = {}), true === h2.video && (h2.video = {}), h2.audio && (Zr(h2.audio, t2), null !== (i2 = (r2 = h2.audio).deviceId) && void 0 !== i2 || (r2.deviceId = { ideal: "default" }), (c2 || l2) && (h2.audio.processor = null != c2 ? c2 : l2)), h2.video && (Zr(h2.video, n2), null !== (s2 = (o2 = h2.video).deviceId) && void 0 !== s2 || (o2.deviceId = { ideal: "default" }), (d2 || u2) && (h2.video.processor = null != d2 ? d2 : u2)), h2;
        }
        function Zr(e2, t2) {
          return Object.keys(t2).forEach(((n2) => {
            void 0 === e2[n2] && (e2[n2] = t2[n2]);
          })), e2;
        }
        function $r(e2) {
          var t2, n2, i2, s2;
          const r2 = {};
          if (e2.video) if ("object" == typeof e2.video) {
            const n3 = {}, s3 = n3, o2 = e2.video;
            Object.keys(o2).forEach(((e3) => {
              if ("resolution" === e3) Zr(s3, o2.resolution);
              else s3[e3] = o2[e3];
            })), r2.video = n3, null !== (t2 = (i2 = r2.video).deviceId) && void 0 !== t2 || (i2.deviceId = { ideal: "default" });
          } else r2.video = !!e2.video && { deviceId: { ideal: "default" } };
          else r2.video = false;
          return e2.audio ? "object" == typeof e2.audio ? (r2.audio = e2.audio, null !== (n2 = (s2 = r2.audio).deviceId) && void 0 !== n2 || (s2.deviceId = { ideal: "default" })) : r2.audio = { deviceId: { ideal: "default" } } : r2.audio = false, r2;
        }
        function eo(e2) {
          return Zn(this, arguments, void 0, (function(e3) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
            return (function* () {
              const n2 = to();
              if (n2) {
                const i2 = n2.createAnalyser();
                i2.fftSize = 2048;
                const s2 = i2.frequencyBinCount, r2 = new Uint8Array(s2);
                n2.createMediaStreamSource(new MediaStream([e3.mediaStreamTrack])).connect(i2), yield or(t2), i2.getByteTimeDomainData(r2);
                const o2 = r2.some(((e4) => 128 !== e4 && 0 !== e4));
                return n2.close(), !o2;
              }
              return false;
            })();
          }));
        }
        function to() {
          var e2;
          const t2 = "undefined" != typeof window && (window.AudioContext || window.webkitAudioContext);
          if (t2) {
            const n2 = new t2({ latencyHint: "interactive" });
            if ("suspended" === n2.state && "undefined" != typeof window && (null === (e2 = window.document) || void 0 === e2 ? void 0 : e2.body)) {
              const e3 = () => Zn(this, void 0, void 0, (function* () {
                var t3;
                try {
                  "suspended" === n2.state && (yield n2.resume());
                } catch (e4) {
                  console.warn("Error trying to auto-resume audio context", e4);
                }
                null === (t3 = window.document.body) || void 0 === t3 || t3.removeEventListener("click", e3);
              }));
              window.document.body.addEventListener("click", e3);
            }
            return n2;
          }
        }
        function no(e2) {
          return "audioinput" === e2 ? Js.Source.Microphone : "videoinput" === e2 ? Js.Source.Camera : Js.Source.Unknown;
        }
        function io(e2) {
          return e2 === Js.Source.Microphone ? "audioinput" : e2 === Js.Source.Camera ? "videoinput" : void 0;
        }
        function so(e2) {
          var t2, n2;
          let i2 = null === (t2 = e2.video) || void 0 === t2 || t2;
          return e2.resolution && e2.resolution.width > 0 && e2.resolution.height > 0 && (i2 = "boolean" == typeof i2 ? {} : i2, i2 = gr() ? Object.assign(Object.assign({}, i2), { width: { max: e2.resolution.width }, height: { max: e2.resolution.height }, frameRate: e2.resolution.frameRate }) : Object.assign(Object.assign({}, i2), { width: { ideal: e2.resolution.width }, height: { ideal: e2.resolution.height }, frameRate: e2.resolution.frameRate })), { audio: null !== (n2 = e2.audio) && void 0 !== n2 && n2, video: i2, controller: e2.controller, selfBrowserSurface: e2.selfBrowserSurface, surfaceSwitching: e2.surfaceSwitching, systemAudio: e2.systemAudio, preferCurrentTab: e2.preferCurrentTab };
        }
        function ro(e2) {
          return e2.split("/")[1].toLowerCase();
        }
        function oo(e2) {
          const t2 = [];
          return e2.forEach(((e3) => {
            void 0 !== e3.track && t2.push(new $t({ cid: e3.track.mediaStreamID, track: e3.trackInfo }));
          })), t2;
        }
        function ao(e2) {
          return "mediaStreamTrack" in e2 ? { trackID: e2.sid, source: e2.source, muted: e2.isMuted, enabled: e2.mediaStreamTrack.enabled, kind: e2.kind, streamID: e2.mediaStreamID, streamTrackID: e2.mediaStreamTrack.id } : { trackID: e2.trackSid, enabled: e2.isEnabled, muted: e2.isMuted, trackInfo: Object.assign({ mimeType: e2.mimeType, name: e2.trackName, encrypted: e2.isEncrypted, kind: e2.kind, source: e2.source }, e2.track ? ao(e2.track) : {}) };
        }
        function co(e2) {
          const t2 = Object.assign({}, e2);
          let n2, i2;
          return "object" == typeof t2.audio && t2.audio.processor && (n2 = t2.audio.processor, t2.audio = Object.assign(Object.assign({}, t2.audio), { processor: void 0 })), "object" == typeof t2.video && t2.video.processor && (i2 = t2.video.processor, t2.video = Object.assign(Object.assign({}, t2.video), { processor: void 0 })), { audioProcessor: n2, videoProcessor: i2, optionsWithoutProcessor: (s2 = t2, void 0 === s2 ? s2 : "function" == typeof structuredClone ? "object" == typeof s2 && null !== s2 ? structuredClone(Object.assign({}, s2)) : structuredClone(s2) : JSON.parse(JSON.stringify(s2))) };
          var s2;
        }
        function lo(e2, t2) {
          return e2.width * e2.height < t2.width * t2.height;
        }
        class uo extends ii.EventEmitter {
          constructor(t2) {
            super(), this.onWorkerMessage = (t3) => {
              var n2, i2;
              const { kind: s2, data: r2 } = t3.data;
              switch (s2) {
                case "error":
                  Wn.error(r2.error.message), this.emit(e.EncryptionEvent.EncryptionError, r2.error);
                  break;
                case "initAck":
                  r2.enabled && this.keyProvider.getKeys().forEach(((e2) => {
                    this.postKey(e2);
                  }));
                  break;
                case "enable":
                  if (r2.enabled && this.keyProvider.getKeys().forEach(((e2) => {
                    this.postKey(e2);
                  })), this.encryptionEnabled !== r2.enabled && r2.participantIdentity === (null === (n2 = this.room) || void 0 === n2 ? void 0 : n2.localParticipant.identity)) this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, r2.enabled, this.room.localParticipant), this.encryptionEnabled = r2.enabled;
                  else if (r2.participantIdentity) {
                    const t4 = null === (i2 = this.room) || void 0 === i2 ? void 0 : i2.getParticipantByIdentity(r2.participantIdentity);
                    if (!t4) throw TypeError("couldn't set encryption status, participant not found".concat(r2.participantIdentity));
                    this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, r2.enabled, t4);
                  }
                  break;
                case "ratchetKey":
                  this.keyProvider.emit(e.KeyProviderEvent.KeyRatcheted, r2.ratchetResult, r2.participantIdentity, r2.keyIndex);
              }
            }, this.onWorkerError = (t3) => {
              Wn.error("e2ee worker encountered an error:", { error: t3.error }), this.emit(e.EncryptionEvent.EncryptionError, t3.error);
            }, this.keyProvider = t2.keyProvider, this.worker = t2.worker, this.encryptionEnabled = false;
          }
          setup(e2) {
            if (!ms()) throw new xs("tried to setup end-to-end encryption on an unsupported browser");
            if (Wn.info("setting up e2ee"), e2 !== this.room) {
              this.room = e2, this.setupEventListeners(e2, this.keyProvider);
              const t2 = { kind: "init", data: { keyProviderOptions: this.keyProvider.getOptions(), loglevel: Jn.getLevel() } };
              this.worker && (Wn.info("initializing worker", { worker: this.worker }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t2));
            }
          }
          setParticipantCryptorEnabled(e2, t2) {
            Wn.debug("set e2ee to ".concat(e2, " for participant ").concat(t2)), this.postEnable(e2, t2);
          }
          setSifTrailer(e2) {
            e2 && 0 !== e2.length ? this.postSifTrailer(e2) : Wn.warn("ignoring server sent trailer as it's empty");
          }
          setupEngine(t2) {
            t2.on(e.EngineEvent.RTPVideoMapUpdate, ((e2) => {
              this.postRTPMap(e2);
            }));
          }
          setupEventListeners(t2, n2) {
            t2.on(e.RoomEvent.TrackPublished, ((e2, t3) => this.setParticipantCryptorEnabled(e2.trackInfo.encryption !== lt.NONE, t3.identity))), t2.on(e.RoomEvent.ConnectionStateChanged, ((n3) => {
              n3 === e.ConnectionState.Connected && t2.remoteParticipants.forEach(((e2) => {
                e2.trackPublications.forEach(((t3) => {
                  this.setParticipantCryptorEnabled(t3.trackInfo.encryption !== lt.NONE, e2.identity);
                }));
              }));
            })).on(e.RoomEvent.TrackUnsubscribed, ((e2, t3, n3) => {
              var i2;
              const s2 = { kind: "removeTransform", data: { participantIdentity: n3.identity, trackId: e2.mediaStreamID } };
              null === (i2 = this.worker) || void 0 === i2 || i2.postMessage(s2);
            })).on(e.RoomEvent.TrackSubscribed, ((e2, t3, n3) => {
              this.setupE2EEReceiver(e2, n3.identity, t3.trackInfo);
            })).on(e.RoomEvent.SignalConnected, (() => {
              if (!this.room) throw new TypeError("expected room to be present on signal connect");
              n2.getKeys().forEach(((e2) => {
                this.postKey(e2);
              })), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity);
            })), t2.localParticipant.on(e.ParticipantEvent.LocalSenderCreated, ((e2, t3) => Zn(this, void 0, void 0, (function* () {
              this.setupE2EESender(t3, e2);
            })))), t2.localParticipant.on(e.ParticipantEvent.LocalTrackPublished, ((e2) => {
              if (!Hr(e2.track) || !vr()) return;
              const t3 = { kind: "updateCodec", data: { trackId: e2.track.mediaStreamID, codec: ro(e2.trackInfo.codecs[0].mimeType), participantIdentity: this.room.localParticipant.identity } };
              this.worker.postMessage(t3);
            })), n2.on(e.KeyProviderEvent.SetKey, ((e2) => this.postKey(e2))).on(e.KeyProviderEvent.RatchetRequest, ((e2, t3) => this.postRatchetRequest(e2, t3)));
          }
          postRatchetRequest(e2, t2) {
            if (!this.worker) throw Error("could not ratchet key, worker is missing");
            const n2 = { kind: "ratchetRequest", data: { participantIdentity: e2, keyIndex: t2 } };
            this.worker.postMessage(n2);
          }
          postKey(e2) {
            let { key: t2, participantIdentity: n2, keyIndex: i2 } = e2;
            var s2;
            if (!this.worker) throw Error("could not set key, worker is missing");
            const r2 = { kind: "setKey", data: { participantIdentity: n2, isPublisher: n2 === (null === (s2 = this.room) || void 0 === s2 ? void 0 : s2.localParticipant.identity), key: t2, keyIndex: i2 } };
            this.worker.postMessage(r2);
          }
          postEnable(e2, t2) {
            if (!this.worker) throw new ReferenceError("failed to enable e2ee, worker is not ready");
            {
              const n2 = { kind: "enable", data: { enabled: e2, participantIdentity: t2 } };
              this.worker.postMessage(n2);
            }
          }
          postRTPMap(e2) {
            var t2;
            if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
            if (!(null === (t2 = this.room) || void 0 === t2 ? void 0 : t2.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
            const n2 = { kind: "setRTPMap", data: { map: e2, participantIdentity: this.room.localParticipant.identity } };
            this.worker.postMessage(n2);
          }
          postSifTrailer(e2) {
            if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
            const t2 = { kind: "setSifTrailer", data: { trailer: e2 } };
            this.worker.postMessage(t2);
          }
          setupE2EEReceiver(e2, t2, n2) {
            if (e2.receiver) {
              if (!(null == n2 ? void 0 : n2.mimeType) || "" === n2.mimeType) throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
              this.handleReceiver(e2.receiver, e2.mediaStreamID, t2, "video" === e2.kind ? ro(n2.mimeType) : void 0);
            }
          }
          setupE2EESender(e2, t2) {
            qr(e2) && t2 ? this.handleSender(t2, e2.mediaStreamID, void 0) : t2 || Wn.warn("early return because sender is not ready");
          }
          handleReceiver(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.worker) {
                if (gs()) {
                  const s2 = { kind: "decode", participantIdentity: n2, trackId: t2, codec: i2 };
                  e2.transform = new RTCRtpScriptTransform(this.worker, s2);
                } else {
                  if (ls in e2 && i2) {
                    const e3 = { kind: "updateCodec", data: { trackId: t2, codec: i2, participantIdentity: n2 } };
                    return void this.worker.postMessage(e3);
                  }
                  let s2 = e2.writableStream, r2 = e2.readableStream;
                  if (!s2 || !r2) {
                    const t3 = e2.createEncodedStreams();
                    e2.writableStream = t3.writable, s2 = t3.writable, e2.readableStream = t3.readable, r2 = t3.readable;
                  }
                  const o2 = { kind: "decode", data: { readableStream: r2, writableStream: s2, trackId: t2, codec: i2, participantIdentity: n2, isReuse: ls in e2 } };
                  this.worker.postMessage(o2, [r2, s2]);
                }
                e2[ls] = true;
              }
            }));
          }
          handleSender(e2, t2, n2) {
            var i2;
            if (!(ls in e2) && this.worker) {
              if (!(null === (i2 = this.room) || void 0 === i2 ? void 0 : i2.localParticipant.identity) || "" === this.room.localParticipant.identity) throw TypeError("local identity needs to be known in order to set up encrypted sender");
              if (gs()) {
                Wn.info("initialize script transform");
                const i3 = { kind: "encode", participantIdentity: this.room.localParticipant.identity, trackId: t2, codec: n2 };
                e2.transform = new RTCRtpScriptTransform(this.worker, i3);
              } else {
                Wn.info("initialize encoded streams");
                const i3 = e2.createEncodedStreams(), s2 = { kind: "encode", data: { readableStream: i3.readable, writableStream: i3.writable, codec: n2, trackId: t2, participantIdentity: this.room.localParticipant.identity, isReuse: false } };
                this.worker.postMessage(s2, [i3.readable, i3.writable]);
              }
              e2[ls] = true;
            }
          }
        }
        const ho = "default";
        class po {
          constructor() {
            this._previousDevices = [];
          }
          static getInstance() {
            return void 0 === this.instance && (this.instance = new po()), this.instance;
          }
          get previousDevices() {
            return this._previousDevices;
          }
          getDevices(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return (function* () {
                var i2;
                if ((null === (i2 = po.userMediaPromiseMap) || void 0 === i2 ? void 0 : i2.size) > 0) {
                  Wn.debug("awaiting getUserMedia promise");
                  try {
                    e3 ? yield po.userMediaPromiseMap.get(e3) : yield Promise.all(po.userMediaPromiseMap.values());
                  } catch (e4) {
                    Wn.warn("error waiting for media permissons");
                  }
                }
                let s2 = yield navigator.mediaDevices.enumerateDevices();
                if (n2 && (!gr() || !t2.hasDeviceInUse(e3))) {
                  if (0 === s2.filter(((t3) => t3.kind === e3)).length || s2.some(((t3) => {
                    const n3 = "" === t3.label, i3 = !e3 || t3.kind === e3;
                    return n3 && i3;
                  }))) {
                    const t3 = { video: "audioinput" !== e3 && "audiooutput" !== e3, audio: "videoinput" !== e3 && { deviceId: { ideal: "default" } } }, n3 = yield navigator.mediaDevices.getUserMedia(t3);
                    s2 = yield navigator.mediaDevices.enumerateDevices(), n3.getTracks().forEach(((e4) => {
                      e4.stop();
                    }));
                  }
                }
                return t2._previousDevices = s2, e3 && (s2 = s2.filter(((t3) => t3.kind === e3))), s2;
              })();
            }));
          }
          normalizeDeviceId(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              if (t2 !== ho) return t2;
              const i2 = yield this.getDevices(e2), s2 = i2.find(((e3) => e3.deviceId === ho));
              if (!s2) return void Wn.warn("could not reliably determine default device");
              const r2 = i2.find(((e3) => e3.deviceId !== ho && e3.groupId === (null != n2 ? n2 : s2.groupId)));
              if (r2) return null == r2 ? void 0 : r2.deviceId;
              Wn.warn("could not reliably determine default device");
            }));
          }
          hasDeviceInUse(e2) {
            return e2 ? po.userMediaPromiseMap.has(e2) : po.userMediaPromiseMap.size > 0;
          }
        }
        var mo;
        po.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"], po.userMediaPromiseMap = /* @__PURE__ */ new Map(), (function(e2) {
          e2[e2.WAITING = 0] = "WAITING", e2[e2.RUNNING = 1] = "RUNNING", e2[e2.COMPLETED = 2] = "COMPLETED";
        })(mo || (mo = {}));
        class go {
          constructor() {
            this.pendingTasks = /* @__PURE__ */ new Map(), this.taskMutex = new s(), this.nextTaskIndex = 0;
          }
          run(e2) {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = { id: this.nextTaskIndex++, enqueuedAt: Date.now(), status: mo.WAITING };
              this.pendingTasks.set(t2.id, t2);
              const n2 = yield this.taskMutex.lock();
              try {
                return t2.executedAt = Date.now(), t2.status = mo.RUNNING, yield e2();
              } finally {
                t2.status = mo.COMPLETED, this.pendingTasks.delete(t2.id), n2();
              }
            }));
          }
          flush() {
            return Zn(this, void 0, void 0, (function* () {
              return this.run((() => Zn(this, void 0, void 0, (function* () {
              }))));
            }));
          }
          snapshot() {
            return Array.from(this.pendingTasks.values());
          }
        }
        function vo(e2, t2) {
          return e2.pathname = "".concat((function(e3) {
            return e3.endsWith("/") ? e3 : "".concat(e3, "/");
          })(e2.pathname)).concat(t2), e2.toString();
        }
        const fo = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
        var ko;
        !(function(e2) {
          e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.CONNECTED = 1] = "CONNECTED", e2[e2.RECONNECTING = 2] = "RECONNECTING", e2[e2.DISCONNECTING = 3] = "DISCONNECTING", e2[e2.DISCONNECTED = 4] = "DISCONNECTED";
        })(ko || (ko = {}));
        class bo {
          get currentState() {
            return this.state;
          }
          get isDisconnected() {
            return this.state === ko.DISCONNECTING || this.state === ko.DISCONNECTED;
          }
          get isEstablishingConnection() {
            return this.state === ko.CONNECTING || this.state === ko.RECONNECTING;
          }
          getNextRequestId() {
            return this._requestId += 1, this._requestId;
          }
          constructor() {
            let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var i2;
            this.rtt = 0, this.state = ko.DISCONNECTED, this.log = Wn, this._requestId = 0, this.resetCallbacks = () => {
              this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0;
            }, this.log = zn(null !== (i2 = n2.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.Signal), this.loggerContextCb = n2.loggerContextCb, this.useJSON = t2, this.requestQueue = new go(), this.queuedRequests = [], this.closingLock = new s(), this.connectionLock = new s(), this.state = ko.DISCONNECTED;
          }
          get logContext() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)) && void 0 !== t2 ? t2 : {};
          }
          join(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              this.state = ko.CONNECTING, this.options = n2;
              return yield this.connect(e2, t2, n2, i2);
            }));
          }
          reconnect(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.options) return void this.log.warn("attempted to reconnect without signal options being set, ignoring", this.logContext);
              this.state = ko.RECONNECTING, this.clearPingInterval();
              return yield this.connect(e2, t2, Object.assign(Object.assign({}, this.options), { reconnect: true, sid: n2, reconnectReason: i2 }));
            }));
          }
          connect(t2, n2, i2, s2) {
            this.connectOptions = i2;
            const r2 = (function(e2, t3, n3) {
              var i3;
              const s3 = new URLSearchParams();
              s3.set("access_token", e2), n3.reconnect && (s3.set("reconnect", "1"), n3.sid && s3.set("sid", n3.sid));
              s3.set("auto_subscribe", n3.autoSubscribe ? "1" : "0"), s3.set("sdk", yr() ? "reactnative" : "js"), s3.set("version", t3.version), s3.set("protocol", t3.protocol.toString()), t3.deviceModel && s3.set("device_model", t3.deviceModel);
              t3.os && s3.set("os", t3.os);
              t3.osVersion && s3.set("os_version", t3.osVersion);
              t3.browser && s3.set("browser", t3.browser);
              t3.browserVersion && s3.set("browser_version", t3.browserVersion);
              n3.adaptiveStream && s3.set("adaptive_stream", "1");
              n3.reconnectReason && s3.set("reconnect_reason", n3.reconnectReason.toString());
              (null === (i3 = navigator.connection) || void 0 === i3 ? void 0 : i3.type) && s3.set("network", navigator.connection.type);
              return s3;
            })(n2, (function() {
              var e2;
              const t3 = new Dt({ sdk: xt.JS, protocol: 16, version: Ws });
              return yr() && (t3.os = null !== (e2 = Sr()) && void 0 !== e2 ? e2 : ""), t3;
            })(), i2), o2 = (function(e2, t3) {
              const n3 = new URL((function(e3) {
                return e3.startsWith("http") ? e3.replace(/^(http)/, "ws") : e3;
              })(e2));
              return t3.forEach(((e3, t4) => {
                n3.searchParams.set(t4, e3);
              })), vo(n3, "rtc");
            })(t2, r2), a2 = vo(new URL(jr(o2)), "validate");
            return new Promise(((t3, n3) => Zn(this, void 0, void 0, (function* () {
              const r3 = yield this.connectionLock.lock();
              try {
                const r4 = () => Zn(this, void 0, void 0, (function* () {
                  this.close(), clearTimeout(c2), n3(new Ds("room connection has been cancelled (signal)", e.ConnectionErrorReason.Cancelled));
                })), c2 = setTimeout((() => {
                  this.close(), n3(new Ds("room connection has timed out (signal)", e.ConnectionErrorReason.ServerUnreachable));
                }), i2.websocketTimeout);
                (null == s2 ? void 0 : s2.aborted) && r4(), null == s2 || s2.addEventListener("abort", r4);
                const d2 = new URL(o2);
                d2.searchParams.has("access_token") && d2.searchParams.set("access_token", "<redacted>"), this.log.debug("connecting to ".concat(d2), Object.assign({ reconnect: i2.reconnect, reconnectReason: i2.reconnectReason }, this.logContext)), this.ws && (yield this.close(false)), this.ws = new WebSocket(o2), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => {
                  clearTimeout(c2);
                }, this.ws.onerror = (t4) => Zn(this, void 0, void 0, (function* () {
                  if (this.state === ko.CONNECTED) this.handleWSError(t4);
                  else {
                    this.state = ko.DISCONNECTED, clearTimeout(c2);
                    try {
                      const i3 = yield fetch(a2);
                      if (i3.status.toFixed(0).startsWith("4")) {
                        const t5 = yield i3.text();
                        n3(new Ds(t5, e.ConnectionErrorReason.NotAllowed, i3.status));
                      } else n3(new Ds("Encountered unknown websocket error during connection: ".concat(t4.toString()), e.ConnectionErrorReason.InternalError, i3.status));
                    } catch (t5) {
                      n3(new Ds(t5 instanceof Error ? t5.message : "server was not reachable", e.ConnectionErrorReason.ServerUnreachable));
                    }
                  }
                })), this.ws.onmessage = (o3) => Zn(this, void 0, void 0, (function* () {
                  var a3, c3, d3;
                  let l2;
                  if ("string" == typeof o3.data) {
                    const e2 = JSON.parse(o3.data);
                    l2 = Gt.fromJson(e2, { ignoreUnknownFields: true });
                  } else {
                    if (!(o3.data instanceof ArrayBuffer)) return void this.log.error("could not decode websocket message: ".concat(typeof o3.data), this.logContext);
                    l2 = Gt.fromBinary(new Uint8Array(o3.data));
                  }
                  if (this.state !== ko.CONNECTED) {
                    let o4 = false;
                    if ("join" === (null === (a3 = l2.message) || void 0 === a3 ? void 0 : a3.case) ? (this.state = ko.CONNECTED, null == s2 || s2.removeEventListener("abort", r4), this.pingTimeoutDuration = l2.message.value.pingTimeout, this.pingIntervalDuration = l2.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && (this.log.debug("ping config", Object.assign(Object.assign({}, this.logContext), { timeout: this.pingTimeoutDuration, interval: this.pingIntervalDuration })), this.startPingInterval()), t3(l2.message.value)) : this.state === ko.RECONNECTING && "leave" !== l2.message.case ? (this.state = ko.CONNECTED, null == s2 || s2.removeEventListener("abort", r4), this.startPingInterval(), "reconnect" === (null === (c3 = l2.message) || void 0 === c3 ? void 0 : c3.case) ? t3(l2.message.value) : (this.log.debug("declaring signal reconnected without reconnect response received", this.logContext), t3(void 0), o4 = true)) : this.isEstablishingConnection && "leave" === l2.message.case ? n3(new Ds("Received leave request while trying to (re)connect", e.ConnectionErrorReason.LeaveRequest, void 0, l2.message.value.reason)) : i2.reconnect || n3(new Ds("did not receive join response, got ".concat(null === (d3 = l2.message) || void 0 === d3 ? void 0 : d3.case, " instead"), e.ConnectionErrorReason.InternalError)), !o4) return;
                  }
                  this.signalLatency && (yield or(this.signalLatency)), this.handleSignalResponse(l2);
                })), this.ws.onclose = (t4) => {
                  this.isEstablishingConnection && n3(new Ds("Websocket got closed during a (re)connection attempt", e.ConnectionErrorReason.InternalError)), this.log.warn("websocket closed", Object.assign(Object.assign({}, this.logContext), { reason: t4.reason, code: t4.code, wasClean: t4.wasClean, state: this.state })), this.handleOnClose(t4.reason);
                };
              } finally {
                r3();
              }
            }))));
          }
          close() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (function* () {
                const n2 = yield e2.closingLock.lock();
                try {
                  if (e2.clearPingInterval(), t2 && (e2.state = ko.DISCONNECTING), e2.ws) {
                    e2.ws.onmessage = null, e2.ws.onopen = null, e2.ws.onclose = null;
                    const t3 = new Promise(((t4) => {
                      e2.ws ? e2.ws.onclose = () => {
                        t4();
                      } : t4();
                    }));
                    e2.ws.readyState < e2.ws.CLOSING && (e2.ws.close(), yield Promise.race([t3, or(250)])), e2.ws = void 0;
                  }
                } finally {
                  t2 && (e2.state = ko.DISCONNECTED), n2();
                }
              })();
            }));
          }
          sendOffer(e2, t2) {
            this.log.debug("sending offer", Object.assign(Object.assign({}, this.logContext), { offerSdp: e2.sdp })), this.sendRequest({ case: "offer", value: To(e2, t2) });
          }
          sendAnswer(e2, t2) {
            return this.log.debug("sending answer", Object.assign(Object.assign({}, this.logContext), { answerSdp: e2.sdp })), this.sendRequest({ case: "answer", value: To(e2, t2) });
          }
          sendIceCandidate(e2, t2) {
            return this.log.debug("sending ice candidate", Object.assign(Object.assign({}, this.logContext), { candidate: e2 })), this.sendRequest({ case: "trickle", value: new Qt({ candidateInit: JSON.stringify(e2), target: t2 }) });
          }
          sendMuteTrack(e2, t2) {
            return this.sendRequest({ case: "mute", value: new Yt({ sid: e2, muted: t2 }) });
          }
          sendAddTrack(e2) {
            return this.sendRequest({ case: "addTrack", value: e2 });
          }
          sendUpdateLocalMetadata(e2, t2) {
            return Zn(this, arguments, void 0, (function(e3, t3) {
              var n2 = this;
              let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return (function* () {
                const s2 = n2.getNextRequestId();
                return yield n2.sendRequest({ case: "updateMetadata", value: new un({ requestId: s2, metadata: e3, name: t3, attributes: i2 }) }), s2;
              })();
            }));
          }
          sendUpdateTrackSettings(e2) {
            this.sendRequest({ case: "trackSetting", value: e2 });
          }
          sendUpdateSubscription(e2) {
            return this.sendRequest({ case: "subscription", value: e2 });
          }
          sendSyncState(e2) {
            return this.sendRequest({ case: "syncState", value: e2 });
          }
          sendUpdateVideoLayers(e2, t2) {
            return this.sendRequest({ case: "updateLayers", value: new ln({ trackSid: e2, layers: t2 }) });
          }
          sendUpdateSubscriptionPermissions(e2, t2) {
            return this.sendRequest({ case: "subscriptionPermission", value: new Sn({ allParticipants: e2, trackPermissions: t2 }) });
          }
          sendSimulateScenario(e2) {
            return this.sendRequest({ case: "simulate", value: e2 });
          }
          sendPing() {
            return Promise.all([this.sendRequest({ case: "ping", value: x.parse(Date.now()) }), this.sendRequest({ case: "pingReq", value: new Dn({ timestamp: x.parse(Date.now()), rtt: x.parse(this.rtt) }) })]);
          }
          sendUpdateLocalAudioTrack(e2, t2) {
            return this.sendRequest({ case: "updateAudioTrack", value: new on({ trackSid: e2, features: t2 }) });
          }
          sendLeave() {
            return this.sendRequest({ case: "leave", value: new cn({ reason: $e.CLIENT_INITIATED, action: dn.DISCONNECT }) });
          }
          sendRequest(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return (function* () {
                const i2 = !n2 && !(function(e4) {
                  const t3 = fo.indexOf(e4.case) >= 0;
                  return Wn.trace("request allowed to bypass queue:", { canPass: t3, req: e4 }), t3;
                })(e3);
                if (i2 && t2.state === ko.RECONNECTING) return void t2.queuedRequests.push((() => Zn(t2, void 0, void 0, (function* () {
                  yield this.sendRequest(e3, true);
                }))));
                if (n2 || (yield t2.requestQueue.flush()), t2.signalLatency && (yield or(t2.signalLatency)), t2.isDisconnected) return void t2.log.debug("skipping signal request (type: ".concat(e3.case, ") - SignalClient disconnected"));
                if (!t2.ws || t2.ws.readyState !== t2.ws.OPEN) return void t2.log.error("cannot send signal request before connected, type: ".concat(null == e3 ? void 0 : e3.case), t2.logContext);
                const s2 = new Wt({ message: e3 });
                try {
                  t2.useJSON ? t2.ws.send(s2.toJsonString()) : t2.ws.send(s2.toBinary());
                } catch (e4) {
                  t2.log.error("error sending signal message", Object.assign(Object.assign({}, t2.logContext), { error: e4 }));
                }
              })();
            }));
          }
          handleSignalResponse(e2) {
            var t2, n2;
            const i2 = e2.message;
            if (null == i2) return void this.log.debug("received unsupported message", this.logContext);
            let s2 = false;
            if ("answer" === i2.case) {
              const e3 = yo(i2.value);
              this.onAnswer && this.onAnswer(e3, i2.value.id);
            } else if ("offer" === i2.case) {
              const e3 = yo(i2.value);
              this.onOffer && this.onOffer(e3, i2.value.id);
            } else if ("trickle" === i2.case) {
              const e3 = JSON.parse(i2.value.candidateInit);
              this.onTrickle && this.onTrickle(e3, i2.value.target);
            } else "update" === i2.case ? this.onParticipantUpdate && this.onParticipantUpdate(null !== (t2 = i2.value.participants) && void 0 !== t2 ? t2 : []) : "trackPublished" === i2.case ? this.onLocalTrackPublished && this.onLocalTrackPublished(i2.value) : "speakersChanged" === i2.case ? this.onSpeakersChanged && this.onSpeakersChanged(null !== (n2 = i2.value.speakers) && void 0 !== n2 ? n2 : []) : "leave" === i2.case ? this.onLeave && this.onLeave(i2.value) : "mute" === i2.case ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(i2.value.sid, i2.value.muted) : "roomUpdate" === i2.case ? this.onRoomUpdate && i2.value.room && this.onRoomUpdate(i2.value.room) : "connectionQuality" === i2.case ? this.onConnectionQuality && this.onConnectionQuality(i2.value) : "streamStateUpdate" === i2.case ? this.onStreamStateUpdate && this.onStreamStateUpdate(i2.value) : "subscribedQualityUpdate" === i2.case ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(i2.value) : "subscriptionPermissionUpdate" === i2.case ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(i2.value) : "refreshToken" === i2.case ? this.onTokenRefresh && this.onTokenRefresh(i2.value) : "trackUnpublished" === i2.case ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(i2.value) : "subscriptionResponse" === i2.case ? this.onSubscriptionError && this.onSubscriptionError(i2.value) : "pong" === i2.case || ("pongResp" === i2.case ? (this.rtt = Date.now() - Number.parseInt(i2.value.lastPingTimestamp.toString()), this.resetPingTimeout(), s2 = true) : "requestResponse" === i2.case ? this.onRequestResponse && this.onRequestResponse(i2.value) : "trackSubscribed" === i2.case ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(i2.value.trackSid) : "roomMoved" === i2.case ? (this.onTokenRefresh && this.onTokenRefresh(i2.value.token), this.onRoomMoved && this.onRoomMoved(i2.value)) : this.log.debug("unsupported message", Object.assign(Object.assign({}, this.logContext), { msgCase: i2.case })));
            s2 || this.resetPingTimeout();
          }
          setReconnected() {
            for (; this.queuedRequests.length > 0; ) {
              const e2 = this.queuedRequests.shift();
              e2 && this.requestQueue.run(e2);
            }
          }
          handleOnClose(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.state === ko.DISCONNECTED) return;
              const t2 = this.onClose;
              yield this.close(), this.log.debug("websocket connection closed: ".concat(e2), Object.assign(Object.assign({}, this.logContext), { reason: e2 })), t2 && t2(e2);
            }));
          }
          handleWSError(e2) {
            this.log.error("websocket error", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
          }
          resetPingTimeout() {
            this.clearPingTimeout(), this.pingTimeoutDuration ? this.pingTimeout = Gs.setTimeout((() => {
              this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - 1e3 * this.pingTimeoutDuration).toUTCString()), this.logContext), this.handleOnClose("ping timeout");
            }), 1e3 * this.pingTimeoutDuration) : this.log.warn("ping timeout duration not set", this.logContext);
          }
          clearPingTimeout() {
            this.pingTimeout && Gs.clearTimeout(this.pingTimeout);
          }
          startPingInterval() {
            this.clearPingInterval(), this.resetPingTimeout(), this.pingIntervalDuration ? (this.log.debug("start ping interval", this.logContext), this.pingInterval = Gs.setInterval((() => {
              this.sendPing();
            }), 1e3 * this.pingIntervalDuration)) : this.log.warn("ping interval duration not set", this.logContext);
          }
          clearPingInterval() {
            this.log.debug("clearing ping interval", this.logContext), this.clearPingTimeout(), this.pingInterval && Gs.clearInterval(this.pingInterval);
          }
        }
        function yo(e2) {
          const t2 = { type: "offer", sdp: e2.sdp };
          switch (e2.type) {
            case "answer":
            case "offer":
            case "pranswer":
            case "rollback":
              t2.type = e2.type;
          }
          return t2;
        }
        function To(e2, t2) {
          return new tn({ sdp: e2.sdp, type: e2.type, id: t2 });
        }
        class Co {
          constructor() {
            this.buffer = [], this._totalSize = 0;
          }
          push(e2) {
            this.buffer.push(e2), this._totalSize += e2.data.byteLength;
          }
          pop() {
            const e2 = this.buffer.shift();
            return e2 && (this._totalSize -= e2.data.byteLength), e2;
          }
          getAll() {
            return this.buffer.slice();
          }
          popToSequence(e2) {
            for (; this.buffer.length > 0; ) {
              if (!(this.buffer[0].sequence <= e2)) break;
              this.pop();
            }
          }
          alignBufferedAmount(e2) {
            for (; this.buffer.length > 0; ) {
              const t2 = this.buffer[0];
              if (this._totalSize - t2.data.byteLength <= e2) break;
              this.pop();
            }
          }
          get length() {
            return this.buffer.length;
          }
        }
        class So {
          constructor(e2) {
            this._map = /* @__PURE__ */ new Map(), this._lastCleanup = 0, this.ttl = e2;
          }
          set(e2, t2) {
            const n2 = Date.now();
            n2 - this._lastCleanup > this.ttl / 2 && this.cleanup();
            const i2 = n2 + this.ttl;
            return this._map.set(e2, { value: t2, expiresAt: i2 }), this;
          }
          get(e2) {
            const t2 = this._map.get(e2);
            if (t2) {
              if (!(t2.expiresAt < Date.now())) return t2.value;
              this._map.delete(e2);
            }
          }
          has(e2) {
            const t2 = this._map.get(e2);
            return !!t2 && (!(t2.expiresAt < Date.now()) || (this._map.delete(e2), false));
          }
          delete(e2) {
            return this._map.delete(e2);
          }
          clear() {
            this._map.clear();
          }
          cleanup() {
            const e2 = Date.now();
            for (const [t2, n2] of this._map.entries()) n2.expiresAt < e2 && this._map.delete(t2);
            this._lastCleanup = e2;
          }
          get size() {
            return this.cleanup(), this._map.size;
          }
          forEach(e2) {
            this.cleanup();
            for (const [t2, n2] of this._map.entries()) n2.expiresAt >= Date.now() && e2(n2.value, t2, this.asValueMap());
          }
          map(e2) {
            this.cleanup();
            const t2 = [], n2 = this.asValueMap();
            for (const [i2, s2] of n2.entries()) t2.push(e2(s2, i2, n2));
            return t2;
          }
          asValueMap() {
            const e2 = /* @__PURE__ */ new Map();
            for (const [t2, n2] of this._map.entries()) n2.expiresAt >= Date.now() && e2.set(t2, n2.value);
            return e2;
          }
        }
        var Eo, wo, Po, Ro, Io, Oo = {}, Do = {}, xo = { exports: {} };
        function Mo() {
          if (Eo) return xo.exports;
          Eo = 1;
          var e2 = xo.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format: function(e3) {
            return e3.encoding ? "rtpmap:%d %s/%s/%s" : e3.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
          } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format: function(e3) {
            return null != e3.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
          } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format: function(e3) {
            return null != e3.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
          } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/, names: ["value", "direction", "encrypt-uri", "uri", "config"], format: function(e3) {
            return "extmap:%d" + (e3.direction ? "/%s" : "%v") + (e3["encrypt-uri"] ? " %s" : "%v") + " %s" + (e3.config ? " %s" : "");
          } }, { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format: function(e3) {
            return null != e3.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
          } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" }, { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format: function(e3) {
            var t2 = "candidate:%s %d %s %d %s %d typ %s";
            return t2 += null != e3.raddr ? " raddr %s rport %d" : "%v%v", t2 += null != e3.tcptype ? " tcptype %s" : "%v", null != e3.generation && (t2 += " generation %d"), t2 += null != e3["network-id"] ? " network-id %d" : "%v", t2 += null != e3["network-cost"] ? " network-cost %d" : "%v";
          } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format: function(e3) {
            var t2 = "ssrc:%d";
            return null != e3.attribute && (t2 += " %s", null != e3.value && (t2 += ":%s")), t2;
          } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format: function(e3) {
            return null != e3.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
          } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format: function(e3) {
            return e3.params ? "rid:%s %s %s" : "rid:%s %s";
          } }, { push: "imageattrs", reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format: function(e3) {
            return "imageattr:%s %s %s" + (e3.dir2 ? " %s %s" : "");
          } }, { name: "simulcast", reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format: function(e3) {
            return "simulcast:%s %s" + (e3.dir2 ? " %s %s" : "");
          } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { name: "bundleOnly", reg: /^(bundle-only)/ }, { name: "label", reg: /^label:(.+)/, format: "label:%s" }, { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" }, { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" }, { push: "tsRefClocks", reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/, names: ["clksrc", "clksrcExt"], format: function(e3) {
            return "ts-refclk:%s" + (null != e3.clksrcExt ? "=%s" : "");
          } }, { name: "mediaClk", reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/, names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"], format: function(e3) {
            var t2 = "mediaclk:";
            return t2 += null != e3.id ? "id=%s %s" : "%v%s", t2 += null != e3.mediaClockValue ? "=%s" : "", t2 += null != e3.rateNumerator ? " rate=%s" : "", t2 += null != e3.rateDenominator ? "/%s" : "";
          } }, { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" }, { name: "content", reg: /^content:(.+)/, format: "content:%s" }, { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" }, { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" }, { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" }, { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" }, { push: "invalid", names: ["value"] }] };
          return Object.keys(e2).forEach((function(t2) {
            e2[t2].forEach((function(e3) {
              e3.reg || (e3.reg = /(.*)/), e3.format || (e3.format = "%s");
            }));
          })), xo.exports;
        }
        function Ao() {
          return wo || (wo = 1, (function(e2) {
            var t2 = function(e3) {
              return String(Number(e3)) === e3 ? Number(e3) : e3;
            }, n2 = function(e3, n3, i3) {
              var s3 = e3.name && e3.names;
              e3.push && !n3[e3.push] ? n3[e3.push] = [] : s3 && !n3[e3.name] && (n3[e3.name] = {});
              var r3 = e3.push ? {} : s3 ? n3[e3.name] : n3;
              !(function(e4, n4, i4, s4) {
                if (s4 && !i4) n4[s4] = t2(e4[1]);
                else for (var r4 = 0; r4 < i4.length; r4 += 1) null != e4[r4 + 1] && (n4[i4[r4]] = t2(e4[r4 + 1]));
              })(i3.match(e3.reg), r3, e3.names, e3.name), e3.push && n3[e3.push].push(r3);
            }, i2 = Mo(), s2 = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            e2.parse = function(e3) {
              var t3 = {}, r3 = [], o2 = t3;
              return e3.split(/(\r\n|\r|\n)/).filter(s2).forEach((function(e4) {
                var t4 = e4[0], s3 = e4.slice(2);
                "m" === t4 && (r3.push({ rtp: [], fmtp: [] }), o2 = r3[r3.length - 1]);
                for (var a2 = 0; a2 < (i2[t4] || []).length; a2 += 1) {
                  var c2 = i2[t4][a2];
                  if (c2.reg.test(s3)) return n2(c2, o2, s3);
                }
              })), t3.media = r3, t3;
            };
            var r2 = function(e3, n3) {
              var i3 = n3.split(/=(.+)/, 2);
              return 2 === i3.length ? e3[i3[0]] = t2(i3[1]) : 1 === i3.length && n3.length > 1 && (e3[i3[0]] = void 0), e3;
            };
            e2.parseParams = function(e3) {
              return e3.split(/;\s?/).reduce(r2, {});
            }, e2.parseFmtpConfig = e2.parseParams, e2.parsePayloads = function(e3) {
              return e3.toString().split(" ").map(Number);
            }, e2.parseRemoteCandidates = function(e3) {
              for (var n3 = [], i3 = e3.split(" ").map(t2), s3 = 0; s3 < i3.length; s3 += 3) n3.push({ component: i3[s3], ip: i3[s3 + 1], port: i3[s3 + 2] });
              return n3;
            }, e2.parseImageAttributes = function(e3) {
              return e3.split(" ").map((function(e4) {
                return e4.substring(1, e4.length - 1).split(",").reduce(r2, {});
              }));
            }, e2.parseSimulcastStreamList = function(e3) {
              return e3.split(";").map((function(e4) {
                return e4.split(",").map((function(e5) {
                  var n3, i3 = false;
                  return "~" !== e5[0] ? n3 = t2(e5) : (n3 = t2(e5.substring(1, e5.length)), i3 = true), { scid: n3, paused: i3 };
                }));
              }));
            };
          })(Do)), Do;
        }
        function _o() {
          if (Ro) return Po;
          Ro = 1;
          var e2 = Mo(), t2 = /%[sdv%]/g, n2 = function(e3) {
            var n3 = 1, i3 = arguments, s3 = i3.length;
            return e3.replace(t2, (function(e4) {
              if (n3 >= s3) return e4;
              var t3 = i3[n3];
              switch (n3 += 1, e4) {
                case "%%":
                  return "%";
                case "%s":
                  return String(t3);
                case "%d":
                  return Number(t3);
                case "%v":
                  return "";
              }
            }));
          }, i2 = function(e3, t3, i3) {
            var s3 = [e3 + "=" + (t3.format instanceof Function ? t3.format(t3.push ? i3 : i3[t3.name]) : t3.format)];
            if (t3.names) for (var r3 = 0; r3 < t3.names.length; r3 += 1) {
              var o2 = t3.names[r3];
              t3.name ? s3.push(i3[t3.name][o2]) : s3.push(i3[t3.names[r3]]);
            }
            else s3.push(i3[t3.name]);
            return n2.apply(null, s3);
          }, s2 = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"], r2 = ["i", "c", "b", "a"];
          return Po = function(t3, n3) {
            n3 = n3 || {}, null == t3.version && (t3.version = 0), null == t3.name && (t3.name = " "), t3.media.forEach((function(e3) {
              null == e3.payloads && (e3.payloads = "");
            }));
            var o2 = n3.outerOrder || s2, a2 = n3.innerOrder || r2, c2 = [];
            return o2.forEach((function(n4) {
              e2[n4].forEach((function(e3) {
                e3.name in t3 && null != t3[e3.name] ? c2.push(i2(n4, e3, t3)) : e3.push in t3 && null != t3[e3.push] && t3[e3.push].forEach((function(t4) {
                  c2.push(i2(n4, e3, t4));
                }));
              }));
            })), t3.media.forEach((function(t4) {
              c2.push(i2("m", e2.m[0], t4)), a2.forEach((function(n4) {
                e2[n4].forEach((function(e3) {
                  e3.name in t4 && null != t4[e3.name] ? c2.push(i2(n4, e3, t4)) : e3.push in t4 && null != t4[e3.push] && t4[e3.push].forEach((function(t5) {
                    c2.push(i2(n4, e3, t5));
                  }));
                }));
              }));
            })), c2.join("\r\n") + "\r\n";
          }, Po;
        }
        var No = (function() {
          if (Io) return Oo;
          Io = 1;
          var e2 = Ao(), t2 = _o(), n2 = Mo();
          return Oo.grammar = n2, Oo.write = t2, Oo.parse = e2.parse, Oo.parseParams = e2.parseParams, Oo.parseFmtpConfig = e2.parseFmtpConfig, Oo.parsePayloads = e2.parsePayloads, Oo.parseRemoteCandidates = e2.parseRemoteCandidates, Oo.parseImageAttributes = e2.parseImageAttributes, Oo.parseSimulcastStreamList = e2.parseSimulcastStreamList, Oo;
        })();
        function Lo(e2, t2, n2) {
          var i2, s2, r2;
          void 0 === t2 && (t2 = 50), void 0 === n2 && (n2 = {});
          var o2 = null != (i2 = n2.isImmediate) && i2, a2 = null != (s2 = n2.callback) && s2, c2 = n2.maxWait, d2 = Date.now(), l2 = [];
          function u2() {
            if (void 0 !== c2) {
              var e3 = Date.now() - d2;
              if (e3 + t2 >= c2) return c2 - e3;
            }
            return t2;
          }
          var h2 = function() {
            var t3 = [].slice.call(arguments), n3 = this;
            return new Promise((function(i3, s3) {
              var c3 = o2 && void 0 === r2;
              if (void 0 !== r2 && clearTimeout(r2), r2 = setTimeout((function() {
                if (r2 = void 0, d2 = Date.now(), !o2) {
                  var i4 = e2.apply(n3, t3);
                  a2 && a2(i4), l2.forEach((function(e3) {
                    return (0, e3.resolve)(i4);
                  })), l2 = [];
                }
              }), u2()), c3) {
                var h3 = e2.apply(n3, t3);
                return a2 && a2(h3), i3(h3);
              }
              l2.push({ resolve: i3, reject: s3 });
            }));
          };
          return h2.cancel = function(e3) {
            void 0 !== r2 && clearTimeout(r2), l2.forEach((function(t3) {
              return (0, t3.reject)(e3);
            })), l2 = [];
          }, h2;
        }
        const Uo = "negotiationStarted", jo = "negotiationComplete", Fo = "rtpVideoPayloadTypes";
        class Bo extends ii.EventEmitter {
          get pc() {
            return this._pc || (this._pc = this.createPC()), this._pc;
          }
          constructor(t2) {
            let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var i2;
            super(), this.log = Wn, this.ddExtID = 0, this.latestOfferId = 0, this.pendingCandidates = [], this.restartingIce = false, this.renegotiate = false, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = Lo(((e2) => Zn(this, void 0, void 0, (function* () {
              this.emit(Uo);
              try {
                yield this.createAndSendOffer();
              } catch (t3) {
                if (!e2) throw t3;
                e2(t3);
              }
            }))), 20), this.close = () => {
              this._pc && (this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null);
            }, this.log = zn(null !== (i2 = n2.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.PCTransport), this.loggerOptions = n2, this.config = t2, this._pc = this.createPC(), this.offerLock = new s();
          }
          createPC() {
            const e2 = new RTCPeerConnection(this.config);
            return e2.onicecandidate = (e3) => {
              var t2;
              e3.candidate && (null === (t2 = this.onIceCandidate) || void 0 === t2 || t2.call(this, e3.candidate));
            }, e2.onicecandidateerror = (e3) => {
              var t2;
              null === (t2 = this.onIceCandidateError) || void 0 === t2 || t2.call(this, e3);
            }, e2.oniceconnectionstatechange = () => {
              var t2;
              null === (t2 = this.onIceConnectionStateChange) || void 0 === t2 || t2.call(this, e2.iceConnectionState);
            }, e2.onsignalingstatechange = () => {
              var t2;
              null === (t2 = this.onSignalingStatechange) || void 0 === t2 || t2.call(this, e2.signalingState);
            }, e2.onconnectionstatechange = () => {
              var t2;
              null === (t2 = this.onConnectionStateChange) || void 0 === t2 || t2.call(this, e2.connectionState);
            }, e2.ondatachannel = (e3) => {
              var t2;
              null === (t2 = this.onDataChannel) || void 0 === t2 || t2.call(this, e3);
            }, e2.ontrack = (e3) => {
              var t2;
              null === (t2 = this.onTrack) || void 0 === t2 || t2.call(this, e3);
            }, e2;
          }
          get logContext() {
            var e2, t2;
            return Object.assign({}, null === (t2 = (e2 = this.loggerOptions).loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
          }
          get isICEConnected() {
            return null !== this._pc && ("connected" === this.pc.iceConnectionState || "completed" === this.pc.iceConnectionState);
          }
          addIceCandidate(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e2);
              this.pendingCandidates.push(e2);
            }));
          }
          setRemoteDescription(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              if ("answer" === e2.type && this.latestOfferId > 0 && t2 > 0 && t2 !== this.latestOfferId) return this.log.warn("ignoring answer for old offer", Object.assign(Object.assign({}, this.logContext), { offerId: t2, latestOfferId: this.latestOfferId })), false;
              let i2;
              if ("offer" === e2.type) {
                let { stereoMids: t3, nackMids: n3 } = (function(e3) {
                  var t4;
                  const n4 = [], i3 = [], s2 = No.parse(null !== (t4 = e3.sdp) && void 0 !== t4 ? t4 : "");
                  let r2 = 0;
                  return s2.media.forEach(((e4) => {
                    var t5;
                    const s3 = Ko(e4.mid);
                    "audio" === e4.type && (e4.rtp.some(((e5) => "opus" === e5.codec && (r2 = e5.payload, true))), (null === (t5 = e4.rtcpFb) || void 0 === t5 ? void 0 : t5.some(((e5) => e5.payload === r2 && "nack" === e5.type))) && i3.push(s3), e4.fmtp.some(((e5) => e5.payload === r2 && (e5.config.includes("sprop-stereo=1") && n4.push(s3), true))));
                  })), { stereoMids: n4, nackMids: i3 };
                })(e2);
                this.remoteStereoMids = t3, this.remoteNackMids = n3;
              } else if ("answer" === e2.type) {
                const t3 = No.parse(null !== (n2 = e2.sdp) && void 0 !== n2 ? n2 : "");
                t3.media.forEach(((e3) => {
                  const t4 = Ko(e3.mid);
                  "audio" === e3.type && this.trackBitrates.some(((n3) => {
                    if (!n3.transceiver || t4 != n3.transceiver.mid) return false;
                    let i3 = 0;
                    if (e3.rtp.some(((e4) => e4.codec.toUpperCase() === n3.codec.toUpperCase() && (i3 = e4.payload, true))), 0 === i3) return true;
                    let s2 = false;
                    for (const t5 of e3.fmtp) if (t5.payload === i3) {
                      t5.config = t5.config.split(";").filter(((e4) => !e4.includes("maxaveragebitrate"))).join(";"), n3.maxbr > 0 && (t5.config += ";maxaveragebitrate=".concat(1e3 * n3.maxbr)), s2 = true;
                      break;
                    }
                    return s2 || n3.maxbr > 0 && e3.fmtp.push({ payload: i3, config: "maxaveragebitrate=".concat(1e3 * n3.maxbr) }), true;
                  }));
                })), i2 = No.write(t3);
              }
              if (yield this.setMungedSDP(e2, i2, true), this.pendingCandidates.forEach(((e3) => {
                this.pc.addIceCandidate(e3);
              })), this.pendingCandidates = [], this.restartingIce = false, this.renegotiate) this.renegotiate = false, yield this.createAndSendOffer();
              else if ("answer" === e2.type && (this.emit(jo), e2.sdp)) {
                No.parse(e2.sdp).media.forEach(((e3) => {
                  "video" === e3.type && this.emit(Fo, e3.rtp);
                }));
              }
              return true;
            }));
          }
          createAndSendOffer(e2) {
            return Zn(this, void 0, void 0, (function* () {
              var t2;
              const n2 = yield this.offerLock.lock();
              try {
                if (void 0 === this.onOffer) return;
                if ((null == e2 ? void 0 : e2.iceRestart) && (this.log.debug("restarting ICE", this.logContext), this.restartingIce = true), this._pc && "have-local-offer" === this._pc.signalingState) {
                  const t3 = this._pc.remoteDescription;
                  if (!(null == e2 ? void 0 : e2.iceRestart) || !t3) return void (this.renegotiate = true);
                  yield this._pc.setRemoteDescription(t3);
                } else if (!this._pc || "closed" === this._pc.signalingState) return void this.log.warn("could not createOffer with closed peer connection", this.logContext);
                this.log.debug("starting to negotiate", this.logContext);
                const n3 = this.latestOfferId + 1;
                this.latestOfferId = n3;
                const i2 = yield this.pc.createOffer(e2);
                this.log.debug("original offer", Object.assign({ sdp: i2.sdp }, this.logContext));
                const s2 = No.parse(null !== (t2 = i2.sdp) && void 0 !== t2 ? t2 : "");
                if (s2.media.forEach(((e3) => {
                  qo(e3), "audio" === e3.type ? Vo(e3, [], []) : "video" === e3.type && this.trackBitrates.some(((t3) => {
                    if (!e3.msid || !t3.cid || !e3.msid.includes(t3.cid)) return false;
                    let n4 = 0;
                    if (e3.rtp.some(((e4) => e4.codec.toUpperCase() === t3.codec.toUpperCase() && (n4 = e4.payload, true))), 0 === n4) return true;
                    if (ur(t3.codec) && !gr() && this.ensureVideoDDExtensionForSVC(e3, s2), "av1" !== t3.codec) return true;
                    const i3 = Math.round(0.7 * t3.maxbr);
                    for (const t4 of e3.fmtp) if (t4.payload === n4) {
                      t4.config.includes("x-google-start-bitrate") || (t4.config += ";x-google-start-bitrate=".concat(i3));
                      break;
                    }
                    return true;
                  }));
                })), this.latestOfferId > n3) return void this.log.warn("latestOfferId mismatch", Object.assign(Object.assign({}, this.logContext), { latestOfferId: this.latestOfferId, offerId: n3 }));
                yield this.setMungedSDP(i2, No.write(s2)), this.onOffer(i2, this.latestOfferId);
              } finally {
                n2();
              }
            }));
          }
          createAndSetAnswer() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              const t2 = yield this.pc.createAnswer(), n2 = No.parse(null !== (e2 = t2.sdp) && void 0 !== e2 ? e2 : "");
              return n2.media.forEach(((e3) => {
                qo(e3), "audio" === e3.type && Vo(e3, this.remoteStereoMids, this.remoteNackMids);
              })), yield this.setMungedSDP(t2, No.write(n2)), t2;
            }));
          }
          createDataChannel(e2, t2) {
            return this.pc.createDataChannel(e2, t2);
          }
          addTransceiver(e2, t2) {
            return this.pc.addTransceiver(e2, t2);
          }
          addTrack(e2) {
            if (!this._pc) throw new _s("PC closed, cannot add track");
            return this._pc.addTrack(e2);
          }
          setTrackCodecBitrate(e2) {
            this.trackBitrates.push(e2);
          }
          setConfiguration(e2) {
            var t2;
            if (!this._pc) throw new _s("PC closed, cannot configure");
            return null === (t2 = this._pc) || void 0 === t2 ? void 0 : t2.setConfiguration(e2);
          }
          canRemoveTrack() {
            var e2;
            return !!(null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.removeTrack);
          }
          removeTrack(e2) {
            var t2;
            return null === (t2 = this._pc) || void 0 === t2 ? void 0 : t2.removeTrack(e2);
          }
          getConnectionState() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.connectionState) && void 0 !== t2 ? t2 : "closed";
          }
          getICEConnectionState() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.iceConnectionState) && void 0 !== t2 ? t2 : "closed";
          }
          getSignallingState() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.signalingState) && void 0 !== t2 ? t2 : "closed";
          }
          getTransceivers() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.getTransceivers()) && void 0 !== t2 ? t2 : [];
          }
          getSenders() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.getSenders()) && void 0 !== t2 ? t2 : [];
          }
          getLocalDescription() {
            var e2;
            return null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.localDescription;
          }
          getRemoteDescription() {
            var e2;
            return null === (e2 = this.pc) || void 0 === e2 ? void 0 : e2.remoteDescription;
          }
          getStats() {
            return this.pc.getStats();
          }
          getConnectedAddress() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              if (!this._pc) return;
              let t2 = "";
              const n2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
              if ((yield this._pc.getStats()).forEach(((e3) => {
                switch (e3.type) {
                  case "transport":
                    t2 = e3.selectedCandidatePairId;
                    break;
                  case "candidate-pair":
                    "" === t2 && e3.selected && (t2 = e3.id), n2.set(e3.id, e3);
                    break;
                  case "remote-candidate":
                    i2.set(e3.id, "".concat(e3.address, ":").concat(e3.port));
                }
              })), "" === t2) return;
              const s2 = null === (e2 = n2.get(t2)) || void 0 === e2 ? void 0 : e2.remoteCandidateId;
              return void 0 !== s2 ? i2.get(s2) : void 0;
            }));
          }
          setMungedSDP(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              if (t2) {
                const i2 = e2.sdp;
                e2.sdp = t2;
                try {
                  return this.log.debug("setting munged ".concat(n2 ? "remote" : "local", " description"), this.logContext), void (n2 ? yield this.pc.setRemoteDescription(e2) : yield this.pc.setLocalDescription(e2));
                } catch (n3) {
                  this.log.warn("not able to set ".concat(e2.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), { error: n3, sdp: t2 })), e2.sdp = i2;
                }
              }
              try {
                n2 ? yield this.pc.setRemoteDescription(e2) : yield this.pc.setLocalDescription(e2);
              } catch (t3) {
                let i2 = "unknown error";
                t3 instanceof Error ? i2 = t3.message : "string" == typeof t3 && (i2 = t3);
                const s2 = { error: i2, sdp: e2.sdp };
                throw !n2 && this.pc.remoteDescription && (s2.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e2.type), Object.assign(Object.assign({}, this.logContext), { fields: s2 })), new Ns(i2);
              }
            }));
          }
          ensureVideoDDExtensionForSVC(e2, t2) {
            var n2, i2;
            if (!(null === (n2 = e2.ext) || void 0 === n2 ? void 0 : n2.some(((e3) => e3.uri === rr)))) {
              if (0 === this.ddExtID) {
                let e3 = 0;
                t2.media.forEach(((t3) => {
                  var n3;
                  "video" === t3.type && (null === (n3 = t3.ext) || void 0 === n3 || n3.forEach(((t4) => {
                    t4.value > e3 && (e3 = t4.value);
                  })));
                })), this.ddExtID = e3 + 1;
              }
              null === (i2 = e2.ext) || void 0 === i2 || i2.push({ value: this.ddExtID, uri: rr });
            }
          }
        }
        function Vo(e2, t2, n2) {
          const i2 = Ko(e2.mid);
          let s2 = 0;
          e2.rtp.some(((e3) => "opus" === e3.codec && (s2 = e3.payload, true))), s2 > 0 && (e2.rtcpFb || (e2.rtcpFb = []), n2.includes(i2) && !e2.rtcpFb.some(((e3) => e3.payload === s2 && "nack" === e3.type)) && e2.rtcpFb.push({ payload: s2, type: "nack" }), t2.includes(i2) && e2.fmtp.some(((e3) => e3.payload === s2 && (e3.config.includes("stereo=1") || (e3.config += ";stereo=1"), true))));
        }
        function qo(e2) {
          if (e2.connection) {
            const t2 = e2.connection.ip.indexOf(":") >= 0;
            (4 === e2.connection.version && t2 || 6 === e2.connection.version && !t2) && (e2.connection.ip = "0.0.0.0", e2.connection.version = 4);
          }
        }
        function Ko(e2) {
          return "number" == typeof e2 ? e2.toFixed(0) : e2;
        }
        const Ho = "vp8", Wo = { audioPreset: e.AudioPresets.music, dtx: true, red: true, forceStereo: false, simulcast: true, screenShareEncoding: sr.h1080fps15.encoding, stopMicTrackOnMute: false, videoCodec: Ho, backupCodec: true, preConnectBuffer: false }, Go = { deviceId: { ideal: "default" }, autoGainControl: true, echoCancellation: true, noiseSuppression: true, voiceIsolation: true }, zo = { deviceId: { ideal: "default" }, resolution: nr.h720.resolution }, Jo = { adaptiveStream: false, dynacast: false, stopLocalTrackOnUnpublish: true, reconnectPolicy: new Xn(), disconnectOnPageLeave: true, webAudioMix: false }, Qo = { autoSubscribe: true, maxRetries: 1, peerConnectionTimeout: 15e3, websocketTimeout: 15e3 };
        var Yo;
        !(function(e2) {
          e2[e2.NEW = 0] = "NEW", e2[e2.CONNECTING = 1] = "CONNECTING", e2[e2.CONNECTED = 2] = "CONNECTED", e2[e2.FAILED = 3] = "FAILED", e2[e2.CLOSING = 4] = "CLOSING", e2[e2.CLOSED = 5] = "CLOSED";
        })(Yo || (Yo = {}));
        class Xo {
          get needsPublisher() {
            return this.isPublisherConnectionRequired;
          }
          get needsSubscriber() {
            return this.isSubscriberConnectionRequired;
          }
          get currentState() {
            return this.state;
          }
          constructor(t2, n2, i2) {
            var r2;
            this.peerConnectionTimeout = Qo.peerConnectionTimeout, this.log = Wn, this.updateState = () => {
              var e2;
              const t3 = this.state, n3 = this.requiredTransports.map(((e3) => e3.getConnectionState()));
              n3.every(((e3) => "connected" === e3)) ? this.state = Yo.CONNECTED : n3.some(((e3) => "failed" === e3)) ? this.state = Yo.FAILED : n3.some(((e3) => "connecting" === e3)) ? this.state = Yo.CONNECTING : n3.every(((e3) => "closed" === e3)) ? this.state = Yo.CLOSED : n3.some(((e3) => "closed" === e3)) ? this.state = Yo.CLOSING : n3.every(((e3) => "new" === e3)) && (this.state = Yo.NEW), t3 !== this.state && (this.log.debug("pc state change: from ".concat(Yo[t3], " to ").concat(Yo[this.state]), this.logContext), null === (e2 = this.onStateChange) || void 0 === e2 || e2.call(this, this.state, this.publisher.getConnectionState(), this.subscriber.getConnectionState()));
            }, this.log = zn(null !== (r2 = i2.loggerName) && void 0 !== r2 ? r2 : e.LoggerNames.PCManager), this.loggerOptions = i2, this.isPublisherConnectionRequired = !n2, this.isSubscriberConnectionRequired = n2, this.publisher = new Bo(t2, i2), this.subscriber = new Bo(t2, i2), this.publisher.onConnectionStateChange = this.updateState, this.subscriber.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = (e2) => {
              var t3;
              null === (t3 = this.onIceCandidate) || void 0 === t3 || t3.call(this, e2, qt.PUBLISHER);
            }, this.subscriber.onIceCandidate = (e2) => {
              var t3;
              null === (t3 = this.onIceCandidate) || void 0 === t3 || t3.call(this, e2, qt.SUBSCRIBER);
            }, this.subscriber.onDataChannel = (e2) => {
              var t3;
              null === (t3 = this.onDataChannel) || void 0 === t3 || t3.call(this, e2);
            }, this.subscriber.onTrack = (e2) => {
              var t3;
              null === (t3 = this.onTrack) || void 0 === t3 || t3.call(this, e2);
            }, this.publisher.onOffer = (e2, t3) => {
              var n3;
              null === (n3 = this.onPublisherOffer) || void 0 === n3 || n3.call(this, e2, t3);
            }, this.state = Yo.NEW, this.connectionLock = new s(), this.remoteOfferLock = new s();
          }
          get logContext() {
            var e2, t2;
            return Object.assign({}, null === (t2 = (e2 = this.loggerOptions).loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
          }
          requirePublisher() {
            let e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.isPublisherConnectionRequired = e2, this.updateState();
          }
          requireSubscriber() {
            let e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.isSubscriberConnectionRequired = e2, this.updateState();
          }
          createAndSendPublisherOffer(e2) {
            return this.publisher.createAndSendOffer(e2);
          }
          setPublisherAnswer(e2, t2) {
            return this.publisher.setRemoteDescription(e2, t2);
          }
          removeTrack(e2) {
            return this.publisher.removeTrack(e2);
          }
          close() {
            return Zn(this, void 0, void 0, (function* () {
              if (this.publisher && "closed" !== this.publisher.getSignallingState()) {
                const e2 = this.publisher;
                for (const t2 of e2.getSenders()) try {
                  e2.canRemoveTrack() && e2.removeTrack(t2);
                } catch (e3) {
                  this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
                }
              }
              yield Promise.all([this.publisher.close(), this.subscriber.close()]), this.updateState();
            }));
          }
          triggerIceRestart() {
            return Zn(this, void 0, void 0, (function* () {
              this.subscriber.restartingIce = true, this.needsPublisher && (yield this.createAndSendPublisherOffer({ iceRestart: true }));
            }));
          }
          addIceCandidate(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              t2 === qt.PUBLISHER ? yield this.publisher.addIceCandidate(e2) : yield this.subscriber.addIceCandidate(e2);
            }));
          }
          createSubscriberAnswerFromOffer(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), { RTCSdpType: e2.type, sdp: e2.sdp, signalingState: this.subscriber.getSignallingState().toString() }));
              const n2 = yield this.remoteOfferLock.lock();
              try {
                if (!(yield this.subscriber.setRemoteDescription(e2, t2))) return;
                return yield this.subscriber.createAndSetAnswer();
              } finally {
                n2();
              }
            }));
          }
          updateConfiguration(e2, t2) {
            this.publisher.setConfiguration(e2), this.subscriber.setConfiguration(e2), t2 && this.triggerIceRestart();
          }
          ensurePCTransportConnection(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              const i2 = yield this.connectionLock.lock();
              try {
                this.isPublisherConnectionRequired && "connected" !== this.publisher.getConnectionState() && "connecting" !== this.publisher.getConnectionState() && (this.log.debug("negotiation required, start negotiating", this.logContext), this.publisher.negotiate()), yield Promise.all(null === (n2 = this.requiredTransports) || void 0 === n2 ? void 0 : n2.map(((n3) => this.ensureTransportConnected(n3, e2, t2))));
              } finally {
                i2();
              }
            }));
          }
          negotiate(e2) {
            return Zn(this, void 0, void 0, (function* () {
              return new Promise(((t2, n2) => Zn(this, void 0, void 0, (function* () {
                const i2 = setTimeout((() => {
                  n2("negotiation timed out");
                }), this.peerConnectionTimeout);
                e2.signal.addEventListener("abort", (() => {
                  clearTimeout(i2), n2("negotiation aborted");
                })), this.publisher.once(Uo, (() => {
                  e2.signal.aborted || this.publisher.once(jo, (() => {
                    clearTimeout(i2), t2();
                  }));
                })), yield this.publisher.negotiate(((e3) => {
                  clearTimeout(i2), n2(e3);
                }));
              }))));
            }));
          }
          addPublisherTransceiver(e2, t2) {
            return this.publisher.addTransceiver(e2, t2);
          }
          addPublisherTrack(e2) {
            return this.publisher.addTrack(e2);
          }
          createPublisherDataChannel(e2, t2) {
            return this.publisher.createDataChannel(e2, t2);
          }
          getConnectedAddress(e2) {
            return e2 === qt.PUBLISHER || e2 === qt.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress();
          }
          get requiredTransports() {
            const e2 = [];
            return this.isPublisherConnectionRequired && e2.push(this.publisher), this.isSubscriberConnectionRequired && e2.push(this.subscriber), e2;
          }
          ensureTransportConnected(t2, n2) {
            return Zn(this, arguments, void 0, (function(t3, n3) {
              var i2 = this;
              let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.peerConnectionTimeout;
              return (function* () {
                if ("connected" !== t3.getConnectionState()) return new Promise(((t4, r2) => Zn(i2, void 0, void 0, (function* () {
                  const i3 = () => {
                    this.log.warn("abort transport connection", this.logContext), Gs.clearTimeout(o2), r2(new Ds("room connection has been cancelled", e.ConnectionErrorReason.Cancelled));
                  };
                  (null == n3 ? void 0 : n3.signal.aborted) && i3(), null == n3 || n3.signal.addEventListener("abort", i3);
                  const o2 = Gs.setTimeout((() => {
                    null == n3 || n3.signal.removeEventListener("abort", i3), r2(new Ds("could not establish pc connection", e.ConnectionErrorReason.InternalError));
                  }), s2);
                  for (; this.state !== Yo.CONNECTED; ) if (yield or(50), null == n3 ? void 0 : n3.signal.aborted) return void r2(new Ds("room connection has been cancelled", e.ConnectionErrorReason.Cancelled));
                  Gs.clearTimeout(o2), null == n3 || n3.signal.removeEventListener("abort", i3), t4();
                }))));
              })();
            }));
          }
        }
        class Zo extends Error {
          constructor(e2, t2, n2) {
            super(t2), this.code = e2, this.message = ea(t2, Zo.MAX_MESSAGE_BYTES), this.data = n2 ? ea(n2, Zo.MAX_DATA_BYTES) : void 0;
          }
          static fromProto(e2) {
            return new Zo(e2.code, e2.message, e2.data);
          }
          toProto() {
            return new Pt({ code: this.code, message: this.message, data: this.data });
          }
          static builtIn(e2, t2) {
            return new Zo(Zo.ErrorCode[e2], Zo.ErrorMessage[e2], t2);
          }
        }
        Zo.MAX_MESSAGE_BYTES = 256, Zo.MAX_DATA_BYTES = 15360, Zo.ErrorCode = { APPLICATION_ERROR: 1500, CONNECTION_TIMEOUT: 1501, RESPONSE_TIMEOUT: 1502, RECIPIENT_DISCONNECTED: 1503, RESPONSE_PAYLOAD_TOO_LARGE: 1504, SEND_FAILED: 1505, UNSUPPORTED_METHOD: 1400, RECIPIENT_NOT_FOUND: 1401, REQUEST_PAYLOAD_TOO_LARGE: 1402, UNSUPPORTED_SERVER: 1403, UNSUPPORTED_VERSION: 1404 }, Zo.ErrorMessage = { APPLICATION_ERROR: "Application error in method handler", CONNECTION_TIMEOUT: "Connection timeout", RESPONSE_TIMEOUT: "Response timeout", RECIPIENT_DISCONNECTED: "Recipient disconnected", RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large", SEND_FAILED: "Failed to send", UNSUPPORTED_METHOD: "Method not supported at destination", RECIPIENT_NOT_FOUND: "Recipient not found", REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large", UNSUPPORTED_SERVER: "RPC not supported by server", UNSUPPORTED_VERSION: "Unsupported RPC version" };
        function $o(e2) {
          return new TextEncoder().encode(e2).length;
        }
        function ea(e2, t2) {
          if ($o(e2) <= t2) return e2;
          let n2 = 0, i2 = e2.length;
          const s2 = new TextEncoder();
          for (; n2 < i2; ) {
            const r2 = Math.floor((n2 + i2 + 1) / 2);
            s2.encode(e2.slice(0, r2)).length <= t2 ? n2 = r2 : i2 = r2 - 1;
          }
          return e2.slice(0, n2);
        }
        const ta = 2e3;
        function na(e2, t2) {
          if (!t2) return 0;
          let n2, i2;
          return "bytesReceived" in e2 ? (n2 = e2.bytesReceived, i2 = t2.bytesReceived) : "bytesSent" in e2 && (n2 = e2.bytesSent, i2 = t2.bytesSent), void 0 === n2 || void 0 === i2 || void 0 === e2.timestamp || void 0 === t2.timestamp ? 0 : 8 * (n2 - i2) * 1e3 / (e2.timestamp - t2.timestamp);
        }
        const ia = "undefined" != typeof MediaRecorder;
        const sa = ia ? MediaRecorder : class {
          constructor() {
            throw new Error("MediaRecorder is not available in this environment");
          }
        };
        class ra extends sa {
          constructor(e2, t2) {
            if (!ia) throw new Error("MediaRecorder is not available in this environment");
            let n2, i2;
            super(new MediaStream([e2.mediaStreamTrack]), t2);
            const s2 = () => {
              this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", s2), this.removeEventListener("error", r2), null == i2 || i2.close(), i2 = void 0;
            }, r2 = (e3) => {
              null == i2 || i2.error(e3), this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", s2), this.removeEventListener("error", r2), i2 = void 0;
            };
            this.byteStream = new ReadableStream({ start: (e3) => {
              i2 = e3, n2 = (t3) => Zn(this, void 0, void 0, (function* () {
                let n3;
                if (t3.data.arrayBuffer) {
                  const e4 = yield t3.data.arrayBuffer();
                  n3 = new Uint8Array(e4);
                } else {
                  if (!t3.data.byteArray) throw new Error("no data available!");
                  n3 = t3.data.byteArray;
                }
                void 0 !== i2 && e3.enqueue(n3);
              })), this.addEventListener("dataavailable", n2);
            }, cancel: () => {
              s2();
            } }), this.addEventListener("stop", s2), this.addEventListener("error", r2);
          }
        }
        class oa extends Js {
          get sender() {
            return this._sender;
          }
          set sender(e2) {
            this._sender = e2;
          }
          get constraints() {
            return this._constraints;
          }
          get hasPreConnectBuffer() {
            return !!this.localTrackRecorder;
          }
          constructor(t2, n2, i2) {
            let r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            super(t2, n2, arguments.length > 4 ? arguments[4] : void 0), this.manuallyStopped = false, this._isUpstreamPaused = false, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch((() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext))), this.debouncedTrackMuteHandler = Lo((() => Zn(this, void 0, void 0, (function* () {
              yield this.pauseUpstream();
            }))), 5e3), this.handleTrackUnmuteEvent = () => Zn(this, void 0, void 0, (function* () {
              this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream();
            })), this.handleEnded = () => {
              this.isInBackground && (this.reacquireTrack = true), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(e.TrackEvent.Ended, this);
            }, this.reacquireTrack = false, this.providedByUser = r2, this.muteLock = new s(), this.pauseUpstreamLock = new s(), this.trackChangeLock = new s(), this.trackChangeLock.lock().then(((e2) => Zn(this, void 0, void 0, (function* () {
              try {
                yield this.setMediaStreamTrack(t2, true);
              } finally {
                e2();
              }
            })))), this._constraints = t2.getConstraints(), i2 && (this._constraints = i2);
          }
          get id() {
            return this._mediaStreamTrack.id;
          }
          get dimensions() {
            if (this.kind !== Js.Kind.Video) return;
            const { width: e2, height: t2 } = this._mediaStreamTrack.getSettings();
            return e2 && t2 ? { width: e2, height: t2 } : void 0;
          }
          get isUpstreamPaused() {
            return this._isUpstreamPaused;
          }
          get isUserProvided() {
            return this.providedByUser;
          }
          get mediaStreamTrack() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.processor) || void 0 === e2 ? void 0 : e2.processedTrack) && void 0 !== t2 ? t2 : this._mediaStreamTrack;
          }
          get isLocal() {
            return true;
          }
          getSourceTrackSettings() {
            return this._mediaStreamTrack.getSettings();
          }
          setMediaStreamTrack(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              if (e2 === this._mediaStreamTrack && !t2) return;
              let i2;
              if (this._mediaStreamTrack && (this.attachedElements.forEach(((e3) => {
                Ys(this._mediaStreamTrack, e3);
              })), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e2]), e2 && (e2.addEventListener("ended", this.handleEnded), e2.addEventListener("mute", this.handleTrackMuteEvent), e2.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e2.getConstraints()), this.processor && e2) {
                if (this.log.debug("restarting processor", this.logContext), "unknown" === this.kind) throw TypeError("cannot set processor on track of unknown kind");
                this.processorElement && (Qs(e2, this.processorElement), this.processorElement.muted = true), yield this.processor.restart({ track: e2, kind: this.kind, element: this.processorElement }), i2 = this.processor.processedTrack;
              }
              this.sender && "closed" !== (null === (n2 = this.sender.transport) || void 0 === n2 ? void 0 : n2.state) && (yield this.sender.replaceTrack(null != i2 ? i2 : e2)), this.providedByUser || this._mediaStreamTrack === e2 || this._mediaStreamTrack.stop(), this._mediaStreamTrack = e2, e2 && (this._mediaStreamTrack.enabled = !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach(((t3) => {
                Qs(null != i2 ? i2 : e2, t3);
              })));
            }));
          }
          waitForDimensions() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
              return (function* () {
                var n2;
                if (e2.kind === Js.Kind.Audio) throw new Error("cannot get dimensions for audio tracks");
                "iOS" === (null === (n2 = Vs()) || void 0 === n2 ? void 0 : n2.os) && (yield or(10));
                const i2 = Date.now();
                for (; Date.now() - i2 < t2; ) {
                  const t3 = e2.dimensions;
                  if (t3) return t3;
                  yield or(50);
                }
                throw new Ms("unable to get track dimensions after timeout");
              })();
            }));
          }
          setDeviceId(e2) {
            return Zn(this, void 0, void 0, (function* () {
              return this._constraints.deviceId === e2 && this._mediaStreamTrack.getSettings().deviceId === Ur(e2) || (this._constraints.deviceId = e2, !!this.isMuted || (yield this.restartTrack(), Ur(e2) === this._mediaStreamTrack.getSettings().deviceId));
            }));
          }
          getDeviceId() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (function* () {
                if (e2.source === Js.Source.ScreenShare) return;
                const { deviceId: n2, groupId: i2 } = e2._mediaStreamTrack.getSettings(), s2 = e2.kind === Js.Kind.Audio ? "audioinput" : "videoinput";
                return t2 ? po.getInstance().normalizeDeviceId(s2, n2, i2) : n2;
              })();
            }));
          }
          mute() {
            return Zn(this, void 0, void 0, (function* () {
              return this.setTrackMuted(true), this;
            }));
          }
          unmute() {
            return Zn(this, void 0, void 0, (function* () {
              return this.setTrackMuted(false), this;
            }));
          }
          replaceTrack(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              const n2 = yield this.trackChangeLock.lock();
              try {
                if (!this.sender) throw new Ms("unable to replace an unpublished track");
                let n3, i2;
                return "boolean" == typeof t2 ? n3 = t2 : void 0 !== t2 && (n3 = t2.userProvidedTrack, i2 = t2.stopProcessor), this.providedByUser = null == n3 || n3, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e2), i2 && this.processor && (yield this.internalStopProcessor()), this;
              } finally {
                n2();
              }
            }));
          }
          restart(t2) {
            return Zn(this, void 0, void 0, (function* () {
              this.manuallyStopped = false;
              const n2 = yield this.trackChangeLock.lock();
              try {
                t2 || (t2 = this._constraints);
                const { deviceId: n3, facingMode: i2 } = t2, s2 = (function(e2, t3) {
                  var n4 = {};
                  for (var i3 in e2) Object.prototype.hasOwnProperty.call(e2, i3) && t3.indexOf(i3) < 0 && (n4[i3] = e2[i3]);
                  if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
                    var s3 = 0;
                    for (i3 = Object.getOwnPropertySymbols(e2); s3 < i3.length; s3++) t3.indexOf(i3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, i3[s3]) && (n4[i3[s3]] = e2[i3[s3]]);
                  }
                  return n4;
                })(t2, ["deviceId", "facingMode"]);
                this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), { constraints: t2 }));
                const r2 = { audio: false, video: false };
                this.kind === Js.Kind.Video ? r2.video = !n3 && !i2 || { deviceId: n3, facingMode: i2 } : r2.audio = !n3 || Object.assign({ deviceId: n3 }, s2), this.attachedElements.forEach(((e2) => {
                  Ys(this.mediaStreamTrack, e2);
                })), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
                const o2 = (yield navigator.mediaDevices.getUserMedia(r2)).getTracks()[0];
                return this.kind === Js.Kind.Video && (yield o2.applyConstraints(s2)), o2.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(o2), this._constraints = t2, this.emit(e.TrackEvent.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this;
              } finally {
                n2();
              }
            }));
          }
          setTrackMuted(t2) {
            this.log.debug("setting ".concat(this.kind, " track ").concat(t2 ? "muted" : "unmuted"), this.logContext), this.isMuted === t2 && this._mediaStreamTrack.enabled !== t2 || (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
          }
          get needsReAcquisition() {
            return "live" !== this._mediaStreamTrack.readyState || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack;
          }
          handleAppVisibilityChanged() {
            const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
            return Zn(this, void 0, void 0, (function* () {
              yield e2.handleAppVisibilityChanged.call(this), kr() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), this.isInBackground || !this.needsReAcquisition || this.isUserProvided || this.isMuted || (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = false));
            }));
          }
          stop() {
            var e2;
            this.manuallyStopped = true, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), null === (e2 = this.processor) || void 0 === e2 || e2.destroy(), this.processor = void 0;
          }
          pauseUpstream() {
            return Zn(this, void 0, void 0, (function* () {
              var t2;
              const n2 = yield this.pauseUpstreamLock.lock();
              try {
                if (true === this._isUpstreamPaused) return;
                if (!this.sender) return void this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
                this._isUpstreamPaused = true, this.emit(e.TrackEvent.UpstreamPaused, this);
                const n3 = Vs();
                if ("Safari" === (null == n3 ? void 0 : n3.name) && wr(n3.version, "12.0") < 0) throw new xs("pauseUpstream is not supported on Safari < 12.");
                "closed" !== (null === (t2 = this.sender.transport) || void 0 === t2 ? void 0 : t2.state) && (yield this.sender.replaceTrack(null));
              } finally {
                n2();
              }
            }));
          }
          resumeUpstream() {
            return Zn(this, void 0, void 0, (function* () {
              var t2;
              const n2 = yield this.pauseUpstreamLock.lock();
              try {
                if (false === this._isUpstreamPaused) return;
                if (!this.sender) return void this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
                this._isUpstreamPaused = false, this.emit(e.TrackEvent.UpstreamResumed, this), "closed" !== (null === (t2 = this.sender.transport) || void 0 === t2 ? void 0 : t2.state) && (yield this.sender.replaceTrack(this.mediaStreamTrack));
              } finally {
                n2();
              }
            }));
          }
          getRTCStatsReport() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return;
              return yield this.sender.getStats();
            }));
          }
          setProcessor(t2) {
            return Zn(this, arguments, void 0, (function(t3) {
              var n2 = this;
              let i2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return (function* () {
                var s2;
                const r2 = yield n2.trackChangeLock.lock();
                try {
                  n2.log.debug("setting up processor", n2.logContext);
                  const r3 = document.createElement(n2.kind), o2 = { kind: n2.kind, track: n2._mediaStreamTrack, element: r3, audioContext: n2.audioContext };
                  if (yield t3.init(o2), n2.log.debug("processor initialized", n2.logContext), n2.processor && (yield n2.internalStopProcessor()), "unknown" === n2.kind) throw TypeError("cannot set processor on track of unknown kind");
                  if (Qs(n2._mediaStreamTrack, r3), r3.muted = true, r3.play().catch(((e2) => {
                    e2 instanceof DOMException && "AbortError" === e2.name ? (n2.log.warn("failed to play processor element, retrying", Object.assign(Object.assign({}, n2.logContext), { error: e2 })), setTimeout((() => {
                      r3.play().catch(((e3) => {
                        n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { err: e3 }));
                      }));
                    }), 100)) : n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { error: e2 }));
                  })), n2.processor = t3, n2.processorElement = r3, n2.processor.processedTrack) {
                    for (const e2 of n2.attachedElements) e2 !== n2.processorElement && i2 && (Ys(n2._mediaStreamTrack, e2), Qs(n2.processor.processedTrack, e2));
                    yield null === (s2 = n2.sender) || void 0 === s2 ? void 0 : s2.replaceTrack(n2.processor.processedTrack);
                  }
                  n2.emit(e.TrackEvent.TrackProcessorUpdate, n2.processor);
                } finally {
                  r2();
                }
              })();
            }));
          }
          getProcessor() {
            return this.processor;
          }
          stopProcessor() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (function* () {
                const n2 = yield e2.trackChangeLock.lock();
                try {
                  yield e2.internalStopProcessor(t2);
                } finally {
                  n2();
                }
              })();
            }));
          }
          internalStopProcessor() {
            return Zn(this, arguments, void 0, (function() {
              var t2 = this;
              let n2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (function* () {
                var i2, s2;
                t2.processor && (t2.log.debug("stopping processor", t2.logContext), null === (i2 = t2.processor.processedTrack) || void 0 === i2 || i2.stop(), yield t2.processor.destroy(), t2.processor = void 0, n2 || (null === (s2 = t2.processorElement) || void 0 === s2 || s2.remove(), t2.processorElement = void 0), yield t2._mediaStreamTrack.applyConstraints(t2._constraints), yield t2.setMediaStreamTrack(t2._mediaStreamTrack, true), t2.emit(e.TrackEvent.TrackProcessorUpdate));
              })();
            }));
          }
          startPreConnectBuffer() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
            if (ia) if (this.localTrackRecorder) this.log.warn("preconnect buffer already started");
            else {
              {
                let e3 = "audio/webm;codecs=opus";
                MediaRecorder.isTypeSupported(e3) || (e3 = "video/mp4"), this.localTrackRecorder = new ra(this, { mimeType: e3 });
              }
              this.localTrackRecorder.start(e2), this.autoStopPreConnectBuffer = setTimeout((() => {
                this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer();
              }), 1e4);
            }
            else this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext);
          }
          stopPreConnectBuffer() {
            clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = void 0);
          }
          getPreConnectBuffer() {
            var e2;
            return null === (e2 = this.localTrackRecorder) || void 0 === e2 ? void 0 : e2.byteStream;
          }
          getPreConnectBufferMimeType() {
            var e2;
            return null === (e2 = this.localTrackRecorder) || void 0 === e2 ? void 0 : e2.mimeType;
          }
        }
        class aa extends oa {
          get enhancedNoiseCancellation() {
            return this.isKrispNoiseFilterEnabled;
          }
          constructor(t2, n2) {
            let i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = arguments.length > 3 ? arguments[3] : void 0, r2 = arguments.length > 4 ? arguments[4] : void 0;
            super(t2, Js.Kind.Audio, n2, i2, r2), this.stopOnMute = false, this.isKrispNoiseFilterEnabled = false, this.monitorSender = () => Zn(this, void 0, void 0, (function* () {
              if (!this.sender) return void (this._currentBitrate = 0);
              let e2;
              try {
                e2 = yield this.getSenderStats();
              } catch (e3) {
                return void this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
              }
              e2 && this.prevStats && (this._currentBitrate = na(e2, this.prevStats)), this.prevStats = e2;
            })), this.handleKrispNoiseFilterEnable = () => {
              this.isKrispNoiseFilterEnabled = true, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, nt.TF_ENHANCED_NOISE_CANCELLATION, true);
            }, this.handleKrispNoiseFilterDisable = () => {
              this.isKrispNoiseFilterEnabled = false, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, nt.TF_ENHANCED_NOISE_CANCELLATION, false);
            }, this.audioContext = s2, this.checkForSilence();
          }
          mute() {
            const e2 = Object.create(null, { mute: { get: () => super.mute } });
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield this.muteLock.lock();
              try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === Js.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
              } finally {
                t2();
              }
            }));
          }
          unmute() {
            const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield this.muteLock.lock();
              try {
                if (!this.isMuted) return this.log.debug("Track already unmuted", this.logContext), this;
                const t3 = this._constraints.deviceId && this._mediaStreamTrack.getSettings().deviceId !== Ur(this._constraints.deviceId);
                return this.source !== Js.Source.Microphone || !this.stopOnMute && "ended" !== this._mediaStreamTrack.readyState && !t3 || this.isUserProvided || (this.log.debug("reacquiring mic track", this.logContext), yield this.restartTrack()), yield e2.unmute.call(this), this;
              } finally {
                t2();
              }
            }));
          }
          restartTrack(e2) {
            return Zn(this, void 0, void 0, (function* () {
              let t2;
              if (e2) {
                const n2 = $r({ audio: e2 });
                "boolean" != typeof n2.audio && (t2 = n2.audio);
              }
              yield this.restart(t2);
            }));
          }
          restart(e2) {
            const t2 = Object.create(null, { restart: { get: () => super.restart } });
            return Zn(this, void 0, void 0, (function* () {
              const n2 = yield t2.restart.call(this, e2);
              return this.checkForSilence(), n2;
            }));
          }
          startMonitor() {
            br() && (this.monitorInterval || (this.monitorInterval = setInterval((() => {
              this.monitorSender();
            }), ta)));
          }
          setProcessor(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              const i2 = yield this.trackChangeLock.lock();
              try {
                if (!yr() && !this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
                this.processor && (yield this.internalStopProcessor());
                const i3 = { kind: this.kind, track: this._mediaStreamTrack, audioContext: this.audioContext };
                this.log.debug("setting up audio processor ".concat(t2.name), this.logContext), yield t2.init(i3), this.processor = t2, this.processor.processedTrack && (yield null === (n2 = this.sender) || void 0 === n2 ? void 0 : n2.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(e.TrackEvent.TrackProcessorUpdate, this.processor);
              } finally {
                i2();
              }
            }));
          }
          setAudioContext(e2) {
            this.audioContext = e2;
          }
          getSenderStats() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return;
              let t2;
              return (yield this.sender.getStats()).forEach(((e3) => {
                "outbound-rtp" === e3.type && (t2 = { type: "audio", streamId: e3.id, packetsSent: e3.packetsSent, packetsLost: e3.packetsLost, bytesSent: e3.bytesSent, timestamp: e3.timestamp, roundTripTime: e3.roundTripTime, jitter: e3.jitter });
              })), t2;
            }));
          }
          checkForSilence() {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield eo(this);
              return t2 && (this.isMuted || this.log.warn("silence detected on local audio track", this.logContext), this.emit(e.TrackEvent.AudioSilenceDetected)), t2;
            }));
          }
        }
        const ca = Object.values(nr), da = Object.values(ir), la = Object.values(sr), ua = [nr.h180, nr.h360], ha = [ir.h180, ir.h360], pa = (e2) => [{ scaleResolutionDownBy: 2, fps: e2.encoding.maxFramerate }].map(((t2) => {
          var n2, i2;
          return new Xs(Math.floor(e2.width / t2.scaleResolutionDownBy), Math.floor(e2.height / t2.scaleResolutionDownBy), Math.max(15e4, Math.floor(e2.encoding.maxBitrate / (Math.pow(t2.scaleResolutionDownBy, 2) * ((null !== (n2 = e2.encoding.maxFramerate) && void 0 !== n2 ? n2 : 30) / (null !== (i2 = t2.fps) && void 0 !== i2 ? i2 : 30))))), t2.fps, e2.encoding.priority);
        })), ma = ["q", "h", "f"];
        function ga(e2, t2, n2, i2) {
          var s2, r2;
          let o2 = null == i2 ? void 0 : i2.videoEncoding;
          e2 && (o2 = null == i2 ? void 0 : i2.screenShareEncoding);
          const a2 = null == i2 ? void 0 : i2.simulcast, c2 = null == i2 ? void 0 : i2.scalabilityMode, d2 = null == i2 ? void 0 : i2.videoCodec;
          if (!o2 && !a2 && !c2 || !t2 || !n2) return [{}];
          o2 || (o2 = (function(e3, t3, n3, i3) {
            const s3 = (function(e4, t4, n4) {
              if (e4) return la;
              const i4 = t4 > n4 ? t4 / n4 : n4 / t4;
              if (Math.abs(i4 - 16 / 9) < Math.abs(i4 - 4 / 3)) return ca;
              return da;
            })(e3, t3, n3);
            let { encoding: r3 } = s3[0];
            const o3 = Math.max(t3, n3);
            for (let e4 = 0; e4 < s3.length; e4 += 1) {
              const t4 = s3[e4];
              if (r3 = t4.encoding, t4.width >= o3) break;
            }
            if (i3) switch (i3) {
              case "av1":
              case "h265":
                r3 = Object.assign({}, r3), r3.maxBitrate = 0.7 * r3.maxBitrate;
                break;
              case "vp9":
                r3 = Object.assign({}, r3), r3.maxBitrate = 0.85 * r3.maxBitrate;
            }
            return r3;
          })(e2, t2, n2, d2), Wn.debug("using video encoding", o2));
          const l2 = o2.maxFramerate, u2 = new Xs(t2, n2, o2.maxBitrate, o2.maxFramerate, o2.priority);
          if (c2 && ur(d2)) {
            const e3 = new ba(c2), t3 = [];
            if (e3.spatial > 3) throw new Error("unsupported scalabilityMode: ".concat(c2));
            const n3 = Vs();
            if (vr() || yr() || "Chrome" === (null == n3 ? void 0 : n3.name) && wr(null == n3 ? void 0 : n3.version, "113") < 0) {
              const i3 = "h" == e3.suffix ? 2 : 3, s3 = (function(e4) {
                return e4 || (e4 = Vs()), "Safari" === (null == e4 ? void 0 : e4.name) && wr(e4.version, "18.3") > 0 || "iOS" === (null == e4 ? void 0 : e4.os) && !!(null == e4 ? void 0 : e4.osVersion) && wr(e4.osVersion, "18.3") > 0;
              })(n3);
              for (let n4 = 0; n4 < e3.spatial; n4 += 1) t3.push({ rid: ma[2 - n4], maxBitrate: o2.maxBitrate / Math.pow(i3, n4), maxFramerate: u2.encoding.maxFramerate, scaleResolutionDownBy: s3 ? Math.pow(2, n4) : void 0 });
              t3[0].scalabilityMode = c2;
            } else t3.push({ maxBitrate: o2.maxBitrate, maxFramerate: u2.encoding.maxFramerate, scalabilityMode: c2 });
            return u2.encoding.priority && (t3[0].priority = u2.encoding.priority, t3[0].networkPriority = u2.encoding.priority), Wn.debug("using svc encoding", { encodings: t3 }), t3;
          }
          if (!a2) return [o2];
          let h2, p2 = [];
          if (p2 = e2 ? null !== (s2 = ka(null == i2 ? void 0 : i2.screenShareSimulcastLayers)) && void 0 !== s2 ? s2 : va(e2, u2) : null !== (r2 = ka(null == i2 ? void 0 : i2.videoSimulcastLayers)) && void 0 !== r2 ? r2 : va(e2, u2), p2.length > 0) {
            const e3 = p2[0];
            p2.length > 1 && ([, h2] = p2);
            const i3 = Math.max(t2, n2);
            if (i3 >= 960 && h2) return fa(t2, n2, [e3, h2, u2], l2);
            if (i3 >= 480) return fa(t2, n2, [e3, u2], l2);
          }
          return fa(t2, n2, [u2]);
        }
        function va(e2, t2) {
          if (e2) return pa(t2);
          const { width: n2, height: i2 } = t2, s2 = n2 > i2 ? n2 / i2 : i2 / n2;
          return Math.abs(s2 - 16 / 9) < Math.abs(s2 - 4 / 3) ? ua : ha;
        }
        function fa(e2, t2, n2, i2) {
          const s2 = [];
          if (n2.forEach(((n3, r2) => {
            if (r2 >= ma.length) return;
            const o2 = Math.min(e2, t2), a2 = { rid: ma[r2], scaleResolutionDownBy: Math.max(1, o2 / Math.min(n3.width, n3.height)), maxBitrate: n3.encoding.maxBitrate }, c2 = i2 && n3.encoding.maxFramerate ? Math.min(i2, n3.encoding.maxFramerate) : n3.encoding.maxFramerate;
            c2 && (a2.maxFramerate = c2);
            const d2 = mr() || 0 === r2;
            n3.encoding.priority && d2 && (a2.priority = n3.encoding.priority, a2.networkPriority = n3.encoding.priority), s2.push(a2);
          })), yr() && "ios" === Sr()) {
            let e3;
            s2.forEach(((t4) => {
              e3 ? t4.maxFramerate && t4.maxFramerate > e3 && (e3 = t4.maxFramerate) : e3 = t4.maxFramerate;
            }));
            let t3 = true;
            s2.forEach(((n3) => {
              var i3;
              n3.maxFramerate != e3 && (t3 && (t3 = false, Wn.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), Wn.info('Setting framerate of encoding "'.concat(null !== (i3 = n3.rid) && void 0 !== i3 ? i3 : "", '" to ').concat(e3)), n3.maxFramerate = e3);
            }));
          }
          return s2;
        }
        function ka(e2) {
          if (e2) return e2.sort(((e3, t2) => {
            const { encoding: n2 } = e3, { encoding: i2 } = t2;
            return n2.maxBitrate > i2.maxBitrate ? 1 : n2.maxBitrate < i2.maxBitrate ? -1 : n2.maxBitrate === i2.maxBitrate && n2.maxFramerate && i2.maxFramerate ? n2.maxFramerate > i2.maxFramerate ? 1 : -1 : 0;
          }));
        }
        class ba {
          constructor(e2) {
            const t2 = e2.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
            if (!t2) throw new Error("invalid scalability mode");
            if (this.spatial = parseInt(t2[1]), this.temporal = parseInt(t2[2]), t2.length > 3) switch (t2[3]) {
              case "h":
              case "_KEY":
              case "_KEY_SHIFT":
                this.suffix = t2[3];
            }
          }
          toString() {
            var e2;
            return "L".concat(this.spatial, "T").concat(this.temporal).concat(null !== (e2 = this.suffix) && void 0 !== e2 ? e2 : "");
          }
        }
        class ya extends oa {
          get sender() {
            return this._sender;
          }
          set sender(e2) {
            this._sender = e2, this.degradationPreference && this.setDegradationPreference(this.degradationPreference);
          }
          constructor(t2, n2) {
            let i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r2 = arguments.length > 3 ? arguments[3] : void 0;
            super(t2, Js.Kind.Video, n2, i2, r2), this.simulcastCodecs = /* @__PURE__ */ new Map(), this.degradationPreference = "balanced", this.isCpuConstrained = false, this.optimizeForPerformance = false, this.monitorSender = () => Zn(this, void 0, void 0, (function* () {
              if (!this.sender) return void (this._currentBitrate = 0);
              let t3;
              try {
                t3 = yield this.getSenderStats();
              } catch (e2) {
                return void this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
              }
              const n3 = new Map(t3.map(((e2) => [e2.rid, e2]))), i3 = t3.some(((e2) => "cpu" === e2.qualityLimitationReason));
              if (i3 !== this.isCpuConstrained && (this.isCpuConstrained = i3, this.isCpuConstrained && this.emit(e.TrackEvent.CpuConstrained)), this.prevStats) {
                let e2 = 0;
                n3.forEach(((t4, n4) => {
                  var i4;
                  const s2 = null === (i4 = this.prevStats) || void 0 === i4 ? void 0 : i4.get(n4);
                  e2 += na(t4, s2);
                })), this._currentBitrate = e2;
              }
              this.prevStats = n3;
            })), this.senderLock = new s();
          }
          get isSimulcast() {
            return !!(this.sender && this.sender.getParameters().encodings.length > 1);
          }
          startMonitor(e2) {
            var t2;
            if (this.signalClient = e2, !br()) return;
            const n2 = null === (t2 = this.sender) || void 0 === t2 ? void 0 : t2.getParameters();
            n2 && (this.encodings = n2.encodings), this.monitorInterval || (this.monitorInterval = setInterval((() => {
              this.monitorSender();
            }), ta));
          }
          stop() {
            this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach(((e2) => {
              e2.mediaStreamTrack.stop();
            })), super.stop();
          }
          pauseUpstream() {
            const e2 = Object.create(null, { pauseUpstream: { get: () => super.pauseUpstream } });
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2, s2, r2;
              yield e2.pauseUpstream.call(this);
              try {
                for (var o2, a2 = true, c2 = ei(this.simulcastCodecs.values()); !(t2 = (o2 = yield c2.next()).done); a2 = true) {
                  s2 = o2.value, a2 = false;
                  const e3 = s2;
                  yield null === (r2 = e3.sender) || void 0 === r2 ? void 0 : r2.replaceTrack(null);
                }
              } catch (e3) {
                n2 = { error: e3 };
              } finally {
                try {
                  a2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
                } finally {
                  if (n2) throw n2.error;
                }
              }
            }));
          }
          resumeUpstream() {
            const e2 = Object.create(null, { resumeUpstream: { get: () => super.resumeUpstream } });
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2, s2, r2;
              yield e2.resumeUpstream.call(this);
              try {
                for (var o2, a2 = true, c2 = ei(this.simulcastCodecs.values()); !(t2 = (o2 = yield c2.next()).done); a2 = true) {
                  s2 = o2.value, a2 = false;
                  const e3 = s2;
                  yield null === (r2 = e3.sender) || void 0 === r2 ? void 0 : r2.replaceTrack(e3.mediaStreamTrack);
                }
              } catch (e3) {
                n2 = { error: e3 };
              } finally {
                try {
                  a2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
                } finally {
                  if (n2) throw n2.error;
                }
              }
            }));
          }
          mute() {
            const e2 = Object.create(null, { mute: { get: () => super.mute } });
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield this.muteLock.lock();
              try {
                return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source !== Js.Source.Camera || this.isUserProvided || (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
              } finally {
                t2();
              }
            }));
          }
          unmute() {
            const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield this.muteLock.lock();
              try {
                return this.isMuted ? (this.source !== Js.Source.Camera || this.isUserProvided || (this.log.debug("reacquiring camera track", this.logContext), yield this.restartTrack()), yield e2.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
              } finally {
                t2();
              }
            }));
          }
          setTrackMuted(e2) {
            super.setTrackMuted(e2);
            for (const t2 of this.simulcastCodecs.values()) t2.mediaStreamTrack.enabled = !e2;
          }
          getSenderStats() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return [];
              const t2 = [], n2 = yield this.sender.getStats();
              return n2.forEach(((e3) => {
                var i2;
                if ("outbound-rtp" === e3.type) {
                  const s2 = { type: "video", streamId: e3.id, frameHeight: e3.frameHeight, frameWidth: e3.frameWidth, framesPerSecond: e3.framesPerSecond, framesSent: e3.framesSent, firCount: e3.firCount, pliCount: e3.pliCount, nackCount: e3.nackCount, packetsSent: e3.packetsSent, bytesSent: e3.bytesSent, qualityLimitationReason: e3.qualityLimitationReason, qualityLimitationDurations: e3.qualityLimitationDurations, qualityLimitationResolutionChanges: e3.qualityLimitationResolutionChanges, rid: null !== (i2 = e3.rid) && void 0 !== i2 ? i2 : e3.id, retransmittedPacketsSent: e3.retransmittedPacketsSent, targetBitrate: e3.targetBitrate, timestamp: e3.timestamp }, r2 = n2.get(e3.remoteId);
                  r2 && (s2.jitter = r2.jitter, s2.packetsLost = r2.packetsLost, s2.roundTripTime = r2.roundTripTime), t2.push(s2);
                }
              })), t2.sort(((e3, t3) => {
                var n3, i2;
                return (null !== (n3 = t3.frameWidth) && void 0 !== n3 ? n3 : 0) - (null !== (i2 = e3.frameWidth) && void 0 !== i2 ? i2 : 0);
              })), t2;
            }));
          }
          setPublishingQuality(t2) {
            const n2 = [];
            for (let i2 = e.VideoQuality.LOW; i2 <= e.VideoQuality.HIGH; i2 += 1) n2.push(new bn({ quality: i2, enabled: i2 <= t2 }));
            this.log.debug("setting publishing quality. max quality ".concat(t2), this.logContext), this.setPublishingLayers(ur(this.codec), n2);
          }
          restartTrack(e2) {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2, s2, r2;
              let o2;
              if (e2) {
                const t3 = $r({ video: e2 });
                "boolean" != typeof t3.video && (o2 = t3.video);
              }
              yield this.restart(o2), this.isCpuConstrained = false;
              try {
                for (var a2, c2 = true, d2 = ei(this.simulcastCodecs.values()); !(t2 = (a2 = yield d2.next()).done); c2 = true) {
                  s2 = a2.value, c2 = false;
                  const e3 = s2;
                  e3.sender && "closed" !== (null === (r2 = e3.sender.transport) || void 0 === r2 ? void 0 : r2.state) && (e3.mediaStreamTrack = this.mediaStreamTrack.clone(), yield e3.sender.replaceTrack(e3.mediaStreamTrack));
                }
              } catch (e3) {
                n2 = { error: e3 };
              } finally {
                try {
                  c2 || t2 || !(i2 = d2.return) || (yield i2.call(d2));
                } finally {
                  if (n2) throw n2.error;
                }
              }
            }));
          }
          setProcessor(e2) {
            const t2 = Object.create(null, { setProcessor: { get: () => super.setProcessor } });
            return Zn(this, arguments, void 0, (function(e3) {
              var n2 = this;
              let i2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return (function* () {
                var s2, r2, o2, a2, c2, d2;
                if (yield t2.setProcessor.call(n2, e3, i2), null === (c2 = n2.processor) || void 0 === c2 ? void 0 : c2.processedTrack) try {
                  for (var l2, u2 = true, h2 = ei(n2.simulcastCodecs.values()); !(s2 = (l2 = yield h2.next()).done); u2 = true) {
                    a2 = l2.value, u2 = false;
                    const e4 = a2;
                    yield null === (d2 = e4.sender) || void 0 === d2 ? void 0 : d2.replaceTrack(n2.processor.processedTrack);
                  }
                } catch (e4) {
                  r2 = { error: e4 };
                } finally {
                  try {
                    u2 || s2 || !(o2 = h2.return) || (yield o2.call(h2));
                  } finally {
                    if (r2) throw r2.error;
                  }
                }
              })();
            }));
          }
          setDegradationPreference(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.degradationPreference = e2, this.sender) try {
                this.log.debug("setting degradationPreference to ".concat(e2), this.logContext);
                const t2 = this.sender.getParameters();
                t2.degradationPreference = e2, this.sender.setParameters(t2);
              } catch (e3) {
                this.log.warn("failed to set degradationPreference", Object.assign({ error: e3 }, this.logContext));
              }
            }));
          }
          addSimulcastTrack(e2, t2) {
            if (this.simulcastCodecs.has(e2)) return void this.log.error("".concat(e2, " already added, skipping adding simulcast codec"), this.logContext);
            const n2 = { codec: e2, mediaStreamTrack: this.mediaStreamTrack.clone(), sender: void 0, encodings: t2 };
            return this.simulcastCodecs.set(e2, n2), n2;
          }
          setSimulcastTrackSender(e2, t2) {
            const n2 = this.simulcastCodecs.get(e2);
            n2 && (n2.sender = t2, setTimeout((() => {
              this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs);
            }), 5e3));
          }
          setPublishingCodecs(e2) {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2, s2, r2, o2, a2;
              if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), { codecs: e2, currentCodec: this.codec })), !this.codec && e2.length > 0) return yield this.setPublishingLayers(ur(e2[0].codec), e2[0].qualities), [];
              this.subscribedCodecs = e2;
              const c2 = [];
              try {
                for (t2 = true, n2 = ei(e2); !(s2 = (i2 = yield n2.next()).done); t2 = true) {
                  a2 = i2.value, t2 = false;
                  const e3 = a2;
                  if (this.codec && this.codec !== e3.codec) {
                    const t3 = this.simulcastCodecs.get(e3.codec);
                    if (this.log.debug("try setPublishingCodec for ".concat(e3.codec), Object.assign(Object.assign({}, this.logContext), { simulcastCodecInfo: t3 })), t3 && t3.sender) t3.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(e3.codec), this.logContext), yield Ta(t3.sender, t3.encodings, e3.qualities, this.senderLock, ur(e3.codec), this.log, this.logContext));
                    else for (const t4 of e3.qualities) if (t4.enabled) {
                      c2.push(e3.codec);
                      break;
                    }
                  } else yield this.setPublishingLayers(ur(e3.codec), e3.qualities);
                }
              } catch (e3) {
                r2 = { error: e3 };
              } finally {
                try {
                  t2 || s2 || !(o2 = n2.return) || (yield o2.call(n2));
                } finally {
                  if (r2) throw r2.error;
                }
              }
              return c2;
            }));
          }
          setPublishingLayers(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              this.optimizeForPerformance ? this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })) : (this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })), this.sender && this.encodings && (yield Ta(this.sender, this.encodings, t2, this.senderLock, e2, this.log, this.logContext)));
            }));
          }
          prioritizePerformance() {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.sender) throw new Error("sender not found");
              const e2 = yield this.senderLock.lock();
              try {
                this.optimizeForPerformance = true;
                const e3 = this.sender.getParameters();
                e3.encodings = e3.encodings.map(((e4, t2) => {
                  var n2;
                  return Object.assign(Object.assign({}, e4), { active: 0 === t2, scaleResolutionDownBy: Math.max(1, Math.ceil((null !== (n2 = this.mediaStreamTrack.getSettings().height) && void 0 !== n2 ? n2 : 360) / 360)), scalabilityMode: 0 === t2 && ur(this.codec) ? "L1T3" : void 0, maxFramerate: 0 === t2 ? 15 : 0, maxBitrate: 0 === t2 ? e4.maxBitrate : 0 });
                })), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { encodings: e3.encodings })), this.encodings = e3.encodings, yield this.sender.setParameters(e3);
              } catch (e3) {
                this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { error: e3 })), this.optimizeForPerformance = false;
              } finally {
                e2();
              }
            }));
          }
          handleAppVisibilityChanged() {
            const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
            return Zn(this, void 0, void 0, (function* () {
              yield e2.handleAppVisibilityChanged.call(this), kr() && this.isInBackground && this.source === Js.Source.Camera && (this._mediaStreamTrack.enabled = false);
            }));
          }
        }
        function Ta(e2, t2, n2, i2, s2, r2, o2) {
          return Zn(this, void 0, void 0, (function* () {
            const a2 = yield i2.lock();
            r2.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, o2), { sender: e2, qualities: n2, senderEncodings: t2 }));
            try {
              const i3 = e2.getParameters(), { encodings: a3 } = i3;
              if (!a3) return;
              if (a3.length !== t2.length) return void r2.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, o2), { encodings: a3, senderEncodings: t2 }));
              let c2 = false;
              if (false) ;
              else {
                if (s2) {
                  n2.some(((e3) => e3.enabled)) && n2.forEach(((e3) => e3.enabled = true));
                }
                a3.forEach(((e3, i4) => {
                  var s3;
                  let a4 = null !== (s3 = e3.rid) && void 0 !== s3 ? s3 : "";
                  "" === a4 && (a4 = "q");
                  const d2 = Ca(a4), l2 = n2.find(((e4) => e4.quality === d2));
                  l2 && e3.active !== l2.enabled && (c2 = true, e3.active = l2.enabled, r2.debug("setting layer ".concat(l2.quality, " to ").concat(e3.active ? "enabled" : "disabled"), o2), mr() && (l2.enabled ? (e3.scaleResolutionDownBy = t2[i4].scaleResolutionDownBy, e3.maxBitrate = t2[i4].maxBitrate, e3.maxFrameRate = t2[i4].maxFrameRate) : (e3.scaleResolutionDownBy = 4, e3.maxBitrate = 10, e3.maxFrameRate = 2)));
                }));
              }
              c2 && (i3.encodings = a3, r2.debug("setting encodings", Object.assign(Object.assign({}, o2), { encodings: i3.encodings })), yield e2.setParameters(i3));
            } finally {
              a2();
            }
          }));
        }
        function Ca(t2) {
          switch (t2) {
            case "f":
            default:
              return e.VideoQuality.HIGH;
            case "h":
              return e.VideoQuality.MEDIUM;
            case "q":
              return e.VideoQuality.LOW;
          }
        }
        function Sa(t2, n2, i2, s2) {
          if (!i2) return [new pt({ quality: e.VideoQuality.HIGH, width: t2, height: n2, bitrate: 0, ssrc: 0 })];
          if (s2) {
            const s3 = i2[0].scalabilityMode, r2 = new ba(s3), o2 = [], a2 = "h" == r2.suffix ? 1.5 : 2, c2 = "h" == r2.suffix ? 2 : 3;
            for (let s4 = 0; s4 < r2.spatial; s4 += 1) o2.push(new pt({ quality: Math.min(e.VideoQuality.HIGH, r2.spatial - 1) - s4, width: Math.ceil(t2 / Math.pow(a2, s4)), height: Math.ceil(n2 / Math.pow(a2, s4)), bitrate: i2[0].maxBitrate ? Math.ceil(i2[0].maxBitrate / Math.pow(c2, s4)) : 0, ssrc: 0 }));
            return o2;
          }
          return i2.map(((e2) => {
            var i3, s3, r2;
            const o2 = null !== (i3 = e2.scaleResolutionDownBy) && void 0 !== i3 ? i3 : 1;
            let a2 = Ca(null !== (s3 = e2.rid) && void 0 !== s3 ? s3 : "");
            return new pt({ quality: a2, width: Math.ceil(t2 / o2), height: Math.ceil(n2 / o2), bitrate: null !== (r2 = e2.maxBitrate) && void 0 !== r2 ? r2 : 0, ssrc: 0 });
          }));
        }
        const Ea = "_lossy", wa = "_reliable", Pa = "leave-reconnect";
        var Ra;
        !(function(e2) {
          e2[e2.New = 0] = "New", e2[e2.Connected = 1] = "Connected", e2[e2.Disconnected = 2] = "Disconnected", e2[e2.Reconnecting = 3] = "Reconnecting", e2[e2.Closed = 4] = "Closed";
        })(Ra || (Ra = {}));
        class Ia extends ii.EventEmitter {
          get isClosed() {
            return this._isClosed;
          }
          get pendingReconnect() {
            return !!this.reconnectTimeout;
          }
          constructor(t2) {
            var n2;
            super(), this.options = t2, this.rtcConfig = {}, this.peerConnectionTimeout = Qo.peerConnectionTimeout, this.fullReconnectOnNext = false, this.latestRemoteOfferId = 0, this.subscriberPrimary = false, this.pcState = Ra.New, this._isClosed = true, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = false, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = false, this.log = Wn, this.reliableDataSequence = 1, this.reliableMessageBuffer = new Co(), this.reliableReceivedState = new So(3e4), this.handleDataChannel = (e2) => Zn(this, [e2], void 0, (function(e3) {
              var t3 = this;
              let { channel: n3 } = e3;
              return (function* () {
                if (n3) {
                  if (n3.label === wa) t3.reliableDCSub = n3;
                  else {
                    if (n3.label !== Ea) return;
                    t3.lossyDCSub = n3;
                  }
                  t3.log.debug("on data channel ".concat(n3.id, ", ").concat(n3.label), t3.logContext), n3.onmessage = t3.handleDataMessage;
                }
              })();
            })), this.handleDataMessage = (t3) => Zn(this, void 0, void 0, (function* () {
              var n3, i2;
              const s2 = yield this.dataProcessLock.lock();
              try {
                let s3;
                if (t3.data instanceof ArrayBuffer) s3 = t3.data;
                else {
                  if (!(t3.data instanceof Blob)) return void this.log.error("unsupported data type", Object.assign(Object.assign({}, this.logContext), { data: t3.data }));
                  s3 = yield t3.data.arrayBuffer();
                }
                const r2 = mt.fromBinary(new Uint8Array(s3));
                if (r2.sequence > 0 && "" !== r2.participantSid) {
                  const e2 = this.reliableReceivedState.get(r2.participantSid);
                  if (e2 && r2.sequence <= e2) return;
                  this.reliableReceivedState.set(r2.participantSid, r2.sequence);
                }
                "speaker" === (null === (n3 = r2.value) || void 0 === n3 ? void 0 : n3.case) ? this.emit(e.EngineEvent.ActiveSpeakersUpdate, r2.value.value.speakers) : ("user" === (null === (i2 = r2.value) || void 0 === i2 ? void 0 : i2.case) && (function(e2, t4) {
                  const n4 = e2.participantIdentity ? e2.participantIdentity : t4.participantIdentity;
                  e2.participantIdentity = n4, t4.participantIdentity = n4;
                  const i3 = 0 !== e2.destinationIdentities.length ? e2.destinationIdentities : t4.destinationIdentities;
                  e2.destinationIdentities = i3, t4.destinationIdentities = i3;
                })(r2, r2.value.value), this.emit(e.EngineEvent.DataPacketReceived, r2));
              } finally {
                s2();
              }
            })), this.handleDataError = (e2) => {
              const t3 = 0 === e2.currentTarget.maxRetransmits ? "lossy" : "reliable";
              if (e2 instanceof ErrorEvent && e2.error) {
                const { error: n3 } = e2.error;
                this.log.error("DataChannel error on ".concat(t3, ": ").concat(e2.message), Object.assign(Object.assign({}, this.logContext), { error: n3 }));
              } else this.log.error("Unknown DataChannel error on ".concat(t3), Object.assign(Object.assign({}, this.logContext), { event: e2 }));
            }, this.handleBufferedAmountLow = (e2) => {
              const t3 = 0 === e2.currentTarget.maxRetransmits ? gt.LOSSY : gt.RELIABLE;
              this.updateAndEmitDCBufferStatus(t3);
            }, this.handleDisconnect = (t3, n3) => {
              if (this._isClosed) return;
              this.log.warn("".concat(t3, " disconnected"), this.logContext), 0 === this.reconnectAttempts && (this.reconnectStart = Date.now());
              const i2 = (t4) => {
                this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(t4, "ms. giving up"), this.logContext), this.emit(e.EngineEvent.Disconnected), this.close();
              }, s2 = Date.now() - this.reconnectStart;
              let r2 = this.getNextRetryDelay({ elapsedMs: s2, retryCount: this.reconnectAttempts });
              null !== r2 ? (t3 === Pa && (r2 = 0), this.log.debug("reconnecting in ".concat(r2, "ms"), this.logContext), this.clearReconnectTimeout(), this.token && this.regionUrlProvider && this.regionUrlProvider.updateToken(this.token), this.reconnectTimeout = Gs.setTimeout((() => this.attemptReconnect(n3).finally((() => this.reconnectTimeout = void 0))), r2)) : i2(s2);
            }, this.waitForRestarted = () => new Promise(((t3, n3) => {
              this.pcState === Ra.Connected && t3();
              const i2 = () => {
                this.off(e.EngineEvent.Disconnected, s2), t3();
              }, s2 = () => {
                this.off(e.EngineEvent.Restarted, i2), n3();
              };
              this.once(e.EngineEvent.Restarted, i2), this.once(e.EngineEvent.Disconnected, s2);
            })), this.updateAndEmitDCBufferStatus = (t3) => {
              const n3 = this.isBufferStatusLow(t3);
              void 0 !== n3 && n3 !== this.dcBufferStatus.get(t3) && (this.dcBufferStatus.set(t3, n3), this.emit(e.EngineEvent.DCBufferStatusChanged, n3, t3));
            }, this.isBufferStatusLow = (e2) => {
              const t3 = this.dataChannelForKind(e2);
              if (t3) return e2 === gt.RELIABLE && this.reliableMessageBuffer.alignBufferedAmount(t3.bufferedAmount), t3.bufferedAmount <= t3.bufferedAmountLowThreshold;
            }, this.handleBrowserOnLine = () => {
              this.client.currentState === ko.RECONNECTING && (this.clearReconnectTimeout(), this.attemptReconnect(et.RR_SIGNAL_DISCONNECTED));
            }, this.log = zn(null !== (n2 = t2.loggerName) && void 0 !== n2 ? n2 : e.LoggerNames.Engine), this.loggerOptions = { loggerName: t2.loggerName, loggerContextCb: () => this.logContext }, this.client = new bo(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.registerOnLineListener(), this.closingLock = new s(), this.dataProcessLock = new s(), this.dcBufferStatus = /* @__PURE__ */ new Map([[gt.LOSSY, true], [gt.RELIABLE, true]]), this.client.onParticipantUpdate = (t3) => this.emit(e.EngineEvent.ParticipantUpdate, t3), this.client.onConnectionQuality = (t3) => this.emit(e.EngineEvent.ConnectionQualityUpdate, t3), this.client.onRoomUpdate = (t3) => this.emit(e.EngineEvent.RoomUpdate, t3), this.client.onSubscriptionError = (t3) => this.emit(e.EngineEvent.SubscriptionError, t3), this.client.onSubscriptionPermissionUpdate = (t3) => this.emit(e.EngineEvent.SubscriptionPermissionUpdate, t3), this.client.onSpeakersChanged = (t3) => this.emit(e.EngineEvent.SpeakersChanged, t3), this.client.onStreamStateUpdate = (t3) => this.emit(e.EngineEvent.StreamStateChanged, t3), this.client.onRequestResponse = (t3) => this.emit(e.EngineEvent.SignalRequestResponse, t3);
          }
          get logContext() {
            var e2, t2, n2, i2, s2, r2;
            return { room: null === (t2 = null === (e2 = this.latestJoinResponse) || void 0 === e2 ? void 0 : e2.room) || void 0 === t2 ? void 0 : t2.name, roomID: null === (i2 = null === (n2 = this.latestJoinResponse) || void 0 === n2 ? void 0 : n2.room) || void 0 === i2 ? void 0 : i2.sid, participant: null === (r2 = null === (s2 = this.latestJoinResponse) || void 0 === s2 ? void 0 : s2.participant) || void 0 === r2 ? void 0 : r2.identity, pID: this.participantSid };
          }
          join(t2, n2, i2, s2) {
            return Zn(this, void 0, void 0, (function* () {
              this.url = t2, this.token = n2, this.signalOpts = i2, this.maxJoinAttempts = i2.maxRetries;
              try {
                this.joinAttempts += 1, this.setupSignalClientCallbacks();
                const r2 = yield this.client.join(t2, n2, i2, s2);
                return this._isClosed = false, this.latestJoinResponse = r2, this.subscriberPrimary = r2.subscriberPrimary, this.pcManager || (yield this.configure(r2)), this.subscriberPrimary && !r2.fastPublish || this.negotiate(), this.clientConfiguration = r2.clientConfiguration, this.emit(e.EngineEvent.SignalConnected, r2), r2;
              } catch (r2) {
                if (r2 instanceof Ds && r2.reason === e.ConnectionErrorReason.ServerUnreachable && (this.log.warn("Couldn't connect to server, attempt ".concat(this.joinAttempts, " of ").concat(this.maxJoinAttempts), this.logContext), this.joinAttempts < this.maxJoinAttempts)) return this.join(t2, n2, i2, s2);
                throw r2;
              }
            }));
          }
          close() {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = yield this.closingLock.lock();
              if (this.isClosed) t2();
              else try {
                this._isClosed = true, this.joinAttempts = 0, this.emit(e.EngineEvent.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), yield this.cleanupPeerConnections(), yield this.cleanupClient();
              } finally {
                t2();
              }
            }));
          }
          cleanupPeerConnections() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              yield null === (e2 = this.pcManager) || void 0 === e2 ? void 0 : e2.close(), this.pcManager = void 0;
              const t2 = (e3) => {
                e3 && (e3.close(), e3.onbufferedamountlow = null, e3.onclose = null, e3.onclosing = null, e3.onerror = null, e3.onmessage = null, e3.onopen = null);
              };
              t2(this.lossyDC), t2(this.lossyDCSub), t2(this.reliableDC), t2(this.reliableDCSub), this.lossyDC = void 0, this.lossyDCSub = void 0, this.reliableDC = void 0, this.reliableDCSub = void 0, this.reliableMessageBuffer = new Co(), this.reliableDataSequence = 1, this.reliableReceivedState.clear();
            }));
          }
          cleanupClient() {
            return Zn(this, void 0, void 0, (function* () {
              yield this.client.close(), this.client.resetCallbacks();
            }));
          }
          addTrack(t2) {
            if (this.pendingTrackResolvers[t2.cid]) throw new Ms("a track with the same ID has already been published");
            return new Promise(((n2, i2) => {
              const s2 = setTimeout((() => {
                delete this.pendingTrackResolvers[t2.cid], i2(new Ds("publication of local track timed out, no response from server", e.ConnectionErrorReason.Timeout));
              }), 1e4);
              this.pendingTrackResolvers[t2.cid] = { resolve: (e2) => {
                clearTimeout(s2), n2(e2);
              }, reject: () => {
                clearTimeout(s2), i2(new Error("Cancelled publication by calling unpublish"));
              } }, this.client.sendAddTrack(t2);
            }));
          }
          removeTrack(e2) {
            if (e2.track && this.pendingTrackResolvers[e2.track.id]) {
              const { reject: t2 } = this.pendingTrackResolvers[e2.track.id];
              t2 && t2(), delete this.pendingTrackResolvers[e2.track.id];
            }
            try {
              return this.pcManager.removeTrack(e2), true;
            } catch (e3) {
              this.log.warn("failed to remove track", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
            }
            return false;
          }
          updateMuteStatus(e2, t2) {
            this.client.sendMuteTrack(e2, t2);
          }
          get dataSubscriberReadyState() {
            var e2;
            return null === (e2 = this.reliableDCSub) || void 0 === e2 ? void 0 : e2.readyState;
          }
          getConnectedServerAddress() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              return null === (e2 = this.pcManager) || void 0 === e2 ? void 0 : e2.getConnectedAddress();
            }));
          }
          setRegionUrlProvider(e2) {
            this.regionUrlProvider = e2;
          }
          configure(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2;
              if (this.pcManager && this.pcManager.currentState !== Yo.NEW) return;
              this.participantSid = null === (n2 = t2.participant) || void 0 === n2 ? void 0 : n2.sid;
              const s2 = this.makeRTCConfiguration(t2);
              var r2;
              this.pcManager = new Xo(s2, t2.subscriberPrimary, this.loggerOptions), this.emit(e.EngineEvent.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (e2, t3) => {
                this.client.sendIceCandidate(e2, t3);
              }, this.pcManager.onPublisherOffer = (e2, t3) => {
                this.client.sendOffer(e2, t3);
              }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (n3, i3, s3) => Zn(this, void 0, void 0, (function* () {
                if (this.log.debug("primary PC state changed ".concat(n3), this.logContext), ["closed", "disconnected", "failed"].includes(i3) && (this.publisherConnectionPromise = void 0), n3 === Yo.CONNECTED) {
                  const n4 = this.pcState === Ra.New;
                  this.pcState = Ra.Connected, n4 && this.emit(e.EngineEvent.Connected, t2);
                } else n3 === Yo.FAILED && this.pcState === Ra.Connected && (this.pcState = Ra.Disconnected, this.handleDisconnect("peerconnection failed", "failed" === s3 ? et.RR_SUBSCRIBER_FAILED : et.RR_PUBLISHER_FAILED));
                const r3 = this.client.isDisconnected || this.client.currentState === ko.RECONNECTING, o2 = [Yo.FAILED, Yo.CLOSING, Yo.CLOSED].includes(n3);
                r3 && o2 && !this._isClosed && this.emit(e.EngineEvent.Offline);
              })), this.pcManager.onTrack = (t3) => {
                this.emit(e.EngineEvent.MediaTrackAdded, t3.track, t3.streams[0], t3.receiver);
              }, void 0 !== (r2 = null === (i2 = t2.serverInfo) || void 0 === i2 ? void 0 : i2.protocol) && r2 > 13 || this.createDataChannels();
            }));
          }
          setupSignalClientCallbacks() {
            this.client.onAnswer = (e2, t2) => Zn(this, void 0, void 0, (function* () {
              this.pcManager && (this.log.debug("received server answer", Object.assign(Object.assign({}, this.logContext), { RTCSdpType: e2.type })), yield this.pcManager.setPublisherAnswer(e2, t2));
            })), this.client.onTrickle = (e2, t2) => {
              this.pcManager && (this.log.debug("got ICE candidate from peer", Object.assign(Object.assign({}, this.logContext), { candidate: e2, target: t2 })), this.pcManager.addIceCandidate(e2, t2));
            }, this.client.onOffer = (e2, t2) => Zn(this, void 0, void 0, (function* () {
              if (this.latestRemoteOfferId = t2, !this.pcManager) return;
              const n2 = yield this.pcManager.createSubscriberAnswerFromOffer(e2, t2);
              n2 && this.client.sendAnswer(n2, t2);
            })), this.client.onLocalTrackPublished = (e2) => {
              var t2;
              if (this.log.debug("received trackPublishedResponse", Object.assign(Object.assign({}, this.logContext), { cid: e2.cid, track: null === (t2 = e2.track) || void 0 === t2 ? void 0 : t2.sid })), !this.pendingTrackResolvers[e2.cid]) return void this.log.error("missing track resolver for ".concat(e2.cid), Object.assign(Object.assign({}, this.logContext), { cid: e2.cid }));
              const { resolve: n2 } = this.pendingTrackResolvers[e2.cid];
              delete this.pendingTrackResolvers[e2.cid], n2(e2.track);
            }, this.client.onLocalTrackUnpublished = (t2) => {
              this.emit(e.EngineEvent.LocalTrackUnpublished, t2);
            }, this.client.onLocalTrackSubscribed = (t2) => {
              this.emit(e.EngineEvent.LocalTrackSubscribed, t2);
            }, this.client.onTokenRefresh = (e2) => {
              this.token = e2;
            }, this.client.onRemoteMuteChanged = (t2, n2) => {
              this.emit(e.EngineEvent.RemoteMute, t2, n2);
            }, this.client.onSubscribedQualityUpdate = (t2) => {
              this.emit(e.EngineEvent.SubscribedQualityUpdate, t2);
            }, this.client.onRoomMoved = (t2) => {
              var n2;
              this.participantSid = null === (n2 = t2.participant) || void 0 === n2 ? void 0 : n2.sid, this.latestJoinResponse && (this.latestJoinResponse.room = t2.room), this.emit(e.EngineEvent.RoomMoved, t2);
            }, this.client.onClose = () => {
              this.handleDisconnect("signal", et.RR_SIGNAL_DISCONNECTED);
            }, this.client.onLeave = (t2) => {
              switch (this.log.debug("client leave request", Object.assign(Object.assign({}, this.logContext), { reason: null == t2 ? void 0 : t2.reason })), t2.regions && this.regionUrlProvider && (this.log.debug("updating regions", this.logContext), this.regionUrlProvider.setServerReportedRegions(t2.regions)), t2.action) {
                case dn.DISCONNECT:
                  this.emit(e.EngineEvent.Disconnected, null == t2 ? void 0 : t2.reason), this.close();
                  break;
                case dn.RECONNECT:
                  this.fullReconnectOnNext = true, this.handleDisconnect(Pa);
                  break;
                case dn.RESUME:
                  this.handleDisconnect(Pa);
              }
            };
          }
          makeRTCConfiguration(e2) {
            var t2;
            const n2 = Object.assign({}, this.rtcConfig);
            if ((null === (t2 = this.signalOpts) || void 0 === t2 ? void 0 : t2.e2eeEnabled) && (this.log.debug("E2EE - setting up transports with insertable streams", this.logContext), n2.encodedInsertableStreams = true), e2.iceServers && !n2.iceServers) {
              const t3 = [];
              e2.iceServers.forEach(((e3) => {
                const n3 = { urls: e3.urls };
                e3.username && (n3.username = e3.username), e3.credential && (n3.credential = e3.credential), t3.push(n3);
              })), n2.iceServers = t3;
            }
            return e2.clientConfiguration && e2.clientConfiguration.forceRelay === Ze.ENABLED && (n2.iceTransportPolicy = "relay"), n2.sdpSemantics = "unified-plan", n2.continualGatheringPolicy = "gather_continually", n2;
          }
          createDataChannels() {
            this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null, this.lossyDC.onerror = null), this.reliableDC && (this.reliableDC.onmessage = null, this.reliableDC.onerror = null), this.lossyDC = this.pcManager.createPublisherDataChannel(Ea, { ordered: false, maxRetransmits: 0 }), this.reliableDC = this.pcManager.createPublisherDataChannel(wa, { ordered: true }), this.lossyDC.onmessage = this.handleDataMessage, this.reliableDC.onmessage = this.handleDataMessage, this.lossyDC.onerror = this.handleDataError, this.reliableDC.onerror = this.handleDataError, this.lossyDC.bufferedAmountLowThreshold = 65535, this.reliableDC.bufferedAmountLowThreshold = 65535, this.lossyDC.onbufferedamountlow = this.handleBufferedAmountLow, this.reliableDC.onbufferedamountlow = this.handleBufferedAmountLow);
          }
          createSender(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              if (ar()) {
                return yield this.createTransceiverRTCRtpSender(e2, t2, n2);
              }
              if (cr()) {
                this.log.warn("using add-track fallback", this.logContext);
                return yield this.createRTCRtpSender(e2.mediaStreamTrack);
              }
              throw new _s("Required webRTC APIs not supported on this device");
            }));
          }
          createSimulcastSender(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              if (ar()) return this.createSimulcastTransceiverSender(e2, t2, n2, i2);
              if (cr()) return this.log.debug("using add-track fallback", this.logContext), this.createRTCRtpSender(e2.mediaStreamTrack);
              throw new _s("Cannot stream on this device");
            }));
          }
          createTransceiverRTCRtpSender(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.pcManager) throw new _s("publisher is closed");
              const i2 = [];
              e2.mediaStream && i2.push(e2.mediaStream), Hr(e2) && (e2.codec = t2.videoCodec);
              const s2 = { direction: "sendonly", streams: i2 };
              n2 && (s2.sendEncodings = n2);
              return (yield this.pcManager.addPublisherTransceiver(e2.mediaStreamTrack, s2)).sender;
            }));
          }
          createSimulcastTransceiverSender(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.pcManager) throw new _s("publisher is closed");
              const s2 = { direction: "sendonly" };
              i2 && (s2.sendEncodings = i2);
              const r2 = yield this.pcManager.addPublisherTransceiver(t2.mediaStreamTrack, s2);
              if (n2.videoCodec) return e2.setSimulcastTrackSender(n2.videoCodec, r2.sender), r2.sender;
            }));
          }
          createRTCRtpSender(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.pcManager) throw new _s("publisher is closed");
              return this.pcManager.addPublisherTrack(e2);
            }));
          }
          attemptReconnect(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2, s2;
              if (!this._isClosed) if (this.attemptingReconnect) Wn.warn("already attempting reconnect, returning early", this.logContext);
              else {
                (null === (n2 = this.clientConfiguration) || void 0 === n2 ? void 0 : n2.resumeConnection) !== Ze.DISABLED && (null !== (s2 = null === (i2 = this.pcManager) || void 0 === i2 ? void 0 : i2.currentState) && void 0 !== s2 ? s2 : Yo.NEW) !== Yo.NEW || (this.fullReconnectOnNext = true);
                try {
                  this.attemptingReconnect = true, this.fullReconnectOnNext ? yield this.restartConnection() : yield this.resumeConnection(t2), this.clearPendingReconnect(), this.fullReconnectOnNext = false;
                } catch (t3) {
                  this.reconnectAttempts += 1;
                  let n3 = true;
                  t3 instanceof _s ? (this.log.debug("received unrecoverable error", Object.assign(Object.assign({}, this.logContext), { error: t3 })), n3 = false) : t3 instanceof Oa || (this.fullReconnectOnNext = true), n3 ? this.handleDisconnect("reconnect", et.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up"), this.logContext), this.emit(e.EngineEvent.Disconnected), yield this.close());
                } finally {
                  this.attemptingReconnect = false;
                }
              }
            }));
          }
          getNextRetryDelay(e2) {
            try {
              return this.reconnectPolicy.nextRetryDelayInMs(e2);
            } catch (e3) {
              this.log.warn("encountered error in reconnect policy", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
            }
            return null;
          }
          restartConnection(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2, s2;
              try {
                if (!this.url || !this.token) throw new _s("could not reconnect, url or token not saved");
                let i3;
                this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts), this.logContext), this.emit(e.EngineEvent.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
                try {
                  if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present", this.logContext), new Oa();
                  i3 = yield this.join(null != t2 ? t2 : this.url, this.token, this.signalOpts);
                } catch (t3) {
                  if (t3 instanceof Ds && t3.reason === e.ConnectionErrorReason.NotAllowed) throw new _s("could not reconnect, token might be expired");
                  throw new Oa();
                }
                if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
                if (this.client.setReconnected(), this.emit(e.EngineEvent.SignalRestarted, i3), yield this.waitForPCReconnected(), this.client.currentState !== ko.CONNECTED) throw new Oa("Signal connection got severed during reconnect");
                null === (n2 = this.regionUrlProvider) || void 0 === n2 || n2.resetAttempts(), this.emit(e.EngineEvent.Restarted);
              } catch (e2) {
                const t3 = yield null === (i2 = this.regionUrlProvider) || void 0 === i2 ? void 0 : i2.getNextBestRegionUrl();
                if (t3) return void (yield this.restartConnection(t3));
                throw null === (s2 = this.regionUrlProvider) || void 0 === s2 || s2.resetAttempts(), e2;
              }
            }));
          }
          resumeConnection(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              if (!this.url || !this.token) throw new _s("could not reconnect, url or token not saved");
              if (!this.pcManager) throw new _s("publisher and subscriber connections unset");
              let i2;
              this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts), this.logContext), this.emit(e.EngineEvent.Resuming);
              try {
                this.setupSignalClientCallbacks(), i2 = yield this.client.reconnect(this.url, this.token, this.participantSid, t2);
              } catch (t3) {
                let n3 = "";
                if (t3 instanceof Error && (n3 = t3.message, this.log.error(t3.message, Object.assign(Object.assign({}, this.logContext), { error: t3 }))), t3 instanceof Ds && t3.reason === e.ConnectionErrorReason.NotAllowed) throw new _s("could not reconnect, token might be expired");
                if (t3 instanceof Ds && t3.reason === e.ConnectionErrorReason.LeaveRequest) throw t3;
                throw new Oa(n3);
              }
              if (this.emit(e.EngineEvent.SignalResumed), i2) {
                const e2 = this.makeRTCConfiguration(i2);
                this.pcManager.updateConfiguration(e2), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = i2.serverInfo);
              } else this.log.warn("Did not receive reconnect response", this.logContext);
              if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
              if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== ko.CONNECTED) throw new Oa("Signal connection got severed during reconnect");
              this.client.setReconnected(), "open" === (null === (n2 = this.reliableDC) || void 0 === n2 ? void 0 : n2.readyState) && null === this.reliableDC.id && this.createDataChannels(), (null == i2 ? void 0 : i2.lastMessageSeq) && this.resendReliableMessagesForResume(i2.lastMessageSeq), this.emit(e.EngineEvent.Resumed);
            }));
          }
          waitForPCInitialConnection(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.pcManager) throw new _s("PC manager is closed");
              yield this.pcManager.ensurePCTransportConnection(t2, e2);
            }));
          }
          waitForPCReconnected() {
            return Zn(this, void 0, void 0, (function* () {
              this.pcState = Ra.Reconnecting, this.log.debug("waiting for peer connection to reconnect", this.logContext);
              try {
                if (yield or(2e3), !this.pcManager) throw new _s("PC manager is closed");
                yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = Ra.Connected;
              } catch (t2) {
                throw this.pcState = Ra.Disconnected, new Ds("could not establish PC connection, ".concat(t2.message), e.ConnectionErrorReason.InternalError);
              }
            }));
          }
          publishRpcResponse(e2, t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              const s2 = new mt({ destinationIdentities: [e2], kind: gt.RELIABLE, value: { case: "rpcResponse", value: new wt({ requestId: t2, value: i2 ? { case: "error", value: i2.toProto() } : { case: "payload", value: null != n2 ? n2 : "" } }) } });
              yield this.sendDataPacket(s2, gt.RELIABLE);
            }));
          }
          publishRpcAck(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              const n2 = new mt({ destinationIdentities: [e2], kind: gt.RELIABLE, value: { case: "rpcAck", value: new Et({ requestId: t2 }) } });
              yield this.sendDataPacket(n2, gt.RELIABLE);
            }));
          }
          sendDataPacket(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.ensurePublisherConnected(t2), t2 === gt.RELIABLE && (e2.sequence = this.reliableDataSequence, this.reliableDataSequence += 1);
              const n2 = e2.toBinary(), i2 = this.dataChannelForKind(t2);
              if (i2) {
                if (t2 === gt.RELIABLE && this.reliableMessageBuffer.push({ data: n2, sequence: e2.sequence }), this.attemptingReconnect) return;
                i2.send(n2);
              }
              this.updateAndEmitDCBufferStatus(t2);
            }));
          }
          resendReliableMessagesForResume(e2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.ensurePublisherConnected(gt.RELIABLE);
              const t2 = this.dataChannelForKind(gt.RELIABLE);
              t2 && (this.reliableMessageBuffer.popToSequence(e2), this.reliableMessageBuffer.getAll().forEach(((e3) => {
                t2.send(e3.data);
              }))), this.updateAndEmitDCBufferStatus(gt.RELIABLE);
            }));
          }
          waitForBufferStatusLow(t2) {
            return new Promise(((n2, i2) => Zn(this, void 0, void 0, (function* () {
              if (this.isBufferStatusLow(t2)) n2();
              else {
                const s2 = () => i2("Engine closed");
                for (this.once(e.EngineEvent.Closing, s2); !this.dcBufferStatus.get(t2); ) yield or(10);
                this.off(e.EngineEvent.Closing, s2), n2();
              }
            }))));
          }
          ensureDataTransportConnected(t2) {
            return Zn(this, arguments, void 0, (function(t3) {
              var n2 = this;
              let i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.subscriberPrimary;
              return (function* () {
                var s2;
                if (!n2.pcManager) throw new _s("PC manager is closed");
                const r2 = i2 ? n2.pcManager.subscriber : n2.pcManager.publisher, o2 = i2 ? "Subscriber" : "Publisher";
                if (!r2) throw new Ds("".concat(o2, " connection not set"), e.ConnectionErrorReason.InternalError);
                let a2 = false;
                i2 || n2.dataChannelForKind(t3, i2) || (n2.createDataChannels(), a2 = true), a2 || i2 || n2.pcManager.publisher.isICEConnected || "checking" === n2.pcManager.publisher.getICEConnectionState() || (a2 = true), a2 && n2.negotiate();
                const c2 = n2.dataChannelForKind(t3, i2);
                if ("open" === (null == c2 ? void 0 : c2.readyState)) return;
                const d2 = (/* @__PURE__ */ new Date()).getTime() + n2.peerConnectionTimeout;
                for (; (/* @__PURE__ */ new Date()).getTime() < d2; ) {
                  if (r2.isICEConnected && "open" === (null === (s2 = n2.dataChannelForKind(t3, i2)) || void 0 === s2 ? void 0 : s2.readyState)) return;
                  yield or(50);
                }
                throw new Ds("could not establish ".concat(o2, " connection, state: ").concat(r2.getICEConnectionState()), e.ConnectionErrorReason.InternalError);
              })();
            }));
          }
          ensurePublisherConnected(e2) {
            return Zn(this, void 0, void 0, (function* () {
              this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e2, false)), yield this.publisherConnectionPromise;
            }));
          }
          verifyTransport() {
            return !!this.pcManager && (this.pcManager.currentState === Yo.CONNECTED && !(!this.client.ws || this.client.ws.readyState === WebSocket.CLOSED));
          }
          negotiate() {
            return Zn(this, void 0, void 0, (function* () {
              return new Promise(((t2, n2) => Zn(this, void 0, void 0, (function* () {
                if (!this.pcManager) return void n2(new Ns("PC manager is closed"));
                this.pcManager.requirePublisher(), 0 != this.pcManager.publisher.getTransceivers().length || this.lossyDC || this.reliableDC || this.createDataChannels();
                const i2 = new AbortController(), s2 = () => {
                  i2.abort(), this.log.debug("engine disconnected while negotiation was ongoing", this.logContext), t2();
                };
                this.isClosed && n2("cannot negotiate on closed engine"), this.on(e.EngineEvent.Closing, s2), this.pcManager.publisher.once(Fo, ((t3) => {
                  const n3 = /* @__PURE__ */ new Map();
                  t3.forEach(((e2) => {
                    const t4 = e2.codec.toLowerCase();
                    var i3;
                    i3 = t4, $s.includes(i3) && n3.set(e2.payload, t4);
                  })), this.emit(e.EngineEvent.RTPVideoMapUpdate, n3);
                }));
                try {
                  yield this.pcManager.negotiate(i2), t2();
                } catch (e2) {
                  e2 instanceof Ns && (this.fullReconnectOnNext = true), this.handleDisconnect("negotiation", et.RR_UNKNOWN), n2(e2);
                } finally {
                  this.off(e.EngineEvent.Closing, s2);
                }
              }))));
            }));
          }
          dataChannelForKind(e2, t2) {
            if (t2) {
              if (e2 === gt.LOSSY) return this.lossyDCSub;
              if (e2 === gt.RELIABLE) return this.reliableDCSub;
            } else {
              if (e2 === gt.LOSSY) return this.lossyDC;
              if (e2 === gt.RELIABLE) return this.reliableDC;
            }
          }
          sendSyncState(e2, t2) {
            var n2, i2;
            if (!this.pcManager) return void this.log.warn("sync state cannot be sent without peer connection setup", this.logContext);
            const s2 = this.pcManager.subscriber.getLocalDescription(), r2 = this.pcManager.subscriber.getRemoteDescription(), o2 = null === (i2 = null === (n2 = this.signalOpts) || void 0 === n2 ? void 0 : n2.autoSubscribe) || void 0 === i2 || i2, a2 = new Array(), c2 = new Array();
            e2.forEach(((e3) => {
              e3.isDesired !== o2 && a2.push(e3.trackSid), e3.isEnabled || c2.push(e3.trackSid);
            })), this.client.sendSyncState(new Pn({ answer: s2 ? To({ sdp: s2.sdp, type: s2.type }) : void 0, offer: r2 ? To({ sdp: r2.sdp, type: r2.type }) : void 0, subscription: new sn({ trackSids: a2, subscribe: !o2, participantTracks: [] }), publishTracks: oo(t2), dataChannels: this.dataChannelsInfo(), trackSidsDisabled: c2, datachannelReceiveStates: this.reliableReceivedState.map(((e3, t3) => new Rn({ publisherSid: t3, lastSeq: e3 }))) }));
          }
          failNext() {
            this.shouldFailNext = true;
          }
          dataChannelsInfo() {
            const e2 = [], t2 = (t3, n2) => {
              void 0 !== (null == t3 ? void 0 : t3.id) && null !== t3.id && e2.push(new In({ label: t3.label, id: t3.id, target: n2 }));
            };
            return t2(this.dataChannelForKind(gt.LOSSY), qt.PUBLISHER), t2(this.dataChannelForKind(gt.RELIABLE), qt.PUBLISHER), t2(this.dataChannelForKind(gt.LOSSY, true), qt.SUBSCRIBER), t2(this.dataChannelForKind(gt.RELIABLE, true), qt.SUBSCRIBER), e2;
          }
          clearReconnectTimeout() {
            this.reconnectTimeout && Gs.clearTimeout(this.reconnectTimeout);
          }
          clearPendingReconnect() {
            this.clearReconnectTimeout(), this.reconnectAttempts = 0;
          }
          registerOnLineListener() {
            br() && window.addEventListener("online", this.handleBrowserOnLine);
          }
          deregisterOnLineListener() {
            br() && window.removeEventListener("online", this.handleBrowserOnLine);
          }
        }
        class Oa extends Error {
        }
        class Da {
          constructor(e2, t2) {
            this.lastUpdateAt = 0, this.settingsCacheTime = 3e3, this.attemptedRegions = [], this.serverUrl = new URL(e2), this.token = t2;
          }
          updateToken(e2) {
            this.token = e2;
          }
          isCloud() {
            return Tr(this.serverUrl);
          }
          getServerUrl() {
            return this.serverUrl;
          }
          getNextBestRegionUrl(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
              (!this.regionSettings || Date.now() - this.lastUpdateAt > this.settingsCacheTime) && (this.regionSettings = yield this.fetchRegionSettings(e2));
              const t2 = this.regionSettings.regions.filter(((e3) => !this.attemptedRegions.find(((t3) => t3.url === e3.url))));
              if (t2.length > 0) {
                const e3 = t2[0];
                return this.attemptedRegions.push(e3), Wn.debug("next region: ".concat(e3.region)), e3.url;
              }
              return null;
            }));
          }
          resetAttempts() {
            this.attemptedRegions = [];
          }
          fetchRegionSettings(t2) {
            return Zn(this, void 0, void 0, (function* () {
              const n2 = yield fetch("".concat((i2 = this.serverUrl, "".concat(i2.protocol.replace("ws", "http"), "//").concat(i2.host, "/settings")), "/regions"), { headers: { authorization: "Bearer ".concat(this.token) }, signal: t2 });
              var i2;
              if (n2.ok) {
                const e2 = yield n2.json();
                return this.lastUpdateAt = Date.now(), e2;
              }
              throw new Ds("Could not fetch region settings: ".concat(n2.statusText), 401 === n2.status ? e.ConnectionErrorReason.NotAllowed : e.ConnectionErrorReason.InternalError, n2.status);
            }));
          }
          setServerReportedRegions(e2) {
            this.regionSettings = e2, this.lastUpdateAt = Date.now();
          }
        }
        class xa {
          get info() {
            return this._info;
          }
          validateBytesReceived() {
            let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ("number" == typeof this.totalByteSize && 0 !== this.totalByteSize) {
              if (t2 && this.bytesReceived < this.totalByteSize) throw new js("Not enough chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, only received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.Incomplete);
              if (this.bytesReceived > this.totalByteSize) throw new js("Extra chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.LengthExceeded);
            }
          }
          constructor(e2, t2, n2, i2) {
            this.reader = t2, this.totalByteSize = n2, this._info = e2, this.bytesReceived = 0, this.outOfBandFailureRejectingFuture = i2;
          }
        }
        class Ma extends xa {
          handleChunkReceived(e2) {
            var t2;
            this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
            const n2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
            null === (t2 = this.onProgress) || void 0 === t2 || t2.call(this, n2);
          }
          [Symbol.asyncIterator]() {
            const e2 = this.reader.getReader();
            let t2 = new Lr(), n2 = null, i2 = null;
            if (this.signal) {
              const e3 = this.signal;
              i2 = () => {
                var n3;
                null === (n3 = t2.reject) || void 0 === n3 || n3.call(t2, e3.reason);
              }, e3.addEventListener("abort", i2), n2 = e3;
            }
            const s2 = () => {
              e2.releaseLock(), n2 && i2 && n2.removeEventListener("abort", i2), this.signal = void 0;
            };
            return { next: () => Zn(this, void 0, void 0, (function* () {
              var n3, i3;
              try {
                const { done: s3, value: r2 } = yield Promise.race([e2.read(), t2.promise, null !== (i3 = null === (n3 = this.outOfBandFailureRejectingFuture) || void 0 === n3 ? void 0 : n3.promise) && void 0 !== i3 ? i3 : new Promise((() => {
                }))]);
                return s3 ? (this.validateBytesReceived(true), { done: true, value: void 0 }) : (this.handleChunkReceived(r2), { done: false, value: r2.content });
              } catch (e3) {
                throw s2(), e3;
              }
            })), return() {
              return Zn(this, void 0, void 0, (function* () {
                return s2(), { done: true, value: void 0 };
              }));
            } };
          }
          withAbortSignal(e2) {
            return this.signal = e2, this;
          }
          readAll() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return (function* () {
                var n2, i2, s2, r2;
                let o2 = /* @__PURE__ */ new Set();
                const a2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
                try {
                  for (var c2, d2 = true, l2 = ei(a2); !(n2 = (c2 = yield l2.next()).done); d2 = true) {
                    r2 = c2.value, d2 = false;
                    const e3 = r2;
                    o2.add(e3);
                  }
                } catch (e3) {
                  i2 = { error: e3 };
                } finally {
                  try {
                    d2 || n2 || !(s2 = l2.return) || (yield s2.call(l2));
                  } finally {
                    if (i2) throw i2.error;
                  }
                }
                return Array.from(o2);
              })();
            }));
          }
        }
        class Aa extends xa {
          constructor(e2, t2, n2, i2) {
            super(e2, t2, n2, i2), this.receivedChunks = /* @__PURE__ */ new Map();
          }
          handleChunkReceived(e2) {
            var t2;
            const n2 = Br(e2.chunkIndex), i2 = this.receivedChunks.get(n2);
            if (i2 && i2.version > e2.version) return;
            this.receivedChunks.set(n2, e2), this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
            const s2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
            null === (t2 = this.onProgress) || void 0 === t2 || t2.call(this, s2);
          }
          [Symbol.asyncIterator]() {
            const t2 = this.reader.getReader(), n2 = new TextDecoder("utf-8", { fatal: true });
            let i2 = new Lr(), s2 = null, r2 = null;
            if (this.signal) {
              const e2 = this.signal;
              r2 = () => {
                var t3;
                null === (t3 = i2.reject) || void 0 === t3 || t3.call(i2, e2.reason);
              }, e2.addEventListener("abort", r2), s2 = e2;
            }
            const o2 = () => {
              t2.releaseLock(), s2 && r2 && s2.removeEventListener("abort", r2), this.signal = void 0;
            };
            return { next: () => Zn(this, void 0, void 0, (function* () {
              var s3, r3;
              try {
                const { done: o3, value: a2 } = yield Promise.race([t2.read(), i2.promise, null !== (r3 = null === (s3 = this.outOfBandFailureRejectingFuture) || void 0 === s3 ? void 0 : s3.promise) && void 0 !== r3 ? r3 : new Promise((() => {
                }))]);
                if (o3) return this.validateBytesReceived(true), { done: true, value: void 0 };
                {
                  let t3;
                  this.handleChunkReceived(a2);
                  try {
                    t3 = n2.decode(a2.content);
                  } catch (t4) {
                    throw new js("Cannot decode datastream chunk ".concat(a2.chunkIndex, " as text: ").concat(t4), e.DataStreamErrorReason.DecodeFailed);
                  }
                  return { done: false, value: t3 };
                }
              } catch (e2) {
                throw o2(), e2;
              }
            })), return() {
              return Zn(this, void 0, void 0, (function* () {
                return o2(), { done: true, value: void 0 };
              }));
            } };
          }
          withAbortSignal(e2) {
            return this.signal = e2, this;
          }
          readAll() {
            return Zn(this, arguments, void 0, (function() {
              var e2 = this;
              let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return (function* () {
                var n2, i2, s2, r2;
                let o2 = "";
                const a2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
                try {
                  for (var c2, d2 = true, l2 = ei(a2); !(n2 = (c2 = yield l2.next()).done); d2 = true) {
                    r2 = c2.value, d2 = false;
                    o2 += r2;
                  }
                } catch (e3) {
                  i2 = { error: e3 };
                } finally {
                  try {
                    d2 || n2 || !(s2 = l2.return) || (yield s2.call(l2));
                  } finally {
                    if (i2) throw i2.error;
                  }
                }
                return o2;
              })();
            }));
          }
        }
        class _a {
          constructor() {
            this.log = Wn, this.byteStreamControllers = /* @__PURE__ */ new Map(), this.textStreamControllers = /* @__PURE__ */ new Map(), this.byteStreamHandlers = /* @__PURE__ */ new Map(), this.textStreamHandlers = /* @__PURE__ */ new Map();
          }
          registerTextStreamHandler(t2, n2) {
            if (this.textStreamHandlers.has(t2)) throw new js('A text stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
            this.textStreamHandlers.set(t2, n2);
          }
          unregisterTextStreamHandler(e2) {
            this.textStreamHandlers.delete(e2);
          }
          registerByteStreamHandler(t2, n2) {
            if (this.byteStreamHandlers.has(t2)) throw new js('A byte stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
            this.byteStreamHandlers.set(t2, n2);
          }
          unregisterByteStreamHandler(e2) {
            this.byteStreamHandlers.delete(e2);
          }
          clearHandlersAndControllers() {
            this.byteStreamControllers.clear(), this.textStreamControllers.clear(), this.byteStreamHandlers.clear(), this.textStreamHandlers.clear();
          }
          validateParticipantHasNoActiveDataStreams(t2) {
            var n2, i2, s2, r2;
            const o2 = Array.from(this.textStreamControllers.entries()).filter(((e2) => e2[1].sendingParticipantIdentity === t2)), a2 = Array.from(this.byteStreamControllers.entries()).filter(((e2) => e2[1].sendingParticipantIdentity === t2));
            if (o2.length > 0 || a2.length > 0) {
              const c2 = new js("Participant ".concat(t2, " unexpectedly disconnected in the middle of sending data"), e.DataStreamErrorReason.AbnormalEnd);
              for (const [e2, t3] of a2) null === (i2 = (n2 = t3.outOfBandFailureRejectingFuture).reject) || void 0 === i2 || i2.call(n2, c2), this.byteStreamControllers.delete(e2);
              for (const [e2, t3] of o2) null === (r2 = (s2 = t3.outOfBandFailureRejectingFuture).reject) || void 0 === r2 || r2.call(s2, c2), this.textStreamControllers.delete(e2);
            }
          }
          handleDataStreamPacket(e2) {
            return Zn(this, void 0, void 0, (function* () {
              switch (e2.value.case) {
                case "streamHeader":
                  return this.handleStreamHeader(e2.value.value, e2.participantIdentity);
                case "streamChunk":
                  return this.handleStreamChunk(e2.value.value);
                case "streamTrailer":
                  return this.handleStreamTrailer(e2.value.value);
                default:
                  throw new Error('DataPacket of value "'.concat(e2.value.case, '" is not data stream related!'));
              }
            }));
          }
          handleStreamHeader(t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              var i2;
              if ("byteHeader" === t2.contentHeader.case) {
                const s2 = this.byteStreamHandlers.get(t2.topic);
                if (!s2) return void this.log.debug("ignoring incoming byte stream due to no handler for topic", t2.topic);
                let r2;
                const o2 = new Lr(), a2 = { id: t2.streamId, name: null !== (i2 = t2.contentHeader.value.name) && void 0 !== i2 ? i2 : "unknown", mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : void 0, topic: t2.topic, timestamp: Br(t2.timestamp), attributes: t2.attributes }, c2 = new ReadableStream({ start: (i3) => {
                  if (r2 = i3, this.textStreamControllers.has(t2.streamId)) throw new js("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
                  this.byteStreamControllers.set(t2.streamId, { info: a2, controller: r2, startTime: Date.now(), sendingParticipantIdentity: n2, outOfBandFailureRejectingFuture: o2 });
                } });
                s2(new Ma(a2, c2, Br(t2.totalLength), o2), { identity: n2 });
              } else if ("textHeader" === t2.contentHeader.case) {
                const i3 = this.textStreamHandlers.get(t2.topic);
                if (!i3) return void this.log.debug("ignoring incoming text stream due to no handler for topic", t2.topic);
                let s2;
                const r2 = new Lr(), o2 = { id: t2.streamId, mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : void 0, topic: t2.topic, timestamp: Number(t2.timestamp), attributes: t2.attributes }, a2 = new ReadableStream({ start: (i4) => {
                  if (s2 = i4, this.textStreamControllers.has(t2.streamId)) throw new js("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
                  this.textStreamControllers.set(t2.streamId, { info: o2, controller: s2, startTime: Date.now(), sendingParticipantIdentity: n2, outOfBandFailureRejectingFuture: r2 });
                } });
                i3(new Aa(o2, a2, Br(t2.totalLength), r2), { identity: n2 });
              }
            }));
          }
          handleStreamChunk(e2) {
            const t2 = this.byteStreamControllers.get(e2.streamId);
            t2 && e2.content.length > 0 && t2.controller.enqueue(e2);
            const n2 = this.textStreamControllers.get(e2.streamId);
            n2 && e2.content.length > 0 && n2.controller.enqueue(e2);
          }
          handleStreamTrailer(e2) {
            const t2 = this.textStreamControllers.get(e2.streamId);
            t2 && (t2.info.attributes = Object.assign(Object.assign({}, t2.info.attributes), e2.attributes), t2.controller.close(), this.textStreamControllers.delete(e2.streamId));
            const n2 = this.byteStreamControllers.get(e2.streamId);
            n2 && (n2.info.attributes = Object.assign(Object.assign({}, n2.info.attributes), e2.attributes), n2.controller.close(), this.byteStreamControllers.delete(e2.streamId));
          }
        }
        class Na {
          constructor(e2, t2, n2) {
            this.writableStream = e2, this.defaultWriter = e2.getWriter(), this.onClose = n2, this.info = t2;
          }
          write(e2) {
            return this.defaultWriter.write(e2);
          }
          close() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), null === (e2 = this.onClose) || void 0 === e2 || e2.call(this);
            }));
          }
        }
        class La extends Na {
        }
        class Ua extends Na {
        }
        class ja {
          constructor(e2, t2) {
            this.engine = e2, this.log = t2;
          }
          setupEngine(e2) {
            this.engine = e2;
          }
          sendText(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2;
              const i2 = crypto.randomUUID(), s2 = new TextEncoder().encode(e2).byteLength, r2 = null === (n2 = null == t2 ? void 0 : t2.attachments) || void 0 === n2 ? void 0 : n2.map((() => crypto.randomUUID())), o2 = new Array(r2 ? r2.length + 1 : 1).fill(0), a2 = (e3, n3) => {
                var i3;
                o2[n3] = e3;
                const s3 = o2.reduce(((e4, t3) => e4 + t3), 0);
                null === (i3 = null == t2 ? void 0 : t2.onProgress) || void 0 === i3 || i3.call(t2, s3);
              }, c2 = yield this.streamText({ streamId: i2, totalSize: s2, destinationIdentities: null == t2 ? void 0 : t2.destinationIdentities, topic: null == t2 ? void 0 : t2.topic, attachedStreamIds: r2, attributes: null == t2 ? void 0 : t2.attributes });
              return yield c2.write(e2), a2(1, 0), yield c2.close(), (null == t2 ? void 0 : t2.attachments) && r2 && (yield Promise.all(t2.attachments.map(((e3, n3) => Zn(this, void 0, void 0, (function* () {
                return this._sendFile(r2[n3], e3, { topic: t2.topic, mimeType: e3.type, onProgress: (e4) => {
                  a2(e4, n3 + 1);
                } });
              })))))), c2.info;
            }));
          }
          streamText(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2;
              const s2 = null !== (n2 = null == t2 ? void 0 : t2.streamId) && void 0 !== n2 ? n2 : crypto.randomUUID(), r2 = { id: s2, mimeType: "text/plain", timestamp: Date.now(), topic: null !== (i2 = null == t2 ? void 0 : t2.topic) && void 0 !== i2 ? i2 : "", size: null == t2 ? void 0 : t2.totalSize, attributes: null == t2 ? void 0 : t2.attributes }, o2 = new Ft({ streamId: s2, mimeType: r2.mimeType, topic: r2.topic, timestamp: Vr(r2.timestamp), totalLength: Vr(null == t2 ? void 0 : t2.totalSize), attributes: r2.attributes, contentHeader: { case: "textHeader", value: new Ut({ version: null == t2 ? void 0 : t2.version, attachedStreamIds: null == t2 ? void 0 : t2.attachedStreamIds, replyToStreamId: null == t2 ? void 0 : t2.replyToStreamId, operationType: "update" === (null == t2 ? void 0 : t2.type) ? Lt.UPDATE : Lt.CREATE }) } }), a2 = null == t2 ? void 0 : t2.destinationIdentities, c2 = new mt({ destinationIdentities: a2, value: { case: "streamHeader", value: o2 } });
              yield this.engine.sendDataPacket(c2, gt.RELIABLE);
              let d2 = 0;
              const l2 = this.engine, u2 = new WritableStream({ write(e2) {
                return Zn(this, void 0, void 0, (function* () {
                  for (const t3 of (function(e3, t4) {
                    const n3 = [];
                    let i3 = new TextEncoder().encode(e3);
                    for (; i3.length > t4; ) {
                      let e4 = t4;
                      for (; e4 > 0; ) {
                        const t5 = i3[e4];
                        if (void 0 !== t5 && 128 != (192 & t5)) break;
                        e4--;
                      }
                      n3.push(i3.slice(0, e4)), i3 = i3.slice(e4);
                    }
                    return i3.length > 0 && n3.push(i3), n3;
                  })(e2, 15e3)) {
                    yield l2.waitForBufferStatusLow(gt.RELIABLE);
                    const e3 = new Bt({ content: t3, streamId: s2, chunkIndex: Vr(d2) }), n3 = new mt({ destinationIdentities: a2, value: { case: "streamChunk", value: e3 } });
                    yield l2.sendDataPacket(n3, gt.RELIABLE), d2 += 1;
                  }
                }));
              }, close() {
                return Zn(this, void 0, void 0, (function* () {
                  const e2 = new Vt({ streamId: s2 }), t3 = new mt({ destinationIdentities: a2, value: { case: "streamTrailer", value: e2 } });
                  yield l2.sendDataPacket(t3, gt.RELIABLE);
                }));
              }, abort(e2) {
                console.log("Sink error:", e2);
              } });
              let h2 = () => Zn(this, void 0, void 0, (function* () {
                yield p2.close();
              }));
              l2.once(e.EngineEvent.Closing, h2);
              const p2 = new La(u2, r2, (() => this.engine.off(e.EngineEvent.Closing, h2)));
              return p2;
            }));
          }
          sendFile(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              const n2 = crypto.randomUUID();
              return yield this._sendFile(n2, e2, t2), { id: n2 };
            }));
          }
          _sendFile(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              var i2;
              const s2 = yield this.streamBytes({ streamId: e2, totalSize: t2.size, name: t2.name, mimeType: null !== (i2 = null == n2 ? void 0 : n2.mimeType) && void 0 !== i2 ? i2 : t2.type, topic: null == n2 ? void 0 : n2.topic, destinationIdentities: null == n2 ? void 0 : n2.destinationIdentities }), r2 = t2.stream().getReader();
              for (; ; ) {
                const { done: e3, value: t3 } = yield r2.read();
                if (e3) break;
                yield s2.write(t3);
              }
              return yield s2.close(), s2.info;
            }));
          }
          streamBytes(e2) {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2, r2, o2;
              const a2 = null !== (t2 = null == e2 ? void 0 : e2.streamId) && void 0 !== t2 ? t2 : crypto.randomUUID(), c2 = null == e2 ? void 0 : e2.destinationIdentities, d2 = { id: a2, mimeType: null !== (n2 = null == e2 ? void 0 : e2.mimeType) && void 0 !== n2 ? n2 : "application/octet-stream", topic: null !== (i2 = null == e2 ? void 0 : e2.topic) && void 0 !== i2 ? i2 : "", timestamp: Date.now(), attributes: null == e2 ? void 0 : e2.attributes, size: null == e2 ? void 0 : e2.totalSize, name: null !== (r2 = null == e2 ? void 0 : e2.name) && void 0 !== r2 ? r2 : "unknown" }, l2 = new Ft({ totalLength: Vr(null !== (o2 = d2.size) && void 0 !== o2 ? o2 : 0), mimeType: d2.mimeType, streamId: a2, topic: d2.topic, timestamp: Vr(Date.now()), attributes: d2.attributes, contentHeader: { case: "byteHeader", value: new jt({ name: d2.name }) } }), u2 = new mt({ destinationIdentities: c2, value: { case: "streamHeader", value: l2 } });
              yield this.engine.sendDataPacket(u2, gt.RELIABLE);
              let h2 = 0;
              const p2 = new s(), m2 = this.engine, g2 = this.log, v2 = new WritableStream({ write(e3) {
                return Zn(this, void 0, void 0, (function* () {
                  const t3 = yield p2.lock();
                  let n3 = 0;
                  try {
                    for (; n3 < e3.byteLength; ) {
                      const t4 = e3.slice(n3, n3 + 15e3);
                      yield m2.waitForBufferStatusLow(gt.RELIABLE);
                      const i3 = new mt({ destinationIdentities: c2, value: { case: "streamChunk", value: new Bt({ content: t4, streamId: a2, chunkIndex: Vr(h2) }) } });
                      yield m2.sendDataPacket(i3, gt.RELIABLE), h2 += 1, n3 += t4.byteLength;
                    }
                  } finally {
                    t3();
                  }
                }));
              }, close() {
                return Zn(this, void 0, void 0, (function* () {
                  const e3 = new Vt({ streamId: a2 }), t3 = new mt({ destinationIdentities: c2, value: { case: "streamTrailer", value: e3 } });
                  yield m2.sendDataPacket(t3, gt.RELIABLE);
                }));
              }, abort(e3) {
                g2.error("Sink error:", e3);
              } });
              return new Ua(v2, d2);
            }));
          }
        }
        class Fa extends Js {
          constructor(e2, t2, n2, i2, s2) {
            super(e2, n2, s2), this.sid = t2, this.receiver = i2;
          }
          get isLocal() {
            return false;
          }
          setMuted(t2) {
            this.isMuted !== t2 && (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
          }
          setMediaStream(t2) {
            this.mediaStream = t2;
            const n2 = (i2) => {
              i2.track === this._mediaStreamTrack && (t2.removeEventListener("removetrack", n2), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(e.TrackEvent.Ended, this));
            };
            t2.addEventListener("removetrack", n2);
          }
          start() {
            this.startMonitor(), super.enable();
          }
          stop() {
            this.stopMonitor(), super.disable();
          }
          getRTCStatsReport() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              if (!(null === (e2 = this.receiver) || void 0 === e2 ? void 0 : e2.getStats)) return;
              return yield this.receiver.getStats();
            }));
          }
          setPlayoutDelay(e2) {
            this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e2 : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended");
          }
          getPlayoutDelay() {
            if (this.receiver) {
              if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
              this.log.warn("Playout delay not supported in this browser");
            } else this.log.warn("Cannot get playout delay, track already ended");
            return 0;
          }
          startMonitor() {
            this.monitorInterval || (this.monitorInterval = setInterval((() => this.monitorReceiver()), ta)), "undefined" != typeof RTCRtpReceiver && "getSynchronizationSources" in RTCRtpReceiver && this.registerTimeSyncUpdate();
          }
          registerTimeSyncUpdate() {
            const t2 = () => {
              var n2;
              this.timeSyncHandle = requestAnimationFrame((() => t2()));
              const i2 = null === (n2 = this.receiver) || void 0 === n2 ? void 0 : n2.getSynchronizationSources()[0];
              if (i2) {
                const { timestamp: t3, rtpTimestamp: n3 } = i2;
                n3 && this.rtpTimestamp !== n3 && (this.emit(e.TrackEvent.TimeSyncUpdate, { timestamp: t3, rtpTimestamp: n3 }), this.rtpTimestamp = n3);
              }
            };
            t2();
          }
        }
        class Ba extends Fa {
          constructor(e2, t2, n2, i2, s2, r2) {
            super(e2, t2, Js.Kind.Audio, n2, r2), this.monitorReceiver = () => Zn(this, void 0, void 0, (function* () {
              if (!this.receiver) return void (this._currentBitrate = 0);
              const e3 = yield this.getReceiverStats();
              e3 && this.prevStats && this.receiver && (this._currentBitrate = na(e3, this.prevStats)), this.prevStats = e3;
            })), this.audioContext = i2, this.webAudioPluginNodes = [], s2 && (this.sinkId = s2.deviceId);
          }
          setVolume(e2) {
            var t2;
            for (const n2 of this.attachedElements) this.audioContext ? null === (t2 = this.gainNode) || void 0 === t2 || t2.gain.setTargetAtTime(e2, 0, 0.1) : n2.volume = e2;
            yr() && this._mediaStreamTrack._setVolume(e2), this.elementVolume = e2;
          }
          getVolume() {
            if (this.elementVolume) return this.elementVolume;
            if (yr()) return 1;
            let e2 = 0;
            return this.attachedElements.forEach(((t2) => {
              t2.volume > e2 && (e2 = t2.volume);
            })), e2;
          }
          setSinkId(e2) {
            return Zn(this, void 0, void 0, (function* () {
              this.sinkId = e2, yield Promise.all(this.attachedElements.map(((t2) => {
                if (hr(t2)) return t2.setSinkId(e2);
              })));
            }));
          }
          attach(e2) {
            const t2 = 0 === this.attachedElements.length;
            return e2 ? super.attach(e2) : e2 = super.attach(), this.sinkId && hr(e2) && e2.setSinkId(this.sinkId).catch(((e3) => {
              this.log.error("Failed to set sink id on remote audio track", e3, this.logContext);
            })), this.audioContext && t2 && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e2), e2.volume = 0, e2.muted = true), this.elementVolume && this.setVolume(this.elementVolume), e2;
          }
          detach(e2) {
            let t2;
            return e2 ? (t2 = super.detach(e2), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t2 = super.detach(), this.disconnectWebAudio()), t2;
          }
          setAudioContext(e2) {
            this.audioContext = e2, e2 && this.attachedElements.length > 0 ? this.connectWebAudio(e2, this.attachedElements[0]) : e2 || this.disconnectWebAudio();
          }
          setWebAudioPlugins(e2) {
            this.webAudioPluginNodes = e2, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0]);
          }
          connectWebAudio(t2, n2) {
            this.disconnectWebAudio(), this.sourceNode = t2.createMediaStreamSource(n2.srcObject);
            let i2 = this.sourceNode;
            this.webAudioPluginNodes.forEach(((e2) => {
              i2.connect(e2), i2 = e2;
            })), this.gainNode = t2.createGain(), i2.connect(this.gainNode), this.gainNode.connect(t2.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1), "running" !== t2.state && t2.resume().then((() => {
              "running" !== t2.state && this.emit(e.TrackEvent.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"));
            })).catch(((t3) => {
              this.emit(e.TrackEvent.AudioPlaybackFailed, t3);
            }));
          }
          disconnectWebAudio() {
            var e2, t2;
            null === (e2 = this.gainNode) || void 0 === e2 || e2.disconnect(), null === (t2 = this.sourceNode) || void 0 === t2 || t2.disconnect(), this.gainNode = void 0, this.sourceNode = void 0;
          }
          getReceiverStats() {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.receiver || !this.receiver.getStats) return;
              let e2;
              return (yield this.receiver.getStats()).forEach(((t2) => {
                "inbound-rtp" === t2.type && (e2 = { type: "audio", streamId: t2.id, timestamp: t2.timestamp, jitter: t2.jitter, bytesReceived: t2.bytesReceived, concealedSamples: t2.concealedSamples, concealmentEvents: t2.concealmentEvents, silentConcealedSamples: t2.silentConcealedSamples, silentConcealmentEvents: t2.silentConcealmentEvents, totalAudioEnergy: t2.totalAudioEnergy, totalSamplesDuration: t2.totalSamplesDuration });
              })), e2;
            }));
          }
        }
        class Va extends Fa {
          constructor(e2, t2, n2, i2, s2) {
            super(e2, t2, Js.Kind.Video, n2, s2), this.elementInfos = [], this.monitorReceiver = () => Zn(this, void 0, void 0, (function* () {
              if (!this.receiver) return void (this._currentBitrate = 0);
              const e3 = yield this.getReceiverStats();
              e3 && this.prevStats && this.receiver && (this._currentBitrate = na(e3, this.prevStats)), this.prevStats = e3;
            })), this.debouncedHandleResize = Lo((() => {
              this.updateDimensions();
            }), 100), this.adaptiveStreamSettings = i2;
          }
          get isAdaptiveStream() {
            return void 0 !== this.adaptiveStreamSettings;
          }
          setStreamState(e2) {
            super.setStreamState(e2), console.log("setStreamState", e2), e2 === Js.StreamState.Active && this.updateVisibility();
          }
          get mediaStreamTrack() {
            return this._mediaStreamTrack;
          }
          setMuted(e2) {
            super.setMuted(e2), this.attachedElements.forEach(((t2) => {
              e2 ? Ys(this._mediaStreamTrack, t2) : Qs(this._mediaStreamTrack, t2);
            }));
          }
          attach(e2) {
            if (e2 ? super.attach(e2) : e2 = super.attach(), this.adaptiveStreamSettings && void 0 === this.elementInfos.find(((t2) => t2.element === e2))) {
              const t2 = new qa(e2);
              this.observeElementInfo(t2);
            }
            return e2;
          }
          observeElementInfo(e2) {
            this.adaptiveStreamSettings && void 0 === this.elementInfos.find(((t2) => t2 === e2)) ? (e2.handleResize = () => {
              this.debouncedHandleResize();
            }, e2.handleVisibilityChanged = () => {
              this.updateVisibility();
            }, this.elementInfos.push(e2), e2.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext);
          }
          stopObservingElementInfo(e2) {
            if (!this.isAdaptiveStream) return void this.log.warn("stopObservingElementInfo ignored", this.logContext);
            const t2 = this.elementInfos.filter(((t3) => t3 === e2));
            for (const e3 of t2) e3.stopObserving();
            this.elementInfos = this.elementInfos.filter(((t3) => t3 !== e2)), this.updateVisibility(), this.debouncedHandleResize();
          }
          detach(e2) {
            let t2 = [];
            if (e2) return this.stopObservingElement(e2), super.detach(e2);
            t2 = super.detach();
            for (const e3 of t2) this.stopObservingElement(e3);
            return t2;
          }
          getDecoderImplementation() {
            var e2;
            return null === (e2 = this.prevStats) || void 0 === e2 ? void 0 : e2.decoderImplementation;
          }
          getReceiverStats() {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.receiver || !this.receiver.getStats) return;
              const e2 = yield this.receiver.getStats();
              let t2, n2 = "", i2 = /* @__PURE__ */ new Map();
              return e2.forEach(((e3) => {
                "inbound-rtp" === e3.type ? (n2 = e3.codecId, t2 = { type: "video", streamId: e3.id, framesDecoded: e3.framesDecoded, framesDropped: e3.framesDropped, framesReceived: e3.framesReceived, packetsReceived: e3.packetsReceived, packetsLost: e3.packetsLost, frameWidth: e3.frameWidth, frameHeight: e3.frameHeight, pliCount: e3.pliCount, firCount: e3.firCount, nackCount: e3.nackCount, jitter: e3.jitter, timestamp: e3.timestamp, bytesReceived: e3.bytesReceived, decoderImplementation: e3.decoderImplementation }) : "codec" === e3.type && i2.set(e3.id, e3);
              })), t2 && "" !== n2 && i2.get(n2) && (t2.mimeType = i2.get(n2).mimeType), t2;
            }));
          }
          stopObservingElement(e2) {
            const t2 = this.elementInfos.filter(((t3) => t3.element === e2));
            for (const e3 of t2) this.stopObservingElementInfo(e3);
          }
          handleAppVisibilityChanged() {
            const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
            return Zn(this, void 0, void 0, (function* () {
              yield e2.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility();
            }));
          }
          updateVisibility(t2) {
            var n2, i2;
            const s2 = this.elementInfos.reduce(((e2, t3) => Math.max(e2, t3.visibilityChangedAt || 0)), 0), r2 = !(null !== (i2 = null === (n2 = this.adaptiveStreamSettings) || void 0 === n2 ? void 0 : n2.pauseVideoInBackground) && void 0 !== i2 && !i2) && this.isInBackground, o2 = this.elementInfos.some(((e2) => e2.pictureInPicture)), a2 = this.elementInfos.some(((e2) => e2.visible)) && !r2 || o2;
            (this.lastVisible !== a2 || t2) && (!a2 && Date.now() - s2 < 100 ? Gs.setTimeout((() => {
              this.updateVisibility();
            }), 100) : (this.lastVisible = a2, this.emit(e.TrackEvent.VisibilityChanged, a2, this)));
          }
          updateDimensions() {
            var t2, n2;
            let i2 = 0, s2 = 0;
            const r2 = this.getPixelDensity();
            for (const e2 of this.elementInfos) {
              const t3 = e2.width() * r2, n3 = e2.height() * r2;
              t3 + n3 > i2 + s2 && (i2 = t3, s2 = n3);
            }
            (null === (t2 = this.lastDimensions) || void 0 === t2 ? void 0 : t2.width) === i2 && (null === (n2 = this.lastDimensions) || void 0 === n2 ? void 0 : n2.height) === s2 || (this.lastDimensions = { width: i2, height: s2 }, this.emit(e.TrackEvent.VideoDimensionsChanged, this.lastDimensions, this));
          }
          getPixelDensity() {
            var e2;
            const t2 = null === (e2 = this.adaptiveStreamSettings) || void 0 === e2 ? void 0 : e2.pixelDensity;
            if ("screen" === t2) return Er();
            if (!t2) {
              return Er() > 2 ? 2 : 1;
            }
            return t2;
          }
        }
        class qa {
          get visible() {
            return this.isPiP || this.isIntersecting;
          }
          get pictureInPicture() {
            return this.isPiP;
          }
          constructor(e2, t2) {
            this.onVisibilityChanged = (e3) => {
              var t3;
              const { target: n2, isIntersecting: i2 } = e3;
              n2 === this.element && (this.isIntersecting = i2, this.isPiP = Ka(this.element), this.visibilityChangedAt = Date.now(), null === (t3 = this.handleVisibilityChanged) || void 0 === t3 || t3.call(this));
            }, this.onEnterPiP = () => {
              var e3, t3, n2;
              null === (t3 = null === (e3 = window.documentPictureInPicture) || void 0 === e3 ? void 0 : e3.window) || void 0 === t3 || t3.addEventListener("pagehide", this.onLeavePiP), this.isPiP = Ka(this.element), null === (n2 = this.handleVisibilityChanged) || void 0 === n2 || n2.call(this);
            }, this.onLeavePiP = () => {
              var e3;
              this.isPiP = Ka(this.element), null === (e3 = this.handleVisibilityChanged) || void 0 === e3 || e3.call(this);
            }, this.element = e2, this.isIntersecting = null != t2 ? t2 : Ha(e2), this.isPiP = br() && Ka(e2), this.visibilityChangedAt = 0;
          }
          width() {
            return this.element.clientWidth;
          }
          height() {
            return this.element.clientHeight;
          }
          observe() {
            var e2, t2, n2;
            this.isIntersecting = Ha(this.element), this.isPiP = Ka(this.element), this.element.handleResize = () => {
              var e3;
              null === (e3 = this.handleResize) || void 0 === e3 || e3.call(this);
            }, this.element.handleVisibilityChanged = this.onVisibilityChanged, xr().observe(this.element), Or().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), null === (e2 = window.documentPictureInPicture) || void 0 === e2 || e2.addEventListener("enter", this.onEnterPiP), null === (n2 = null === (t2 = window.documentPictureInPicture) || void 0 === t2 ? void 0 : t2.window) || void 0 === n2 || n2.addEventListener("pagehide", this.onLeavePiP);
          }
          stopObserving() {
            var e2, t2, n2, i2, s2;
            null === (e2 = xr()) || void 0 === e2 || e2.unobserve(this.element), null === (t2 = Or()) || void 0 === t2 || t2.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), null === (n2 = window.documentPictureInPicture) || void 0 === n2 || n2.removeEventListener("enter", this.onEnterPiP), null === (s2 = null === (i2 = window.documentPictureInPicture) || void 0 === i2 ? void 0 : i2.window) || void 0 === s2 || s2.removeEventListener("pagehide", this.onLeavePiP);
          }
        }
        function Ka(e2) {
          var t2, n2;
          return document.pictureInPictureElement === e2 || !!(null === (t2 = window.documentPictureInPicture) || void 0 === t2 ? void 0 : t2.window) && Ha(e2, null === (n2 = window.documentPictureInPicture) || void 0 === n2 ? void 0 : n2.window);
        }
        function Ha(e2, t2) {
          const n2 = t2 || window;
          let i2 = e2.offsetTop, s2 = e2.offsetLeft;
          const r2 = e2.offsetWidth, o2 = e2.offsetHeight, { hidden: a2 } = e2, { display: c2 } = getComputedStyle(e2);
          for (; e2.offsetParent; ) i2 += (e2 = e2.offsetParent).offsetTop, s2 += e2.offsetLeft;
          return i2 < n2.pageYOffset + n2.innerHeight && s2 < n2.pageXOffset + n2.innerWidth && i2 + o2 > n2.pageYOffset && s2 + r2 > n2.pageXOffset && !a2 && "none" !== c2;
        }
        class Wa extends ii.EventEmitter {
          constructor(t2, n2, i2, s2) {
            var r2;
            super(), this.metadataMuted = false, this.encryption = lt.NONE, this.log = Wn, this.handleMuted = () => {
              this.emit(e.TrackEvent.Muted);
            }, this.handleUnmuted = () => {
              this.emit(e.TrackEvent.Unmuted);
            }, this.log = zn(null !== (r2 = null == s2 ? void 0 : s2.loggerName) && void 0 !== r2 ? r2 : e.LoggerNames.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = t2, this.trackSid = n2, this.trackName = i2, this.source = Js.Source.Unknown;
          }
          setTrack(t2) {
            this.track && (this.track.off(e.TrackEvent.Muted, this.handleMuted), this.track.off(e.TrackEvent.Unmuted, this.handleUnmuted)), this.track = t2, t2 && (t2.on(e.TrackEvent.Muted, this.handleMuted), t2.on(e.TrackEvent.Unmuted, this.handleUnmuted));
          }
          get logContext() {
            var e2;
            return Object.assign(Object.assign({}, null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)), ao(this));
          }
          get isMuted() {
            return this.metadataMuted;
          }
          get isEnabled() {
            return true;
          }
          get isSubscribed() {
            return void 0 !== this.track;
          }
          get isEncrypted() {
            return this.encryption !== lt.NONE;
          }
          get audioTrack() {
            if (Kr(this.track)) return this.track;
          }
          get videoTrack() {
            if (Hr(this.track)) return this.track;
          }
          updateInfo(e2) {
            this.trackSid = e2.sid, this.trackName = e2.name, this.source = Js.sourceFromProto(e2.source), this.mimeType = e2.mimeType, this.kind === Js.Kind.Video && e2.width > 0 && (this.dimensions = { width: e2.width, height: e2.height }, this.simulcasted = e2.simulcast), this.encryption = e2.encryption, this.trackInfo = e2, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), { info: e2 }));
          }
        }
        !(function(e2) {
          var t2, n2;
          (t2 = e2.SubscriptionStatus || (e2.SubscriptionStatus = {})).Desired = "desired", t2.Subscribed = "subscribed", t2.Unsubscribed = "unsubscribed", (n2 = e2.PermissionStatus || (e2.PermissionStatus = {})).Allowed = "allowed", n2.NotAllowed = "not_allowed";
        })(Wa || (Wa = {}));
        class Ga extends Wa {
          get isUpstreamPaused() {
            var e2;
            return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.isUpstreamPaused;
          }
          constructor(t2, n2, i2, s2) {
            super(t2, n2.sid, n2.name, s2), this.track = void 0, this.handleTrackEnded = () => {
              this.emit(e.TrackEvent.Ended);
            }, this.handleCpuConstrained = () => {
              this.track && Hr(this.track) && this.emit(e.TrackEvent.CpuConstrained, this.track);
            }, this.updateInfo(n2), this.setTrack(i2);
          }
          setTrack(t2) {
            this.track && (this.track.off(e.TrackEvent.Ended, this.handleTrackEnded), this.track.off(e.TrackEvent.CpuConstrained, this.handleCpuConstrained)), super.setTrack(t2), t2 && (t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.CpuConstrained, this.handleCpuConstrained));
          }
          get isMuted() {
            return this.track ? this.track.isMuted : super.isMuted;
          }
          get audioTrack() {
            return super.audioTrack;
          }
          get videoTrack() {
            return super.videoTrack;
          }
          get isLocal() {
            return true;
          }
          mute() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.mute();
            }));
          }
          unmute() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.unmute();
            }));
          }
          pauseUpstream() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              yield null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.pauseUpstream();
            }));
          }
          resumeUpstream() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              yield null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.resumeUpstream();
            }));
          }
          getTrackFeatures() {
            var e2;
            if (Kr(this.track)) {
              const t2 = this.track.getSourceTrackSettings(), n2 = /* @__PURE__ */ new Set();
              return t2.autoGainControl && n2.add(nt.TF_AUTO_GAIN_CONTROL), t2.echoCancellation && n2.add(nt.TF_ECHO_CANCELLATION), t2.noiseSuppression && n2.add(nt.TF_NOISE_SUPPRESSION), t2.channelCount && t2.channelCount > 1 && n2.add(nt.TF_STEREO), (null === (e2 = this.options) || void 0 === e2 ? void 0 : e2.dtx) || n2.add(nt.TF_NO_DTX), this.track.enhancedNoiseCancellation && n2.add(nt.TF_ENHANCED_NOISE_CANCELLATION), Array.from(n2.values());
            }
            return [];
          }
        }
        function za(e2, t2) {
          return Zn(this, void 0, void 0, (function* () {
            null != e2 || (e2 = {});
            let n2 = false;
            const { audioProcessor: i2, videoProcessor: s2, optionsWithoutProcessor: r2 } = co(e2);
            let o2 = r2.audio, a2 = r2.video;
            if (i2 && "object" == typeof r2.audio && (r2.audio.processor = i2), s2 && "object" == typeof r2.video && (r2.video.processor = s2), e2.audio && "object" == typeof r2.audio && "string" == typeof r2.audio.deviceId) {
              const e3 = r2.audio.deviceId;
              r2.audio.deviceId = { exact: e3 }, n2 = true, o2 = Object.assign(Object.assign({}, r2.audio), { deviceId: { ideal: e3 } });
            }
            if (r2.video && "object" == typeof r2.video && "string" == typeof r2.video.deviceId) {
              const e3 = r2.video.deviceId;
              r2.video.deviceId = { exact: e3 }, n2 = true, a2 = Object.assign(Object.assign({}, r2.video), { deviceId: { ideal: e3 } });
            }
            (true === r2.audio || "object" == typeof r2.audio && !r2.audio.deviceId) && (r2.audio = { deviceId: "default" }), true === r2.video ? r2.video = { deviceId: "default" } : "object" != typeof r2.video || r2.video.deviceId || (r2.video.deviceId = "default");
            const c2 = Xr(r2, Go, zo), d2 = $r(c2), l2 = navigator.mediaDevices.getUserMedia(d2);
            r2.audio && (po.userMediaPromiseMap.set("audioinput", l2), l2.catch((() => po.userMediaPromiseMap.delete("audioinput")))), r2.video && (po.userMediaPromiseMap.set("videoinput", l2), l2.catch((() => po.userMediaPromiseMap.delete("videoinput"))));
            try {
              const e3 = yield l2;
              return yield Promise.all(e3.getTracks().map(((n3) => Zn(this, void 0, void 0, (function* () {
                const r3 = "audio" === n3.kind;
                let o3, a3 = r3 ? c2.audio : c2.video;
                "boolean" != typeof a3 && a3 || (a3 = {});
                const l3 = r3 ? d2.audio : d2.video;
                "boolean" != typeof l3 && (o3 = l3);
                const u2 = n3.getSettings().deviceId;
                (null == o3 ? void 0 : o3.deviceId) && Ur(o3.deviceId) !== u2 ? o3.deviceId = u2 : o3 || (o3 = { deviceId: u2 });
                const h2 = (function(e4, t3, n4) {
                  switch (e4.kind) {
                    case "audio":
                      return new aa(e4, t3, false, void 0, n4);
                    case "video":
                      return new ya(e4, t3, false, n4);
                    default:
                      throw new Ms("unsupported track type: ".concat(e4.kind));
                  }
                })(n3, o3, t2);
                return h2.kind === Js.Kind.Video ? h2.source = Js.Source.Camera : h2.kind === Js.Kind.Audio && (h2.source = Js.Source.Microphone), h2.mediaStream = e3, Kr(h2) && i2 ? yield h2.setProcessor(i2) : Hr(h2) && s2 && (yield h2.setProcessor(s2)), h2;
              })))));
            } catch (i3) {
              if (!n2) throw i3;
              return za(Object.assign(Object.assign({}, e2), { audio: o2, video: a2 }), t2);
            }
          }));
        }
        function Ja(e2) {
          return Zn(this, void 0, void 0, (function* () {
            return (yield za({ audio: false, video: null == e2 || e2 }))[0];
          }));
        }
        function Qa(e2) {
          return Zn(this, void 0, void 0, (function* () {
            return (yield za({ audio: null == e2 || e2, video: false }))[0];
          }));
        }
        e.ConnectionQuality = void 0, (function(e2) {
          e2.Excellent = "excellent", e2.Good = "good", e2.Poor = "poor", e2.Lost = "lost", e2.Unknown = "unknown";
        })(e.ConnectionQuality || (e.ConnectionQuality = {}));
        class Ya extends ii.EventEmitter {
          get logContext() {
            var e2, t2;
            return Object.assign({}, null === (t2 = null === (e2 = this.loggerOptions) || void 0 === e2 ? void 0 : e2.loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
          }
          get isEncrypted() {
            return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(((e2) => e2.isEncrypted));
          }
          get isAgent() {
            var e2;
            return (null === (e2 = this.permissions) || void 0 === e2 ? void 0 : e2.agent) || this.kind === ct.AGENT;
          }
          get isActive() {
            var e2;
            return (null === (e2 = this.participantInfo) || void 0 === e2 ? void 0 : e2.state) === at.ACTIVE;
          }
          get kind() {
            return this._kind;
          }
          get attributes() {
            return Object.freeze(Object.assign({}, this._attributes));
          }
          constructor(t2, n2, i2, s2, r2, o2) {
            let a2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ct.STANDARD;
            var c2;
            super(), this.audioLevel = 0, this.isSpeaking = false, this._connectionQuality = e.ConnectionQuality.Unknown, this.log = Wn, this.log = zn(null !== (c2 = null == o2 ? void 0 : o2.loggerName) && void 0 !== c2 ? c2 : e.LoggerNames.Participant), this.loggerOptions = o2, this.setMaxListeners(100), this.sid = t2, this.identity = n2, this.name = i2, this.metadata = s2, this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this._kind = a2, this._attributes = null != r2 ? r2 : {};
          }
          getTrackPublications() {
            return Array.from(this.trackPublications.values());
          }
          getTrackPublication(e2) {
            for (const [, t2] of this.trackPublications) if (t2.source === e2) return t2;
          }
          getTrackPublicationByName(e2) {
            for (const [, t2] of this.trackPublications) if (t2.trackName === e2) return t2;
          }
          waitUntilActive() {
            return this.isActive ? Promise.resolve() : (this.activeFuture || (this.activeFuture = new Lr(), this.once(e.ParticipantEvent.Active, (() => {
              var e2, t2;
              null === (t2 = null === (e2 = this.activeFuture) || void 0 === e2 ? void 0 : e2.resolve) || void 0 === t2 || t2.call(e2), this.activeFuture = void 0;
            }))), this.activeFuture.promise);
          }
          get connectionQuality() {
            return this._connectionQuality;
          }
          get isCameraEnabled() {
            var e2;
            const t2 = this.getTrackPublication(Js.Source.Camera);
            return !(null === (e2 = null == t2 ? void 0 : t2.isMuted) || void 0 === e2 || e2);
          }
          get isMicrophoneEnabled() {
            var e2;
            const t2 = this.getTrackPublication(Js.Source.Microphone);
            return !(null === (e2 = null == t2 ? void 0 : t2.isMuted) || void 0 === e2 || e2);
          }
          get isScreenShareEnabled() {
            return !!this.getTrackPublication(Js.Source.ScreenShare);
          }
          get isLocal() {
            return false;
          }
          get joinedAt() {
            return this.participantInfo ? new Date(1e3 * Number.parseInt(this.participantInfo.joinedAt.toString())) : /* @__PURE__ */ new Date();
          }
          updateInfo(t2) {
            var n2;
            return !(this.participantInfo && this.participantInfo.sid === t2.sid && this.participantInfo.version > t2.version) && (this.identity = t2.identity, this.sid = t2.sid, this._setName(t2.name), this._setMetadata(t2.metadata), this._setAttributes(t2.attributes), t2.state === at.ACTIVE && (null === (n2 = this.participantInfo) || void 0 === n2 ? void 0 : n2.state) !== at.ACTIVE && this.emit(e.ParticipantEvent.Active), t2.permission && this.setPermissions(t2.permission), this.participantInfo = t2, true);
          }
          _setMetadata(t2) {
            const n2 = this.metadata !== t2, i2 = this.metadata;
            this.metadata = t2, n2 && this.emit(e.ParticipantEvent.ParticipantMetadataChanged, i2);
          }
          _setName(t2) {
            const n2 = this.name !== t2;
            this.name = t2, n2 && this.emit(e.ParticipantEvent.ParticipantNameChanged, t2);
          }
          _setAttributes(t2) {
            const n2 = (function(e2, t3) {
              var n3;
              void 0 === e2 && (e2 = {}), void 0 === t3 && (t3 = {});
              const i2 = [...Object.keys(t3), ...Object.keys(e2)], s2 = {};
              for (const r2 of i2) e2[r2] !== t3[r2] && (s2[r2] = null !== (n3 = t3[r2]) && void 0 !== n3 ? n3 : "");
              return s2;
            })(this.attributes, t2);
            this._attributes = t2, Object.keys(n2).length > 0 && this.emit(e.ParticipantEvent.AttributesChanged, n2);
          }
          setPermissions(t2) {
            var n2, i2, s2, r2, o2, a2;
            const c2 = this.permissions, d2 = t2.canPublish !== (null === (n2 = this.permissions) || void 0 === n2 ? void 0 : n2.canPublish) || t2.canSubscribe !== (null === (i2 = this.permissions) || void 0 === i2 ? void 0 : i2.canSubscribe) || t2.canPublishData !== (null === (s2 = this.permissions) || void 0 === s2 ? void 0 : s2.canPublishData) || t2.hidden !== (null === (r2 = this.permissions) || void 0 === r2 ? void 0 : r2.hidden) || t2.recorder !== (null === (o2 = this.permissions) || void 0 === o2 ? void 0 : o2.recorder) || t2.canPublishSources.length !== this.permissions.canPublishSources.length || t2.canPublishSources.some(((e2, t3) => {
              var n3;
              return e2 !== (null === (n3 = this.permissions) || void 0 === n3 ? void 0 : n3.canPublishSources[t3]);
            })) || t2.canSubscribeMetrics !== (null === (a2 = this.permissions) || void 0 === a2 ? void 0 : a2.canSubscribeMetrics);
            return this.permissions = t2, d2 && this.emit(e.ParticipantEvent.ParticipantPermissionsChanged, c2), d2;
          }
          setIsSpeaking(t2) {
            t2 !== this.isSpeaking && (this.isSpeaking = t2, t2 && (this.lastSpokeAt = /* @__PURE__ */ new Date()), this.emit(e.ParticipantEvent.IsSpeakingChanged, t2));
          }
          setConnectionQuality(t2) {
            const n2 = this._connectionQuality;
            this._connectionQuality = (function(t3) {
              switch (t3) {
                case Xe.EXCELLENT:
                  return e.ConnectionQuality.Excellent;
                case Xe.GOOD:
                  return e.ConnectionQuality.Good;
                case Xe.POOR:
                  return e.ConnectionQuality.Poor;
                case Xe.LOST:
                  return e.ConnectionQuality.Lost;
                default:
                  return e.ConnectionQuality.Unknown;
              }
            })(t2), n2 !== this._connectionQuality && this.emit(e.ParticipantEvent.ConnectionQualityChanged, this._connectionQuality);
          }
          setDisconnected() {
            var e2, t2;
            this.activeFuture && (null === (t2 = (e2 = this.activeFuture).reject) || void 0 === t2 || t2.call(e2, new Error("Participant disconnected")), this.activeFuture = void 0);
          }
          setAudioContext(e2) {
            this.audioContext = e2, this.audioTrackPublications.forEach(((t2) => Kr(t2.track) && t2.track.setAudioContext(e2)));
          }
          addTrackPublication(t2) {
            t2.on(e.TrackEvent.Muted, (() => {
              this.emit(e.ParticipantEvent.TrackMuted, t2);
            })), t2.on(e.TrackEvent.Unmuted, (() => {
              this.emit(e.ParticipantEvent.TrackUnmuted, t2);
            }));
            const n2 = t2;
            switch (n2.track && (n2.track.sid = t2.trackSid), this.trackPublications.set(t2.trackSid, t2), t2.kind) {
              case Js.Kind.Audio:
                this.audioTrackPublications.set(t2.trackSid, t2);
                break;
              case Js.Kind.Video:
                this.videoTrackPublications.set(t2.trackSid, t2);
            }
          }
        }
        class Xa extends Ya {
          constructor(t2, n2, i2, s2, r2, o2) {
            super(t2, n2, void 0, void 0, void 0, { loggerName: s2.loggerName, loggerContextCb: () => this.engine.logContext }), this.pendingPublishing = /* @__PURE__ */ new Set(), this.pendingPublishPromises = /* @__PURE__ */ new Map(), this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = true, this.encryptionType = lt.NONE, this.enabledPublishVideoCodecs = [], this.pendingAcks = /* @__PURE__ */ new Map(), this.pendingResponses = /* @__PURE__ */ new Map(), this.handleReconnecting = () => {
              this.reconnectFuture || (this.reconnectFuture = new Lr());
            }, this.handleReconnected = () => {
              var e2, t3;
              null === (t3 = null === (e2 = this.reconnectFuture) || void 0 === e2 ? void 0 : e2.resolve) || void 0 === t3 || t3.call(e2), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions();
            }, this.handleClosing = () => {
              var e2, t3, n3, i3, s3, r3;
              this.reconnectFuture && (this.reconnectFuture.promise.catch(((e3) => this.log.warn(e3.message, this.logContext))), null === (t3 = null === (e2 = this.reconnectFuture) || void 0 === e2 ? void 0 : e2.reject) || void 0 === t3 || t3.call(e2, "Got disconnected during reconnection attempt"), this.reconnectFuture = void 0), this.signalConnectedFuture && (null === (i3 = (n3 = this.signalConnectedFuture).reject) || void 0 === i3 || i3.call(n3, "Got disconnected without signal connected"), this.signalConnectedFuture = void 0), null === (r3 = null === (s3 = this.activeAgentFuture) || void 0 === s3 ? void 0 : s3.reject) || void 0 === r3 || r3.call(s3, "Got disconnected without active agent present"), this.activeAgentFuture = void 0, this.firstActiveAgent = void 0;
            }, this.handleSignalConnected = (e2) => {
              var t3, n3;
              e2.participant && this.updateInfo(e2.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new Lr()), null === (n3 = (t3 = this.signalConnectedFuture).resolve) || void 0 === n3 || n3.call(t3);
            }, this.handleSignalRequestResponse = (e2) => {
              const { requestId: t3, reason: n3, message: i3 } = e2, s3 = this.pendingSignalRequests.get(t3);
              s3 && (n3 !== Ln.OK && s3.reject(new Us(i3, n3)), this.pendingSignalRequests.delete(t3));
            }, this.handleDataPacket = (e2) => {
              switch (e2.value.case) {
                case "rpcResponse":
                  let t3 = e2.value.value, n3 = null, i3 = null;
                  "payload" === t3.value.case ? n3 = t3.value.value : "error" === t3.value.case && (i3 = Zo.fromProto(t3.value.value)), this.handleIncomingRpcResponse(t3.requestId, n3, i3);
                  break;
                case "rpcAck":
                  let s3 = e2.value.value;
                  this.handleIncomingRpcAck(s3.requestId);
              }
            }, this.updateTrackSubscriptionPermissions = () => {
              this.log.debug("updating track subscription permissions", Object.assign(Object.assign({}, this.logContext), { allParticipantsAllowed: this.allParticipantsAllowedToSubscribe, participantTrackPermissions: this.participantTrackPermissions })), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(((e2) => (function(e3) {
                var t3, n3, i3;
                if (!e3.participantSid && !e3.participantIdentity) throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
                return new Cn({ participantIdentity: null !== (t3 = e3.participantIdentity) && void 0 !== t3 ? t3 : "", participantSid: null !== (n3 = e3.participantSid) && void 0 !== n3 ? n3 : "", allTracks: null !== (i3 = e3.allowAll) && void 0 !== i3 && i3, trackSids: e3.allowedTrackSids || [] });
              })(e2))));
            }, this.onTrackUnmuted = (e2) => {
              this.onTrackMuted(e2, e2.isUpstreamPaused);
            }, this.onTrackMuted = (e2, t3) => {
              void 0 === t3 && (t3 = true), e2.sid ? this.engine.updateMuteStatus(e2.sid, t3) : this.log.error("could not update mute status for unpublished track", Object.assign(Object.assign({}, this.logContext), ao(e2)));
            }, this.onTrackUpstreamPaused = (e2) => {
              this.log.debug("upstream paused", Object.assign(Object.assign({}, this.logContext), ao(e2))), this.onTrackMuted(e2, true);
            }, this.onTrackUpstreamResumed = (e2) => {
              this.log.debug("upstream resumed", Object.assign(Object.assign({}, this.logContext), ao(e2))), this.onTrackMuted(e2, e2.isMuted);
            }, this.onTrackFeatureUpdate = (e2) => {
              const t3 = this.audioTrackPublications.get(e2.sid);
              t3 ? this.engine.client.sendUpdateLocalAudioTrack(t3.trackSid, t3.getTrackFeatures()) : this.log.warn("Could not update local audio track settings, missing publication for track ".concat(e2.sid), this.logContext);
            }, this.onTrackCpuConstrained = (t3, n3) => {
              this.log.debug("track cpu constrained", Object.assign(Object.assign({}, this.logContext), ao(n3))), this.emit(e.ParticipantEvent.LocalTrackCpuConstrained, t3, n3);
            }, this.handleSubscribedQualityUpdate = (e2) => Zn(this, void 0, void 0, (function* () {
              var t3, n3, i3, s3, r3;
              if (!(null === (r3 = this.roomOptions) || void 0 === r3 ? void 0 : r3.dynacast)) return;
              const o3 = this.videoTrackPublications.get(e2.trackSid);
              if (!o3) return void this.log.warn("received subscribed quality update for unknown track", Object.assign(Object.assign({}, this.logContext), { trackSid: e2.trackSid }));
              if (!o3.videoTrack) return;
              const a2 = yield o3.videoTrack.setPublishingCodecs(e2.subscribedCodecs);
              try {
                for (var c2, d2 = true, l2 = ei(a2); !(t3 = (c2 = yield l2.next()).done); d2 = true) {
                  s3 = c2.value, d2 = false;
                  const e3 = s3;
                  er(e3) && (this.log.debug("publish ".concat(e3, " for ").concat(o3.videoTrack.sid), Object.assign(Object.assign({}, this.logContext), ao(o3))), yield this.publishAdditionalCodecForTrack(o3.videoTrack, e3, o3.options));
                }
              } catch (e3) {
                n3 = { error: e3 };
              } finally {
                try {
                  d2 || t3 || !(i3 = l2.return) || (yield i3.call(l2));
                } finally {
                  if (n3) throw n3.error;
                }
              }
            })), this.handleLocalTrackUnpublished = (e2) => {
              const t3 = this.trackPublications.get(e2.trackSid);
              t3 ? this.unpublishTrack(t3.track) : this.log.warn("received unpublished event for unknown track", Object.assign(Object.assign({}, this.logContext), { trackSid: e2.trackSid }));
            }, this.handleTrackEnded = (e2) => Zn(this, void 0, void 0, (function* () {
              if (e2.source === Js.Source.ScreenShare || e2.source === Js.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", Object.assign(Object.assign({}, this.logContext), ao(e2))), this.unpublishTrack(e2);
              else if (e2.isUserProvided) yield e2.mute();
              else if (Gr(e2) || Wr(e2)) try {
                if (br()) try {
                  const t3 = yield null === navigator || void 0 === navigator ? void 0 : navigator.permissions.query({ name: e2.source === Js.Source.Camera ? "camera" : "microphone" });
                  if (t3 && "denied" === t3.state) throw this.log.warn("user has revoked access to ".concat(e2.source), Object.assign(Object.assign({}, this.logContext), ao(e2))), t3.onchange = () => {
                    "denied" !== t3.state && (e2.isMuted || e2.restartTrack(), t3.onchange = null);
                  }, new Error("GetUserMedia Permission denied");
                } catch (e3) {
                }
                e2.isMuted || (this.log.debug("track ended, attempting to use a different device", Object.assign(Object.assign({}, this.logContext), ao(e2))), Gr(e2) ? yield e2.restartTrack({ deviceId: "default" }) : yield e2.restartTrack());
              } catch (t3) {
                this.log.warn("could not restart track, muting instead", Object.assign(Object.assign({}, this.logContext), ao(e2))), yield e2.mute();
              }
            })), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this.engine = i2, this.roomOptions = s2, this.setupEngine(i2), this.activeDeviceMap = /* @__PURE__ */ new Map([["audioinput", "default"], ["videoinput", "default"], ["audiooutput", "default"]]), this.pendingSignalRequests = /* @__PURE__ */ new Map(), this.rpcHandlers = r2, this.roomOutgoingDataStreamManager = o2;
          }
          get lastCameraError() {
            return this.cameraError;
          }
          get lastMicrophoneError() {
            return this.microphoneError;
          }
          get isE2EEEnabled() {
            return this.encryptionType !== lt.NONE;
          }
          getTrackPublication(e2) {
            const t2 = super.getTrackPublication(e2);
            if (t2) return t2;
          }
          getTrackPublicationByName(e2) {
            const t2 = super.getTrackPublicationByName(e2);
            if (t2) return t2;
          }
          setupEngine(t2) {
            var n2;
            this.engine = t2, this.engine.on(e.EngineEvent.RemoteMute, ((e2, t3) => {
              const n3 = this.trackPublications.get(e2);
              n3 && n3.track && (t3 ? n3.mute() : n3.unmute());
            })), (null === (n2 = this.signalConnectedFuture) || void 0 === n2 ? void 0 : n2.isResolved) && (this.signalConnectedFuture = void 0), this.engine.on(e.EngineEvent.Connected, this.handleReconnected).on(e.EngineEvent.SignalConnected, this.handleSignalConnected).on(e.EngineEvent.SignalRestarted, this.handleReconnected).on(e.EngineEvent.SignalResumed, this.handleReconnected).on(e.EngineEvent.Restarting, this.handleReconnecting).on(e.EngineEvent.Resuming, this.handleReconnecting).on(e.EngineEvent.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(e.EngineEvent.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(e.EngineEvent.Closing, this.handleClosing).on(e.EngineEvent.SignalRequestResponse, this.handleSignalRequestResponse).on(e.EngineEvent.DataPacketReceived, this.handleDataPacket);
          }
          setMetadata(e2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.requestMetadataUpdate({ metadata: e2 });
            }));
          }
          setName(e2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.requestMetadataUpdate({ name: e2 });
            }));
          }
          setAttributes(e2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.requestMetadataUpdate({ attributes: e2 });
            }));
          }
          requestMetadataUpdate(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let { metadata: n2, name: i2, attributes: s2 } = e3;
              return (function* () {
                return new Promise(((e4, r2) => Zn(t2, void 0, void 0, (function* () {
                  var t3, o2;
                  try {
                    let a2 = false;
                    const c2 = yield this.engine.client.sendUpdateLocalMetadata(null !== (t3 = null != n2 ? n2 : this.metadata) && void 0 !== t3 ? t3 : "", null !== (o2 = null != i2 ? i2 : this.name) && void 0 !== o2 ? o2 : "", s2), d2 = performance.now();
                    for (this.pendingSignalRequests.set(c2, { resolve: e4, reject: (e5) => {
                      r2(e5), a2 = true;
                    }, values: { name: i2, metadata: n2, attributes: s2 } }); performance.now() - d2 < 5e3 && !a2; ) {
                      if ((!i2 || this.name === i2) && (!n2 || this.metadata === n2) && (!s2 || Object.entries(s2).every(((e5) => {
                        let [t4, n3] = e5;
                        return this.attributes[t4] === n3 || "" === n3 && !this.attributes[t4];
                      })))) return this.pendingSignalRequests.delete(c2), void e4();
                      yield or(50);
                    }
                    r2(new Us("Request to update local metadata timed out", "TimeoutError"));
                  } catch (e5) {
                    e5 instanceof Error && r2(e5);
                  }
                }))));
              })();
            }));
          }
          setCameraEnabled(e2, t2, n2) {
            return this.setTrackEnabled(Js.Source.Camera, e2, t2, n2);
          }
          setMicrophoneEnabled(e2, t2, n2) {
            return this.setTrackEnabled(Js.Source.Microphone, e2, t2, n2);
          }
          setScreenShareEnabled(e2, t2, n2) {
            return this.setTrackEnabled(Js.Source.ScreenShare, e2, t2, n2);
          }
          setE2EEEnabled(e2) {
            return Zn(this, void 0, void 0, (function* () {
              this.encryptionType = e2 ? lt.GCM : lt.NONE, yield this.republishAllTracks(void 0, false);
            }));
          }
          setTrackEnabled(t2, n2, i2, s2) {
            return Zn(this, void 0, void 0, (function* () {
              var r2, o2;
              this.log.debug("setTrackEnabled", Object.assign(Object.assign({}, this.logContext), { source: t2, enabled: n2 })), this.republishPromise && (yield this.republishPromise);
              let a2 = this.getTrackPublication(t2);
              if (n2) if (a2) yield a2.unmute();
              else {
                let n3;
                if (this.pendingPublishing.has(t2)) {
                  const e2 = yield this.waitForPendingPublicationOfSource(t2);
                  return e2 || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), { source: t2 })), yield null == e2 ? void 0 : e2.unmute(), e2;
                }
                this.pendingPublishing.add(t2);
                try {
                  switch (t2) {
                    case Js.Source.Camera:
                      n3 = yield this.createTracks({ video: null === (r2 = i2) || void 0 === r2 || r2 });
                      break;
                    case Js.Source.Microphone:
                      n3 = yield this.createTracks({ audio: null === (o2 = i2) || void 0 === o2 || o2 });
                      break;
                    case Js.Source.ScreenShare:
                      n3 = yield this.createScreenTracks(Object.assign({}, i2));
                      break;
                    default:
                      throw new Ms(t2);
                  }
                } catch (i3) {
                  throw null == n3 || n3.forEach(((e2) => {
                    e2.stop();
                  })), i3 instanceof Error && this.emit(e.ParticipantEvent.MediaDevicesError, i3, io(t2)), this.pendingPublishing.delete(t2), i3;
                }
                for (const e2 of n3) {
                  const n4 = Object.assign(Object.assign({}, this.roomOptions.publishDefaults), i2);
                  t2 === Js.Source.Microphone && Kr(e2) && n4.preConnectBuffer && (this.log.info("starting preconnect buffer for microphone", Object.assign({}, this.logContext)), e2.startPreConnectBuffer());
                }
                try {
                  const e2 = [];
                  for (const t4 of n3) this.log.info("publishing track", Object.assign(Object.assign({}, this.logContext), ao(t4))), e2.push(this.publishTrack(t4, s2));
                  const t3 = yield Promise.all(e2);
                  [a2] = t3;
                } catch (e2) {
                  throw null == n3 || n3.forEach(((e3) => {
                    e3.stop();
                  })), e2;
                } finally {
                  this.pendingPublishing.delete(t2);
                }
              }
              else if (!(null == a2 ? void 0 : a2.track) && this.pendingPublishing.has(t2) && (a2 = yield this.waitForPendingPublicationOfSource(t2), a2 || this.log.info("waiting for pending publication promise timed out", Object.assign(Object.assign({}, this.logContext), { source: t2 }))), a2 && a2.track) if (t2 === Js.Source.ScreenShare) {
                a2 = yield this.unpublishTrack(a2.track);
                const e2 = this.getTrackPublication(Js.Source.ScreenShareAudio);
                e2 && e2.track && this.unpublishTrack(e2.track);
              } else yield a2.mute();
              return a2;
            }));
          }
          enableCameraAndMicrophone() {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.pendingPublishing.has(Js.Source.Camera) && !this.pendingPublishing.has(Js.Source.Microphone)) {
                this.pendingPublishing.add(Js.Source.Camera), this.pendingPublishing.add(Js.Source.Microphone);
                try {
                  const e2 = yield this.createTracks({ audio: true, video: true });
                  yield Promise.all(e2.map(((e3) => this.publishTrack(e3))));
                } finally {
                  this.pendingPublishing.delete(Js.Source.Camera), this.pendingPublishing.delete(Js.Source.Microphone);
                }
              }
            }));
          }
          createTracks(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2;
              null != t2 || (t2 = {});
              const s2 = Xr(t2, null === (n2 = this.roomOptions) || void 0 === n2 ? void 0 : n2.audioCaptureDefaults, null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.videoCaptureDefaults);
              try {
                const t3 = yield za(s2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
                return t3.map(((t4) => (Kr(t4) && (this.microphoneError = void 0, t4.setAudioContext(this.audioContext), t4.source = Js.Source.Microphone, this.emit(e.ParticipantEvent.AudioStreamAcquired)), Hr(t4) && (this.cameraError = void 0, t4.source = Js.Source.Camera), t4)));
              } catch (e2) {
                throw e2 instanceof Error && (t2.audio && (this.microphoneError = e2), t2.video && (this.cameraError = e2)), e2;
              }
            }));
          }
          createScreenTracks(t2) {
            return Zn(this, void 0, void 0, (function* () {
              if (void 0 === t2 && (t2 = {}), void 0 === navigator.mediaDevices.getDisplayMedia) throw new xs("getDisplayMedia not supported");
              void 0 !== t2.resolution || fr() || (t2.resolution = sr.h1080fps30.resolution);
              const n2 = so(t2), i2 = yield navigator.mediaDevices.getDisplayMedia(n2), s2 = i2.getVideoTracks();
              if (0 === s2.length) throw new Ms("no video track found");
              const r2 = new ya(s2[0], void 0, false, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
              r2.source = Js.Source.ScreenShare, t2.contentHint && (r2.mediaStreamTrack.contentHint = t2.contentHint);
              const o2 = [r2];
              if (i2.getAudioTracks().length > 0) {
                this.emit(e.ParticipantEvent.AudioStreamAcquired);
                const t3 = new aa(i2.getAudioTracks()[0], void 0, false, this.audioContext, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
                t3.source = Js.Source.ScreenShareAudio, o2.push(t3);
              }
              return o2;
            }));
          }
          publishTrack(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.publishOrRepublishTrack(e2, t2);
            }));
          }
          publishOrRepublishTrack(e2, t2) {
            return Zn(this, arguments, void 0, (function(e3, t3) {
              var n2 = this;
              let i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return (function* () {
                var s2, r2, o2, a2;
                let c2, d2;
                if (Gr(e3) && e3.setAudioContext(n2.audioContext), yield null === (s2 = n2.reconnectFuture) || void 0 === s2 ? void 0 : s2.promise, n2.republishPromise && !i2 && (yield n2.republishPromise), qr(e3) && n2.pendingPublishPromises.has(e3) && (yield n2.pendingPublishPromises.get(e3)), e3 instanceof MediaStreamTrack) c2 = e3.getConstraints();
                else {
                  let t4;
                  switch (c2 = e3.constraints, e3.source) {
                    case Js.Source.Microphone:
                      t4 = "audioinput";
                      break;
                    case Js.Source.Camera:
                      t4 = "videoinput";
                  }
                  t4 && n2.activeDeviceMap.has(t4) && (c2 = Object.assign(Object.assign({}, c2), { deviceId: n2.activeDeviceMap.get(t4) }));
                }
                if (e3 instanceof MediaStreamTrack) switch (e3.kind) {
                  case "audio":
                    e3 = new aa(e3, c2, true, n2.audioContext, { loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
                    break;
                  case "video":
                    e3 = new ya(e3, c2, true, { loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
                    break;
                  default:
                    throw new Ms("unsupported MediaStreamTrack kind ".concat(e3.kind));
                }
                else e3.updateLoggerOptions({ loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
                if (n2.trackPublications.forEach(((t4) => {
                  t4.track && t4.track === e3 && (d2 = t4);
                })), d2) return n2.log.warn("track has already been published, skipping", Object.assign(Object.assign({}, n2.logContext), ao(d2))), d2;
                const l2 = Object.assign(Object.assign({}, n2.roomOptions.publishDefaults), t3), u2 = "channelCount" in e3.mediaStreamTrack.getSettings() && 2 === e3.mediaStreamTrack.getSettings().channelCount || 2 === e3.mediaStreamTrack.getConstraints().channelCount, h2 = null !== (r2 = l2.forceStereo) && void 0 !== r2 ? r2 : u2;
                h2 && (void 0 === l2.dtx && n2.log.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", Object.assign(Object.assign({}, n2.logContext), ao(e3))), void 0 === l2.red && n2.log.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), null !== (o2 = l2.dtx) && void 0 !== o2 || (l2.dtx = false), null !== (a2 = l2.red) && void 0 !== a2 || (l2.red = false)), !(function() {
                  const e4 = Vs(), t4 = "17.2";
                  if (e4) return "Safari" !== e4.name && "iOS" !== e4.os || !!("iOS" === e4.os && e4.osVersion && wr(e4.osVersion, t4) >= 0) || "Safari" === e4.name && wr(e4.version, t4) >= 0;
                })() && n2.roomOptions.e2ee && (n2.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2", Object.assign({}, n2.logContext)), l2.simulcast = false), l2.source && (e3.source = l2.source);
                const p2 = new Promise(((t4, i3) => Zn(n2, void 0, void 0, (function* () {
                  try {
                    if (this.engine.client.currentState !== ko.CONNECTED) {
                      this.log.debug("deferring track publication until signal is connected", Object.assign(Object.assign({}, this.logContext), { track: ao(e3) }));
                      const n3 = setTimeout((() => {
                        i3(new Ls("publishing rejected as engine not connected within timeout", 408));
                      }), 15e3);
                      yield this.waitUntilEngineConnected(), clearTimeout(n3);
                      const s3 = yield this.publish(e3, l2, h2);
                      t4(s3);
                    } else try {
                      const n3 = yield this.publish(e3, l2, h2);
                      t4(n3);
                    } catch (e4) {
                      i3(e4);
                    }
                  } catch (e4) {
                    i3(e4);
                  }
                }))));
                n2.pendingPublishPromises.set(e3, p2);
                try {
                  return yield p2;
                } catch (e4) {
                  throw e4;
                } finally {
                  n2.pendingPublishPromises.delete(e3);
                }
              })();
            }));
          }
          waitUntilEngineConnected() {
            return this.signalConnectedFuture || (this.signalConnectedFuture = new Lr()), this.signalConnectedFuture.promise;
          }
          hasPermissionsToPublish(e2) {
            if (!this.permissions) return this.log.warn("no permissions present for publishing track", Object.assign(Object.assign({}, this.logContext), ao(e2))), false;
            const { canPublish: t2, canPublishSources: n2 } = this.permissions;
            return !(!t2 || 0 !== n2.length && !n2.map(((e3) => (function(e4) {
              switch (e4) {
                case Qe.CAMERA:
                  return Js.Source.Camera;
                case Qe.MICROPHONE:
                  return Js.Source.Microphone;
                case Qe.SCREEN_SHARE:
                  return Js.Source.ScreenShare;
                case Qe.SCREEN_SHARE_AUDIO:
                  return Js.Source.ScreenShareAudio;
                default:
                  return Js.Source.Unknown;
              }
            })(e3))).includes(e2.source)) || (this.log.warn("insufficient permissions to publish", Object.assign(Object.assign({}, this.logContext), ao(e2))), false);
          }
          publish(t2, n2, i2) {
            return Zn(this, void 0, void 0, (function* () {
              var s2, r2, o2, a2, c2, d2, l2, u2, h2, p2;
              if (!this.hasPermissionsToPublish(t2)) throw new Ls("failed to publish track, insufficient permissions", 403);
              Array.from(this.trackPublications.values()).find(((e2) => qr(t2) && e2.source === t2.source)) && t2.source !== Js.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(t2.source), Object.assign(Object.assign({}, this.logContext), ao(t2))), n2.stopMicTrackOnMute && Kr(t2) && (t2.stopOnMute = true), t2.source === Js.Source.ScreenShare && mr() && (n2.simulcast = false), "av1" !== n2.videoCodec || dr() || (n2.videoCodec = void 0), "vp9" !== n2.videoCodec || lr() || (n2.videoCodec = void 0), void 0 === n2.videoCodec && (n2.videoCodec = Ho), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some(((e2) => n2.videoCodec === ro(e2.mime))) || (n2.videoCodec = ro(this.enabledPublishVideoCodecs[0].mime)));
              const m2 = n2.videoCodec;
              t2.on(e.TrackEvent.Muted, this.onTrackMuted), t2.on(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.on(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.on(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
              const g2 = [], v2 = !(null === (s2 = n2.dtx) || void 0 === s2 || s2), f2 = t2.getSourceTrackSettings();
              f2.autoGainControl && g2.push(nt.TF_AUTO_GAIN_CONTROL), f2.echoCancellation && g2.push(nt.TF_ECHO_CANCELLATION), f2.noiseSuppression && g2.push(nt.TF_NOISE_SUPPRESSION), f2.channelCount && f2.channelCount > 1 && g2.push(nt.TF_STEREO), v2 && g2.push(nt.TF_NO_DTX), Gr(t2) && t2.hasPreConnectBuffer && g2.push(nt.TF_PRECONNECT_BUFFER);
              const k2 = new Jt({ cid: t2.mediaStreamTrack.id, name: n2.name, type: Js.kindToProto(t2.kind), muted: t2.isMuted, source: Js.sourceToProto(t2.source), disableDtx: v2, encryption: this.encryptionType, stereo: i2, disableRed: this.isE2EEEnabled || !(null === (r2 = n2.red) || void 0 === r2 || r2), stream: null == n2 ? void 0 : n2.stream, backupCodecPolicy: null == n2 ? void 0 : n2.backupCodecPolicy, audioFeatures: g2 });
              let b2;
              if (t2.kind === Js.Kind.Video) {
                let e2 = { width: 0, height: 0 };
                try {
                  e2 = yield t2.waitForDimensions();
                } catch (n3) {
                  const i3 = null !== (a2 = null === (o2 = this.roomOptions.videoCaptureDefaults) || void 0 === o2 ? void 0 : o2.resolution) && void 0 !== a2 ? a2 : nr.h720.resolution;
                  e2 = { width: i3.width, height: i3.height }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(t2)), { dims: e2 }));
                }
                k2.width = e2.width, k2.height = e2.height, Wr(t2) && (ur(m2) && (t2.source === Js.Source.ScreenShare && (n2.scalabilityMode = "L1T3", "contentHint" in t2.mediaStreamTrack && (t2.mediaStreamTrack.contentHint = "motion", this.log.info("forcing contentHint to motion for screenshare with SVC codecs", Object.assign(Object.assign({}, this.logContext), ao(t2))))), n2.scalabilityMode = null !== (c2 = n2.scalabilityMode) && void 0 !== c2 ? c2 : "L3T3_KEY"), k2.simulcastCodecs = [new zt({ codec: m2, cid: t2.mediaStreamTrack.id })], true === n2.backupCodec && (n2.backupCodec = { codec: Ho }), n2.backupCodec && m2 !== n2.backupCodec.codec && k2.encryption === lt.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = true), k2.simulcastCodecs.push(new zt({ codec: n2.backupCodec.codec, cid: "" })))), b2 = ga(t2.source === Js.Source.ScreenShare, k2.width, k2.height, n2), k2.layers = Sa(k2.width, k2.height, b2, ur(n2.videoCodec));
              } else t2.kind === Js.Kind.Audio && (b2 = [{ maxBitrate: null === (d2 = n2.audioPreset) || void 0 === d2 ? void 0 : d2.maxBitrate, priority: null !== (u2 = null === (l2 = n2.audioPreset) || void 0 === l2 ? void 0 : l2.priority) && void 0 !== u2 ? u2 : "high", networkPriority: null !== (p2 = null === (h2 = n2.audioPreset) || void 0 === h2 ? void 0 : h2.priority) && void 0 !== p2 ? p2 : "high" }]);
              if (!this.engine || this.engine.isClosed) throw new _s("cannot publish track when not connected");
              const y2 = () => Zn(this, void 0, void 0, (function* () {
                var i3, s3, r3;
                if (!this.engine.pcManager) throw new _s("pcManager is not ready");
                if (t2.sender = yield this.engine.createSender(t2, n2, b2), this.emit(e.ParticipantEvent.LocalSenderCreated, t2.sender, t2), Wr(t2) && (null !== (i3 = n2.degradationPreference) && void 0 !== i3 || (n2.degradationPreference = (function(e2) {
                  return e2.source === Js.Source.ScreenShare || e2.constraints.height && Ur(e2.constraints.height) >= 1080 ? "maintain-resolution" : "balanced";
                })(t2)), t2.setDegradationPreference(n2.degradationPreference)), b2) if (mr() && t2.kind === Js.Kind.Audio) {
                  let e2;
                  for (const n3 of this.engine.pcManager.publisher.getTransceivers()) if (n3.sender === t2.sender) {
                    e2 = n3;
                    break;
                  }
                  e2 && this.engine.pcManager.publisher.setTrackCodecBitrate({ transceiver: e2, codec: "opus", maxbr: (null === (s3 = b2[0]) || void 0 === s3 ? void 0 : s3.maxBitrate) ? b2[0].maxBitrate / 1e3 : 0 });
                } else t2.codec && ur(t2.codec) && (null === (r3 = b2[0]) || void 0 === r3 ? void 0 : r3.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({ cid: k2.cid, codec: t2.codec, maxbr: b2[0].maxBitrate / 1e3 });
                yield this.engine.negotiate();
              }));
              let T2;
              const C2 = new Promise(((e2, n3) => Zn(this, void 0, void 0, (function* () {
                var i3;
                try {
                  T2 = yield this.engine.addTrack(k2), e2(T2);
                } catch (e3) {
                  t2.sender && (null === (i3 = this.engine.pcManager) || void 0 === i3 ? void 0 : i3.publisher) && (this.engine.pcManager.publisher.removeTrack(t2.sender), yield this.engine.negotiate().catch(((e4) => {
                    this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(t2)), { error: e4 }));
                  }))), n3(e3);
                }
              }))));
              if (this.enabledPublishVideoCodecs.length > 0) {
                const e2 = yield Promise.all([C2, y2()]);
                T2 = e2[0];
              } else {
                let e2;
                if (T2 = yield C2, T2.codecs.forEach(((t3) => {
                  void 0 === e2 && (e2 = t3.mimeType);
                })), e2 && t2.kind === Js.Kind.Video) {
                  const i3 = ro(e2);
                  i3 !== m2 && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(t2)), { codec: i3 })), n2.videoCodec = i3, b2 = ga(t2.source === Js.Source.ScreenShare, k2.width, k2.height, n2));
                }
                yield y2();
              }
              const S2 = new Ga(t2.kind, T2, t2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
              if (S2.on(e.TrackEvent.CpuConstrained, ((e2) => this.onTrackCpuConstrained(e2, S2))), S2.options = n2, t2.sid = T2.sid, this.log.debug("publishing ".concat(t2.kind, " with encodings"), Object.assign(Object.assign({}, this.logContext), { encodings: b2, trackInfo: T2 })), Wr(t2) ? t2.startMonitor(this.engine.client) : Gr(t2) && t2.startMonitor(), this.addTrackPublication(S2), this.emit(e.ParticipantEvent.LocalTrackPublished, S2), Gr(t2) && T2.audioFeatures.includes(nt.TF_PRECONNECT_BUFFER)) {
                const n3 = t2.getPreConnectBuffer(), i3 = t2.getPreConnectBufferMimeType();
                if (this.on(e.ParticipantEvent.LocalTrackSubscribed, ((e2) => {
                  if (e2.trackSid === T2.sid) {
                    if (!t2.hasPreConnectBuffer) return void this.log.warn("subscribe event came to late, buffer already closed", this.logContext);
                    this.log.debug("finished recording preconnect buffer", Object.assign(Object.assign({}, this.logContext), ao(t2))), t2.stopPreConnectBuffer();
                  }
                })), n3) {
                  const e2 = new Promise(((e3, s3) => Zn(this, void 0, void 0, (function* () {
                    var r3, o3, a3, c3, d3, l3;
                    try {
                      this.log.debug("waiting for agent", Object.assign(Object.assign({}, this.logContext), ao(t2)));
                      const m3 = setTimeout((() => {
                        s3(new Error("agent not active within 10 seconds"));
                      }), 1e4), g3 = yield this.waitUntilActiveAgentPresent();
                      clearTimeout(m3), this.log.debug("sending preconnect buffer", Object.assign(Object.assign({}, this.logContext), ao(t2)));
                      const v3 = yield this.streamBytes({ name: "preconnect-buffer", mimeType: i3, topic: "lk.agent.pre-connect-audio-buffer", destinationIdentities: [g3.identity], attributes: { trackId: S2.trackSid, sampleRate: String(null !== (d3 = f2.sampleRate) && void 0 !== d3 ? d3 : "48000"), channels: String(null !== (l3 = f2.channelCount) && void 0 !== l3 ? l3 : "1") } });
                      try {
                        for (var u3, h3 = true, p3 = ei(n3); !(r3 = (u3 = yield p3.next()).done); h3 = true) {
                          c3 = u3.value, h3 = false;
                          const e4 = c3;
                          yield v3.write(e4);
                        }
                      } catch (e4) {
                        o3 = { error: e4 };
                      } finally {
                        try {
                          h3 || r3 || !(a3 = p3.return) || (yield a3.call(p3));
                        } finally {
                          if (o3) throw o3.error;
                        }
                      }
                      yield v3.close(), e3();
                    } catch (e4) {
                      s3(e4);
                    }
                  }))));
                  e2.then((() => {
                    this.log.debug("preconnect buffer sent successfully", Object.assign(Object.assign({}, this.logContext), ao(t2)));
                  })).catch(((e3) => {
                    this.log.error("error sending preconnect buffer", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(t2)), { error: e3 }));
                  }));
                }
              }
              return S2;
            }));
          }
          get isLocal() {
            return true;
          }
          publishAdditionalCodecForTrack(e2, t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              var i2;
              if (this.encryptionType !== lt.NONE) return;
              let s2;
              if (this.trackPublications.forEach(((t3) => {
                t3.track && t3.track === e2 && (s2 = t3);
              })), !s2) throw new Ms("track is not published");
              if (!Wr(e2)) throw new Ms("track is not a video track");
              const r2 = Object.assign(Object.assign({}, null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.publishDefaults), n2), o2 = (function(e3, t3, n3) {
                var i3, s3, r3, o3;
                if (!n3.backupCodec || true === n3.backupCodec || n3.backupCodec.codec === n3.videoCodec) return;
                t3 !== n3.backupCodec.codec && Wn.warn("requested a different codec than specified as backup", { serverRequested: t3, backup: n3.backupCodec.codec }), n3.videoCodec = t3, n3.videoEncoding = n3.backupCodec.encoding;
                const a3 = e3.mediaStreamTrack.getSettings(), c3 = null !== (i3 = a3.width) && void 0 !== i3 ? i3 : null === (s3 = e3.dimensions) || void 0 === s3 ? void 0 : s3.width, d3 = null !== (r3 = a3.height) && void 0 !== r3 ? r3 : null === (o3 = e3.dimensions) || void 0 === o3 ? void 0 : o3.height;
                return e3.source === Js.Source.ScreenShare && n3.simulcast && (n3.simulcast = false), ga(e3.source === Js.Source.ScreenShare, c3, d3, n3);
              })(e2, t2, r2);
              if (!o2) return void this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", Object.assign(Object.assign({}, this.logContext), ao(e2)));
              const a2 = e2.addSimulcastTrack(t2, o2);
              if (!a2) return;
              const c2 = new Jt({ cid: a2.mediaStreamTrack.id, type: Js.kindToProto(e2.kind), muted: e2.isMuted, source: Js.sourceToProto(e2.source), sid: e2.sid, simulcastCodecs: [{ codec: r2.videoCodec, cid: a2.mediaStreamTrack.id }] });
              if (c2.layers = Sa(c2.width, c2.height, o2), !this.engine || this.engine.isClosed) throw new _s("cannot publish track when not connected");
              const d2 = (yield Promise.all([this.engine.addTrack(c2), (() => Zn(this, void 0, void 0, (function* () {
                yield this.engine.createSimulcastSender(e2, a2, r2, o2), yield this.engine.negotiate();
              })))()]))[0];
              this.log.debug("published ".concat(t2, " for track ").concat(e2.sid), Object.assign(Object.assign({}, this.logContext), { encodings: o2, trackInfo: d2 }));
            }));
          }
          unpublishTrack(t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              var i2, s2;
              if (qr(t2)) {
                const e2 = this.pendingPublishPromises.get(t2);
                e2 && (this.log.info("awaiting publish promise before attempting to unpublish", Object.assign(Object.assign({}, this.logContext), ao(t2))), yield e2);
              }
              const r2 = this.getPublicationForTrack(t2), o2 = r2 ? ao(r2) : void 0;
              if (this.log.debug("unpublishing track", Object.assign(Object.assign({}, this.logContext), o2)), !r2 || !r2.track) return void this.log.warn("track was not unpublished because no publication was found", Object.assign(Object.assign({}, this.logContext), o2));
              (t2 = r2.track).off(e.TrackEvent.Muted, this.onTrackMuted), t2.off(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.off(e.TrackEvent.Ended, this.handleTrackEnded), t2.off(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.off(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.off(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), void 0 === n2 && (n2 = null === (s2 = null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.stopLocalTrackOnUnpublish) || void 0 === s2 || s2), n2 ? t2.stop() : t2.stopMonitor();
              let a2 = false;
              const c2 = t2.sender;
              if (t2.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < Yo.FAILED && c2) try {
                for (const e2 of this.engine.pcManager.publisher.getTransceivers()) e2.sender === c2 && (e2.direction = "inactive", a2 = true);
                if (this.engine.removeTrack(c2) && (a2 = true), Wr(t2)) {
                  for (const [, e2] of t2.simulcastCodecs) e2.sender && (this.engine.removeTrack(e2.sender) && (a2 = true), e2.sender = void 0);
                  t2.simulcastCodecs.clear();
                }
              } catch (e2) {
                this.log.warn("failed to unpublish track", Object.assign(Object.assign(Object.assign({}, this.logContext), o2), { error: e2 }));
              }
              switch (this.trackPublications.delete(r2.trackSid), r2.kind) {
                case Js.Kind.Audio:
                  this.audioTrackPublications.delete(r2.trackSid);
                  break;
                case Js.Kind.Video:
                  this.videoTrackPublications.delete(r2.trackSid);
              }
              return this.emit(e.ParticipantEvent.LocalTrackUnpublished, r2), r2.setTrack(void 0), a2 && (yield this.engine.negotiate()), r2;
            }));
          }
          unpublishTracks(e2) {
            return Zn(this, void 0, void 0, (function* () {
              return (yield Promise.all(e2.map(((e3) => this.unpublishTrack(e3))))).filter(((e3) => !!e3));
            }));
          }
          republishAllTracks(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return (function* () {
                t2.republishPromise && (yield t2.republishPromise), t2.republishPromise = new Promise(((i2, s2) => Zn(t2, void 0, void 0, (function* () {
                  try {
                    const t3 = [];
                    this.trackPublications.forEach(((n3) => {
                      n3.track && (e3 && (n3.options = Object.assign(Object.assign({}, n3.options), e3)), t3.push(n3));
                    })), yield Promise.all(t3.map(((e4) => Zn(this, void 0, void 0, (function* () {
                      const t4 = e4.track;
                      yield this.unpublishTrack(t4, false), !n2 || t4.isMuted || t4.source === Js.Source.ScreenShare || t4.source === Js.Source.ScreenShareAudio || !Gr(t4) && !Wr(t4) || t4.isUserProvided || (this.log.debug("restarting existing track", Object.assign(Object.assign({}, this.logContext), { track: e4.trackSid })), yield t4.restartTrack()), yield this.publishOrRepublishTrack(t4, e4.options, true);
                    }))))), i2();
                  } catch (e4) {
                    s2(e4);
                  } finally {
                    this.republishPromise = void 0;
                  }
                })))), yield t2.republishPromise;
              })();
            }));
          }
          publishData(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return (function* () {
                const i2 = n2.reliable ? gt.RELIABLE : gt.LOSSY, s2 = n2.destinationIdentities, r2 = n2.topic, o2 = new mt({ kind: i2, value: { case: "user", value: new kt({ participantIdentity: t2.identity, payload: e3, destinationIdentities: s2, topic: r2 }) } });
                yield t2.engine.sendDataPacket(o2, i2);
              })();
            }));
          }
          publishDtmf(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              const n2 = new mt({ kind: gt.RELIABLE, value: { case: "sipDtmf", value: new bt({ code: e2, digit: t2 }) } });
              yield this.engine.sendDataPacket(n2, gt.RELIABLE);
            }));
          }
          sendChatMessage(t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              const i2 = { id: crypto.randomUUID(), message: t2, timestamp: Date.now(), attachedFiles: null == n2 ? void 0 : n2.attachments }, s2 = new mt({ value: { case: "chatMessage", value: new Ct(Object.assign(Object.assign({}, i2), { timestamp: x.parse(i2.timestamp) })) } });
              return yield this.engine.sendDataPacket(s2, gt.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
            }));
          }
          editChatMessage(t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              const i2 = Object.assign(Object.assign({}, n2), { message: t2, editTimestamp: Date.now() }), s2 = new mt({ value: { case: "chatMessage", value: new Ct(Object.assign(Object.assign({}, i2), { timestamp: x.parse(i2.timestamp), editTimestamp: x.parse(i2.editTimestamp) })) } });
              return yield this.engine.sendDataPacket(s2, gt.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
            }));
          }
          sendText(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.roomOutgoingDataStreamManager.sendText(e2, t2);
            }));
          }
          streamText(e2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.roomOutgoingDataStreamManager.streamText(e2);
            }));
          }
          sendFile(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.roomOutgoingDataStreamManager.sendFile(e2, t2);
            }));
          }
          streamBytes(e2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.roomOutgoingDataStreamManager.streamBytes(e2);
            }));
          }
          performRpc(e2) {
            return Zn(this, arguments, void 0, (function(e3) {
              var t2 = this;
              let { destinationIdentity: n2, method: i2, payload: s2, responseTimeout: r2 = 1e4 } = e3;
              return (function* () {
                return new Promise(((e4, o2) => Zn(t2, void 0, void 0, (function* () {
                  var t3, a2, c2, d2;
                  if ($o(s2) > 15360) return void o2(Zo.builtIn("REQUEST_PAYLOAD_TOO_LARGE"));
                  if ((null === (a2 = null === (t3 = this.engine.latestJoinResponse) || void 0 === t3 ? void 0 : t3.serverInfo) || void 0 === a2 ? void 0 : a2.version) && wr(null === (d2 = null === (c2 = this.engine.latestJoinResponse) || void 0 === c2 ? void 0 : c2.serverInfo) || void 0 === d2 ? void 0 : d2.version, "1.8.0") < 0) return void o2(Zo.builtIn("UNSUPPORTED_SERVER"));
                  const l2 = crypto.randomUUID();
                  yield this.publishRpcRequest(n2, l2, i2, s2, r2 - 2e3);
                  const u2 = setTimeout((() => {
                    this.pendingAcks.delete(l2), o2(Zo.builtIn("CONNECTION_TIMEOUT")), this.pendingResponses.delete(l2), clearTimeout(h2);
                  }), 2e3);
                  this.pendingAcks.set(l2, { resolve: () => {
                    clearTimeout(u2);
                  }, participantIdentity: n2 });
                  const h2 = setTimeout((() => {
                    this.pendingResponses.delete(l2), o2(Zo.builtIn("RESPONSE_TIMEOUT"));
                  }), r2);
                  this.pendingResponses.set(l2, { resolve: (t4, n3) => {
                    clearTimeout(h2), this.pendingAcks.has(l2) && (console.warn("RPC response received before ack", l2), this.pendingAcks.delete(l2), clearTimeout(u2)), n3 ? o2(n3) : e4(null != t4 ? t4 : "");
                  }, participantIdentity: n2 });
                }))));
              })();
            }));
          }
          registerRpcMethod(e2, t2) {
            this.rpcHandlers.has(e2) && this.log.warn("you're overriding the RPC handler for method ".concat(e2, ", in the future this will throw an error")), this.rpcHandlers.set(e2, t2);
          }
          unregisterRpcMethod(e2) {
            this.rpcHandlers.delete(e2);
          }
          setTrackSubscriptionPermissions(e2) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            this.participantTrackPermissions = t2, this.allParticipantsAllowedToSubscribe = e2, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions();
          }
          handleIncomingRpcAck(e2) {
            const t2 = this.pendingAcks.get(e2);
            t2 ? (t2.resolve(), this.pendingAcks.delete(e2)) : console.error("Ack received for unexpected RPC request", e2);
          }
          handleIncomingRpcResponse(e2, t2, n2) {
            const i2 = this.pendingResponses.get(e2);
            i2 ? (i2.resolve(t2, n2), this.pendingResponses.delete(e2)) : console.error("Response received for unexpected RPC request", e2);
          }
          publishRpcRequest(e2, t2, n2, i2, s2) {
            return Zn(this, void 0, void 0, (function* () {
              const r2 = new mt({ destinationIdentities: [e2], kind: gt.RELIABLE, value: { case: "rpcRequest", value: new St({ id: t2, method: n2, payload: i2, responseTimeoutMs: s2, version: 1 }) } });
              yield this.engine.sendDataPacket(r2, gt.RELIABLE);
            }));
          }
          handleParticipantDisconnected(e2) {
            for (const [t2, { participantIdentity: n2 }] of this.pendingAcks) n2 === e2 && this.pendingAcks.delete(t2);
            for (const [t2, { participantIdentity: n2, resolve: i2 }] of this.pendingResponses) n2 === e2 && (i2(null, Zo.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(t2));
          }
          setEnabledPublishCodecs(e2) {
            this.enabledPublishVideoCodecs = e2.filter(((e3) => "video" === e3.mime.split("/")[0].toLowerCase()));
          }
          updateInfo(e2) {
            return !!super.updateInfo(e2) && (e2.tracks.forEach(((e3) => {
              var t2, n2;
              const i2 = this.trackPublications.get(e3.sid);
              if (i2) {
                const s2 = i2.isMuted || null !== (n2 = null === (t2 = i2.track) || void 0 === t2 ? void 0 : t2.isUpstreamPaused) && void 0 !== n2 && n2;
                s2 !== e3.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(i2)), { mutedOnServer: s2 })), this.engine.client.sendMuteTrack(e3.sid, s2));
              }
            })), true);
          }
          setActiveAgent(e2) {
            var t2, n2, i2, s2;
            this.firstActiveAgent = e2, e2 && !this.firstActiveAgent && (this.firstActiveAgent = e2), e2 ? null === (n2 = null === (t2 = this.activeAgentFuture) || void 0 === t2 ? void 0 : t2.resolve) || void 0 === n2 || n2.call(t2, e2) : null === (s2 = null === (i2 = this.activeAgentFuture) || void 0 === i2 ? void 0 : i2.reject) || void 0 === s2 || s2.call(i2, "Agent disconnected"), this.activeAgentFuture = void 0;
          }
          waitUntilActiveAgentPresent() {
            return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new Lr()), this.activeAgentFuture.promise);
          }
          getPublicationForTrack(e2) {
            let t2;
            return this.trackPublications.forEach(((n2) => {
              const i2 = n2.track;
              i2 && (e2 instanceof MediaStreamTrack ? (Gr(i2) || Wr(i2)) && i2.mediaStreamTrack === e2 && (t2 = n2) : e2 === i2 && (t2 = n2));
            })), t2;
          }
          waitForPendingPublicationOfSource(e2) {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = Date.now();
              for (; Date.now() < t2 + 1e4; ) {
                const t3 = Array.from(this.pendingPublishPromises.entries()).find(((t4) => {
                  let [n2] = t4;
                  return n2.source === e2;
                }));
                if (t3) return t3[1];
                yield or(20);
              }
            }));
          }
        }
        class Za extends Wa {
          constructor(t2, n2, i2, s2) {
            super(t2, n2.sid, n2.name, s2), this.track = void 0, this.allowed = true, this.requestedDisabled = void 0, this.visible = true, this.handleEnded = (t3) => {
              this.setTrack(void 0), this.emit(e.TrackEvent.Ended, t3);
            }, this.handleVisibilityChange = (e2) => {
              this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(e2), this.logContext), this.visible = e2, this.emitTrackUpdate();
            }, this.handleVideoDimensionsChange = (e2) => {
              this.log.debug("adaptivestream video dimensions ".concat(e2.width, "x").concat(e2.height), this.logContext), this.videoDimensionsAdaptiveStream = e2, this.emitTrackUpdate();
            }, this.subscribed = i2, this.updateInfo(n2);
          }
          setSubscribed(t2) {
            const n2 = this.subscriptionStatus, i2 = this.permissionStatus;
            this.subscribed = t2, t2 && (this.allowed = true);
            const s2 = new sn({ trackSids: [this.trackSid], subscribe: this.subscribed, participantTracks: [new Rt({ participantSid: "", trackSids: [this.trackSid] })] });
            this.emit(e.TrackEvent.UpdateSubscription, s2), this.emitSubscriptionUpdateIfChanged(n2), this.emitPermissionUpdateIfChanged(i2);
          }
          get subscriptionStatus() {
            return false === this.subscribed ? Wa.SubscriptionStatus.Unsubscribed : super.isSubscribed ? Wa.SubscriptionStatus.Subscribed : Wa.SubscriptionStatus.Desired;
          }
          get permissionStatus() {
            return this.allowed ? Wa.PermissionStatus.Allowed : Wa.PermissionStatus.NotAllowed;
          }
          get isSubscribed() {
            return false !== this.subscribed && super.isSubscribed;
          }
          get isDesired() {
            return false !== this.subscribed;
          }
          get isEnabled() {
            return void 0 !== this.requestedDisabled ? !this.requestedDisabled : !this.isAdaptiveStream || this.visible;
          }
          get isLocal() {
            return false;
          }
          setEnabled(e2) {
            this.isManualOperationAllowed() && this.requestedDisabled !== !e2 && (this.requestedDisabled = !e2, this.emitTrackUpdate());
          }
          setVideoQuality(e2) {
            this.isManualOperationAllowed() && this.requestedMaxQuality !== e2 && (this.requestedMaxQuality = e2, this.requestedVideoDimensions = void 0, this.emitTrackUpdate());
          }
          setVideoDimensions(e2) {
            var t2, n2;
            this.isManualOperationAllowed() && ((null === (t2 = this.requestedVideoDimensions) || void 0 === t2 ? void 0 : t2.width) === e2.width && (null === (n2 = this.requestedVideoDimensions) || void 0 === n2 ? void 0 : n2.height) === e2.height || (Qr(this.track) && (this.requestedVideoDimensions = e2), this.requestedMaxQuality = void 0, this.emitTrackUpdate()));
          }
          setVideoFPS(e2) {
            this.isManualOperationAllowed() && Qr(this.track) && this.fps !== e2 && (this.fps = e2, this.emitTrackUpdate());
          }
          get videoQuality() {
            var t2;
            return null !== (t2 = this.requestedMaxQuality) && void 0 !== t2 ? t2 : e.VideoQuality.HIGH;
          }
          setTrack(t2) {
            const n2 = this.subscriptionStatus, i2 = this.permissionStatus, s2 = this.track;
            s2 !== t2 && (s2 && (s2.off(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), s2.off(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), s2.off(e.TrackEvent.Ended, this.handleEnded), s2.detach(), s2.stopMonitor(), this.emit(e.TrackEvent.Unsubscribed, s2)), super.setTrack(t2), t2 && (t2.sid = this.trackSid, t2.on(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), t2.on(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), t2.on(e.TrackEvent.Ended, this.handleEnded), this.emit(e.TrackEvent.Subscribed, t2)), this.emitPermissionUpdateIfChanged(i2), this.emitSubscriptionUpdateIfChanged(n2));
          }
          setAllowed(e2) {
            const t2 = this.subscriptionStatus, n2 = this.permissionStatus;
            this.allowed = e2, this.emitPermissionUpdateIfChanged(n2), this.emitSubscriptionUpdateIfChanged(t2);
          }
          setSubscriptionError(t2) {
            this.emit(e.TrackEvent.SubscriptionFailed, t2);
          }
          updateInfo(t2) {
            super.updateInfo(t2);
            const n2 = this.metadataMuted;
            this.metadataMuted = t2.muted, this.track ? this.track.setMuted(t2.muted) : n2 !== t2.muted && this.emit(t2.muted ? e.TrackEvent.Muted : e.TrackEvent.Unmuted);
          }
          emitSubscriptionUpdateIfChanged(t2) {
            const n2 = this.subscriptionStatus;
            t2 !== n2 && this.emit(e.TrackEvent.SubscriptionStatusChanged, n2, t2);
          }
          emitPermissionUpdateIfChanged(t2) {
            this.permissionStatus !== t2 && this.emit(e.TrackEvent.SubscriptionPermissionChanged, this.permissionStatus, t2);
          }
          isManualOperationAllowed() {
            return !!this.isDesired || (this.log.warn("cannot update track settings when not subscribed", this.logContext), false);
          }
          get isAdaptiveStream() {
            return Qr(this.track) && this.track.isAdaptiveStream;
          }
          emitTrackUpdate() {
            const t2 = new rn({ trackSids: [this.trackSid], disabled: !this.isEnabled, fps: this.fps });
            if (this.kind === Js.Kind.Video) {
              let r2 = this.requestedVideoDimensions;
              if (void 0 !== this.videoDimensionsAdaptiveStream) if (r2) {
                lo(this.videoDimensionsAdaptiveStream, r2) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r2 = this.videoDimensionsAdaptiveStream);
              } else if (void 0 !== this.requestedMaxQuality && this.trackInfo) {
                const e2 = (n2 = this.trackInfo, i2 = this.requestedMaxQuality, null === (s2 = n2.layers) || void 0 === s2 ? void 0 : s2.find(((e3) => e3.quality === i2)));
                e2 && lo(this.videoDimensionsAdaptiveStream, e2) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r2 = this.videoDimensionsAdaptiveStream);
              } else this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), r2 = this.videoDimensionsAdaptiveStream;
              r2 ? (t2.width = Math.ceil(r2.width), t2.height = Math.ceil(r2.height)) : void 0 !== this.requestedMaxQuality ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), { quality: this.requestedMaxQuality })), t2.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), { quality: e.VideoQuality.HIGH })), t2.quality = e.VideoQuality.HIGH);
            }
            var n2, i2, s2;
            this.emit(e.TrackEvent.UpdateSettings, t2);
          }
        }
        class $a extends Ya {
          static fromParticipantInfo(e2, t2, n2) {
            return new $a(e2, t2.sid, t2.identity, t2.name, t2.metadata, t2.attributes, n2, t2.kind);
          }
          get logContext() {
            return Object.assign(Object.assign({}, super.logContext), { rpID: this.sid, remoteParticipant: this.identity });
          }
          constructor(e2, t2, n2, i2, s2, r2, o2) {
            super(t2, n2 || "", i2, s2, r2, o2, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : ct.STANDARD), this.signalClient = e2, this.trackPublications = /* @__PURE__ */ new Map(), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.volumeMap = /* @__PURE__ */ new Map();
          }
          addTrackPublication(t2) {
            super.addTrackPublication(t2), t2.on(e.TrackEvent.UpdateSettings, ((e2) => {
              this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), ao(t2)), { settings: e2 })), this.signalClient.sendUpdateTrackSettings(e2);
            })), t2.on(e.TrackEvent.UpdateSubscription, ((e2) => {
              e2.participantTracks.forEach(((e3) => {
                e3.participantSid = this.sid;
              })), this.signalClient.sendUpdateSubscription(e2);
            })), t2.on(e.TrackEvent.SubscriptionPermissionChanged, ((n2) => {
              this.emit(e.ParticipantEvent.TrackSubscriptionPermissionChanged, t2, n2);
            })), t2.on(e.TrackEvent.SubscriptionStatusChanged, ((n2) => {
              this.emit(e.ParticipantEvent.TrackSubscriptionStatusChanged, t2, n2);
            })), t2.on(e.TrackEvent.Subscribed, ((n2) => {
              this.emit(e.ParticipantEvent.TrackSubscribed, n2, t2);
            })), t2.on(e.TrackEvent.Unsubscribed, ((n2) => {
              this.emit(e.ParticipantEvent.TrackUnsubscribed, n2, t2);
            })), t2.on(e.TrackEvent.SubscriptionFailed, ((n2) => {
              this.emit(e.ParticipantEvent.TrackSubscriptionFailed, t2.trackSid, n2);
            }));
          }
          getTrackPublication(e2) {
            const t2 = super.getTrackPublication(e2);
            if (t2) return t2;
          }
          getTrackPublicationByName(e2) {
            const t2 = super.getTrackPublicationByName(e2);
            if (t2) return t2;
          }
          setVolume(e2) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Js.Source.Microphone;
            this.volumeMap.set(t2, e2);
            const n2 = this.getTrackPublication(t2);
            n2 && n2.track && n2.track.setVolume(e2);
          }
          getVolume() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Js.Source.Microphone;
            const t2 = this.getTrackPublication(e2);
            return t2 && t2.track ? t2.track.getVolume() : this.volumeMap.get(e2);
          }
          addSubscribedMediaTrack(t2, n2, i2, s2, r2, o2) {
            let a2 = this.getTrackPublicationBySid(n2);
            if (a2 || n2.startsWith("TR") || this.trackPublications.forEach(((e2) => {
              a2 || t2.kind !== e2.kind.toString() || (a2 = e2);
            })), !a2) return 0 === o2 ? (this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), { trackSid: n2 })), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2)) : (void 0 === o2 && (o2 = 20), void setTimeout((() => {
              this.addSubscribedMediaTrack(t2, n2, i2, s2, r2, o2 - 1);
            }), 150));
            if ("ended" === t2.readyState) return this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), ao(a2))), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2);
            let c2;
            return c2 = "video" === t2.kind ? new Va(t2, n2, s2, r2) : new Ba(t2, n2, s2, this.audioContext, this.audioOutput), c2.source = a2.source, c2.isMuted = a2.isMuted, c2.setMediaStream(i2), c2.start(), a2.setTrack(c2), this.volumeMap.has(a2.source) && zr(c2) && Kr(c2) && c2.setVolume(this.volumeMap.get(a2.source)), a2;
          }
          get hasMetadata() {
            return !!this.participantInfo;
          }
          getTrackPublicationBySid(e2) {
            return this.trackPublications.get(e2);
          }
          updateInfo(t2) {
            if (!super.updateInfo(t2)) return false;
            const n2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
            return t2.tracks.forEach(((e2) => {
              var t3, s2;
              let r2 = this.getTrackPublicationBySid(e2.sid);
              if (r2) r2.updateInfo(e2);
              else {
                const n3 = Js.kindFromProto(e2.type);
                if (!n3) return;
                r2 = new Za(n3, e2, null === (t3 = this.signalClient.connectOptions) || void 0 === t3 ? void 0 : t3.autoSubscribe, { loggerContextCb: () => this.logContext, loggerName: null === (s2 = this.loggerOptions) || void 0 === s2 ? void 0 : s2.loggerName }), r2.updateInfo(e2), i2.set(e2.sid, r2);
                const o2 = Array.from(this.trackPublications.values()).find(((e3) => e3.source === (null == r2 ? void 0 : r2.source)));
                o2 && r2.source !== Js.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(r2.source), Object.assign(Object.assign({}, this.logContext), { oldTrack: ao(o2), newTrack: ao(r2) })), this.addTrackPublication(r2);
              }
              n2.set(e2.sid, r2);
            })), this.trackPublications.forEach(((e2) => {
              n2.has(e2.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), ao(e2))), this.unpublishTrack(e2.trackSid, true));
            })), i2.forEach(((t3) => {
              this.emit(e.ParticipantEvent.TrackPublished, t3);
            })), true;
          }
          unpublishTrack(t2, n2) {
            const i2 = this.trackPublications.get(t2);
            if (!i2) return;
            const { track: s2 } = i2;
            switch (s2 && (s2.stop(), i2.setTrack(void 0)), this.trackPublications.delete(t2), i2.kind) {
              case Js.Kind.Audio:
                this.audioTrackPublications.delete(t2);
                break;
              case Js.Kind.Video:
                this.videoTrackPublications.delete(t2);
            }
            n2 && this.emit(e.ParticipantEvent.TrackUnpublished, i2);
          }
          setAudioOutput(e2) {
            return Zn(this, void 0, void 0, (function* () {
              this.audioOutput = e2;
              const t2 = [];
              this.audioTrackPublications.forEach(((n2) => {
                var i2;
                Kr(n2.track) && zr(n2.track) && t2.push(n2.track.setSinkId(null !== (i2 = e2.deviceId) && void 0 !== i2 ? i2 : "default"));
              })), yield Promise.all(t2);
            }));
          }
          emit(e2) {
            for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
            return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), { event: e2, args: n2 })), super.emit(e2, ...n2);
          }
        }
        var ec;
        e.ConnectionState = void 0, (ec = e.ConnectionState || (e.ConnectionState = {})).Disconnected = "disconnected", ec.Connecting = "connecting", ec.Connected = "connected", ec.Reconnecting = "reconnecting", ec.SignalReconnecting = "signalReconnecting";
        class tc extends ii.EventEmitter {
          constructor(t2) {
            var n2, i2, r2, o2;
            if (super(), n2 = this, this.state = e.ConnectionState.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = false, this.audioEnabled = true, this.isVideoPlaybackBlocked = false, this.log = Wn, this.bufferedEvents = [], this.isResuming = false, this.rpcHandlers = /* @__PURE__ */ new Map(), this.connect = (t3, n3, i3) => Zn(this, void 0, void 0, (function* () {
              var s2;
              if (!pr()) throw yr() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
              const r3 = yield this.disconnectLock.lock();
              if (this.state === e.ConnectionState.Connected) return this.log.info("already connected to room ".concat(this.name), this.logContext), r3(), Promise.resolve();
              if (this.connectFuture) return r3(), this.connectFuture.promise;
              this.setAndEmitConnectionState(e.ConnectionState.Connecting), (null === (s2 = this.regionUrlProvider) || void 0 === s2 ? void 0 : s2.getServerUrl().toString()) !== t3 && (this.regionUrl = void 0, this.regionUrlProvider = void 0), Tr(new URL(t3)) && (void 0 === this.regionUrlProvider ? this.regionUrlProvider = new Da(t3, n3) : this.regionUrlProvider.updateToken(n3), this.regionUrlProvider.fetchRegionSettings().then(((e2) => {
                var t4;
                null === (t4 = this.regionUrlProvider) || void 0 === t4 || t4.setServerReportedRegions(e2);
              })).catch(((e2) => {
                this.log.warn("could not fetch region settings", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
              })));
              const o3 = (s3, a3, c2) => Zn(this, void 0, void 0, (function* () {
                var d2, l2;
                this.abortController && this.abortController.abort();
                const u2 = new AbortController();
                this.abortController = u2, null == r3 || r3();
                try {
                  yield this.attemptConnection(null != c2 ? c2 : t3, n3, i3, u2), this.abortController = void 0, s3();
                } catch (t4) {
                  if (this.regionUrlProvider && t4 instanceof Ds && t4.reason !== e.ConnectionErrorReason.Cancelled && t4.reason !== e.ConnectionErrorReason.NotAllowed) {
                    let n4 = null;
                    try {
                      n4 = yield this.regionUrlProvider.getNextBestRegionUrl(null === (d2 = this.abortController) || void 0 === d2 ? void 0 : d2.signal);
                    } catch (t5) {
                      if (t5 instanceof Ds && (401 === t5.status || t5.reason === e.ConnectionErrorReason.Cancelled)) return this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), void a3(t5);
                    }
                    n4 && !(null === (l2 = this.abortController) || void 0 === l2 ? void 0 : l2.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(t4.message, ". Retrying with another region: ").concat(n4), this.logContext), this.recreateEngine(), yield o3(s3, a3, n4)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, Fr(t4)), a3(t4));
                  } else {
                    let e2 = $e.UNKNOWN_REASON;
                    t4 instanceof Ds && (e2 = Fr(t4)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2), a3(t4);
                  }
                }
              })), a2 = this.regionUrl;
              return this.regionUrl = void 0, this.connectFuture = new Lr(((e2, t4) => {
                o3(e2, t4, a2);
              }), (() => {
                this.clearConnectionFutures();
              })), this.connectFuture.promise;
            })), this.connectSignal = (e2, t3, n3, i3, s2, r3) => Zn(this, void 0, void 0, (function* () {
              var o3, a2, c2;
              const d2 = yield n3.join(e2, t3, { autoSubscribe: i3.autoSubscribe, adaptiveStream: "object" == typeof s2.adaptiveStream || s2.adaptiveStream, maxRetries: i3.maxRetries, e2eeEnabled: !!this.e2eeManager, websocketTimeout: i3.websocketTimeout }, r3.signal);
              let l2 = d2.serverInfo;
              if (l2 || (l2 = { version: d2.serverVersion, region: d2.serverRegion }), this.serverInfo = l2, this.log.debug("connected to Livekit Server ".concat(Object.entries(l2).map(((e3) => {
                let [t4, n4] = e3;
                return "".concat(t4, ": ").concat(n4);
              })).join(", ")), { room: null === (o3 = d2.room) || void 0 === o3 ? void 0 : o3.name, roomSid: null === (a2 = d2.room) || void 0 === a2 ? void 0 : a2.sid, identity: null === (c2 = d2.participant) || void 0 === c2 ? void 0 : c2.identity }), !l2.version) throw new As("unknown server version");
              return "0.15.1" === l2.version && this.options.dynacast && (this.log.debug("disabling dynacast due to server version", this.logContext), s2.dynacast = false), d2;
            })), this.applyJoinResponse = (e2) => {
              const t3 = e2.participant;
              if (this.localParticipant.sid = t3.sid, this.localParticipant.identity = t3.identity, this.localParticipant.setEnabledPublishCodecs(e2.enabledPublishCodecs), this.options.e2ee && this.e2eeManager) try {
                this.e2eeManager.setSifTrailer(e2.sifTrailer);
              } catch (e3) {
                this.log.error(e3 instanceof Error ? e3.message : "Could not set SifTrailer", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
              }
              this.handleParticipantUpdates([t3, ...e2.otherParticipants]), e2.room && this.handleRoomUpdate(e2.room);
            }, this.attemptConnection = (t3, n3, i3, s2) => Zn(this, void 0, void 0, (function* () {
              var r3, o3;
              this.state === e.ConnectionState.Reconnecting || this.isResuming || (null === (r3 = this.engine) || void 0 === r3 ? void 0 : r3.pendingReconnect) ? (this.log.info("Reconnection attempt replaced by new connection attempt", this.logContext), this.recreateEngine()) : this.maybeCreateEngine(), (null === (o3 = this.regionUrlProvider) || void 0 === o3 ? void 0 : o3.isCloud()) && this.engine.setRegionUrlProvider(this.regionUrlProvider), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, Qo), i3), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
              try {
                const i4 = yield this.connectSignal(t3, n3, this.engine, this.connOptions, this.options, s2);
                this.applyJoinResponse(i4), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected);
              } catch (t4) {
                yield this.engine.close(), this.recreateEngine();
                const n4 = new Ds("could not establish signal connection", e.ConnectionErrorReason.ServerUnreachable);
                throw t4 instanceof Error && (n4.message = "".concat(n4.message, ": ").concat(t4.message)), t4 instanceof Ds && (n4.reason = t4.reason, n4.status = t4.status), this.log.debug("error trying to establish signal connection", Object.assign(Object.assign({}, this.logContext), { error: t4 })), n4;
              }
              if (s2.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), new Ds("Connection attempt aborted", e.ConnectionErrorReason.Cancelled);
              try {
                yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, s2);
              } catch (e2) {
                throw yield this.engine.close(), this.recreateEngine(), e2;
              }
              br() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), br() && document.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Connected), this.registerConnectionReconcile();
            })), this.disconnect = function() {
              for (var t3 = arguments.length, i3 = new Array(t3), s2 = 0; s2 < t3; s2++) i3[s2] = arguments[s2];
              return Zn(n2, [...i3], void 0, (function() {
                var t4 = this;
                let n3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (function* () {
                  var i4, s3, r3, o3;
                  const a2 = yield t4.disconnectLock.lock();
                  try {
                    if (t4.state === e.ConnectionState.Disconnected) return void t4.log.debug("already disconnected", t4.logContext);
                    t4.log.info("disconnect from room", Object.assign({}, t4.logContext)), (t4.state === e.ConnectionState.Connecting || t4.state === e.ConnectionState.Reconnecting || t4.isResuming) && (t4.log.warn("abort connection attempt", t4.logContext), null === (i4 = t4.abortController) || void 0 === i4 || i4.abort(), null === (r3 = null === (s3 = t4.connectFuture) || void 0 === s3 ? void 0 : s3.reject) || void 0 === r3 || r3.call(s3, new Ds("Client initiated disconnect", e.ConnectionErrorReason.Cancelled)), t4.connectFuture = void 0), (null === (o3 = t4.engine) || void 0 === o3 ? void 0 : o3.client.isDisconnected) || (yield t4.engine.client.sendLeave()), t4.engine && (yield t4.engine.close()), t4.handleDisconnect(n3, $e.CLIENT_INITIATED), t4.engine = void 0;
                  } finally {
                    a2();
                  }
                })();
              }));
            }, this.onPageLeave = () => Zn(this, void 0, void 0, (function* () {
              this.log.info("Page leave detected, disconnecting", this.logContext), yield this.disconnect();
            })), this.startAudio = () => Zn(this, void 0, void 0, (function* () {
              const t3 = [], n3 = Vs();
              if (n3 && "iOS" === n3.os) {
                const n4 = "livekit-dummy-audio-el";
                let i3 = document.getElementById(n4);
                if (!i3) {
                  i3 = document.createElement("audio"), i3.id = n4, i3.autoplay = true, i3.hidden = true;
                  const t4 = Nr();
                  t4.enabled = true;
                  const s2 = new MediaStream([t4]);
                  i3.srcObject = s2, document.addEventListener("visibilitychange", (() => {
                    i3 && (i3.srcObject = document.hidden ? null : s2, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status", this.logContext), this.startAudio()));
                  })), document.body.append(i3), this.once(e.RoomEvent.Disconnected, (() => {
                    null == i3 || i3.remove(), i3 = null;
                  }));
                }
                t3.push(i3);
              }
              this.remoteParticipants.forEach(((e2) => {
                e2.audioTrackPublications.forEach(((e3) => {
                  e3.track && e3.track.attachedElements.forEach(((e4) => {
                    t3.push(e4);
                  }));
                }));
              }));
              try {
                yield Promise.all([this.acquireAudioContext(), ...t3.map(((e2) => (e2.muted = false, e2.play())))]), this.handleAudioPlaybackStarted();
              } catch (e2) {
                throw this.handleAudioPlaybackFailed(e2), e2;
              }
            })), this.startVideo = () => Zn(this, void 0, void 0, (function* () {
              const e2 = [];
              for (const t3 of this.remoteParticipants.values()) t3.videoTrackPublications.forEach(((t4) => {
                var n3;
                null === (n3 = t4.track) || void 0 === n3 || n3.attachedElements.forEach(((t5) => {
                  e2.includes(t5) || e2.push(t5);
                }));
              }));
              yield Promise.all(e2.map(((e3) => e3.play()))).then((() => {
                this.handleVideoPlaybackStarted();
              })).catch(((e3) => {
                "NotAllowedError" === e3.name ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler", this.logContext);
              }));
            })), this.handleRestarting = () => {
              this.clearConnectionReconcile(), this.isResuming = false;
              for (const e2 of this.remoteParticipants.values()) this.handleParticipantDisconnected(e2.identity, e2);
              this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
            }, this.handleSignalRestarted = (t3) => Zn(this, void 0, void 0, (function* () {
              this.log.debug("signal reconnected to server, region ".concat(t3.serverRegion), Object.assign(Object.assign({}, this.logContext), { region: t3.serverRegion })), this.bufferedEvents = [], this.applyJoinResponse(t3);
              try {
                yield this.localParticipant.republishAllTracks(void 0, true);
              } catch (e2) {
                this.log.error("error trying to re-publish tracks after reconnection", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
              }
              try {
                yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", Object.assign(Object.assign({}, this.logContext), { region: t3.serverRegion }));
              } catch (e2) {
                return;
              }
              this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents();
            })), this.handleParticipantUpdates = (e2) => {
              e2.forEach(((e3) => {
                var t3;
                if (e3.identity === this.localParticipant.identity) return void this.localParticipant.updateInfo(e3);
                "" === e3.identity && (e3.identity = null !== (t3 = this.sidToIdentity.get(e3.sid)) && void 0 !== t3 ? t3 : "");
                let n3 = this.remoteParticipants.get(e3.identity);
                e3.state === at.DISCONNECTED ? this.handleParticipantDisconnected(e3.identity, n3) : n3 = this.getOrCreateParticipant(e3.identity, e3);
              }));
            }, this.handleActiveSpeakersUpdate = (t3) => {
              const n3 = [], i3 = {};
              t3.forEach(((e2) => {
                if (i3[e2.sid] = true, e2.sid === this.localParticipant.sid) this.localParticipant.audioLevel = e2.level, this.localParticipant.setIsSpeaking(true), n3.push(this.localParticipant);
                else {
                  const t4 = this.getRemoteParticipantBySid(e2.sid);
                  t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(true), n3.push(t4));
                }
              })), i3[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(false)), this.remoteParticipants.forEach(((e2) => {
                i3[e2.sid] || (e2.audioLevel = 0, e2.setIsSpeaking(false));
              })), this.activeSpeakers = n3, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, n3);
            }, this.handleSpeakersChanged = (t3) => {
              const n3 = /* @__PURE__ */ new Map();
              this.activeSpeakers.forEach(((e2) => {
                const t4 = this.remoteParticipants.get(e2.identity);
                t4 && t4.sid !== e2.sid || n3.set(e2.sid, e2);
              })), t3.forEach(((e2) => {
                let t4 = this.getRemoteParticipantBySid(e2.sid);
                e2.sid === this.localParticipant.sid && (t4 = this.localParticipant), t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(e2.active), e2.active ? n3.set(e2.sid, t4) : n3.delete(e2.sid));
              }));
              const i3 = Array.from(n3.values());
              i3.sort(((e2, t4) => t4.audioLevel - e2.audioLevel)), this.activeSpeakers = i3, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, i3);
            }, this.handleStreamStateUpdate = (t3) => {
              t3.streamStates.forEach(((t4) => {
                const n3 = this.getRemoteParticipantBySid(t4.participantSid);
                if (!n3) return;
                const i3 = n3.getTrackPublicationBySid(t4.trackSid);
                if (!i3 || !i3.track) return;
                const s2 = Js.streamStateFromProto(t4.state);
                i3.track.setStreamState(s2), s2 !== i3.track.streamState && (n3.emit(e.ParticipantEvent.TrackStreamStateChanged, i3, i3.track.streamState), this.emitWhenConnected(e.RoomEvent.TrackStreamStateChanged, i3, i3.track.streamState, n3));
              }));
            }, this.handleSubscriptionPermissionUpdate = (e2) => {
              const t3 = this.getRemoteParticipantBySid(e2.participantSid);
              if (!t3) return;
              const n3 = t3.getTrackPublicationBySid(e2.trackSid);
              n3 && n3.setAllowed(e2.allowed);
            }, this.handleSubscriptionError = (e2) => {
              const t3 = Array.from(this.remoteParticipants.values()).find(((t4) => t4.trackPublications.has(e2.trackSid)));
              if (!t3) return;
              const n3 = t3.getTrackPublicationBySid(e2.trackSid);
              n3 && n3.setSubscriptionError(e2.err);
            }, this.handleDataPacket = (e2) => {
              const t3 = this.remoteParticipants.get(e2.participantIdentity);
              if ("user" === e2.value.case) this.handleUserPacket(t3, e2.value.value, e2.kind);
              else if ("transcription" === e2.value.case) this.handleTranscription(t3, e2.value.value);
              else if ("sipDtmf" === e2.value.case) this.handleSipDtmf(t3, e2.value.value);
              else if ("chatMessage" === e2.value.case) this.handleChatMessage(t3, e2.value.value);
              else if ("metrics" === e2.value.case) this.handleMetrics(e2.value.value, t3);
              else if ("streamHeader" === e2.value.case || "streamChunk" === e2.value.case || "streamTrailer" === e2.value.case) this.handleDataStream(e2);
              else if ("rpcRequest" === e2.value.case) {
                const t4 = e2.value.value;
                this.handleIncomingRpcRequest(e2.participantIdentity, t4.id, t4.method, t4.payload, t4.responseTimeoutMs, t4.version);
              }
            }, this.handleUserPacket = (t3, n3, i3) => {
              this.emit(e.RoomEvent.DataReceived, n3.payload, t3, i3, n3.topic), null == t3 || t3.emit(e.ParticipantEvent.DataReceived, n3.payload, i3);
            }, this.handleSipDtmf = (t3, n3) => {
              this.emit(e.RoomEvent.SipDTMFReceived, n3, t3), null == t3 || t3.emit(e.ParticipantEvent.SipDTMFReceived, n3);
            }, this.handleTranscription = (t3, n3) => {
              const i3 = n3.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(n3.transcribedParticipantIdentity), s2 = null == i3 ? void 0 : i3.trackPublications.get(n3.trackId), r3 = (function(e2, t4) {
                return e2.segments.map(((e3) => {
                  let { id: n4, text: i4, language: s3, startTime: r4, endTime: o3, final: a2 } = e3;
                  var c2;
                  const d2 = null !== (c2 = t4.get(n4)) && void 0 !== c2 ? c2 : Date.now(), l2 = Date.now();
                  return a2 ? t4.delete(n4) : t4.set(n4, d2), { id: n4, text: i4, startTime: Number.parseInt(r4.toString()), endTime: Number.parseInt(o3.toString()), final: a2, language: s3, firstReceivedTime: d2, lastReceivedTime: l2 };
                }));
              })(n3, this.transcriptionReceivedTimes);
              null == s2 || s2.emit(e.TrackEvent.TranscriptionReceived, r3), null == i3 || i3.emit(e.ParticipantEvent.TranscriptionReceived, r3, s2), this.emit(e.RoomEvent.TranscriptionReceived, r3, i3, s2);
            }, this.handleChatMessage = (t3, n3) => {
              const i3 = (function(e2) {
                const { id: t4, timestamp: n4, message: i4, editTimestamp: s2 } = e2;
                return { id: t4, timestamp: Number.parseInt(n4.toString()), editTimestamp: s2 ? Number.parseInt(s2.toString()) : void 0, message: i4 };
              })(n3);
              this.emit(e.RoomEvent.ChatMessage, i3, t3);
            }, this.handleMetrics = (t3, n3) => {
              this.emit(e.RoomEvent.MetricsReceived, t3, n3);
            }, this.handleDataStream = (e2) => {
              this.incomingDataStreamManager.handleDataStreamPacket(e2);
            }, this.bufferedSegments = /* @__PURE__ */ new Map(), this.handleAudioPlaybackStarted = () => {
              this.canPlaybackAudio || (this.audioEnabled = true, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, true));
            }, this.handleAudioPlaybackFailed = (t3) => {
              this.log.warn("could not playback audio", Object.assign(Object.assign({}, this.logContext), { error: t3 })), this.canPlaybackAudio && (this.audioEnabled = false, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, false));
            }, this.handleVideoPlaybackStarted = () => {
              this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = false, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, true));
            }, this.handleVideoPlaybackFailed = () => {
              this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = true, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, false));
            }, this.handleDeviceChange = () => Zn(this, void 0, void 0, (function* () {
              var t3;
              "iOS" !== (null === (t3 = Vs()) || void 0 === t3 ? void 0 : t3.os) && (yield this.selectDefaultDevices()), this.emit(e.RoomEvent.MediaDevicesChanged);
            })), this.handleRoomUpdate = (t3) => {
              const n3 = this.roomInfo;
              this.roomInfo = t3, n3 && n3.metadata !== t3.metadata && this.emitWhenConnected(e.RoomEvent.RoomMetadataChanged, t3.metadata), (null == n3 ? void 0 : n3.activeRecording) !== t3.activeRecording && this.emitWhenConnected(e.RoomEvent.RecordingStatusChanged, t3.activeRecording);
            }, this.handleConnectionQualityUpdate = (e2) => {
              e2.updates.forEach(((e3) => {
                if (e3.participantSid === this.localParticipant.sid) return void this.localParticipant.setConnectionQuality(e3.quality);
                const t3 = this.getRemoteParticipantBySid(e3.participantSid);
                t3 && t3.setConnectionQuality(e3.quality);
              }));
            }, this.onLocalParticipantMetadataChanged = (t3) => {
              this.emit(e.RoomEvent.ParticipantMetadataChanged, t3, this.localParticipant);
            }, this.onLocalParticipantNameChanged = (t3) => {
              this.emit(e.RoomEvent.ParticipantNameChanged, t3, this.localParticipant);
            }, this.onLocalAttributesChanged = (t3) => {
              this.emit(e.RoomEvent.ParticipantAttributesChanged, t3, this.localParticipant);
            }, this.onLocalTrackMuted = (t3) => {
              this.emit(e.RoomEvent.TrackMuted, t3, this.localParticipant);
            }, this.onLocalTrackUnmuted = (t3) => {
              this.emit(e.RoomEvent.TrackUnmuted, t3, this.localParticipant);
            }, this.onTrackProcessorUpdate = (e2) => {
              var t3;
              null === (t3 = null == e2 ? void 0 : e2.onPublish) || void 0 === t3 || t3.call(e2, this);
            }, this.onLocalTrackPublished = (t3) => Zn(this, void 0, void 0, (function* () {
              var n3, i3, s2, r3, o3, a2;
              if (null === (n3 = t3.track) || void 0 === n3 || n3.on(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), null === (i3 = t3.track) || void 0 === i3 || i3.on(e.TrackEvent.Restarted, this.onLocalTrackRestarted), null === (o3 = null === (r3 = null === (s2 = t3.track) || void 0 === s2 ? void 0 : s2.getProcessor()) || void 0 === r3 ? void 0 : r3.onPublish) || void 0 === o3 || o3.call(r3, this), this.emit(e.RoomEvent.LocalTrackPublished, t3, this.localParticipant), Gr(t3.track)) {
                (yield t3.track.checkForSilence()) && this.emit(e.RoomEvent.LocalAudioSilenceDetected, t3);
              }
              const c2 = yield null === (a2 = t3.track) || void 0 === a2 ? void 0 : a2.getDeviceId(false), d2 = io(t3.source);
              d2 && c2 && c2 !== this.localParticipant.activeDeviceMap.get(d2) && (this.localParticipant.activeDeviceMap.set(d2, c2), this.emit(e.RoomEvent.ActiveDeviceChanged, d2, c2));
            })), this.onLocalTrackUnpublished = (t3) => {
              var n3, i3;
              null === (n3 = t3.track) || void 0 === n3 || n3.off(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), null === (i3 = t3.track) || void 0 === i3 || i3.off(e.TrackEvent.Restarted, this.onLocalTrackRestarted), this.emit(e.RoomEvent.LocalTrackUnpublished, t3, this.localParticipant);
            }, this.onLocalTrackRestarted = (t3) => Zn(this, void 0, void 0, (function* () {
              const n3 = yield t3.getDeviceId(false), i3 = io(t3.source);
              i3 && n3 && n3 !== this.localParticipant.activeDeviceMap.get(i3) && (this.log.debug("local track restarted, setting ".concat(i3, " ").concat(n3, " active"), this.logContext), this.localParticipant.activeDeviceMap.set(i3, n3), this.emit(e.RoomEvent.ActiveDeviceChanged, i3, n3));
            })), this.onLocalConnectionQualityChanged = (t3) => {
              this.emit(e.RoomEvent.ConnectionQualityChanged, t3, this.localParticipant);
            }, this.onMediaDevicesError = (t3, n3) => {
              this.emit(e.RoomEvent.MediaDevicesError, t3, n3);
            }, this.onLocalParticipantPermissionsChanged = (t3) => {
              this.emit(e.RoomEvent.ParticipantPermissionsChanged, t3, this.localParticipant);
            }, this.onLocalChatMessageSent = (t3) => {
              this.emit(e.RoomEvent.ChatMessage, t3, this.localParticipant);
            }, this.setMaxListeners(100), this.remoteParticipants = /* @__PURE__ */ new Map(), this.sidToIdentity = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, Jo), t2), this.log = zn(null !== (i2 = this.options.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.Room), this.transcriptionReceivedTimes = /* @__PURE__ */ new Map(), this.options.audioCaptureDefaults = Object.assign(Object.assign({}, Go), null == t2 ? void 0 : t2.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, zo), null == t2 ? void 0 : t2.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, Wo), null == t2 ? void 0 : t2.publishDefaults), this.maybeCreateEngine(), this.incomingDataStreamManager = new _a(), this.outgoingDataStreamManager = new ja(this.engine, this.log), this.disconnectLock = new s(), this.localParticipant = new Xa("", "", this.engine, this.options, this.rpcHandlers, this.outgoingDataStreamManager), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", Ur(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", Ur(this.options.audioCaptureDefaults.deviceId)), (null === (r2 = this.options.audioOutput) || void 0 === r2 ? void 0 : r2.deviceId) && this.switchActiveDevice("audiooutput", Ur(this.options.audioOutput.deviceId)).catch(((e2) => this.log.warn("Could not set audio output: ".concat(e2.message), this.logContext))), this.options.e2ee && this.setupE2EE(), br()) {
              const e2 = new AbortController();
              null === (o2 = navigator.mediaDevices) || void 0 === o2 || o2.addEventListener("devicechange", this.handleDeviceChange, { signal: e2.signal }), tc.cleanupRegistry && tc.cleanupRegistry.register(this, (() => {
                e2.abort();
              }));
            }
          }
          registerTextStreamHandler(e2, t2) {
            return this.incomingDataStreamManager.registerTextStreamHandler(e2, t2);
          }
          unregisterTextStreamHandler(e2) {
            return this.incomingDataStreamManager.unregisterTextStreamHandler(e2);
          }
          registerByteStreamHandler(e2, t2) {
            return this.incomingDataStreamManager.registerByteStreamHandler(e2, t2);
          }
          unregisterByteStreamHandler(e2) {
            return this.incomingDataStreamManager.unregisterByteStreamHandler(e2);
          }
          registerRpcMethod(e2, t2) {
            if (this.rpcHandlers.has(e2)) throw Error("RPC handler already registered for method ".concat(e2, ", unregisterRpcMethod before trying to register again"));
            this.rpcHandlers.set(e2, t2);
          }
          unregisterRpcMethod(e2) {
            this.rpcHandlers.delete(e2);
          }
          setE2EEEnabled(e2) {
            return Zn(this, void 0, void 0, (function* () {
              if (!this.e2eeManager) throw Error("e2ee not configured, please set e2ee settings within the room options");
              yield Promise.all([this.localParticipant.setE2EEEnabled(e2)]), "" !== this.localParticipant.identity && this.e2eeManager.setParticipantCryptorEnabled(e2, this.localParticipant.identity);
            }));
          }
          setupE2EE() {
            var t2;
            this.options.e2ee && ("e2eeManager" in this.options.e2ee ? this.e2eeManager = this.options.e2ee.e2eeManager : this.e2eeManager = new uo(this.options.e2ee), this.e2eeManager.on(e.EncryptionEvent.ParticipantEncryptionStatusChanged, ((t3, n2) => {
              Yr(n2) && (this.isE2EEEnabled = t3), this.emit(e.RoomEvent.ParticipantEncryptionStatusChanged, t3, n2);
            })), this.e2eeManager.on(e.EncryptionEvent.EncryptionError, ((t3) => this.emit(e.RoomEvent.EncryptionError, t3))), null === (t2 = this.e2eeManager) || void 0 === t2 || t2.setup(this));
          }
          get logContext() {
            var e2;
            return { room: this.name, roomID: null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.sid, participant: this.localParticipant.identity, pID: this.localParticipant.sid };
          }
          get isRecording() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.activeRecording) && void 0 !== t2 && t2;
          }
          getSid() {
            return Zn(this, void 0, void 0, (function* () {
              return this.state === e.ConnectionState.Disconnected ? "" : this.roomInfo && "" !== this.roomInfo.sid ? this.roomInfo.sid : new Promise(((t2, n2) => {
                const i2 = (n3) => {
                  "" !== n3.sid && (this.engine.off(e.EngineEvent.RoomUpdate, i2), t2(n3.sid));
                };
                this.engine.on(e.EngineEvent.RoomUpdate, i2), this.once(e.RoomEvent.Disconnected, (() => {
                  this.engine.off(e.EngineEvent.RoomUpdate, i2), n2("Room disconnected before room server id was available");
                }));
              }));
            }));
          }
          get name() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.name) && void 0 !== t2 ? t2 : "";
          }
          get metadata() {
            var e2;
            return null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.metadata;
          }
          get numParticipants() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.numParticipants) && void 0 !== t2 ? t2 : 0;
          }
          get numPublishers() {
            var e2, t2;
            return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.numPublishers) && void 0 !== t2 ? t2 : 0;
          }
          maybeCreateEngine() {
            this.engine && !this.engine.isClosed || (this.engine = new Ia(this.options), this.engine.on(e.EngineEvent.ParticipantUpdate, this.handleParticipantUpdates).on(e.EngineEvent.RoomUpdate, this.handleRoomUpdate).on(e.EngineEvent.SpeakersChanged, this.handleSpeakersChanged).on(e.EngineEvent.StreamStateChanged, this.handleStreamStateUpdate).on(e.EngineEvent.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(e.EngineEvent.SubscriptionError, this.handleSubscriptionError).on(e.EngineEvent.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(e.EngineEvent.MediaTrackAdded, ((e2, t2, n2) => {
              this.onTrackAdded(e2, t2, n2);
            })).on(e.EngineEvent.Disconnected, ((e2) => {
              this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2);
            })).on(e.EngineEvent.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(e.EngineEvent.DataPacketReceived, this.handleDataPacket).on(e.EngineEvent.Resuming, (() => {
              this.clearConnectionReconcile(), this.isResuming = true, this.log.info("Resuming signal connection", this.logContext), this.setAndEmitConnectionState(e.ConnectionState.SignalReconnecting) && this.emit(e.RoomEvent.SignalReconnecting);
            })).on(e.EngineEvent.Resumed, (() => {
              this.registerConnectionReconcile(), this.isResuming = false, this.log.info("Resumed signal connection", this.logContext), this.updateSubscriptions(), this.emitBufferedEvents(), this.setAndEmitConnectionState(e.ConnectionState.Connected) && this.emit(e.RoomEvent.Reconnected);
            })).on(e.EngineEvent.SignalResumed, (() => {
              this.bufferedEvents = [], (this.state === e.ConnectionState.Reconnecting || this.isResuming) && this.sendSyncState();
            })).on(e.EngineEvent.Restarting, this.handleRestarting).on(e.EngineEvent.SignalRestarted, this.handleSignalRestarted).on(e.EngineEvent.Offline, (() => {
              this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
            })).on(e.EngineEvent.DCBufferStatusChanged, ((t2, n2) => {
              this.emit(e.RoomEvent.DCBufferStatusChanged, t2, n2);
            })).on(e.EngineEvent.LocalTrackSubscribed, ((t2) => {
              const n2 = this.localParticipant.getTrackPublications().find(((e2) => {
                let { trackSid: n3 } = e2;
                return n3 === t2;
              }));
              n2 ? (this.localParticipant.emit(e.ParticipantEvent.LocalTrackSubscribed, n2), this.emitWhenConnected(e.RoomEvent.LocalTrackSubscribed, n2, this.localParticipant)) : this.log.warn("could not find local track subscription for subscribed event", this.logContext);
            })).on(e.EngineEvent.RoomMoved, ((t2) => {
              this.log.debug("room moved", t2), t2.room && this.handleRoomUpdate(t2.room), this.remoteParticipants.forEach(((e2, t3) => {
                this.handleParticipantDisconnected(t3, e2);
              })), this.emit(e.RoomEvent.Moved, t2.room.name), t2.participant ? this.handleParticipantUpdates([t2.participant, ...t2.otherParticipants]) : this.handleParticipantUpdates(t2.otherParticipants);
            })), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine), this.outgoingDataStreamManager && this.outgoingDataStreamManager.setupEngine(this.engine));
          }
          static getLocalDevices(e2) {
            let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return po.getInstance().getDevices(e2, t2);
          }
          prepareConnection(t2, n2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.state === e.ConnectionState.Disconnected) {
                this.log.debug("prepareConnection to ".concat(t2), this.logContext);
                try {
                  if (Tr(new URL(t2)) && n2) {
                    this.regionUrlProvider = new Da(t2, n2);
                    const i2 = yield this.regionUrlProvider.getNextBestRegionUrl();
                    i2 && this.state === e.ConnectionState.Disconnected && (this.regionUrl = i2, yield fetch(jr(i2), { method: "HEAD" }), this.log.debug("prepared connection to ".concat(i2), this.logContext));
                  } else yield fetch(jr(t2), { method: "HEAD" });
                } catch (e2) {
                  this.log.warn("could not prepare connection", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
                }
              }
            }));
          }
          getParticipantByIdentity(e2) {
            return this.localParticipant.identity === e2 ? this.localParticipant : this.remoteParticipants.get(e2);
          }
          clearConnectionFutures() {
            this.connectFuture = void 0;
          }
          simulateScenario(e2, t2) {
            return Zn(this, void 0, void 0, (function* () {
              let n2, i2 = () => Zn(this, void 0, void 0, (function* () {
              }));
              switch (e2) {
                case "signal-reconnect":
                  yield this.engine.client.handleOnClose("simulate disconnect");
                  break;
                case "speaker":
                  n2 = new On({ scenario: { case: "speakerUpdate", value: 3 } });
                  break;
                case "node-failure":
                  n2 = new On({ scenario: { case: "nodeFailure", value: true } });
                  break;
                case "server-leave":
                  n2 = new On({ scenario: { case: "serverLeave", value: true } });
                  break;
                case "migration":
                  n2 = new On({ scenario: { case: "migration", value: true } });
                  break;
                case "resume-reconnect":
                  this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
                  break;
                case "disconnect-signal-on-resume":
                  i2 = () => Zn(this, void 0, void 0, (function* () {
                    yield this.engine.client.handleOnClose("simulate resume-disconnect");
                  })), n2 = new On({ scenario: { case: "disconnectSignalOnResume", value: true } });
                  break;
                case "disconnect-signal-on-resume-no-messages":
                  i2 = () => Zn(this, void 0, void 0, (function* () {
                    yield this.engine.client.handleOnClose("simulate resume-disconnect");
                  })), n2 = new On({ scenario: { case: "disconnectSignalOnResumeNoMessages", value: true } });
                  break;
                case "full-reconnect":
                  this.engine.fullReconnectOnNext = true, yield this.engine.client.handleOnClose("simulate full-reconnect");
                  break;
                case "force-tcp":
                case "force-tls":
                  n2 = new On({ scenario: { case: "switchCandidateProtocol", value: "force-tls" === e2 ? 2 : 1 } }), i2 = () => Zn(this, void 0, void 0, (function* () {
                    const e3 = this.engine.client.onLeave;
                    e3 && e3(new cn({ reason: $e.CLIENT_INITIATED, action: dn.RECONNECT }));
                  }));
                  break;
                case "subscriber-bandwidth":
                  if (void 0 === t2 || "number" != typeof t2) throw new Error("subscriber-bandwidth requires a number as argument");
                  n2 = new On({ scenario: { case: "subscriberBandwidth", value: Vr(t2) } });
                  break;
                case "leave-full-reconnect":
                  n2 = new On({ scenario: { case: "leaveRequestFullReconnect", value: true } });
              }
              n2 && (yield this.engine.client.sendSimulateScenario(n2), yield i2());
            }));
          }
          get canPlaybackAudio() {
            return this.audioEnabled;
          }
          get canPlaybackVideo() {
            return !this.isVideoPlaybackBlocked;
          }
          getActiveDevice(e2) {
            return this.localParticipant.activeDeviceMap.get(e2);
          }
          switchActiveDevice(t2, n2) {
            return Zn(this, arguments, void 0, (function(t3, n3) {
              var i2 = this;
              let s2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              return (function* () {
                var r2, o2, a2, c2, d2, l2, u2;
                let h2 = true, p2 = false;
                const m2 = s2 ? { exact: n3 } : n3;
                if ("audioinput" === t3) {
                  p2 = 0 === i2.localParticipant.audioTrackPublications.size;
                  const e2 = null !== (r2 = i2.getActiveDevice(t3)) && void 0 !== r2 ? r2 : i2.options.audioCaptureDefaults.deviceId;
                  i2.options.audioCaptureDefaults.deviceId = m2;
                  const n4 = Array.from(i2.localParticipant.audioTrackPublications.values()).filter(((e3) => e3.source === Js.Source.Microphone));
                  try {
                    h2 = (yield Promise.all(n4.map(((e3) => {
                      var t4;
                      return null === (t4 = e3.audioTrack) || void 0 === t4 ? void 0 : t4.setDeviceId(m2);
                    })))).every(((e3) => true === e3));
                  } catch (t4) {
                    throw i2.options.audioCaptureDefaults.deviceId = e2, t4;
                  }
                  const s3 = n4.some(((e3) => {
                    var t4, n5;
                    return null !== (n5 = null === (t4 = e3.track) || void 0 === t4 ? void 0 : t4.isMuted) && void 0 !== n5 && n5;
                  }));
                  h2 && s3 && (p2 = true);
                } else if ("videoinput" === t3) {
                  p2 = 0 === i2.localParticipant.videoTrackPublications.size;
                  const e2 = null !== (o2 = i2.getActiveDevice(t3)) && void 0 !== o2 ? o2 : i2.options.videoCaptureDefaults.deviceId;
                  i2.options.videoCaptureDefaults.deviceId = m2;
                  const n4 = Array.from(i2.localParticipant.videoTrackPublications.values()).filter(((e3) => e3.source === Js.Source.Camera));
                  try {
                    h2 = (yield Promise.all(n4.map(((e3) => {
                      var t4;
                      return null === (t4 = e3.videoTrack) || void 0 === t4 ? void 0 : t4.setDeviceId(m2);
                    })))).every(((e3) => true === e3));
                  } catch (t4) {
                    throw i2.options.videoCaptureDefaults.deviceId = e2, t4;
                  }
                  const s3 = n4.some(((e3) => {
                    var t4, n5;
                    return null !== (n5 = null === (t4 = e3.track) || void 0 === t4 ? void 0 : t4.isMuted) && void 0 !== n5 && n5;
                  }));
                  h2 && s3 && (p2 = true);
                } else if ("audiooutput" === t3) {
                  if (p2 = true, !hr() && !i2.options.webAudioMix || i2.options.webAudioMix && i2.audioContext && !("setSinkId" in i2.audioContext)) throw new Error("cannot switch audio output, the current browser does not support it");
                  i2.options.webAudioMix && (n3 = null !== (a2 = yield po.getInstance().normalizeDeviceId("audiooutput", n3)) && void 0 !== a2 ? a2 : ""), null !== (c2 = (u2 = i2.options).audioOutput) && void 0 !== c2 || (u2.audioOutput = {});
                  const e2 = null !== (d2 = i2.getActiveDevice(t3)) && void 0 !== d2 ? d2 : i2.options.audioOutput.deviceId;
                  i2.options.audioOutput.deviceId = n3;
                  try {
                    i2.options.webAudioMix && (null === (l2 = i2.audioContext) || void 0 === l2 || l2.setSinkId(n3)), yield Promise.all(Array.from(i2.remoteParticipants.values()).map(((e3) => e3.setAudioOutput({ deviceId: n3 }))));
                  } catch (t4) {
                    throw i2.options.audioOutput.deviceId = e2, t4;
                  }
                }
                return p2 && (i2.localParticipant.activeDeviceMap.set(t3, n3), i2.emit(e.RoomEvent.ActiveDeviceChanged, t3, n3)), h2;
              })();
            }));
          }
          setupLocalParticipantEvents() {
            this.localParticipant.on(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).on(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).on(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).on(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).on(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).on(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).on(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).on(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged);
          }
          recreateEngine() {
            var e2;
            null === (e2 = this.engine) || void 0 === e2 || e2.close(), this.engine = void 0, this.isResuming = false, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine();
          }
          onTrackAdded(t2, n2, i2) {
            if (this.state === e.ConnectionState.Connecting || this.state === e.ConnectionState.Reconnecting) {
              const s3 = () => {
                this.onTrackAdded(t2, n2, i2), r3();
              }, r3 = () => {
                this.off(e.RoomEvent.Reconnected, s3), this.off(e.RoomEvent.Connected, s3), this.off(e.RoomEvent.Disconnected, r3);
              };
              return this.once(e.RoomEvent.Reconnected, s3), this.once(e.RoomEvent.Connected, s3), void this.once(e.RoomEvent.Disconnected, r3);
            }
            if (this.state === e.ConnectionState.Disconnected) return void this.log.warn("skipping incoming track after Room disconnected", this.logContext);
            if ("ended" === t2.readyState) return void this.log.info("skipping incoming track as it already ended", this.logContext);
            const s2 = (function(e2) {
              const t3 = e2.split("|");
              return t3.length > 1 ? [t3[0], e2.substr(t3[0].length + 1)] : [e2, ""];
            })(n2.id), r2 = s2[0];
            let o2 = s2[1], a2 = t2.id;
            if (o2 && o2.startsWith("TR") && (a2 = o2), r2 === this.localParticipant.sid) return void this.log.warn("tried to create RemoteParticipant for local participant", this.logContext);
            const c2 = Array.from(this.remoteParticipants.values()).find(((e2) => e2.sid === r2));
            if (!c2) return void this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(r2), this.logContext);
            let d2;
            this.options.adaptiveStream && (d2 = "object" == typeof this.options.adaptiveStream ? this.options.adaptiveStream : {});
            const l2 = c2.addSubscribedMediaTrack(t2, a2, n2, i2, d2);
            (null == l2 ? void 0 : l2.isEncrypted) && !this.e2eeManager && this.emit(e.RoomEvent.EncryptionError, new Error("Encrypted ".concat(l2.source, " track received from participant ").concat(c2.sid, ", but room does not have encryption enabled!")));
          }
          handleDisconnect() {
            let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n2 = arguments.length > 1 ? arguments[1] : void 0;
            var i2;
            if (this.clearConnectionReconcile(), this.isResuming = false, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.incomingDataStreamManager.clearHandlersAndControllers(), this.state !== e.ConnectionState.Disconnected) {
              this.regionUrl = void 0;
              try {
                this.remoteParticipants.forEach(((e2) => {
                  e2.trackPublications.forEach(((t3) => {
                    e2.unpublishTrack(t3.trackSid);
                  }));
                })), this.localParticipant.trackPublications.forEach(((e2) => {
                  var n3, i3, s2;
                  e2.track && this.localParticipant.unpublishTrack(e2.track, t2), t2 ? (null === (n3 = e2.track) || void 0 === n3 || n3.detach(), null === (i3 = e2.track) || void 0 === i3 || i3.stop()) : null === (s2 = e2.track) || void 0 === s2 || s2.stopMonitor();
                })), this.localParticipant.off(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).off(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).off(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).off(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).off(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).off(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).off(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).off(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && "boolean" == typeof this.options.webAudioMix && (this.audioContext.close(), this.audioContext = void 0), br() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), null === (i2 = navigator.mediaDevices) || void 0 === i2 || i2.removeEventListener("devicechange", this.handleDeviceChange));
              } finally {
                this.setAndEmitConnectionState(e.ConnectionState.Disconnected), this.emit(e.RoomEvent.Disconnected, n2);
              }
            }
          }
          handleParticipantDisconnected(t2, n2) {
            var i2;
            this.remoteParticipants.delete(t2), n2 && (this.incomingDataStreamManager.validateParticipantHasNoActiveDataStreams(t2), n2.trackPublications.forEach(((e2) => {
              n2.unpublishTrack(e2.trackSid, true);
            })), this.emit(e.RoomEvent.ParticipantDisconnected, n2), n2.setDisconnected(), null === (i2 = this.localParticipant) || void 0 === i2 || i2.handleParticipantDisconnected(n2.identity));
          }
          handleIncomingRpcRequest(e2, t2, n2, i2, s2, r2) {
            return Zn(this, void 0, void 0, (function* () {
              if (yield this.engine.publishRpcAck(e2, t2), 1 !== r2) return void (yield this.engine.publishRpcResponse(e2, t2, null, Zo.builtIn("UNSUPPORTED_VERSION")));
              const o2 = this.rpcHandlers.get(n2);
              if (!o2) return void (yield this.engine.publishRpcResponse(e2, t2, null, Zo.builtIn("UNSUPPORTED_METHOD")));
              let a2 = null, c2 = null;
              try {
                const r3 = yield o2({ requestId: t2, callerIdentity: e2, payload: i2, responseTimeout: s2 });
                $o(r3) > 15360 ? (a2 = Zo.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"), console.warn("RPC Response payload too large for ".concat(n2))) : c2 = r3;
              } catch (e3) {
                e3 instanceof Zo ? a2 = e3 : (console.warn("Uncaught error returned by RPC handler for ".concat(n2, ". Returning APPLICATION_ERROR instead."), e3), a2 = Zo.builtIn("APPLICATION_ERROR"));
              }
              yield this.engine.publishRpcResponse(e2, t2, c2, a2);
            }));
          }
          selectDefaultDevices() {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2, i2;
              const s2 = po.getInstance().previousDevices, r2 = yield po.getInstance().getDevices(void 0, false), o2 = Vs();
              if ("Chrome" === (null == o2 ? void 0 : o2.name) && "iOS" !== o2.os) for (let t3 of r2) {
                const n3 = s2.find(((e2) => e2.deviceId === t3.deviceId));
                n3 && "" !== n3.label && n3.kind === t3.kind && n3.label !== t3.label && "default" === this.getActiveDevice(t3.kind) && this.emit(e.RoomEvent.ActiveDeviceChanged, t3.kind, t3.deviceId);
              }
              const a2 = ["audiooutput", "audioinput", "videoinput"];
              for (let e2 of a2) {
                const o3 = no(e2), a3 = this.localParticipant.getTrackPublication(o3);
                if (a3 && (null === (t2 = a3.track) || void 0 === t2 ? void 0 : t2.isUserProvided)) continue;
                const c2 = r2.filter(((t3) => t3.kind === e2)), d2 = this.getActiveDevice(e2);
                d2 === (null === (n2 = s2.filter(((t3) => t3.kind === e2))[0]) || void 0 === n2 ? void 0 : n2.deviceId) && c2.length > 0 && (null === (i2 = c2[0]) || void 0 === i2 ? void 0 : i2.deviceId) !== d2 ? yield this.switchActiveDevice(e2, c2[0].deviceId) : "audioinput" === e2 && !vr() || "videoinput" === e2 || !(c2.length > 0) || c2.find(((t3) => t3.deviceId === this.getActiveDevice(e2))) || "audiooutput" === e2 && vr() || (yield this.switchActiveDevice(e2, c2[0].deviceId));
              }
            }));
          }
          acquireAudioContext() {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2;
              if ("boolean" != typeof this.options.webAudioMix && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : this.audioContext && "closed" !== this.audioContext.state || (this.audioContext = null !== (t2 = to()) && void 0 !== t2 ? t2 : void 0), this.options.webAudioMix && this.remoteParticipants.forEach(((e2) => e2.setAudioContext(this.audioContext))), this.localParticipant.setAudioContext(this.audioContext), this.audioContext && "suspended" === this.audioContext.state) try {
                yield Promise.race([this.audioContext.resume(), or(200)]);
              } catch (e2) {
                this.log.warn("Could not resume audio context", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
              }
              const i2 = "running" === (null === (n2 = this.audioContext) || void 0 === n2 ? void 0 : n2.state);
              i2 !== this.canPlaybackAudio && (this.audioEnabled = i2, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, i2));
            }));
          }
          createParticipant(e2, t2) {
            var n2;
            let i2;
            return i2 = t2 ? $a.fromParticipantInfo(this.engine.client, t2, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }) : new $a(this.engine.client, "", e2, void 0, void 0, void 0, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }), this.options.webAudioMix && i2.setAudioContext(this.audioContext), (null === (n2 = this.options.audioOutput) || void 0 === n2 ? void 0 : n2.deviceId) && i2.setAudioOutput(this.options.audioOutput).catch(((e3) => this.log.warn("Could not set audio output: ".concat(e3.message), this.logContext))), i2;
          }
          getOrCreateParticipant(t2, n2) {
            if (this.remoteParticipants.has(t2)) {
              const e2 = this.remoteParticipants.get(t2);
              if (n2) {
                e2.updateInfo(n2) && this.sidToIdentity.set(n2.sid, n2.identity);
              }
              return e2;
            }
            const i2 = this.createParticipant(t2, n2);
            return this.remoteParticipants.set(t2, i2), this.sidToIdentity.set(n2.sid, n2.identity), this.emitWhenConnected(e.RoomEvent.ParticipantConnected, i2), i2.on(e.ParticipantEvent.TrackPublished, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.TrackPublished, t3, i2);
            })).on(e.ParticipantEvent.TrackSubscribed, ((t3, n3) => {
              t3.kind === Js.Kind.Audio ? (t3.on(e.TrackEvent.AudioPlaybackStarted, this.handleAudioPlaybackStarted), t3.on(e.TrackEvent.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : t3.kind === Js.Kind.Video && (t3.on(e.TrackEvent.VideoPlaybackFailed, this.handleVideoPlaybackFailed), t3.on(e.TrackEvent.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emit(e.RoomEvent.TrackSubscribed, t3, n3, i2);
            })).on(e.ParticipantEvent.TrackUnpublished, ((t3) => {
              this.emit(e.RoomEvent.TrackUnpublished, t3, i2);
            })).on(e.ParticipantEvent.TrackUnsubscribed, ((t3, n3) => {
              this.emit(e.RoomEvent.TrackUnsubscribed, t3, n3, i2);
            })).on(e.ParticipantEvent.TrackMuted, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.TrackMuted, t3, i2);
            })).on(e.ParticipantEvent.TrackUnmuted, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.TrackUnmuted, t3, i2);
            })).on(e.ParticipantEvent.ParticipantMetadataChanged, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.ParticipantMetadataChanged, t3, i2);
            })).on(e.ParticipantEvent.ParticipantNameChanged, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.ParticipantNameChanged, t3, i2);
            })).on(e.ParticipantEvent.AttributesChanged, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.ParticipantAttributesChanged, t3, i2);
            })).on(e.ParticipantEvent.ConnectionQualityChanged, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.ConnectionQualityChanged, t3, i2);
            })).on(e.ParticipantEvent.ParticipantPermissionsChanged, ((t3) => {
              this.emitWhenConnected(e.RoomEvent.ParticipantPermissionsChanged, t3, i2);
            })).on(e.ParticipantEvent.TrackSubscriptionStatusChanged, ((t3, n3) => {
              this.emitWhenConnected(e.RoomEvent.TrackSubscriptionStatusChanged, t3, n3, i2);
            })).on(e.ParticipantEvent.TrackSubscriptionFailed, ((t3, n3) => {
              this.emit(e.RoomEvent.TrackSubscriptionFailed, t3, i2, n3);
            })).on(e.ParticipantEvent.TrackSubscriptionPermissionChanged, ((t3, n3) => {
              this.emitWhenConnected(e.RoomEvent.TrackSubscriptionPermissionChanged, t3, n3, i2);
            })).on(e.ParticipantEvent.Active, (() => {
              this.emitWhenConnected(e.RoomEvent.ParticipantActive, i2), i2.kind === ct.AGENT && this.localParticipant.setActiveAgent(i2);
            })), n2 && i2.updateInfo(n2), i2;
          }
          sendSyncState() {
            const e2 = Array.from(this.remoteParticipants.values()).reduce(((e3, t3) => (e3.push(...t3.getTrackPublications()), e3)), []), t2 = this.localParticipant.getTrackPublications();
            this.engine.sendSyncState(e2, t2);
          }
          updateSubscriptions() {
            for (const e2 of this.remoteParticipants.values()) for (const t2 of e2.videoTrackPublications.values()) t2.isSubscribed && Jr(t2) && t2.emitTrackUpdate();
          }
          getRemoteParticipantBySid(e2) {
            const t2 = this.sidToIdentity.get(e2);
            if (t2) return this.remoteParticipants.get(t2);
          }
          registerConnectionReconcile() {
            this.clearConnectionReconcile();
            let e2 = 0;
            this.connectionReconcileInterval = Gs.setInterval((() => {
              this.engine && !this.engine.isClosed && this.engine.verifyTransport() ? e2 = 0 : (e2++, this.log.warn("detected connection state mismatch", Object.assign(Object.assign({}, this.logContext), { numFailures: e2, engine: this.engine ? { closed: this.engine.isClosed, transportsConnected: this.engine.verifyTransport() } : void 0 })), e2 >= 3 && (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, $e.STATE_MISMATCH)));
            }), 4e3);
          }
          clearConnectionReconcile() {
            this.connectionReconcileInterval && Gs.clearInterval(this.connectionReconcileInterval);
          }
          setAndEmitConnectionState(t2) {
            return t2 !== this.state && (this.state = t2, this.emit(e.RoomEvent.ConnectionStateChanged, this.state), true);
          }
          emitBufferedEvents() {
            this.bufferedEvents.forEach(((e2) => {
              let [t2, n2] = e2;
              this.emit(t2, ...n2);
            })), this.bufferedEvents = [];
          }
          emitWhenConnected(t2) {
            for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), s2 = 1; s2 < n2; s2++) i2[s2 - 1] = arguments[s2];
            if (this.state === e.ConnectionState.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([t2, i2]);
            else if (this.state === e.ConnectionState.Connected) return this.emit(t2, ...i2);
            return false;
          }
          simulateParticipants(t2) {
            return Zn(this, void 0, void 0, (function* () {
              var n2, i2;
              const s2 = Object.assign({ audio: true, video: true, useRealTracks: false }, t2.publish), r2 = Object.assign({ count: 9, audio: false, video: true, aspectRatios: [1.66, 1.7, 1.3] }, t2.participants);
              if (this.handleDisconnect(), this.roomInfo = new it({ sid: "RM_SIMULATED", name: "simulated-room", emptyTimeout: 0, maxParticipants: 0, creationTime: x.parse((/* @__PURE__ */ new Date()).getTime()), metadata: "", numParticipants: 1, numPublishers: 1, turnPassword: "", enabledCodecs: [], activeRecording: false }), this.localParticipant.updateInfo(new ot({ identity: "simulated-local", name: "local-name" })), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected), this.emit(e.RoomEvent.Connected), this.setAndEmitConnectionState(e.ConnectionState.Connected), s2.video) {
                const t3 = new Ga(Js.Kind.Video, new ht({ source: Qe.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Je.AUDIO, name: "video-dummy" }), new ya(s2.useRealTracks ? (yield window.navigator.mediaDevices.getUserMedia({ video: true })).getVideoTracks()[0] : _r(160 * (null !== (n2 = r2.aspectRatios[0]) && void 0 !== n2 ? n2 : 1), 160, true, true), void 0, false, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
                this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
              }
              if (s2.audio) {
                const t3 = new Ga(Js.Kind.Audio, new ht({ source: Qe.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Je.AUDIO }), new aa(s2.useRealTracks ? (yield navigator.mediaDevices.getUserMedia({ audio: true })).getAudioTracks()[0] : Nr(), void 0, false, this.audioContext, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
                this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
              }
              for (let e2 = 0; e2 < r2.count - 1; e2 += 1) {
                let t3 = new ot({ sid: Math.floor(1e4 * Math.random()).toString(), identity: "simulated-".concat(e2), state: at.ACTIVE, tracks: [], joinedAt: x.parse(Date.now()) });
                const n3 = this.getOrCreateParticipant(t3.identity, t3);
                if (r2.video) {
                  const s3 = _r(160 * (null !== (i2 = r2.aspectRatios[e2 % r2.aspectRatios.length]) && void 0 !== i2 ? i2 : 1), 160, false, true), o2 = new ht({ source: Qe.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Je.AUDIO });
                  n3.addSubscribedMediaTrack(s3, o2.sid, new MediaStream([s3]), new RTCRtpReceiver()), t3.tracks = [...t3.tracks, o2];
                }
                if (r2.audio) {
                  const e3 = Nr(), i3 = new ht({ source: Qe.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Je.AUDIO });
                  n3.addSubscribedMediaTrack(e3, i3.sid, new MediaStream([e3]), new RTCRtpReceiver()), t3.tracks = [...t3.tracks, i3];
                }
                n3.updateInfo(t3);
              }
            }));
          }
          emit(t2) {
            for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), s2 = 1; s2 < n2; s2++) i2[s2 - 1] = arguments[s2];
            if (t2 !== e.RoomEvent.ActiveSpeakersChanged && t2 !== e.RoomEvent.TranscriptionReceived) {
              const e2 = nc(i2).filter(((e3) => void 0 !== e3));
              this.log.debug("room event ".concat(t2), Object.assign(Object.assign({}, this.logContext), { event: t2, args: e2 }));
            }
            return super.emit(t2, ...i2);
          }
        }
        function nc(e2) {
          return e2.map(((e3) => {
            if (e3) return Array.isArray(e3) ? nc(e3) : "object" == typeof e3 ? "logContext" in e3 ? e3.logContext : void 0 : e3;
          }));
        }
        tc.cleanupRegistry = "undefined" != typeof FinalizationRegistry && new FinalizationRegistry(((e2) => {
          e2();
        }));
        var ic, sc = Object.freeze({ __proto__: null, Convert: class {
          static toAgentAttributes(e2) {
            return JSON.parse(e2);
          }
          static agentAttributesToJson(e2) {
            return JSON.stringify(e2);
          }
          static toTranscriptionAttributes(e2) {
            return JSON.parse(e2);
          }
          static transcriptionAttributesToJson(e2) {
            return JSON.stringify(e2);
          }
        } });
        e.CheckStatus = void 0, (ic = e.CheckStatus || (e.CheckStatus = {}))[ic.IDLE = 0] = "IDLE", ic[ic.RUNNING = 1] = "RUNNING", ic[ic.SKIPPED = 2] = "SKIPPED", ic[ic.SUCCESS = 3] = "SUCCESS", ic[ic.FAILED = 4] = "FAILED";
        class rc extends ii.EventEmitter {
          constructor(t2, n2) {
            let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            super(), this.status = e.CheckStatus.IDLE, this.logs = [], this.options = {}, this.url = t2, this.token = n2, this.name = this.constructor.name, this.room = new tc(i2.roomOptions), this.connectOptions = i2.connectOptions, this.options = i2;
          }
          run(t2) {
            return Zn(this, void 0, void 0, (function* () {
              if (this.status !== e.CheckStatus.IDLE) throw Error("check is running already");
              this.setStatus(e.CheckStatus.RUNNING);
              try {
                yield this.perform();
              } catch (e2) {
                e2 instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(e2.message) : this.appendError(e2.message));
              }
              return yield this.disconnect(), yield new Promise(((e2) => setTimeout(e2, 500))), this.status !== e.CheckStatus.SKIPPED && this.setStatus(this.isSuccess() ? e.CheckStatus.SUCCESS : e.CheckStatus.FAILED), t2 && t2(), this.getInfo();
            }));
          }
          isSuccess() {
            return !this.logs.some(((e2) => "error" === e2.level));
          }
          connect(t2) {
            return Zn(this, void 0, void 0, (function* () {
              return this.room.state === e.ConnectionState.Connected || (t2 || (t2 = this.url), yield this.room.connect(t2, this.token, this.connectOptions)), this.room;
            }));
          }
          disconnect() {
            return Zn(this, void 0, void 0, (function* () {
              this.room && this.room.state !== e.ConnectionState.Disconnected && (yield this.room.disconnect(), yield new Promise(((e2) => setTimeout(e2, 500))));
            }));
          }
          skip() {
            this.setStatus(e.CheckStatus.SKIPPED);
          }
          switchProtocol(t2) {
            return Zn(this, void 0, void 0, (function* () {
              let n2 = false, i2 = false;
              if (this.room.on(e.RoomEvent.Reconnecting, (() => {
                n2 = true;
              })), this.room.once(e.RoomEvent.Reconnected, (() => {
                i2 = true;
              })), this.room.simulateScenario("force-".concat(t2)), yield new Promise(((e2) => setTimeout(e2, 1e3))), !n2) return;
              const s2 = Date.now() + 1e4;
              for (; Date.now() < s2; ) {
                if (i2) return;
                yield or(100);
              }
              throw new Error("Could not reconnect using ".concat(t2, " protocol after 10 seconds"));
            }));
          }
          appendMessage(e2) {
            this.logs.push({ level: "info", message: e2 }), this.emit("update", this.getInfo());
          }
          appendWarning(e2) {
            this.logs.push({ level: "warning", message: e2 }), this.emit("update", this.getInfo());
          }
          appendError(e2) {
            this.logs.push({ level: "error", message: e2 }), this.emit("update", this.getInfo());
          }
          setStatus(e2) {
            this.status = e2, this.emit("update", this.getInfo());
          }
          get engine() {
            var e2;
            return null === (e2 = this.room) || void 0 === e2 ? void 0 : e2.engine;
          }
          getInfo() {
            return { logs: this.logs, name: this.name, status: this.status, description: this.description };
          }
        }
        class oc extends rc {
          get description() {
            return "Cloud regions";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              const e2 = new Da(this.url, this.token);
              if (!e2.isCloud()) return void this.skip();
              const t2 = [], n2 = /* @__PURE__ */ new Set();
              for (let i3 = 0; i3 < 3; i3++) {
                const i4 = yield e2.getNextBestRegionUrl();
                if (!i4) break;
                if (n2.has(i4)) continue;
                n2.add(i4);
                const s2 = yield this.checkCloudRegion(i4);
                this.appendMessage("".concat(s2.region, " RTT: ").concat(s2.rtt, "ms, duration: ").concat(s2.duration, "ms")), t2.push(s2);
              }
              t2.sort(((e3, t3) => 0.5 * (e3.duration - t3.duration) + 0.5 * (e3.rtt - t3.rtt)));
              const i2 = t2[0];
              this.bestStats = i2, this.appendMessage("best Cloud region: ".concat(i2.region));
            }));
          }
          getInfo() {
            const e2 = super.getInfo();
            return e2.data = this.bestStats, e2;
          }
          checkCloudRegion(e2) {
            return Zn(this, void 0, void 0, (function* () {
              var t2, n2;
              yield this.connect(e2), "tcp" === this.options.protocol && (yield this.switchProtocol("tcp"));
              const i2 = null === (t2 = this.room.serverInfo) || void 0 === t2 ? void 0 : t2.region;
              if (!i2) throw new Error("Region not found");
              const s2 = yield this.room.localParticipant.streamText({ topic: "test" }), r2 = "A".repeat(1e3), o2 = Date.now();
              for (let e3 = 0; e3 < 1e3; e3++) yield s2.write(r2);
              yield s2.close();
              const a2 = Date.now(), c2 = yield null === (n2 = this.room.engine.pcManager) || void 0 === n2 ? void 0 : n2.publisher.getStats(), d2 = { region: i2, rtt: 1e4, duration: a2 - o2 };
              return null == c2 || c2.forEach(((e3) => {
                "candidate-pair" === e3.type && e3.nominated && (d2.rtt = 1e3 * e3.currentRoundTripTime);
              })), yield this.disconnect(), d2;
            }));
          }
        }
        const ac = 1e4;
        class cc extends rc {
          get description() {
            return "Connection via UDP vs TCP";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              const e2 = yield this.checkConnectionProtocol("udp"), t2 = yield this.checkConnectionProtocol("tcp");
              this.bestStats = e2, e2.qualityLimitationDurations.bandwidth - t2.qualityLimitationDurations.bandwidth > 0.5 || (e2.packetsLost - t2.packetsLost) / e2.packetsSent > 0.01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t2) : this.appendMessage("best connection quality via udp");
              const n2 = this.bestStats;
              this.appendMessage("upstream bitrate: ".concat((n2.bitrateTotal / n2.count / 1e3 / 1e3).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((n2.rttTotal / n2.count * 1e3).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((n2.jitterTotal / n2.count * 1e3).toFixed(2), " ms")), n2.packetsLost > 0 && this.appendWarning("packets lost: ".concat((n2.packetsLost / n2.packetsSent * 100).toFixed(2), "%")), n2.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((n2.qualityLimitationDurations.bandwidth / 10 * 100).toFixed(2), "%")), n2.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((n2.qualityLimitationDurations.cpu / 10 * 100).toFixed(2), "%"));
            }));
          }
          getInfo() {
            const e2 = super.getInfo();
            return e2.data = this.bestStats, e2;
          }
          checkConnectionProtocol(e2) {
            return Zn(this, void 0, void 0, (function* () {
              yield this.connect(), "tcp" === e2 ? yield this.switchProtocol("tcp") : yield this.switchProtocol("udp");
              const t2 = document.createElement("canvas");
              t2.width = 1280, t2.height = 720;
              const n2 = t2.getContext("2d");
              if (!n2) throw new Error("Could not get canvas context");
              let i2 = 0;
              const s2 = () => {
                i2 = (i2 + 1) % 360, n2.fillStyle = "hsl(".concat(i2, ", 100%, 50%)"), n2.fillRect(0, 0, t2.width, t2.height), requestAnimationFrame(s2);
              };
              s2();
              const r2 = t2.captureStream(30).getVideoTracks()[0], o2 = (yield this.room.localParticipant.publishTrack(r2, { simulcast: false, degradationPreference: "maintain-resolution", videoEncoding: { maxBitrate: 2e6 } })).track, a2 = { protocol: e2, packetsLost: 0, packetsSent: 0, qualityLimitationDurations: {}, rttTotal: 0, jitterTotal: 0, bitrateTotal: 0, count: 0 }, c2 = setInterval((() => Zn(this, void 0, void 0, (function* () {
                const e3 = yield o2.getRTCStatsReport();
                null == e3 || e3.forEach(((e4) => {
                  "outbound-rtp" === e4.type ? (a2.packetsSent = e4.packetsSent, a2.qualityLimitationDurations = e4.qualityLimitationDurations, a2.bitrateTotal += e4.targetBitrate, a2.count++) : "remote-inbound-rtp" === e4.type && (a2.packetsLost = e4.packetsLost, a2.rttTotal += e4.roundTripTime, a2.jitterTotal += e4.jitter);
                }));
              }))), 1e3);
              return yield new Promise(((e3) => setTimeout(e3, ac))), clearInterval(c2), r2.stop(), t2.remove(), yield this.disconnect(), a2;
            }));
          }
        }
        class dc extends rc {
          get description() {
            return "Can publish audio";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              const t2 = yield this.connect(), n2 = yield Qa();
              if (yield eo(n2, 1e3)) throw new Error("unable to detect audio from microphone");
              this.appendMessage("detected audio from microphone"), t2.localParticipant.publishTrack(n2), yield new Promise(((e3) => setTimeout(e3, 3e3)));
              const i2 = yield null === (e2 = n2.sender) || void 0 === e2 ? void 0 : e2.getStats();
              if (!i2) throw new Error("Could not get RTCStats");
              let s2 = 0;
              if (i2.forEach(((e3) => {
                "outbound-rtp" !== e3.type || "audio" !== e3.kind && (e3.kind || "audio" !== e3.mediaType) || (s2 = e3.packetsSent);
              })), 0 === s2) throw new Error("Could not determine packets are sent");
              this.appendMessage("published ".concat(s2, " audio packets"));
            }));
          }
        }
        class lc extends rc {
          get description() {
            return "Can publish video";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              var e2;
              const t2 = yield this.connect(), n2 = yield Ja();
              yield this.checkForVideo(n2.mediaStreamTrack), t2.localParticipant.publishTrack(n2), yield new Promise(((e3) => setTimeout(e3, 5e3)));
              const i2 = yield null === (e2 = n2.sender) || void 0 === e2 ? void 0 : e2.getStats();
              if (!i2) throw new Error("Could not get RTCStats");
              let s2 = 0;
              if (i2.forEach(((e3) => {
                "outbound-rtp" !== e3.type || "video" !== e3.kind && (e3.kind || "video" !== e3.mediaType) || (s2 += e3.packetsSent);
              })), 0 === s2) throw new Error("Could not determine packets are sent");
              this.appendMessage("published ".concat(s2, " video packets"));
            }));
          }
          checkForVideo(e2) {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = new MediaStream();
              t2.addTrack(e2.clone());
              const n2 = document.createElement("video");
              n2.srcObject = t2, n2.muted = true, yield new Promise(((t3) => {
                n2.onplay = () => {
                  setTimeout((() => {
                    var i2, s2, r2, o2;
                    const a2 = document.createElement("canvas"), c2 = e2.getSettings(), d2 = null !== (s2 = null !== (i2 = c2.width) && void 0 !== i2 ? i2 : n2.videoWidth) && void 0 !== s2 ? s2 : 1280, l2 = null !== (o2 = null !== (r2 = c2.height) && void 0 !== r2 ? r2 : n2.videoHeight) && void 0 !== o2 ? o2 : 720;
                    a2.width = d2, a2.height = l2;
                    const u2 = a2.getContext("2d");
                    u2.drawImage(n2, 0, 0);
                    const h2 = u2.getImageData(0, 0, a2.width, a2.height).data;
                    let p2 = true;
                    for (let e3 = 0; e3 < h2.length; e3 += 4) if (0 !== h2[e3] || 0 !== h2[e3 + 1] || 0 !== h2[e3 + 2]) {
                      p2 = false;
                      break;
                    }
                    p2 ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), t3();
                  }), 1e3);
                }, n2.play();
              })), t2.getTracks().forEach(((e3) => e3.stop())), n2.remove();
            }));
          }
        }
        class uc extends rc {
          get description() {
            return "Resuming connection after interruption";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              var t2;
              const n2 = yield this.connect();
              let i2, s2 = false, r2 = false;
              const o2 = new Promise(((e2) => {
                setTimeout(e2, 5e3), i2 = e2;
              })), a2 = () => {
                s2 = true;
              };
              n2.on(e.RoomEvent.SignalReconnecting, a2).on(e.RoomEvent.Reconnecting, a2).on(e.RoomEvent.Reconnected, (() => {
                r2 = true, i2(true);
              })), null === (t2 = n2.engine.client.ws) || void 0 === t2 || t2.close();
              const c2 = n2.engine.client.onClose;
              if (c2 && c2(""), yield o2, !s2) throw new Error("Did not attempt to reconnect");
              if (!r2 || n2.state !== e.ConnectionState.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect");
            }));
          }
        }
        class hc extends rc {
          get description() {
            return "Can connect via TURN";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              var e2, t2;
              const n2 = new bo(), i2 = yield n2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 });
              let s2 = false, r2 = false, o2 = false;
              for (let e3 of i2.iceServers) for (let t3 of e3.urls) t3.startsWith("turn:") ? (r2 = true, o2 = true) : t3.startsWith("turns:") && (r2 = true, o2 = true, s2 = true), t3.startsWith("stun:") && (o2 = true);
              o2 ? r2 && !s2 && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield n2.close(), (null === (t2 = null === (e2 = this.connectOptions) || void 0 === e2 ? void 0 : e2.rtcConfig) || void 0 === t2 ? void 0 : t2.iceServers) || r2 ? yield this.room.connect(this.url, this.token, { rtcConfig: { iceTransportPolicy: "relay" } }) : (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise(((e3) => setTimeout(e3, 0))));
            }));
          }
        }
        class pc extends rc {
          get description() {
            return "Establishing WebRTC connection";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              let t2 = false, n2 = false;
              this.room.on(e.RoomEvent.SignalConnected, (() => {
                const e2 = this.room.engine.client.onTrickle;
                this.room.engine.client.onTrickle = (i2, s2) => {
                  if (i2.candidate) {
                    const e3 = new RTCIceCandidate(i2);
                    let s3 = "".concat(e3.protocol, " ").concat(e3.address, ":").concat(e3.port, " ").concat(e3.type);
                    e3.address && (!(function(e4) {
                      const t3 = e4.split(".");
                      if (4 === t3.length) {
                        if ("10" === t3[0]) return true;
                        if ("192" === t3[0] && "168" === t3[1]) return true;
                        if ("172" === t3[0]) {
                          const e5 = parseInt(t3[1], 10);
                          if (e5 >= 16 && e5 <= 31) return true;
                        }
                      }
                      return false;
                    })(e3.address) ? "tcp" === e3.protocol && "passive" === e3.tcpType ? (t2 = true, s3 += " (passive)") : "udp" === e3.protocol && (n2 = true) : s3 += " (private)"), this.appendMessage(s3);
                  }
                  e2 && e2(i2, s2);
                }, this.room.engine.pcManager && (this.room.engine.pcManager.subscriber.onIceCandidateError = (e3) => {
                  e3 instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(e3.errorCode, " ").concat(e3.errorText, " ").concat(e3.url));
                });
              }));
              try {
                yield this.connect(), Wn.info("now the room is connected");
              } catch (e2) {
                throw this.appendWarning("ports need to be open on firewall in order to connect."), e2;
              }
              t2 || this.appendWarning("Server is not configured for ICE/TCP"), n2 || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly");
            }));
          }
        }
        class mc extends rc {
          get description() {
            return "Connecting to signal connection via WebSocket";
          }
          perform() {
            return Zn(this, void 0, void 0, (function* () {
              var e2, t2, n2;
              (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
              let i2 = new bo();
              const s2 = yield i2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 });
              this.appendMessage("Connected to server, version ".concat(s2.serverVersion, ".")), (null === (e2 = s2.serverInfo) || void 0 === e2 ? void 0 : e2.edition) === Ot.Cloud && (null === (t2 = s2.serverInfo) || void 0 === t2 ? void 0 : t2.region) && this.appendMessage("LiveKit Cloud: ".concat(null === (n2 = s2.serverInfo) || void 0 === n2 ? void 0 : n2.region)), yield i2.close();
            }));
          }
        }
        class gc extends ii.EventEmitter {
          constructor(e2, t2) {
            let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            super(), this.options = {}, this.checkResults = /* @__PURE__ */ new Map(), this.url = e2, this.token = t2, this.options = n2;
          }
          getNextCheckId() {
            const t2 = this.checkResults.size;
            return this.checkResults.set(t2, { logs: [], status: e.CheckStatus.IDLE, name: "", description: "" }), t2;
          }
          updateCheck(e2, t2) {
            this.checkResults.set(e2, t2), this.emit("checkUpdate", e2, t2);
          }
          isSuccess() {
            return Array.from(this.checkResults.values()).every(((t2) => t2.status !== e.CheckStatus.FAILED));
          }
          getResults() {
            return Array.from(this.checkResults.values());
          }
          createAndRunCheck(e2) {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = this.getNextCheckId(), n2 = new e2(this.url, this.token, this.options), i2 = (e3) => {
                this.updateCheck(t2, e3);
              };
              n2.on("update", i2);
              const s2 = yield n2.run();
              return n2.off("update", i2), s2;
            }));
          }
          checkWebsocket() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(mc);
            }));
          }
          checkWebRTC() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(pc);
            }));
          }
          checkTURN() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(hc);
            }));
          }
          checkReconnect() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(uc);
            }));
          }
          checkPublishAudio() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(dc);
            }));
          }
          checkPublishVideo() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(lc);
            }));
          }
          checkConnectionProtocol() {
            return Zn(this, void 0, void 0, (function* () {
              const e2 = yield this.createAndRunCheck(cc);
              if (e2.data && "protocol" in e2.data) {
                const t2 = e2.data;
                this.options.protocol = t2.protocol;
              }
              return e2;
            }));
          }
          checkCloudRegion() {
            return Zn(this, void 0, void 0, (function* () {
              return this.createAndRunCheck(oc);
            }));
          }
        }
        const vc = /* @__PURE__ */ new Map([["obs virtual camera", { facingMode: "environment", confidence: "medium" }]]), fc = /* @__PURE__ */ new Map([["iphone", { facingMode: "environment", confidence: "medium" }], ["ipad", { facingMode: "environment", confidence: "medium" }]]);
        function kc(e2) {
          var t2;
          const n2 = e2.trim().toLowerCase();
          if ("" !== n2) return vc.has(n2) ? vc.get(n2) : null === (t2 = Array.from(fc.entries()).find(((e3) => {
            let [t3] = e3;
            return n2.includes(t3);
          }))) || void 0 === t2 ? void 0 : t2[1];
        }
        e.BaseKeyProvider = ys, e.Checker = rc, e.ConnectionCheck = gc, e.ConnectionError = Ds, e.CriticalTimers = Gs, e.CryptorError = class extends Ts {
          constructor(t2) {
            let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.CryptorErrorReason.InternalError, i2 = arguments.length > 2 ? arguments[2] : void 0;
            super(40, t2), this.reason = n2, this.participantIdentity = i2;
          }
        }, e.DataPacket_Kind = gt, e.DataStreamError = js, e.DefaultReconnectPolicy = Xn, e.DeviceUnsupportedError = xs, e.DisconnectReason = $e, e.ExternalE2EEKeyProvider = class extends ys {
          constructor() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            super(Object.assign(Object.assign({}, e2), { sharedKey: true, ratchetWindowSize: 0, failureTolerance: -1 }));
          }
          setKey(e2) {
            return Zn(this, void 0, void 0, (function* () {
              const t2 = "string" == typeof e2 ? yield fs(e2) : yield ks(e2);
              this.onSetEncryptionKey(t2);
            }));
          }
        }, e.LivekitError = Ts, e.LocalAudioTrack = aa, e.LocalParticipant = Xa, e.LocalTrack = oa, e.LocalTrackPublication = Ga, e.LocalTrackRecorder = ra, e.LocalVideoTrack = ya, e.Mutex = s, e.NegotiationError = Ns, e.Participant = Ya, e.ParticipantKind = ct, e.PublishDataError = class extends Ts {
          constructor(e2) {
            super(14, null != e2 ? e2 : "unable to publish data"), this.name = "PublishDataError";
          }
        }, e.PublishTrackError = Ls, e.RemoteAudioTrack = Ba, e.RemoteParticipant = $a, e.RemoteTrack = Fa, e.RemoteTrackPublication = Za, e.RemoteVideoTrack = Va, e.Room = tc, e.RpcError = Zo, e.ScreenSharePresets = sr, e.SignalRequestError = Us, e.SubscriptionError = tt, e.Track = Js, e.TrackInvalidError = Ms, e.TrackPublication = Wa, e.TrackType = Je, e.UnexpectedConnectionState = _s, e.UnsupportedServer = As, e.VideoPreset = Xs, e.VideoPresets = nr, e.VideoPresets43 = ir, e.attachToElement = Qs, e.attributes = sc, e.compareVersions = wr, e.createAudioAnalyser = function(e2, t2) {
          const n2 = Object.assign({ cloneTrack: false, fftSize: 2048, smoothingTimeConstant: 0.8, minDecibels: -100, maxDecibels: -80 }, t2), i2 = to();
          if (!i2) throw new Error("Audio Context not supported on this browser");
          const s2 = n2.cloneTrack ? e2.mediaStreamTrack.clone() : e2.mediaStreamTrack, r2 = i2.createMediaStreamSource(new MediaStream([s2])), o2 = i2.createAnalyser();
          o2.minDecibels = n2.minDecibels, o2.maxDecibels = n2.maxDecibels, o2.fftSize = n2.fftSize, o2.smoothingTimeConstant = n2.smoothingTimeConstant, r2.connect(o2);
          const a2 = new Uint8Array(o2.frequencyBinCount);
          return { calculateVolume: () => {
            o2.getByteFrequencyData(a2);
            let e3 = 0;
            for (const t3 of a2) e3 += Math.pow(t3 / 255, 2);
            return Math.sqrt(e3 / a2.length);
          }, analyser: o2, cleanup: () => Zn(this, void 0, void 0, (function* () {
            yield i2.close(), n2.cloneTrack && s2.stop();
          })) };
        }, e.createE2EEKey = function() {
          return window.crypto.getRandomValues(new Uint8Array(32));
        }, e.createKeyMaterialFromBuffer = ks, e.createKeyMaterialFromString = fs, e.createLocalAudioTrack = Qa, e.createLocalScreenTracks = function(e2) {
          return Zn(this, void 0, void 0, (function* () {
            if (void 0 === e2 && (e2 = {}), void 0 !== e2.resolution || fr() || (e2.resolution = sr.h1080fps30.resolution), void 0 === navigator.mediaDevices.getDisplayMedia) throw new xs("getDisplayMedia not supported");
            const t2 = so(e2), n2 = yield navigator.mediaDevices.getDisplayMedia(t2), i2 = n2.getVideoTracks();
            if (0 === i2.length) throw new Ms("no video track found");
            const s2 = new ya(i2[0], void 0, false);
            s2.source = Js.Source.ScreenShare;
            const r2 = [s2];
            if (n2.getAudioTracks().length > 0) {
              const e3 = new aa(n2.getAudioTracks()[0], void 0, false);
              e3.source = Js.Source.ScreenShareAudio, r2.push(e3);
            }
            return r2;
          }));
        }, e.createLocalTracks = za, e.createLocalVideoTrack = Ja, e.deriveKeys = function(e2, t2) {
          return Zn(this, void 0, void 0, (function* () {
            const n2 = bs(e2.algorithm.name, t2), i2 = yield crypto.subtle.deriveKey(n2, e2, { name: ds, length: 128 }, false, ["encrypt", "decrypt"]);
            return { material: e2, encryptionKey: i2 };
          }));
        }, e.detachTrack = Ys, e.facingModeFromDeviceLabel = kc, e.facingModeFromLocalTrack = function(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var n2;
          const i2 = qr(e2) ? e2.mediaStreamTrack : e2, s2 = i2.getSettings();
          let r2 = { facingMode: null !== (n2 = t2.defaultFacingMode) && void 0 !== n2 ? n2 : "user", confidence: "low" };
          if ("facingMode" in s2) {
            const e3 = s2.facingMode;
            Wn.trace("rawFacingMode", { rawFacingMode: e3 }), e3 && "string" == typeof e3 && (function(e4) {
              const t3 = ["user", "environment", "left", "right"];
              return void 0 === e4 || t3.includes(e4);
            })(e3) && (r2 = { facingMode: e3, confidence: "high" });
          }
          if (["low", "medium"].includes(r2.confidence)) {
            Wn.trace("Try to get facing mode from device label: (".concat(i2.label, ")"));
            const e3 = kc(i2.label);
            void 0 !== e3 && (r2 = e3);
          }
          return r2;
        }, e.getBrowser = Vs, e.getEmptyAudioStreamTrack = Nr, e.getEmptyVideoStreamTrack = function() {
          return Mr || (Mr = _r()), Mr.clone();
        }, e.getLogger = zn, e.importKey = function(e2) {
          return Zn(this, arguments, void 0, (function(e3) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { name: ds }, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "encrypt";
            return (function* () {
              return crypto.subtle.importKey("raw", e3, t2, false, "derive" === n2 ? ["deriveBits", "deriveKey"] : ["encrypt", "decrypt"]);
            })();
          }));
        }, e.isAudioTrack = Kr, e.isBackupCodec = er, e.isBrowserSupported = pr, e.isE2EESupported = ms, e.isInsertableStreamSupported = vs, e.isLocalParticipant = Yr, e.isLocalTrack = qr, e.isRemoteParticipant = function(e2) {
          return !e2.isLocal;
        }, e.isRemoteTrack = zr, e.isScriptTransformSupported = gs, e.isVideoFrame = function(e2) {
          return "type" in e2;
        }, e.isVideoTrack = Hr, e.needsRbspUnescaping = function(e2) {
          for (var t2 = 0; t2 < e2.length - 3; t2++) if (0 == e2[t2] && 0 == e2[t2 + 1] && 3 == e2[t2 + 2]) return true;
          return false;
        }, e.parseRbsp = function(e2) {
          const t2 = [];
          for (var n2 = e2.length, i2 = 0; i2 < e2.length; ) n2 - i2 >= 3 && !e2[i2] && !e2[i2 + 1] && 3 == e2[i2 + 2] ? (t2.push(e2[i2++]), t2.push(e2[i2++]), i2++) : t2.push(e2[i2++]);
          return new Uint8Array(t2);
        }, e.protocolVersion = 16, e.ratchet = function(e2, t2) {
          return Zn(this, void 0, void 0, (function* () {
            const n2 = bs(e2.algorithm.name, t2);
            return crypto.subtle.deriveBits(n2, e2, 256);
          }));
        }, e.setLogExtension = function(t2, n2) {
          (n2 ? [n2] : Gn).forEach(((n3) => {
            const i2 = n3.methodFactory;
            n3.methodFactory = (n4, s2, r2) => {
              const o2 = i2(n4, s2, r2), a2 = e.LogLevel[n4], c2 = a2 >= s2 && a2 < e.LogLevel.silent;
              return (e2, n5) => {
                n5 ? o2(e2, n5) : o2(e2), c2 && t2(a2, e2, n5);
              };
            }, n3.setLevel(n3.getLevel());
          }));
        }, e.setLogLevel = function(e2, t2) {
          if (t2) Hn.getLogger(t2).setLevel(e2);
          else for (const t3 of Gn) t3.setLevel(e2);
        }, e.supportsAV1 = dr, e.supportsAdaptiveStream = function() {
          return void 0 !== typeof ResizeObserver && void 0 !== typeof IntersectionObserver;
        }, e.supportsDynacast = function() {
          return ar();
        }, e.supportsVP9 = lr, e.version = Ws, e.videoCodecs = $s, e.writeRbsp = function(e2) {
          const t2 = [];
          for (var n2 = 0, i2 = 0; i2 < e2.length; ++i2) {
            var s2 = e2[i2];
            s2 <= 3 && n2 >= 2 && (t2.push(3), n2 = 0), t2.push(s2), 0 == s2 ? ++n2 : n2 = 0;
          }
          return new Uint8Array(t2);
        };
      }));
    }
  });
  return require_livekit_client_umd();
})();
