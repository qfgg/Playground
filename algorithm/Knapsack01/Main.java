public class Main {
    public static int knapsack01(int W, int n, int[] w, int[] v) {
        int max = 0;
        int[][] dp = new int[n][W + 1];
        int i;
        int j;
        for (j = 0; j <= W; j++) {
            if (w[0] > j) {
                dp[0][j] = 0;
            } else {
                dp[0][j] = v[0];
                if (dp[0][j] > max) {
                    max = dp[0][j];
                }
            }
        }
        for (i = 1; i < n; i++) {
            dp[i][0] = 0;
        }
        for (i = 1; i < n; i++) {
            for (j = 1; j <= W; j++) {
                if (j <= w[i]) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], v[i] + dp[i - 1][j - w[i]]);
                }
                if (dp[i][j] > max) {
                    max = dp[i][j];
                }
            }
        }
        return max;
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

