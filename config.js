/* 雲端連線設定：填入 Supabase 專案的「Project URL」與「anon public key」。
   這兩個值設計上可以公開（資料安全由資料庫的 RLS 權限規則把關），不是密碼。
   位置：Supabase 後台 → Project Settings → API。
   請勿把 service_role / secret key 放在這裡！ */
window.APP_CONFIG={
  url:'https://pjswkeolpyeqaqquiezv.supabase.co',
  key:'sb_publishable_8U4VMtBBy5o7VFuiTMZS8g_IWcY_r1R'
};