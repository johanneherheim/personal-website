import cmath

def quadratic_formula(a, b, c):
    # Calculate the discriminant
    delta = b**2 - 4*a*c

    if delta > 0:
        # Two distinct real roots
        root1 = (-b + cmath.sqrt(delta)) / (2*a)
        root2 = (-b - cmath.sqrt(delta)) / (2*a)
        return root1, root2
    elif delta == 0:
        # One real root (repeated root)
        root = -b / (2*a)
        return root,
    else:
        # Two complex conjugate roots
        real_part = -b / (2*a)
        imag_part = cmath.sqrt(abs(delta)) / (2*a)
        root1 = complex(real_part, imag_part)
        root2 = complex(real_part, -imag_part)
        return root1, root2