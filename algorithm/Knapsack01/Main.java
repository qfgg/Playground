public class Main {
    public static int knapsack01(int W, int n, int[] w, int[] v) {
        int[] dp = new int[W + 1];
        for (int i = 0; i < n; i++) {
            for (int j = W; j >= 0; j--) {
                if (j >= w[i]) {
                    dp[j] = Math.max(dp[j], v[i] + dp[j - w[i]]);
                }
            }
        }
        return dp[W];
    }

    public static void main(String[] args) {
        int W = 8;
        int n = 5;
        int[] w = {3, 5, 1, 2, 2};
        int[] v = {4, 5, 2, 1, 3};
        int ret = knapsack01(W, n, w, v);
        System.out.println(ret);
    }
}
