public class Employee {
	String name;
	String title;
	int age;
	double salary;

	public Employee(String name) {
		this.name = name;
	}

	public void setTitle(String tt) {
		title = tt;
	}

	public void setAge(int eAge) {
		age = eAge;
	}

	public void setSalary(double income) {
		salary = income;
	}

	public void printEmp() {
		System.out.println("Employee name: " + name);
		System.out.println("Employee title: " + title);
		System.out.println("Employee age: " + age);
		System.out.println("Employee salary: " + salary);
	}
}